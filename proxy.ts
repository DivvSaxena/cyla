import { trackAICrawlerRequest } from "@datafast/ai-crawl";
import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { siteConfig } from "@/src/config/site";

export function proxy(request: NextRequest, event: NextFetchEvent) {
  try {
    trackAICrawlerRequest(request, event, {
      websiteId: siteConfig.dataFastWebsiteId,
    });
  } catch {
    // Bot analytics is best effort and must never interrupt a page request.
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
