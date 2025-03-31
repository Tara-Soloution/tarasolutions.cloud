import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Code2, Globe2, Shield, Zap, Users, Building2, Briefcase, Rocket, Cloud, Code, Smartphone } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">

        {/* Hero Section */}
        <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Technology Solutions
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                that drive innovation
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
              Transform your business with cutting-edge technology solutions designed for the modern digital landscape.
            </p>
            <Link href="/contact">
              <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-purple-500 hover:opacity-90">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions for every business need
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative p-8 rounded-2xl border bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col flex-grow">
                <div className="mb-6 p-3 w-fit rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Cloud className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Cloud Solutions</h3>
                <p className="text-muted-foreground mb-6">
                  Scalable and secure cloud infrastructure solutions to power your digital transformation.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm">Cloud Migration & Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm">DevOps & CI/CD Pipeline</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm">Serverless Architecture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm">Cloud Security & Compliance</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link href="/solutions/cloud" className="block w-full">
                    <div className="flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-300 group">
                      <span className="text-primary font-medium group-hover:text-blue-600 transition-colors">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:text-blue-600 transition-all group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl border bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col flex-grow">
                <div className="mb-6 p-3 w-fit rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                  <Code className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
                <p className="text-muted-foreground mb-6">
                  Create powerful web applications that drive business growth and user engagement.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                    <span className="text-sm">Full-Stack Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                    <span className="text-sm">Progressive Web Apps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                    <span className="text-sm">API Integration & Services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                    <span className="text-sm">Performance Optimization</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link href="/solutions/web" className="block w-full">
                    <div className="flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-purple-600/10 hover:from-purple-500/20 hover:to-purple-600/20 transition-all duration-300 group">
                      <span className="text-primary font-medium group-hover:text-purple-600 transition-colors">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:text-purple-600 transition-all group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl border bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col flex-grow">
                <div className="mb-6 p-3 w-fit rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300">
                  <Smartphone className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Mobile Development</h3>
                <p className="text-muted-foreground mb-6">
                  Build powerful mobile applications that deliver exceptional user experiences across iOS and Android platforms.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">iOS & Android Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">Cross-platform Solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">App Store Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">Mobile UI/UX Design</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link href="/solutions/mobile" className="block w-full">
                    <div className="flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20 transition-all duration-300 group">
                      <span className="text-primary font-medium group-hover:text-green-600 transition-colors">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:text-green-600 transition-all group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Featured Case Studies Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how we've helped businesses transform their digital presence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Building2 className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">
                    Enterprise
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Global E-commerce Platform</h3>
                <p className="text-muted-foreground mb-6">
                  Transformed a traditional retail business into a global e-commerce powerhouse.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm">300% increase in online sales</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm">Multi-language support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm">Advanced analytics dashboard</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link href="/case-studies/ecommerce" className="block w-full">
                    <div className="flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-300 group">
                      <span className="text-primary font-medium group-hover:text-blue-600 transition-colors">View Case Study</span>
                      <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:text-blue-600 transition-all group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                    <Briefcase className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-sm font-medium">
                    Business
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Workflow Automation System</h3>
                <p className="text-muted-foreground mb-6">
                  Streamlined operations with custom workflow automation solutions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                    <span className="text-sm">50% reduction in processing time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                    <span className="text-sm">Real-time task tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                    <span className="text-sm">Automated reporting system</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link href="/case-studies/workflow" className="block w-full">
                    <div className="flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-purple-600/10 hover:from-purple-500/20 hover:to-purple-600/20 transition-all duration-300 group">
                      <span className="text-primary font-medium group-hover:text-purple-600 transition-colors">View Case Study</span>
                      <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:text-purple-600 transition-all group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300">
                    <Rocket className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
                    Startup
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">FinTech Mobile App</h3>
                <p className="text-muted-foreground mb-6">
                  Launched a revolutionary fintech solution for modern banking needs.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">100k+ downloads in first month</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">Secure payment processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">AI-powered insights</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link href="/case-studies/fintech" className="block w-full">
                    <div className="flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20 transition-all duration-300 group">
                      <span className="text-primary font-medium group-hover:text-green-600 transition-colors">View Case Study</span>
                      <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:text-green-600 transition-all group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">What Our Clients Say</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from businesses that have transformed their digital presence with us
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative p-8 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">TechCorp Inc.</h4>
                      <p className="text-sm text-muted-foreground">Enterprise Client</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "Tara Solutions transformed our business operations with their innovative cloud solutions. Their expertise and dedication to quality have been invaluable to our growth."
                  </p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-muted-foreground">Verified Client</span>
                  </div>
                </div>
              </div>

              <div className="group relative p-8 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Rocket className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">StartupX</h4>
                      <p className="text-sm text-muted-foreground">Startup Client</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "The team at Tara Solutions helped us launch our MVP in record time. Their agile approach and technical expertise were exactly what we needed."
                  </p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-500" />
                    <span className="text-sm text-muted-foreground">Verified Client</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver excellence through our commitment to quality and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="group relative p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[180px] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-start space-x-4 flex-grow">
                  <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Our team of experienced developers and designers brings years of expertise to every project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[180px] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-start space-x-4 flex-grow">
                  <div className="p-3 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                    <Shield className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-muted-foreground">
                      Rigorous testing and quality control processes ensure reliable and bug-free solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[180px] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-start space-x-4 flex-grow">
                  <div className="p-3 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300">
                    <Zap className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground">
                      Round-the-clock technical support to help you with any issues or questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="group relative p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[180px] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-start space-x-4 flex-grow">
                  <div className="p-3 rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors duration-300">
                    <Code2 className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
                    <p className="text-muted-foreground">
                      We stay ahead of the curve with the latest technologies and best practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[180px] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-start space-x-4 flex-grow">
                  <div className="p-3 rounded-xl bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors duration-300">
                    <Globe2 className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
                    <p className="text-muted-foreground">
                      Competitive pricing and efficient development processes for maximum value.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[180px] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-start space-x-4 flex-grow">
                  <div className="p-3 rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors duration-300">
                    <CheckCircle2 className="h-6 w-6 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
                    <p className="text-muted-foreground">
                      We respect deadlines and ensure timely delivery of all projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="rounded-3xl border bg-gradient-to-r from-primary/10 to-purple-500/10 p-12 text-center backdrop-blur-sm">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Ready to Transform Your Business?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground mb-8">
              Let's discuss how our technology solutions can help you achieve your business goals.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-purple-500 transition-all hover:opacity-90"
                >
                  <span className="relative z-10 flex items-center text-lg">
                    Book Your Free Session
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 -z-10 bg-white/20 opacity-0 blur-lg transition-all group-hover:opacity-100 group-hover:blur-xl" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

