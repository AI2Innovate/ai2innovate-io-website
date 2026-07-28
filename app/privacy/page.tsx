import type { Metadata } from "next"
import { LegalPage } from "@/components/legal/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy — AI2INNOVATE",
  description:
    "How Ai2INNOVATE SRL collects, uses, and protects personal data on ai2innovate.io.",
}

export default function PrivacyPolicyPage() {
  return <LegalPage kind="privacy" />
}
