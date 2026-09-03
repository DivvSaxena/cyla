import { siteConfig } from "@/src/config/site";

export const APP_STORE_URL = siteConfig.appStoreUrl;
export const SITE_URL = siteConfig.websiteUrl;
export const navigation = [{ label: "Features", href: "/#features" }, { label: "Privacy", href: "/#privacy" }, { label: "FAQ", href: "/#faq" }];
export const faqs = [
  ["What is Cyla?", "Cyla is a simple iOS app for tracking your period, learning about your cycle, and planning with more context."],
  ["Is Cyla free?", "Cyla will be available to download from the App Store. Pricing details will be shared when it launches."],
  ["How are cycle predictions calculated?", "Cyla uses the dates you log to estimate your upcoming period and cycle timing. Predictions are estimates and may change as you add more information."],
  ["Is my data private?", "Yes. Cyla is designed so your cycle data stays on your device. You remain in control of what you track."],
  ["Do I need to create an account?", "No. Cyla does not require an account to get started."],
  ["Can I use Cyla as contraception?", "No. Cyla should not be used as contraception or as a substitute for medical advice."],
  ["Where is my data stored?", "Your cycle data is stored locally on your device."],
  ["When will Cyla be available?", "Cyla is coming soon. Join us on the App Store when it is available."],
] as const;
