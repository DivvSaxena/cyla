import Image from "next/image";
import { APP_STORE_URL } from "@/src/lib/site";

export function Hero() {
  return <section className="hero" aria-labelledby="hero-title"><div className="container hero-grid"><div className="hero-copy"><p className="eyebrow">Cyla for iPhone</p><h1 id="hero-title">Know what’s coming.</h1><p className="hero-intro">Track your period, understand your cycle, notice patterns, and plan ahead—one day at a time.</p><a className="button button-primary" href={APP_STORE_URL} target="_blank" rel="noreferrer">Download on the App Store</a><p className="trust-copy">Private by design. No account required.</p></div><div className="hero-image"><Image src="/hero-first-img.png" alt="Cyla app screens" width={1448} height={1086} priority sizes="(min-width: 48rem) 42vw, calc(100vw - 2rem)" /></div></div></section>;
}
