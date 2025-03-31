"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Building2, Briefcase, Rocket, Heart, Wallet, ShoppingBag, Cpu, Building, Users, FileText, Image as ImageIcon, MessageSquare, Cloud, Code, Lightbulb, Smartphone, Globe, Factory, GraduationCap } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative p-2 rounded-xl bg-gradient-to-br from-primary/10 to-green-500/10 group-hover:from-primary/20 group-hover:to-green-500/20 transition-all duration-300">
              <div className="relative w-8 h-8">
                <Image
                  src="/tara.png"
                  alt="Tara Solutions Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">Tara Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <div className="relative group">
              <Link href="/solutions" className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 rounded-xl border bg-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4">
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-primary mb-2">Our Solutions</h3>
                    <p className="text-xs text-muted-foreground">Comprehensive solutions for every business need</p>
                  </div>
                  <div className="space-y-1">
                    <Link href="/solutions/cloud" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Cloud className="h-4 w-4 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-medium">Cloud Solutions</div>
                        <div className="text-xs text-muted-foreground">Scalable cloud infrastructure</div>
                      </div>
                    </Link>
                    <Link href="/solutions/mobile" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-purple-500/10">
                        <Smartphone className="h-4 w-4 text-purple-500" />
                      </div>
                      <div>
                        <div className="font-medium">Mobile Solutions</div>
                        <div className="text-xs text-muted-foreground">Native & cross-platform apps</div>
                      </div>
                    </Link>
                    <Link href="/solutions/web" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-green-500/10">
                        <Globe className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium">Web Solutions</div>
                        <div className="text-xs text-muted-foreground">Modern web applications</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <Link href="/industries" className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                <span>Industries</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 rounded-xl border bg-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4">
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-primary mb-2">Industries We Serve</h3>
                    <p className="text-xs text-muted-foreground">Specialized solutions for different sectors</p>
                  </div>
                  <div className="space-y-1">
                    <Link href="/industries/education" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <GraduationCap className="h-4 w-4 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-medium">Education</div>
                        <div className="text-xs text-muted-foreground">Educational institutions</div>
                      </div>
                    </Link>
                    <Link href="/industries/enterprise" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-purple-500/10">
                        <Building2 className="h-4 w-4 text-purple-500" />
                      </div>
                      <div>
                        <div className="font-medium">Enterprise</div>
                        <div className="text-xs text-muted-foreground">Large organizations</div>
                      </div>
                    </Link>
                    <Link href="/industries/financial-services" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-green-500/10">
                        <Wallet className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium">Financial Services</div>
                        <div className="text-xs text-muted-foreground">Banking & finance</div>
                      </div>
                    </Link>
                    <Link href="/industries/healthcare" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-red-500/10">
                        <Heart className="h-4 w-4 text-red-500" />
                      </div>
                      <div>
                        <div className="font-medium">Healthcare</div>
                        <div className="text-xs text-muted-foreground">Healthcare & medical</div>
                      </div>
                    </Link>
                    <Link href="/industries/manufacturing" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-orange-500/10">
                        <Factory className="h-4 w-4 text-orange-500" />
                      </div>
                      <div>
                        <div className="font-medium">Manufacturing</div>
                        <div className="text-xs text-muted-foreground">Industrial & manufacturing</div>
                      </div>
                    </Link>
                    <Link href="/industries/retail" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-yellow-500/10">
                        <ShoppingBag className="h-4 w-4 text-yellow-500" />
                      </div>
                      <div>
                        <div className="font-medium">Retail</div>
                        <div className="text-xs text-muted-foreground">Retail & e-commerce</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* About Us Dropdown */}
            <div className="relative group">
              <Link href="/about" className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                <span>About Us</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 rounded-xl border bg-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4">
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-primary mb-2">About Tara Solutions</h3>
                    <p className="text-xs text-muted-foreground">Learn more about our company</p>
                  </div>
                  <div className="space-y-1">
                    <Link href="/about/company" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Building className="h-4 w-4 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-medium">Our Company</div>
                        <div className="text-xs text-muted-foreground">Our story & mission</div>
                      </div>
                    </Link>
                    <Link href="/about/team" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-purple-500/10">
                        <Users className="h-4 w-4 text-purple-500" />
                      </div>
                      <div>
                        <div className="font-medium">Our Team</div>
                        <div className="text-xs text-muted-foreground">Meet our experts</div>
                      </div>
                    </Link>
                    <Link href="/about/careers" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-green-500/10">
                        <Briefcase className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium">Careers</div>
                        <div className="text-xs text-muted-foreground">Join our team</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Work Dropdown */}
            <div className="relative group">
              <Link href="/work" className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                <span>Our Work</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 rounded-xl border bg-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4">
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-primary mb-2">Our Work</h3>
                    <p className="text-xs text-muted-foreground">Explore our success stories</p>
                  </div>
                  <div className="space-y-1">
                    <Link href="/work/case-studies" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <FileText className="h-4 w-4 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-medium">Case Studies</div>
                        <div className="text-xs text-muted-foreground">Detailed success stories</div>
                      </div>
                    </Link>
                    <Link href="/work/portfolio" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-purple-500/10">
                        <ImageIcon className="h-4 w-4 text-purple-500" />
                      </div>
                      <div>
                        <div className="font-medium">Portfolio</div>
                        <div className="text-xs text-muted-foreground">View our projects</div>
                      </div>
                    </Link>
                    <Link href="/work/testimonials" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-green-500/10">
                        <MessageSquare className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium">Testimonials</div>
                        <div className="text-xs text-muted-foreground">Client feedback</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/contact">
              <Button className="relative group px-6 py-2 bg-gradient-to-r from-primary to-green-500 hover:opacity-90">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </Button>
            </Link>

            {/* Theme Toggle */}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/solutions" className="block text-muted-foreground hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="/industries" className="block text-muted-foreground hover:text-primary transition-colors">
              Industries
            </Link>
            <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/work" className="block text-muted-foreground hover:text-primary transition-colors">
              Our Work
            </Link>
            <Link href="/contact">
              <Button className="text-primary-foreground w-full relative group px-6 py-2 bg-gradient-to-r from-primary to-green-500 hover:opacity-90">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </Button>
            </Link>
            <div className="flex justify-center py-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

