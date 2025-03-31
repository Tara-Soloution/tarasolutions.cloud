import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Twitter } from "lucide-react"
import Copyright from "./copyright"

interface FooterProps {
  className?: string
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`border-t bg-background relative z-10 ${className}`}>
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">Tara Solutions</h2>
          <p className="text-sm text-muted-foreground">Pioneering software solutions for the digital age.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">Company</h3>
          <div className="flex flex-col gap-2">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
              About Us
            </Link>
            <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary">
              Careers
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">Resources</h3>
          <div className="flex flex-col gap-2">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
              Blog
            </Link>
            <Link href="/documentation" className="text-sm text-muted-foreground hover:text-primary">
              Documentation
            </Link>
            <Link href="/support" className="text-sm text-muted-foreground hover:text-primary">
              Support
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">Legal</h3>
          <div className="flex flex-col gap-2">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/security" className="text-sm text-muted-foreground hover:text-primary">
              Security
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">Connect</h3>
          <div className="flex gap-4">
            <Link href="https://github.com/amanesoft" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://twitter.com/amanesoft" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <Copyright />
      </div>
    </footer>
  )
}

