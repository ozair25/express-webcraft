# Express Webcraft Security Rules & Guidelines

This document details the security rules that must be strictly adhered to across the entire codebase.

---

## 1. Secrets and Environment Variables
Never expose secrets in frontend code.

- Every API key, token, database URL, and private config lives in `.env` files only.
- `.env` files must always be listed in `.gitignore`. Ensure `.gitignore` excludes `.env`, `.env.local`, and `.env.*.local`.
- Frontend code must never contain raw secret values. No `const API_KEY = "sk-..."` in client-side files.
- For Next.js: only variables prefixed with `NEXT_PUBLIC_` belong in the frontend, and those must never be secret keys.
- Backend secrets are accessed via `process.env.VAR_NAME` only and are never returned to the client in API responses.
- Maintain a `.env.example` file with all required variable names but empty values.
- If a secret must be used client-side (for example, a Stripe publishable key), add a comment explaining it is a public key intentionally exposed.

### Correct
```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
```

### Wrong — never do this
```javascript
const stripe = require('stripe')('sk_live_abc123...');
```

---

## 2. Rate Limiting
Apply rate limiting on all API routes.

- **Auth endpoints** (login, register, password reset): 5 requests per 15 minutes per IP.
- **General API**: 60 requests per minute per IP.
- **AI and LLM proxy endpoints**: 10 requests per minute per user.
- **File uploads**: 5 requests per minute per IP.
- Always return `429 Too Many Requests` with a `Retry-After` header when limits are hit.
- Never silently swallow rate limit errors on the frontend; show the user a clear message.

---

## 3. Input Validation and Sanitization
Validate and sanitize everything on the server.

- Use schema validation libraries: `Zod` or `Joi` for JS/TS.
- Sanitize all string inputs before storing or displaying them to prevent XSS.
- Use parameterized queries or ORM methods. Never interpolate user input into raw SQL or NoSQL queries.
- Validate data type, length limits, allowed characters, required fields, and enum values.
- For file uploads: validate MIME type, file extension, and file size on the server.
- Reject invalid input with a clear `400 Bad Request` response and log the attempt.

### Example (Zod schema validation)
```typescript
import { z } from 'zod';

const schema = z.object({
  email: z.string().email().max(254),
  message: z.string().min(1).max(1000).trim(),
});

const result = schema.safeParse(req.body);
if (!result.success) return res.status(400).json({ error: result.error });
```

---

## 4. Authentication and Authorization
Use established auth libraries and follow password rules.

- Recommended options: `NextAuth.js`, `Clerk`, `Supabase Auth`, `Auth0`, `Passport.js`.
- Passwords must never be stored in plain text. Use `bcrypt` (minimum cost 12) or `argon2`.
- JWTs must be signed with a strong secret stored in env (minimum 32 characters). Set short expiry of 15 to 60 minutes.
- Refresh tokens must be stored in `httpOnly` cookies, not `localStorage`.
- Verify user identity and permission to access the resource on every single request.
- Implement account lockout after repeated failed login attempts.
- Add explicit role and permission checks on admin routes and sensitive operations.

### Example (Check ownership)
```typescript
const post = await db.post.findUnique({ where: { id } });
if (!post || post.authorId !== session.user.id) {
  return res.status(403).json({ error: 'Forbidden' });
}
```

---

## 5. SQL and Database Security
Always use an ORM or parameterized queries.

- Use `Prisma`, `Drizzle`, `SQLAlchemy`, or `Mongoose`. Never construct queries via string concatenation with user data.
- Apply the principle of least privilege: the database user should only have the permissions it actually needs.
- Sanitize and validate all fields before any database write.
- Never return raw database errors to the client to avoid leaking schema information.

### Correct
```typescript
const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
```

### Wrong — never do this
```typescript
const user = await db.query(`SELECT * FROM users WHERE email = '${email}'`);
```

---

## 6. CORS Configuration
Never use wildcard CORS in production.

- Explicitly whitelist only the origins that should access your API.
- Restrict allowed HTTP methods to only what each endpoint needs.
- Use the credentials flag only when your app requires it.

### Example
```typescript
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN,
  methods: ['GET', 'POST'],
  credentials: true,
}));
```

---

## 7. HTTP Security Headers
Always set security headers.

