import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Factory, GraduationCap, Hospital, ShoppingBag, Wallet, CheckCircle2, Sparkles, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CTASection from "@/components/cta-section"

const industries = [
    {
        title: "Healthcare",
        description: "Revolutionizing healthcare delivery with cutting-edge software solutions for hospitals, clinics, and healthcare providers.",
        icon: Hospital,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        features: ["Electronic Health Records", "Telemedicine Platforms", "Patient Management Systems", "Healthcare Analytics"],
    },
    {
        title: "Manufacturing",
        description: "Optimizing production processes and supply chain management with advanced industrial software solutions.",
        icon: Factory,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        features: ["Production Planning", "Quality Control Systems", "Inventory Management", "Supply Chain Optimization"],
    },
    {
        title: "Education",
        description: "Transforming education with innovative learning platforms and educational technology solutions.",
        icon: GraduationCap,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        features: ["Learning Management Systems", "Student Information Systems", "Virtual Classrooms", "Assessment Tools"],
    },
    {
        title: "Retail",
        description: "Enhancing retail operations with modern POS systems, inventory management, and e-commerce solutions.",
        icon: ShoppingBag,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        features: ["Point of Sale Systems", "Inventory Management", "Customer Analytics", "E-commerce Platforms"],
    },
    {
        title: "Enterprise",
        description: "Empowering businesses with comprehensive enterprise software solutions for improved efficiency and growth.",
        icon: Building2,
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
        features: ["ERP Systems", "Business Intelligence", "Workflow Automation", "Document Management"],
    },
    {
        title: "Financial Services",
        description: "Securing and streamlining financial operations with cutting-edge fintech solutions for banks, insurance, and investment firms.",
        icon: Wallet,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
        features: ["Banking Systems", "Insurance Management", "Investment Platforms", "Risk Analytics"],
    },
]

const benefits = [
    {
        title: "Industry-Specific Expertise",
        description: "Deep understanding of your sector's unique challenges and requirements",
        icon: Sparkles,
    },
    {
        title: "Proven Track Record",
        description: "Successfully delivered solutions across multiple industries",
        icon: CheckCircle2,
    },
    {
        title: "Dedicated Support",
        description: "24/7 expert assistance and continuous improvement",
        icon: Users,
    },
    {
        title: "Measurable Results",
        description: "Track and optimize your ROI with detailed analytics",
        icon: TrendingUp,
    },
]

export default function IndustriesPage() {
    return (
        <div className="relative min-h-screen">
            {/* Background gradients */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10">
                <div className="container mx-auto px-4 pt-24 pb-20">
                    <div className="space-y-32">
                        {/* Hero Section */}
                        <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                                    Industry Solutions
                                    <br />
                                    <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                                        tailored to your sector
                                    </span>
                                </h1>
                                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                                    Discover specialized technology solutions designed for your industry's unique challenges and opportunities.
                                </p>
                                <Link href="/contact">
                                    <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-purple-500 hover:opacity-90">
                                        <span className="relative z-10">Contact Us</span>
                                        <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Benefits Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose Our Solutions?</h2>
                                <p className="text-lg text-muted-foreground">Experience the difference of industry-focused expertise</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {benefits.map((benefit) => (
                                    <div key={benefit.title} className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20">
                                        <div className="mb-4">
                                            <benefit.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                        <p className="text-muted-foreground">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Industries Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Industry Expertise</h2>
                                <p className="text-lg text-muted-foreground">Comprehensive solutions tailored for diverse industry needs</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {industries.map((industry) => (
                                    <div
                                        key={industry.title}
                                        className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        <div className={`mb-6 inline-flex rounded-xl p-4 ${industry.bgColor}`}>
                                            <industry.icon className={`h-8 w-8 ${industry.color}`} />
                                        </div>
                                        <h3 className="mb-3 text-2xl font-semibold">{industry.title}</h3>
                                        <p className="mb-6 text-muted-foreground">{industry.description}</p>
                                        <div className="mb-6 flex flex-wrap gap-2">
                                            {industry.features.map((feature) => (
                                                <span key={feature} className="rounded-full bg-accent/50 px-4 py-1.5 text-sm">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-auto">
                                            <Link href={`/industries/${industry.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                                <Button variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground">
                                                    Learn more
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Stats Section */}
                        <section className="container">
                            <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-12">
                                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">100+</div>
                                        <div className="text-muted-foreground">Projects Delivered</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">6+</div>
                                        <div className="text-muted-foreground">Industries Served</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                                        <div className="text-muted-foreground">Expert Support</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">95%</div>
                                        <div className="text-muted-foreground">Client Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <CTASection />
                    </div>
                </div>
            </div>
        </div>
    )
} 