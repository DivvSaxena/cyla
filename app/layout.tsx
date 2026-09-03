import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL } from "@/src/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL), title: "Cyla: Period & Cycle Tracker", description: "Track your period, understand your cycle, and know what’s coming with Cyla.", alternates: { canonical: "/" },
  icons: { icon: [{ url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" }, { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" }], apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }] },
  openGraph: { type: "website", url: "/", title: "Cyla: Period & Cycle Tracker", description: "Track your period, understand your cycle, and know what’s coming with Cyla.", siteName: "Cyla", images: [{ url: "/cyla-logo.png", width: 1024, height: 1024, alt: "Cyla" }] },
  twitter: { card: "summary", title: "Cyla: Period & Cycle Tracker", description: "Track your period, understand your cycle, and know what’s coming with Cyla.", images: ["/cyla-logo.png"] },
};
export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };
export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en"><body>{children}</body></html>; }
