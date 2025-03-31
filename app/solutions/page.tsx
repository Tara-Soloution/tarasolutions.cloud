import Image from 'next/image'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Smartphone, Cloud, Code, Sparkles, CheckCircle2, Users, TrendingUp, Zap, Shield, Laptop, Database } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Enterprise Solutions",
    description: "Comprehensive enterprise solutions for modern businesses. From AI-optimized infrastructure to scalable cloud management, we provide cutting-edge technology solutions to drive your business forward.",
    keywords: [
        "enterprise solutions",
        "AI infrastructure",
        "cloud management",
        "startup infrastructure",
        "SaaS development",
        "solopreneur platform",
        "business technology",
        "digital transformation",
        "cloud solutions",
        "enterprise software"
    ],
    openGraph: {
        title: "Enterprise Solutions | Tara Solutions",
        description: "Comprehensive enterprise solutions for modern businesses. From AI-optimized infrastructure to scalable cloud management.",
        images: [
            {
                url: "/solutions-og.png",
                width: 1200,
                height: 630,
                alt: "Enterprise Solutions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise Solutions | Tara Solutions",
        description: "Comprehensive enterprise solutions for modern businesses. From AI-optimized infrastructure to scalable cloud management.",
        images: ["/solutions-og.png"],
    },
    alternates: {
        canonical: "https://tarasolutions.cloud/solutions",
    },
}

const solutions = [
    {
        title: "Cloud Solutions",
        description: "Scalable and secure cloud infrastructure solutions to power your digital transformation.",
        icon: Cloud,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        features: ["Cloud Migration", "DevOps", "Serverless Architecture", "Cloud Security"],
        href: "/solutions/cloud",
    },
    {
        title: "Web Development",
        description: "Create powerful web applications that drive business growth and user engagement.",
        icon: Code,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        features: ["Full-Stack Development", "Progressive Web Apps", "API Integration", "Performance Optimization"],
        href: "/solutions/web",
    },
    {
        title: "Mobile Development",
        description: "Build powerful mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
        icon: Smartphone,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        features: ["iOS Development", "Android Development", "Cross-platform Solutions", "App Store Optimization"],
        href: "/solutions/mobile",
    },
]

const benefits = [
    {
        title: "Cutting-edge Technology",
        description: "Stay ahead with the latest tech stack and innovative solutions",
        icon: Sparkles,
    },
    {
        title: "Proven Success",
        description: "Track record of delivering high-impact solutions",
        icon: CheckCircle2,
    },
    {
        title: "Expert Team",
        description: "Skilled developers and designers at your service",
        icon: Users,
    },
    {
        title: "Measurable Impact",
        description: "Data-driven development with clear ROI",
        icon: TrendingUp,
    },
]

const features = [
    {
        title: "High Performance",
        description: "Lightning-fast solutions optimized for speed and efficiency",
        icon: Zap,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
    },
    {
        title: "Enterprise Security",
        description: "Bank-grade security measures to protect your data",
        icon: Shield,
        color: "text-red-500",
        bgColor: "bg-red-500/10",
    },
    {
        title: "Modern Architecture",
        description: "Future-proof solutions built with scalability in mind",
        icon: Laptop,
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
    },
    {
        title: "Data Integration",
        description: "Seamless integration with your existing systems",
        icon: Database,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
    },
]

export default function Solutions() {
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

                        {/* Benefits Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose Our Solutions?</h2>
                                <p className="text-lg text-muted-foreground">Experience the power of modern technology solutions</p>
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

                        {/* Solutions Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Solutions</h2>
                                <p className="text-lg text-muted-foreground">Comprehensive technology solutions for every business need</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {solutions.map((solution) => (
                                    <div
                                        key={solution.title}
                                        className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        <div className={`mb-6 inline-flex rounded-xl p-4 ${solution.bgColor}`}>
                                            <solution.icon className={`h-8 w-8 ${solution.color}`} />
                                        </div>
                                        <h3 className="mb-3 text-2xl font-semibold">{solution.title}</h3>
                                        <p className="mb-6 text-muted-foreground">{solution.description}</p>
                                        <div className="mb-6 flex flex-wrap gap-2">
                                            {solution.features.map((feature) => (
                                                <span key={feature} className="rounded-full bg-accent/50 px-4 py-1.5 text-sm">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-auto">
                                            <Link href={solution.href}>
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

                        {/* Features Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Core Features</h2>
                                <p className="text-lg text-muted-foreground">Built with excellence and reliability in mind</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {features.map((feature) => (
                                    <div
                                        key={feature.title}
                                        className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        <div className={`mb-6 inline-flex rounded-xl p-4 ${feature.bgColor}`}>
                                            <feature.icon className={`h-8 w-8 ${feature.color}`} />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Stats Section */}
                        <section className="container">
                            <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-12">
                                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">500+</div>
                                        <div className="text-muted-foreground">Projects Completed</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">50+</div>
                                        <div className="text-muted-foreground">Expert Developers</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">99%</div>
                                        <div className="text-muted-foreground">Client Satisfaction</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                                        <div className="text-muted-foreground">Support Available</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="container">
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
            </div>
        </div>
    )
}