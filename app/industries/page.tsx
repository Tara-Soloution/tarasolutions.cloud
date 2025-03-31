import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Factory, GraduationCap, Hospital, ShoppingBag, Wallet } from "lucide-react"
import Link from "next/link"

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
                    <div className="space-y-16">
                        {/* Hero Section */}
                        <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                                    Industry Solutions
                                    <br />
                                    <span className="text-gray-400">tailored to your sector</span>
                                </h1>
                                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10">
                                    Discover specialized technology solutions designed for your industry's unique challenges and opportunities.
                                </p>
                                <Link href="/contact">
                                    <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90">
                                        <span className="relative z-10">Contact Us</span>
                                        <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Subtitle before grid */}
                        <div className="container text-center">
                            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Our Industry Expertise</h2>
                            <p className="mx-auto mt-4 max-w-[42rem] text-muted-foreground">
                                Comprehensive solutions tailored for diverse industry needs
                            </p>
                        </div>

                        {/* Industries Grid */}
                        <section className="container">
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {industries.map((industry) => (
                                    <div
                                        key={industry.title}
                                        className="group relative flex flex-col overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-accent"
                                    >
                                        <div className={`mb-4 inline-flex rounded-lg p-3 ${industry.bgColor}`}>
                                            <industry.icon className={`h-6 w-6 ${industry.color}`} />
                                        </div>
                                        <h3 className="mb-2 text-xl font-semibold">{industry.title}</h3>
                                        <p className="mb-4 text-sm text-muted-foreground">{industry.description}</p>
                                        <div className="mb-4 flex flex-wrap gap-2">
                                            {industry.features.map((feature) => (
                                                <span key={feature} className="rounded-full bg-accent px-3 py-1 text-xs">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-auto">
                                            <Link href={`/industries/${industry.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                                <Button variant="ghost" className="group-hover:bg-accent-foreground group-hover:text-accent">
                                                    Learn more
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="container">
                            <div className="rounded-lg border bg-card p-8 text-center md:p-12">
                                <h2 className="text-3xl font-bold tracking-tight">Ready to Transform Your Industry?</h2>
                                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                                    Let's discuss how our industry-specific solutions can help you achieve your business goals.
                                </p>
                                <div className="mt-8 flex justify-center gap-4">
                                    <Link href="/contact">
                                        <Button
                                            size="lg"
                                            className="group relative overflow-hidden rounded-full bg-primary transition-all hover:bg-primary/90"
                                        >
                                            <span className="relative z-10 flex items-center">
                                                Book Your Free Session
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </span>
                                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
} 