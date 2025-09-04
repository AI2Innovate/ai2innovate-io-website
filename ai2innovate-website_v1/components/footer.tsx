import Link from "next/link"

// Custom SVG components
const Linkedin = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const Twitter = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
)

const Instagram = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.529L12.017 8.696l6.773 6.763c-.757.933-1.908 1.529-3.205 1.529H8.449z" />
  </svg>
)

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ai2Innovate%20-%20Light%20-%20No%20Tagline-MlkbWkLvmn75G3mA6PgDkSpmhmXbSe.png"
              alt="Ai2Innovate"
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4">
              Innovating AI, Data & Embedded Systems for a Smarter Tomorrow
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>Ai2Innovate SRL (Belgium HQ)</p>
              <p>Mozayc s.r.o. (Slovakia Ops)</p>
              <p>Portugal Criativo LDA (Portugal R&D)</p>
              <p className="mt-2">© 2024 Ai2Innovate. All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-muted-foreground hover:text-foreground transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/open-source" className="text-muted-foreground hover:text-foreground transition-colors">
                  Open Source
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@ai2innovate.io"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  hello@ai2innovate.io
                </a>
              </li>
              <li>
                <a
                  href="mailto:partnerships@ai2innovate.io"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  partnerships@ai2innovate.io
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@ai2innovate.io"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  support@ai2innovate.io
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-foreground mb-2">Legal</h4>
              <ul className="space-y-1 text-xs">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/imprint" className="text-muted-foreground hover:text-foreground transition-colors">
                    Imprint
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ai2innovate/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/ai2innovate/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://x.com/multimindsdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <p className="text-xs text-muted-foreground">HQ Belgium • Operations Slovakia • R&D Portugal</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
