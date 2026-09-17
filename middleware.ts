import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  const isAdminRoute = path.startsWith('/admin');
  const isAuthRoute = path === '/admin/login';

  if (!isAdminRoute) {
    return NextResponse.next();
  }

  const session = request.cookies.get('session')?.value;
  let decodedSession = null;

  if (session) {
    try {
      decodedSession = await decrypt(session);
    } catch (e) {
      // Invalid session
    }
  }

  // Local development bypass check
  const host = request.headers.get('host') || '';
  const isLocalHost = host.startsWith("localhost:") || host.startsWith("127.0.0.1:") || host.startsWith("[::1]:") || host === "localhost" || host === "127.0.0.1" || host === "[::1]";
  const isLocalBypassAllowed = process.env.NODE_ENV !== "production" && isLocalHost;

  if (isLocalBypassAllowed && !decodedSession && request.cookies.get("local_bypass")?.value === "true") {
    decodedSession = { admin: { id: "local-dev", email: "dev@localhost", name: "Local Dev" } };
  }

  // If not logged in and trying to access protected route
  if (!decodedSession && !isAuthRoute) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // If logged in and trying to access login page
  if (decodedSession && isAuthRoute) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  // Special redirect for just /admin
  if (path === '/admin' && decodedSession) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
