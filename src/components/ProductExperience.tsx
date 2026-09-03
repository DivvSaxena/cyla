import Image from "next/image";

const experiences = [["Today", "The details you need for today, at a glance."], ["Calendar", "A simple record of each cycle and period."], ["Insights", "Thoughtful context from the patterns you track."], ["Private local tracking", "Your information stays with you, on your device."]];

export function ProductExperience() { return <section className="section experience" aria-labelledby="experience-title"><div className="container experience-grid"><div className="experience-image"><Image src="/second-img.png" alt="Cyla cycle tracking illustration" width={1122} height={1402} sizes="(min-width: 48rem) 36vw, calc(100vw - 2rem)" /></div><div><p className="eyebrow">Designed to feel simple</p><h2 id="experience-title">Everything has its place.</h2><div className="experience-list">{experiences.map(([title, copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div></div></div></section>; }
