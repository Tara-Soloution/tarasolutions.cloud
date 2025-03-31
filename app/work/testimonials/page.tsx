import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Quote, Users, CheckCircle2, Target, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CTASection from "@/components/cta-section"

export const metadata: Metadata = {
    title: "Testimonials | Tara Solutions",
    description: "Read what our clients say about working with Tara Solutions. Discover how we've helped businesses achieve their goals.",
}

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CTO at TechCorp",
        company: "TechCorp Inc.",
        image: "/images/testimonials/sarah.jpg",
        content: "Working with Tara Solutions has been transformative for our business. Their expertise in cloud architecture and scalable solutions helped us achieve unprecedented growth.",
        rating: 5,
        industry: "Technology",
        project: "Cloud Migration"
    },
    {
        name: "Michael Chen",
        role: "Product Manager",
        company: "HealthCare Plus",
        image: "/images/testimonials/michael.jpg",
        content: "The team's dedication to understanding our healthcare domain and implementing HIPAA-compliant solutions was impressive. They delivered beyond our expectations.",
        rating: 5,
        industry: "Healthcare",
        project: "Healthcare Management System"
    },
    {
        name: "Emily Rodriguez",
        role: "Operations Director",
        company: "Global Retail Co.",
        image: "/images/testimonials/emily.jpg",
        content: "Their e-commerce solution revolutionized our online presence. The platform's performance and user experience have significantly increased our sales.",
        rating: 5,
        industry: "Retail",
        project: "E-commerce Platform"
    }
]

const stats = [
    {
        title: "Client Satisfaction",
        value: "98%",
        icon: Star,
        description: "Based on client feedback and ratings"
    },
    {
        title: "Project Success Rate",
        value: "95%",
        icon: CheckCircle2,
        description: "Of projects delivered on time and within scope"
    },
    {
        title: "Client Retention",
        value: "90%",
        icon: Users,
        description: "Of clients return for additional projects"
    },
    {
        title: "Average Rating",
        value: "4.9/5",
        icon: Target,
        description: "Across all client testimonials"
    }
]

const industries = [
    {
        title: "Technology",
        count: "25+",
        description: "Tech companies served"
    },
    {
        title: "Healthcare",
        count: "15+",
        description: "Healthcare organizations"
    },
    {
        title: "Retail",
        count: "20+",
        description: "Retail businesses"
    },
    {
        title: "Finance",
        count: "10+",
        description: "Financial institutions"
    }
]

export default function TestimonialsPage() {
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
                                    Client Testimonials
                                    <br />
                                    <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                                        what our clients say
                                    </span>
                                </h1>
                                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                                    Discover why businesses trust us with their digital transformation needs through real client stories and feedback.
                                </p>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <section className="container">
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {stats.map((stat) => (
                                    <div key={stat.title} className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20">
                                        <div className="mb-4">
                                            <stat.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                                        <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                                        <p className="text-muted-foreground">{stat.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Testimonials Grid */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Client Success Stories</h2>
                                <p className="text-lg text-muted-foreground">Real feedback from our valued clients</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.name}
                                        className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="relative h-12 w-12 overflow-hidden rounded-full">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">{testimonial.name}</h3>
                                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="flex gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="relative mb-6">
                                            <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                                            <p className="text-muted-foreground">{testimonial.content}</p>
                                        </div>
                                        <div className="mt-auto">
                                            <div className="flex flex-wrap gap-2">
                                                <span className="rounded-full bg-accent/50 px-3 py-1 text-sm">
                                                    {testimonial.industry}
                                                </span>
                                                <span className="rounded-full bg-accent/50 px-3 py-1 text-sm">
                                                    {testimonial.project}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Industries Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Industries We Serve</h2>
                                <p className="text-lg text-muted-foreground">Trusted by leading companies across sectors</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {industries.map((industry) => (
                                    <div key={industry.title} className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20">
                                        <div className="text-3xl font-bold text-primary mb-2">{industry.count}</div>
                                        <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                                        <p className="text-muted-foreground">{industry.description}</p>
                                    </div>
                                ))}
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