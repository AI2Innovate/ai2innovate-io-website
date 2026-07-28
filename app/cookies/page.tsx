import type { Metadata } from "next"
import { LegalPage } from "@/components/legal/legal-page"

export const metadata: Metadata = {
  title: "Cookie Policy — AI2INNOVATE",
  description:
    "How Ai2INNOVATE SRL uses cookies and analytics on ai2innovate.io.",
}

export default function CookiePolicyPage() {
  return <LegalPage kind="cookies" />
}
