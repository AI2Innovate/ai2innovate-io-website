import type React from "react"
import type { Metadata } from "next"
import { Lexend } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/lib/theme-context"

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
})

export const metadata: Metadata = {
  title: "Ai2Innovate - AI, Data & Embedded Systems Consulting",
  description:
    "Professional consulting services for AI, data engineering, and embedded systems. From proof-of-concept to production deployment.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={lexend.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
