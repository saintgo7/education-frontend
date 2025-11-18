import { NextRequest, NextResponse } from 'next/server';

/**
 * Middleware Example 8
 * Next.js Edge Middleware for request processing
 */

export const config = {
  matcher: [
    '/api/example-8/:path*',
    '/protected-8/:path*',
  ],
};

export function middleware8(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const response = NextResponse.next();

  // Example 8: Various middleware patterns

  // 1. Authentication check
  const authToken = request.cookies.get('auth-token')?.value;
  if (pathname.startsWith('/protected-8') && !authToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 2. Rate limiting headers
  response.headers.set('X-RateLimit-Limit', '100');
  response.headers.set('X-RateLimit-Remaining', '95');

  // 3. Custom headers
  response.headers.set('X-Middleware-8', 'processed');
  response.headers.set('X-Request-ID', `req-${Date.now()}`);

  // 4. Geolocation-based routing
  const country = request.geo?.country || 'US';
  response.headers.set('X-User-Country', country);

  // 5. A/B Testing
  const variant = Math.random() > 0.5 ? 'A' : 'B';
  response.cookies.set('ab-test-8', variant, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });

  // 6. Request logging
  console.log(`[Middleware 8] ${request.method} ${pathname}`);

  // 7. Query parameter validation
  const requiredParam = searchParams.get('required');
  if (pathname.startsWith('/api/example-8') && !requiredParam) {
    return NextResponse.json(
      { error: 'Missing required parameter' },
      { status: 400 }
    );
  }

  // 8. CORS headers
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  // 9. Maintenance mode check
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';
  if (isMaintenanceMode && !pathname.startsWith('/admin')) {
    return NextResponse.rewrite(new URL('/maintenance', request.url));
  }

  // 10. Performance headers
  response.headers.set('X-Middleware-Time', Date.now().toString());

  return response;
}

export default middleware8;
