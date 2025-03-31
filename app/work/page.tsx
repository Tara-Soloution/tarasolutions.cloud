import Image from 'next/image'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Award, Target, Users, CheckCircle2, TrendingUp, Zap, Shield, Laptop, Database, Briefcase, Rocket, Lightbulb, Code2 } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import CTASection from '@/components/cta-section'

export const metadata: Metadata = {
    title: "Our Work | Portfolio",
    description: "Explore our portfolio of successful projects and innovative solutions. From enterprise applications to cutting-edge web platforms, discover how we've helped businesses transform digitally.",
    keywords: [
        "portfolio",
        "case studies",
        "project showcase",
        "web development",
        "mobile apps",
        "cloud solutions",
        "enterprise software",
        "digital transformation",
        "success stories",
        "client projects"
    ],
    openGraph: {
        title: "Our Work | Tara Solutions",
        description: "Explore our portfolio of successful projects and innovative solutions.",
        images: [
            {
                url: "/work-og.png",
                width: 1200,
                height: 630,
                alt: "Our Work Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Work | Tara Solutions",
        description: "Explore our portfolio of successful projects and innovative solutions.",
        images: ["/work-og.png"],
    },
    alternates: {
        canonical: "https://tarasolutions.cloud/work",
    },
}


const workCategories = [
    {
        title: "Case Studies",
        description: "Explore detailed success stories and transformative projects we've delivered across various industries.",
        icon: Briefcase,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        features: ["Project Overview", "Challenges & Solutions", "Results & Impact", "Client Testimonials"],
        link: "/work/case-studies"
    },
    {
        title: "Portfolio",
        description: "Browse through our collection of innovative projects and digital solutions.",
        icon: Code2,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        features: ["Web Applications", "Mobile Apps", "Enterprise Solutions", "Cloud Services"],
        link: "/work/portfolio"
    },
    {
        title: "Testimonials",
        description: "Read what our clients have to say about their experience working with us.",
        icon: Star,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
        features: ["Client Reviews", "Success Stories", "Industry Impact", "Long-term Partnerships"],
        link: "/work/testimonials"
    }
]


const benefits = [
    {
        title: "Innovative Solutions",
        description: "Cutting-edge technology and creative problem-solving approaches",
        icon: Lightbulb,
    },
    {
        title: "Proven Excellence",
        description: "Consistently delivering high-quality results across projects",
        icon: CheckCircle2,
    },
    {
        title: "Client-Centric",
        description: "Tailored solutions that meet specific business needs",
        icon: Users,
    },
    {
        title: "Growth Focused",
        description: "Solutions that drive business growth and transformation",
        icon: Rocket,
    },
]

export default function Work() {
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
                                    Our Work
                                    <br />
                                    <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                                        transforming ideas into reality
                                    </span>
                                </h1>
                                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                                    Explore our portfolio of successful projects, case studies, and client testimonials that showcase our expertise and commitment to excellence.
                                </p>
                            </div>
                        </div>

                        {/* Benefits Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose Our Work?</h2>
                                <p className="text-lg text-muted-foreground">Experience the difference of our proven approach</p>
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

                        {/* Work Categories Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Explore Our Work</h2>
                                <p className="text-lg text-muted-foreground">Discover our diverse portfolio of successful projects</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {workCategories.map((category) => (
                                    <div
                                        key={category.title}
                                        className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        <div className={`mb-6 inline-flex rounded-xl p-4 ${category.bgColor}`}>
                                            <category.icon className={`h-8 w-8 ${category.color}`} />
                                        </div>
                                        <h3 className="mb-3 text-2xl font-semibold">{category.title}</h3>
                                        <p className="mb-6 text-muted-foreground">{category.description}</p>
                                        <div className="mb-6 flex flex-wrap gap-2">
                                            {category.features.map((feature) => (
                                                <span key={feature} className="rounded-full bg-accent/50 px-4 py-1.5 text-sm">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-auto">
                                            <Link href={category.link}>
                                                <Button variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground">
                                                    Explore {category.title}
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
                                        <div className="text-4xl font-bold text-primary mb-2">20+</div>
                                        <div className="text-muted-foreground">Projects Completed</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">50+</div>
                                        <div className="text-muted-foreground">Happy Clients</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">99%</div>
                                        <div className="text-muted-foreground">Client Satisfaction</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">5+</div>
                                        <div className="text-muted-foreground">Years Experience</div>
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