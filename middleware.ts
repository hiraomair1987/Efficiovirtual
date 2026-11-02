import { NextResponse, type NextRequest } from "next/server";

/** Common ways people (or phone keyboards) mistype the Case Studies address. */
const aliases: Record<string, string> = {
  "/casestudies": "/case-studies",
  "/case-study": "/case-studies",
  "/casestudy": "/case-studies",
  "/case_studies": "/case-studies",
  "/case%20studies": "/case-studies",
  "/portfolio": "/case-studies",
  "/work": "/case-studies",
};

/**
 * 1. Fix addresses typed with capital letters (phones often capitalise the
 *    first letter, e.g. /Case-studies) or common misspellings, by sending
 *    visitors to the correct page instead of "not found".
 * 2. Keep search engines from indexing temporary Vercel addresses
 *    (*.vercel.app). Only the real domain (efficiovirtual.com) should appear in
 *    Google. Nothing changes for visitors — this only adds a header for crawlers.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  let fixed = pathname.toLowerCase();
  if (fixed.length > 1 && fixed.endsWith("/")) fixed = fixed.replace(/\/+$/, "");
  const first = "/" + (fixed.split("/")[1] ?? "");
  if (aliases[first]) fixed = aliases[first] + fixed.slice(first.length);
  if (fixed !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = fixed;
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();
  const host = request.headers.get("host") ?? "";
  if (host.endsWith(".vercel.app")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  // Run on pages only, not on static files and images.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|.*\\.[a-zA-Z0-9]+$).*)"],
};
