import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/i18n/context"
import { CookieConsent } from "@/components/cookie-consent"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "AI2INNOVATE — Innovation Is in Our DNA",
  description:
    "AI consulting, automation, digital commerce and cybersecurity. AI2Innovate engineers the technology genome of your business.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/AI2innovate-logo.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/AI2innovate-logo.png",
    apple: "/AI2innovate-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  )
}
