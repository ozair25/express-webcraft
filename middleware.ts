import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // 1. Redirect non-www to www for the production domain
  if (host === 'expresswebcraft.com') {
    url.hostname = 'www.expresswebcraft.com';
    return NextResponse.redirect(url, 301);
  }

  // Generate a secure nonce for CSP
  const nonce = btoa(crypto.randomUUID());
  
  // Define strict Content Security Policy (removing unsafe-inline and unsafe-eval for scripts)
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' https://*.googletagmanager.com https://*.google-analytics.com https://assets.mixkit.co;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https://images.unsplash.com https://picsum.photos https://res.cloudinary.com https://*.google-analytics.com https://*.analytics.google.com;
    media-src 'self' https://assets.mixkit.co https://res.cloudinary.com;
    connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://firestore.googleapis.com;
    font-src 'self' data: https://fonts.gstatic.com;
    frame-ancestors 'self' https://*.google.com https://*.run.app https://*.ai.studio https://ai.studio;
    object-src 'none';
  `.replace(/\s{2,}/g, ' ').trim();

  // Set the nonce and CSP on request headers so they can be read by layouts/components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set the CSP header on the response
  response.headers.set('Content-Security-Policy', cspHeader);

  // 2. If it's a non-production domain, prevent indexing
  if (
    host &&
    host !== 'www.expresswebcraft.com' &&
    host !== 'expresswebcraft.com' &&
    !host.includes('localhost') &&
    !host.includes('127.0.0.1')
  ) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

// Match all routes except for static files, fonts, and metadata
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