- **Content-Security-Policy**: Restrict script and style sources.
- **X-Frame-Options**: `DENY` or `SAMEORIGIN` to prevent clickjacking.
- **X-Content-Type-Options**: `nosniff`.
- **Strict-Transport-Security**: Force HTTPS in production.
- **Referrer-Policy**: `strict-origin-when-cross-origin`.
- Remove the `X-Powered-By` header to avoid leaking framework details.

---

## 8. File Upload Security
Validate, rename, and store uploads safely.

- Validate file type by MIME type and extension on the server. Never trust the client-provided header blindly.
- Set strict file size limits: e.g., 5MB for images, 25MB for documents.
- Store uploaded files outside the web root or in a secure cloud bucket like S3, GCS, or Cloudinary.
- Never serve user-uploaded files with executable permissions.
- Rename uploaded files to a UUID. Never use the original filename directly.
- Scan for malware if handling sensitive or public uploads.

---

## 9. Error Handling and Logging
Never return internal errors or stack traces to the client.

- Return generic error messages to users: e.g., "Something went wrong" or "An error occurred".
- Log errors server-side with full context: timestamp, user ID (if available), route, and sanitized input.
- Use a logging/telemetry service in production: Sentry, Datadog, etc.
- Use correct status codes: 4xx for client errors, 5xx for server errors. Never use 500 for validation failures.

---

## 10. Dependency Security
Audit dependencies and pin versions in production.

- Run `npm audit` after installing packages. Fix high and critical issues.
- Avoid packages that are unmaintained (no updates in 2+ years for security-relevant libs).
- Pin dependency versions in production using `package-lock.json` or explicit exact matches.

---

## 11. XSS Prevention
Never render dynamic user content as raw HTML.

- Do not use `dangerouslySetInnerHTML` in React unless the content is fully sanitized with `DOMPurify`.
- Never use `eval()`, `new Function()`, or `innerHTML` with dynamic user content.
- Avoid inline script tags. Move JS to external files to enable CSP enforcement.

---

## 12. Deployment Checklist
Run through this list before every deploy:
- [ ] `.env` is not committed to git.
- [ ] All secrets are set in the hosting platform environment variables config.
- [ ] Debug mode and development logging are disabled in production.
- [ ] Database is not publicly exposed.
- [ ] HTTPS is enforced.
- [ ] Rate limiting is active on all public endpoints.
- [ ] CORS is restricted to known origins.
- [ ] Unused API routes are removed or protected.

---

## 13. AI and LLM-Specific Rules
Treat LLM inputs and outputs like untrusted data.

- Never send raw user input directly to an LLM; sanitize it to prevent prompt injection.
- Always set a `max_tokens` limit on LLM calls to prevent runaway costs.
- Store the API key server-side only. Route all LLM calls through your own backend, never from the browser.
- Log LLM usage (token counts) per user to detect abuse early.
- Implement per-user or per-session token budgets to prevent cost attacks.
- Validate and sanitize LLM output before rendering it in the UI. Generated HTML is an XSS risk.

---

## Quick Reference Table

| Security Area | Core Rule | Tools / Examples |
| :--- | :--- | :--- |
| **Secrets** | Keys in `.env` only. Never in frontend. | `.gitignore`, `.env.example` |
| **Rate Limiting** | 5 req/15 min auth. 60 req/min general. | `express-rate-limit`, next-rate-limit |
| **Input Validation** | Server-side only. Schema validation required. | `Zod`, `Joi` |
| **Auth** | bcrypt min cost 12. JWT short expiry. | `NextAuth`, `Clerk`, `lucia-auth` |
| **SQL Security** | ORM or parameterized queries only. No string concat. | `Prisma`, `Drizzle`, `Mongoose` |
| **CORS** | No wildcard in production. Whitelist origins. | `cors({ origin: [...] })` |
| **HTTP Headers** | CSP, HSTS, X-Frame-Options: DENY. | `helmet` (Node / Express) |
| **File Uploads** | MIME + extension validation. UUID rename. | `multer`, S3, Cloudinary |
| **Error Handling** | Generic messages to client. Full context in logs. | Sentry, Winston |
| **Dependencies** | Audit after install. Pin versions in production. | `npm audit` |
| **XSS** | No `dangerouslySetInnerHTML` or `eval()`. | `DOMPurify` |
| **Deploy Gate** | Run checklist before every ship. | See Section 12 above |
| **AI / LLM** | Sanitize input. Server-side keys. Token budgets. | Server proxy, `max_tokens` |
