import type { Metadata } from "next";
import { LegalPage } from "@/src/components/LegalPage";
import { termsSections } from "@/src/config/legal";

export const metadata: Metadata = { title: "Cyla Terms of Use", alternates: { canonical: "/terms" } };
export default function TermsPage() { return <LegalPage title="Terms of Use" intro="These Terms govern your use of the Cyla application and cylaapp.com. Cyla is developed and operated by Divv Saxena, India." sections={termsSections} />; }
