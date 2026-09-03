import type { Metadata } from "next";
import { LegalPage } from "@/src/components/LegalPage";
import { privacySections } from "@/src/config/legal";

export const metadata: Metadata = { title: "Cyla Privacy Policy", alternates: { canonical: "/privacy" } };
export default function PrivacyPage() { return <LegalPage title="Privacy Policy" intro="Cyla is developed and operated by Divv Saxena, an independent developer based in India. Your privacy matters, especially when the information you track relates to your cycle and health." sections={privacySections} />; }
