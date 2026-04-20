import Image from "next/image"
import { Linkedin, Github, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-chart-2 to-accent"></div>

      {/* Gateway arc subtle background */}
      <div className="absolute bottom-0 right-0 opacity-5">
        <svg width="600" height="300" viewBox="0 0 600 300" fill="none">
          <path
            d="M 75 300 Q 300 75 525 300"
            stroke="currentColor"
            strokeWidth="60"
            className="text-primary-foreground"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top section with logo and description */}
          <div className="mb-12 text-center md:text-left">
            <Image
              src="/logo.png"
              alt="AI2INNOVATE.IO"
              width={160}
              height={80}
              className="h-16 w-auto mb-4 mx-auto md:mx-0"
            />
            <p className="text-base leading-relaxed text-primary-foreground/80 max-w-md mx-auto md:mx-0">
              Your trusted partner for IT consulting, AI solutions, e-commerce, and business consulting. Making
              technology work for business.
            </p>
          </div>

          {/* Main footer content */}
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <h4 className="font-bold mb-5 uppercase text-sm tracking-wide">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#industries" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#case-studies" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-5 uppercase text-sm tracking-wide">Our Services</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li>IT Consulting & Subcontracting</li>
                <li>AI Solutions & Integration</li>
                <li>E-Commerce Development</li>
                <li>Business Consulting</li>
                <li>Data Analytics</li>
                <li>Cloud Computing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-5 uppercase text-sm tracking-wide">Industries</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li>Retail & E-Commerce</li>
                <li>Healthcare</li>
                <li>Finance & Banking</li>
                <li>Manufacturing</li>
                <li>Technology</li>
                <li>Professional Services</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-5 uppercase text-sm tracking-wide">Get In Touch</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:info@ai2innovate.io"
                    className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    info@ai2innovate.io
                  </a>
                </li>
              </ul>

              {/* Social media icons */}
              <div className="flex gap-3 mt-6">
                <a
                  href="https://www.linkedin.com/company/ai2innovate/" target="_blank"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/ai2innovate"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} AI2INNOVATE. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
