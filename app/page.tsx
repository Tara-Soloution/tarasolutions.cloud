
import { ArrowRight, CheckCircle2, Code2, Globe2, Shield, Zap, Users, Cloud, Code, Smartphone } from "lucide-react"
import CTASection from "@/components/cta-section"

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
        <div id="home" className="relative pt-32 pb-32 sm:pt-40 sm:pb-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Technology Solutions
              <br />
              <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                that drive innovation
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
              Transform your business with cutting-edge technology solutions designed for the modern digital landscape.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-green-500 text-base font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <section id="stats" className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2 group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center space-y-2 group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center space-y-2 group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center space-y-2 group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions for every business need
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative p-8 rounded-2xl border bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  <div className="flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-300 group">
                    <span className="text-primary font-medium group-hover:text-blue-600 transition-colors">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:text-blue-600 transition-all group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl border bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer">
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
                  <div className="flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-purple-600/10 hover:from-purple-500/20 hover:to-purple-600/20 transition-all duration-300 group">
                    <span className="text-primary font-medium group-hover:text-purple-600 transition-colors">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:text-purple-600 transition-all group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl border bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer">
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
                  <div className="flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20 transition-all duration-300 group">
                    <span className="text-primary font-medium group-hover:text-green-600 transition-colors">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:text-green-600 transition-all group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver excellence through our commitment to quality and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="group relative p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[180px] flex flex-col cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

              <div className="group relative p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[180px] flex flex-col cursor-pointer">
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

              <div className="group relative p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[180px] flex flex-col cursor-pointer">
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
              <div className="group relative p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[180px] flex flex-col cursor-pointer">
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

              <div className="group relative p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[180px] flex flex-col cursor-pointer">
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

              <div className="group relative p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[180px] flex flex-col cursor-pointer">
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
        <div className="py-24">
          <CTASection />
        </div>
      </div>
    </div>
  )
}

