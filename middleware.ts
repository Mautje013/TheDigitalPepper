import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Rate limiting store (in-memory, resets on server restart)
// For production, consider using Redis or Vercel KV
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_MAX = 20; // Max requests
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds

function getRateLimitKey(request: NextRequest): string {
  // Use IP address for rate limiting
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ip = forwarded ? forwarded.split(",")[0] : realIp || "unknown";
  return ip;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    // Reset or create new record
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

export function middleware(request: NextRequest) {
  // Only apply rate limiting to API routes and form submissions
  const path = request.nextUrl.pathname;
  
  if (path.startsWith("/api/") || path.includes("/contact") || path.includes("/quickscan")) {
    const key = getRateLimitKey(request);
    
    if (isRateLimited(key)) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/:path*",
    "/contact/:path*",
    "/quickscan/:path*",
  ],
};

