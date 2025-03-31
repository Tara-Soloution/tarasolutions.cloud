import { Button } from "@/components/ui/button"
import { ArrowRight, Factory, Settings, BarChart, Package, Shield, Brain, Clock, Users, LineChart, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CTASection from "@/components/cta-section"

const features = [
    {
        title: "Production Planning",
        description: "Advanced scheduling and resource optimization for efficient manufacturing processes",
        icon: Settings,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
    },
    {
        title: "Quality Control Systems",
        description: "Comprehensive quality management and inspection tools for consistent output",
        icon: Target,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
    {
        title: "Inventory Management",
        description: "Real-time tracking and optimization of raw materials and finished goods",
        icon: Package,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        title: "Supply Chain Optimization",
        description: "Streamlined logistics and supplier management for cost-effective operations",
        icon: LineChart,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
]

const benefits = [
    {
        title: "Operational Efficiency",
        description: "Optimized processes that reduce waste and increase productivity",
        icon: Brain,
    },
    {
        title: "Quality Assurance",
        description: "Built-in quality control measures for consistent product standards",
        icon: Shield,
    },
    {
        title: "Cost Reduction",
        description: "Automated systems that minimize operational costs",
        icon: Clock,
    },
    {
        title: "Team Collaboration",
        description: "Enhanced communication and coordination across departments",
        icon: Users,
    },
]

export default function ManufacturingPage() {
    return (
        <div className="relative min-h-screen">
            {/* Background gradients */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-orange-500/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10">
                <div className="container mx-auto px-4 pt-24 pb-20">
                    <div className="space-y-32">
                        {/* Hero Section */}
                        <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                <div className="inline-flex rounded-xl bg-orange-500/10 p-4 mb-8">
                                    <Factory className="h-8 w-8 text-orange-500" />
                                </div>
                                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                                    Manufacturing Solutions
                                    <br />
                                    <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                                        Optimizing Production
                                    </span>
                                </h1>
                                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                                    Transform your manufacturing operations with cutting-edge technology solutions designed to enhance efficiency, quality, and profitability.
                                </p>
                                <Link href="/contact">
                                    <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-orange-500 to-blue-500 hover:opacity-90">
                                        <span className="relative z-10">Get Started</span>
                                        <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Features Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Manufacturing Solutions</h2>
                                <p className="text-lg text-muted-foreground">Comprehensive tools and platforms for modern manufacturing</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2">
                                {features.map((feature) => (
                                    <div
                                        key={feature.title}
                                        className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-orange-500/20"
                                    >
                                        <div className={`mb-6 inline-flex rounded-xl p-4 ${feature.bgColor}`}>
                                            <feature.icon className={`h-8 w-8 ${feature.color}`} />
                                        </div>
                                        <h3 className="mb-3 text-2xl font-semibold">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Benefits Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose Our Manufacturing Solutions?</h2>
                                <p className="text-lg text-muted-foreground">Experience the benefits of modern manufacturing technology</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {benefits.map((benefit) => (
                                    <div key={benefit.title} className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-orange-500/20">
                                        <div className="mb-4">
                                            <benefit.icon className="h-8 w-8 text-orange-500" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                        <p className="text-muted-foreground">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Stats Section */}
                        <section className="container">
                            <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-12">
                                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-orange-500 mb-2">200+</div>
                                        <div className="text-muted-foreground">Manufacturing Facilities</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-orange-500 mb-2">30%</div>
                                        <div className="text-muted-foreground">Efficiency Increase</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-orange-500 mb-2">99.9%</div>
                                        <div className="text-muted-foreground">Quality Rate</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                                        <div className="text-muted-foreground">Technical Support</div>
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