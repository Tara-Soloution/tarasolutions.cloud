"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-16 h-16">
            <Image
              src="/tara.png"
              alt="Tara Solutions Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-base font-medium">
          <Link
            href="/solutions"
            className="transition-colors hover:text-primary relative group"
          >
            Solutions
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/industries"
            className="transition-colors hover:text-primary relative group"
          >
            Industries
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-primary relative group"
          >
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/work" className="transition-colors hover:text-primary relative group">
            Our Work
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/contact">
            <Button size="lg" className="text-base">
              Contact us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden h-12 w-12"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/solutions"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/industries"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </Link>
              <Link
                href="/about"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </nav>
            <div className="flex flex-col space-y-2 pt-4 border-t border-border/40">
              <Link href="/work">
                <Button variant="ghost" className="w-full justify-start text-base" onClick={() => setIsMenuOpen(false)}>
                  Our Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="w-full justify-start text-base" onClick={() => setIsMenuOpen(false)}>
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

