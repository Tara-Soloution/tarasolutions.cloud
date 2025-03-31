import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

import Copyright from "./copyright"

interface FooterProps {
  className?: string
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`border-t bg-background relative z-10 ${className}`}>
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-auto bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-auto bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 py-12 sm:py-16">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              <Image
                src="/tara.png"
                alt="Tara Solutions Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Pioneering software solutions for the digital age. We help businesses transform through innovative technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <Link href="/solutions" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Solutions
              </Link>
              <Link href="/industries" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Industries
              </Link>
              <Link href="/about" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/work" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Our Work
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold">Resources</h3>
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <Link href="/blog" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/documentation" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </Link>
              <Link href="/support" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Support
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold">Contact Us</h3>
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-muted-foreground">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>info@tarasolutions.cloud</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-muted-foreground">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>+93 70 306 4120</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-muted-foreground">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Shar-e-naw, Kabul,Afghanistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <Copyright />
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

