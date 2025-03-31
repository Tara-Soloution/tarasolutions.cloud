import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Heart, Lightbulb, Users, Building2, Globe, Award, Clock } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import CTASection from '@/components/cta-section'

export const metadata: Metadata = {
    title: "About Our Company | Tara Solutions",
    description: "Learn about Tara Solutions' journey since 2020, our mission, values, and commitment to delivering exceptional technology solutions.",
    keywords: [
        "about Tara Solutions",
        "company history",
        "tech company",
        "enterprise solutions",
        "digital transformation",
        "technology innovation",
        "company mission",
        "company values"
    ],
    openGraph: {
        title: "About Our Company | Tara Solutions",
        description: "Learn about Tara Solutions' journey since 2020, our mission, values, and commitment to delivering exceptional technology solutions.",
        images: [
            {
                url: "/company-og.png",
                width: 1200,
                height: 630,
                alt: "About Tara Solutions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Our Company | Tara Solutions",
        description: "Learn about Tara Solutions' journey since 2020, our mission, values, and commitment to delivering exceptional technology solutions.",
        images: ["/company-og.png"],
    },
    alternates: {
        canonical: "https://tarasolutions.cloud/about/company",
    },
}

const milestones = [
    {
        year: "2020",
        title: "Company Founded",
        description: "Tara Solutions was established with a vision to transform businesses through innovative technology solutions.",
        icon: Building2,
    },
    {
        year: "2021",
        title: "Global Expansion",
        description: "Expanded operations to serve clients worldwide with our cloud and development solutions.",
        icon: Globe,
    },
    {
        year: "2022",
        title: "Industry Recognition",
        description: "Received multiple awards for innovation and excellence in technology solutions.",
        icon: Award,
    },
    {
        year: "2023",
        title: "Team Growth",
        description: "Our team grew to over 10 experts, serving 50+ clients globally and delivering 20+ projects.",
        icon: Users,
    },
]

const values = [
    {
        title: "Innovation First",
        description: "We constantly push boundaries to deliver cutting-edge solutions",
        icon: Lightbulb,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
    },
    {
        title: "Client Success",
        description: "Your growth and success are our top priorities",
        icon: Target,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        title: "Integrity",
        description: "We maintain the highest standards of professional ethics",
        icon: Heart,
        color: "text-red-500",
        bgColor: "bg-red-500/10",
    },
    {
        title: "Excellence",
        description: "We strive for excellence in every project we undertake",
        icon: Award,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
]

export default function Company() {
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
                                    Our Story
                                    <br />
                                    <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                                        Since 2020
                                    </span>
                                </h1>
                                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                                    From a small startup to a global technology solutions provider, we've been helping businesses transform and grow through innovative technology.
                                </p>
                            </div>
                        </div>

                        {/* Mission Section */}
                        <section className="container">
                            <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-12">
                                <div className="max-w-3xl mx-auto text-center">
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Mission</h2>
                                    <p className="text-lg text-muted-foreground">
                                        To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth. We believe in making technology accessible and beneficial for all, from startups to enterprises.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Timeline Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Journey</h2>
                                <p className="text-lg text-muted-foreground">Milestones that shaped our growth</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {milestones.map((milestone) => (
                                    <div key={milestone.year} className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20">
                                        <div className="mb-4">
                                            <milestone.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                                        <p className="text-muted-foreground">{milestone.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Values Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Values</h2>
                                <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {values.map((value) => (
                                    <div
                                        key={value.title}
                                        className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        <div className={`mb-6 inline-flex rounded-xl p-4 ${value.bgColor}`}>
                                            <value.icon className={`h-8 w-8 ${value.color}`} />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                        <p className="text-muted-foreground">{value.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Stats Section */}
                        <section className="container">
                            <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-12">
                                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">20+</div>
                                        <div className="text-muted-foreground">Projects Completed</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">10+</div>
                                        <div className="text-muted-foreground">Expert Team Members</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">3+</div>
                                        <div className="text-muted-foreground">Countries Served</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">99%</div>
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