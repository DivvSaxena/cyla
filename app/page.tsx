import { Benefits } from "@/src/components/Benefits";
import { FAQ } from "@/src/components/FAQ";
import { FinalCTA } from "@/src/components/FinalCTA";
import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { PrivacySection } from "@/src/components/PrivacySection";
import { ProductExperience } from "@/src/components/ProductExperience";

export default function Home() { return <><Header /><main id="main"><Hero /><Benefits /><ProductExperience /><PrivacySection /><FAQ /><FinalCTA /></main><Footer /></>; }
