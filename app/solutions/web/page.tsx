import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Code, Layout, Server, Database, Cpu, Shield, Zap, BarChart, Palette, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import BackButton from "@/components/back-button"
import { WaveIllustration } from "@/components/wave-illustration"

export const metadata: Metadata = {
    title: "Web Development Solutions",
    description: "Create powerful web applications with our expert web development services. From modern UI/UX design to backend development, we deliver high-performance web solutions that drive business growth.",
    keywords: [
        "web development",
        "UI/UX design",
        "frontend development",
        "backend development",
        "web applications",
        "responsive design",
        "web performance",
        "web security",
        "API development",
        "web optimization"
    ],
    openGraph: {
        title: "Web Development Solutions | Tara Solutions",
        description: "Create powerful web applications with our expert web development services. From modern UI/UX design to backend development.",
        images: [
            {
                url: "/web-development-og.png",
                width: 1200,
                height: 630,
                alt: "Web Development Solutions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Solutions | Tara Solutions",
        description: "Create powerful web applications with our expert web development services. From modern UI/UX design to backend development.",
        images: ["/web-development-og.png"],
    },
    alternates: {
        canonical: "https://tarasolutions.cloud/solutions/web",
    },
}

const features = [
    {
        title: "Web Development",
        description: "Modern and responsive web applications built with cutting-edge technologies.",
        icon: Code,
        details: [
            "React & Next.js",
            "TypeScript",
            "Tailwind CSS",
            "API Integration"
        ]
    },
    {
        title: "UI/UX Design",
        description: "Beautiful and intuitive user interfaces that enhance user experience.",
        icon: Palette,
        details: [
            "User Research",
            "Wireframing",
            "Prototyping",
            "Design Systems"
        ]
    },
    {
        title: "Mobile Development",
        description: "Cross-platform mobile applications for iOS and Android.",
        icon: Smartphone,
        details: [
            "React Native",
            "Native Apps",
            "PWA Support",
            "Mobile Optimization"
        ]
    },
    {
        title: "Backend Development",
        description: "Scalable and secure backend solutions for your applications.",
        icon: Server,
        details: [
            "Node.js",
            "Python",
            "Database Design",
            "API Development"
        ]
    },
    {
        title: "Performance Optimization",
        description: "Optimized performance for fast and efficient applications.",
        icon: Zap,
        details: [
            "Code Optimization",
            "Caching Strategies",
            "CDN Integration",
            "Load Balancing"
        ]
    },
    {
        title: "Security & Compliance",
        description: "Enterprise-grade security for your web applications.",
        icon: Shield,
        details: [
            "SSL/TLS",
            "Authentication",
            "Authorization",
            "Data Protection"
        ]
    }
]

export default function WebPage() {
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
                    <BackButton href="/solutions" text="Back to Solutions" />
                    <div className="space-y-16">
                        {/* Hero Section */}
                        <section className="container relative flex min-h-[40vh] max-w-screen-2xl flex-col items-center justify-center overflow-hidden rounded-3xl py-12 text-center md:py-16">
                            <WaveIllustration className="absolute inset-0" />
                            <div className="relative z-10 space-y-4">
                                <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                                    Web Development
                                </h1>
                                <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                                    Create powerful web applications that drive business growth and user engagement.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link href="/contact">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="group relative overflow-hidden rounded-full bg-card transition-all hover:bg-accent hover:text-accent-foreground"
                                        >
                                            <span className="relative z-10 flex items-center">
                                                <Globe className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                                                Get Started
                                            </span>
                                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 opacity-0 transition-opacity group-hover:opacity-100" />
                                        </Button>
                                    </Link>
                                    <Link href="/contact">
                                        <Button
                                            size="lg"
                                            className="group relative overflow-hidden rounded-full bg-primary transition-all hover:bg-primary/90"
                                        >
                                            <span className="relative z-10 flex items-center">
                                                Contact Us
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </span>
                                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </section>

                        {/* Features Grid */}
                        <section className="container space-y-12 py-16 md:py-24">
                            <div className="mx-auto max-w-[58rem] text-center">
                                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Our Web Services</h2>
                                <p className="mt-4 text-muted-foreground sm:text-lg">
                                    End-to-end web development solutions for modern digital experiences
                                </p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="group relative overflow-hidden rounded-xl border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:scale-[1.02]"
                                    >
                                        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                                            <feature.icon className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
                                        </div>
                                        <h3 className="text-2xl font-bold transition-colors group-hover:text-primary">{feature.title}</h3>
                                        <p className="mt-3 text-base text-muted-foreground">{feature.description}</p>
                                        <ul className="mt-6 space-y-3">
                                            {feature.details.map((detail, detailIndex) => (
                                                <li
                                                    key={detailIndex}
                                                    className="flex items-center gap-3 text-base text-muted-foreground transition-colors group-hover:text-muted-foreground/80"
                                                >
                                                    <span className="h-1.5 w-1.5 rounded-full bg-primary transition-transform group-hover:scale-150" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Benefits Section */}
                        <section className="container space-y-16 py-24 md:py-32">
                            <div className="mx-auto max-w-[58rem] text-center">
                                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Why Choose Our Web Solutions?</h2>
                                <p className="mt-4 text-muted-foreground sm:text-lg">
                                    Experience the benefits of our comprehensive web development solutions
                                </p>
                            </div>

                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                            <Layout className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Modern Design</h3>
                                            <p className="text-muted-foreground">
                                                Beautiful and responsive designs that work perfectly across all devices.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                            <Code className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Clean Code</h3>
                                            <p className="text-muted-foreground">
                                                Well-structured and maintainable code following best practices.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                            <BarChart className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Performance</h3>
                                            <p className="text-muted-foreground">
                                                Optimized performance for fast loading and smooth user experience.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Globe className="h-24 w-24 text-primary" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <Link href="/contact">
                                    <Button
                                        size="lg"
                                        className="group relative overflow-hidden rounded-full bg-primary transition-all hover:bg-primary/90"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            Start Your Web Project
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                                    </Button>
                                </Link>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="container space-y-16 py-24 md:py-32">
                            <div className="mx-auto max-w-[58rem] text-center">
                                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Ready to Build Your Web Presence?</h2>
                                <p className="mt-4 text-muted-foreground sm:text-lg">
                                    Let's discuss how our web development solutions can help you achieve your goals
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <Link href="/contact">
                                    <Button
                                        size="lg"
                                        className="group relative overflow-hidden rounded-full bg-primary transition-all hover:bg-primary/90"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            Schedule a Consultation
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                                    </Button>
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
} 