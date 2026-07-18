const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export async function checkRateLimit(
  ip: string,
  limit: number,
  windowMs: number,
  routeKey: string
): Promise<{ success: boolean; remaining: number; reset: number }> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  const key = `ratelimit:${routeKey}:${ip}`;

  // 1. Try Upstash Redis if configured
  if (url && token) {
    try {
      const response = await fetch(`${url}/pipeline`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ["INCR", key],
          ["EXPIRE", key, Math.ceil(windowMs / 1000).toString(), "NX"],
          ["TTL", key],
        ]),
        cache: "no-store",
      });

      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length === 3) {
          const count = data[0].result;
          const ttl = data[2].result;

          const remaining = Math.max(0, limit - count);
          const now = Date.now();
          const reset = ttl > 0 ? now + ttl * 1000 : now + windowMs;

          if (count > limit) {
            return { success: false, remaining: 0, reset };
          }
          return { success: true, remaining, reset };
        }
      }
    } catch (err) {
      console.warn("Upstash Redis rate limiting error, falling back to memory:", err);
    }
  }

  // 2. Fallback to in-memory Map (local development / fallback)
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    const resetTime = now + windowMs;
    rateLimitMap.set(key, { count: 1, resetTime });
    return { success: true, remaining: limit - 1, reset: resetTime };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0, reset: record.resetTime };
  }

  record.count += 1;
  return { success: true, remaining: limit - record.count, reset: record.resetTime };
}
