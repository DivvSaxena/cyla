import Link from "next/link";
import { Footer } from "./Footer";
import { Header } from "./Header";
import type { LegalSection } from "@/src/config/legal";
import { siteConfig } from "@/src/config/site";

type LegalPageProps = { title: string; intro: string; sections: LegalSection[] };

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return <><Header /><main id="main" className="legal-page"><article className="legal-article"><header className="legal-intro"><p className="eyebrow">Cyla legal</p><h1>{title}</h1><p>{intro}</p><p className="last-updated">Last updated: {siteConfig.legalLastUpdated}</p></header><nav className="legal-toc" aria-label={`${title} contents`}><p>On this page</p><ol>{sections.map((section) => <li key={section.title}><a href={`#${toId(section.title)}`}>{section.title}</a></li>)}</ol></nav><div className="legal-content">{sections.map((section) => <section key={section.title} id={toId(section.title)}><h2>{section.title}</h2>{section.paragraphs?.map((paragraph) => paragraph.includes(siteConfig.supportEmail) ? <p key={paragraph}>{paragraph.split(siteConfig.supportEmail)[0]}<a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a></p> : <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}</div><p className="legal-home"><Link href="/">Back to Cyla</Link></p></article></main><Footer /></>;
}
function toId(value: string) { return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
