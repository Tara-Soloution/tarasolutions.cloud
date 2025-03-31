import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Heart, Zap, Users, Globe, Coffee, Brain, Rocket, GraduationCap } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import CTASection from '@/components/cta-section'

export const metadata: Metadata = {
    title: "Careers at Tara Solutions",
    description: "Join our team of innovators and help shape the future of technology. Explore exciting career opportunities at Tara Solutions.",
    keywords: [
        "careers",
        "jobs",
        "work at Tara Solutions",
        "tech careers",
        "software development jobs",
        "cloud computing careers",
        "remote work",
        "tech company jobs"
    ],
    openGraph: {
        title: "Careers at Tara Solutions",
        description: "Join our team of innovators and help shape the future of technology. Explore exciting career opportunities at Tara Solutions.",
        images: [
            {
                url: "/careers-og.png",
                width: 1200,
                height: 630,
                alt: "Careers at Tara Solutions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Careers at Tara Solutions",
        description: "Join our team of innovators and help shape the future of technology. Explore exciting career opportunities at Tara Solutions.",
        images: ["/careers-og.png"],
    },
    alternates: {
        canonical: "https://tarasolutions.cloud/about/careers",
    },
}

const openPositions = [
    {
        title: "Senior Full Stack Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        description: "Join our engineering team to build scalable web applications and cloud solutions.",
        requirements: ["5+ years experience", "React/Next.js", "Node.js", "Cloud platforms"],
        href: "/careers/senior-full-stack-developer",
    },
    {
        title: "Cloud Solutions Architect",
        department: "Cloud",
        location: "Remote",
        type: "Full-time",
        description: "Design and implement cloud infrastructure solutions for enterprise clients.",
        requirements: ["AWS/Azure/GCP", "DevOps", "Infrastructure as Code", "Security"],
        href: "/careers/cloud-solutions-architect",
    },
    {
        title: "Product Manager",
        department: "Product",
        location: "Remote",
        type: "Full-time",
        description: "Lead product development and strategy for our technology solutions.",
        requirements: ["3+ years PM experience", "Agile", "Technical background", "Analytics"],
        href: "/careers/product-manager",
    },
]

const benefits = [
    {
        title: "Competitive Salary",
        description: "Industry-leading compensation packages",
        icon: Briefcase,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        title: "Remote Work",
        description: "Work from anywhere in the world",
        icon: Globe,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
    {
        title: "Health & Wellness",
        description: "Comprehensive health coverage and wellness programs",
        icon: Heart,
        color: "text-red-500",
        bgColor: "bg-red-500/10",
    },
    {
        title: "Learning & Growth",
        description: "Continuous learning opportunities and career development",
        icon: GraduationCap,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
    {
        title: "Innovation Time",
        description: "Dedicated time for personal projects and innovation",
        icon: Brain,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
    },
    {
        title: "Team Events",
        description: "Regular team building and social events",
        icon: Users,
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
    },
]

export default function Careers() {
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
                                    Join Our Team
                                    <br />
                                    <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                                        Shape the Future
                                    </span>
                                </h1>
                                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                                    Be part of a team that's revolutionizing technology solutions. Work with cutting-edge tools, solve challenging problems, and make a real impact.
                                </p>
                            </div>
                        </div>

                        {/* Open Positions Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Open Positions</h2>
                                <p className="text-lg text-muted-foreground">Join us in building the future of technology</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {openPositions.map((position) => (
                                    <div
                                        key={position.title}
                                        className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        <h3 className="text-2xl font-semibold mb-2">{position.title}</h3>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="rounded-full bg-accent/50 px-4 py-1.5 text-sm">
                                                {position.department}
                                            </span>
                                            <span className="rounded-full bg-accent/50 px-4 py-1.5 text-sm">
                                                {position.location}
                                            </span>
                                            <span className="rounded-full bg-accent/50 px-4 py-1.5 text-sm">
                                                {position.type}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground mb-6">{position.description}</p>
                                        <div className="mb-6">
                                            <h4 className="font-semibold mb-2">Requirements:</h4>
                                            <ul className="space-y-2">
                                                {position.requirements.map((req) => (
                                                    <li key={req} className="flex items-center text-muted-foreground">
                                                        <span className="mr-2">•</span>
                                                        {req}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mt-auto">
                                            <Link href={position.href}>
                                                <Button variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground">
                                                    Apply Now
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Benefits Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Join Us?</h2>
                                <p className="text-lg text-muted-foreground">We offer more than just a job</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {benefits.map((benefit) => (
                                    <div
                                        key={benefit.title}
                                        className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        <div className={`mb-6 inline-flex rounded-xl p-4 ${benefit.bgColor}`}>
                                            <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                        <p className="text-muted-foreground">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Culture Section */}
                        <section className="container">
                            <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-12">
                                <div className="max-w-3xl mx-auto text-center">
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Culture</h2>
                                    <p className="text-lg text-muted-foreground">
                                        At Tara Solutions, we believe in fostering a culture of innovation, collaboration, and continuous learning. We value diversity, creativity, and the pursuit of excellence in everything we do.
                                    </p>
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