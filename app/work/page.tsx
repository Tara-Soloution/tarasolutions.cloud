import Image from 'next/image'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Award, Target, Users, CheckCircle2, TrendingUp, Zap, Shield, Laptop, Database, Briefcase, Rocket, Lightbulb } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

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

const featuredWork = [
    {
        title: "Cloud Station",
        description: "A powerful cloud deployment platform enabling developers to launch their applications with ease and efficiency. Built with modern cloud technologies and developer experience in mind.",
        image: "/projects/cloud-station.jpg",
        category: "Cloud Solutions",
        tags: ["Cloud", "DevOps", "Deployment", "Infrastructure"],
        href: "/work/cloud-station",
    },
    {
        title: "Ahsen Elite",
        description: "A modern web application platform offering innovative solutions for businesses and organizations. Built with cutting-edge technologies and focused on user experience.",
        image: "/projects/ahsen-elite.png",
        category: "Web Development",
        tags: ["Web Application", "Business Solutions", "Enterprise Software"],
        href: "/work/ahsen-elite",
    },
    {
        title: "Teacher Guide",
        description: "An educational platform designed to help teachers manage their classes and resources efficiently. Streamlining the educational process with modern technology.",
        image: "/projects/teacher-guide.png",
        category: "Education",
        tags: ["Education", "Web Platform", "Teacher Tools"],
        href: "/work/teacher-guide",
    },
]

const workCategories = [
    {
        title: "Web Applications",
        description: "Modern web applications built with cutting-edge technologies",
        icon: Laptop,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        count: "25+",
    },
    {
        title: "Mobile Apps",
        description: "Cross-platform mobile applications for iOS and Android",
        icon: Briefcase,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        count: "15+",
    },
    {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and management platforms",
        icon: Rocket,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        count: "20+",
    },
]

const achievements = [
    {
        title: "Client Satisfaction",
        description: "98% client satisfaction rate across all projects",
        icon: Star,
    },
    {
        title: "Project Success",
        description: "200+ successful project deliveries",
        icon: Award,
    },
    {
        title: "Team Expertise",
        description: "50+ expert developers and designers",
        icon: Users,
    },
    {
        title: "Innovation Rate",
        description: "85% of projects include innovative solutions",
        icon: Lightbulb,
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
                                    <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                                        Success Stories
                                    </span>
                                </h1>
                                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                                    Discover how we've helped businesses transform digitally through innovative solutions and cutting-edge technology.
                                </p>
                            </div>
                        </div>

                        {/* Featured Work Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Projects</h2>
                                <p className="text-lg text-muted-foreground">Explore our most impactful work</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {featuredWork.map((project) => (
                                    <div
                                        key={project.title}
                                        className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                                                {project.category}
                                            </span>
                                            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                            <p className="text-muted-foreground mb-4">{project.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className="rounded-full bg-accent/50 px-3 py-1 text-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <Link href={project.href}>
                                                <Button variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground">
                                                    View Case Study
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Work Categories Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Work Categories</h2>
                                <p className="text-lg text-muted-foreground">Explore different types of projects we've delivered</p>
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
                                        <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
                                        <p className="text-muted-foreground mb-4">{category.description}</p>
                                        <div className="text-3xl font-bold text-primary">{category.count}</div>
                                        <div className="text-sm text-muted-foreground">Projects Completed</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Achievements Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Achievements</h2>
                                <p className="text-lg text-muted-foreground">Numbers that speak for themselves</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {achievements.map((achievement) => (
                                    <div
                                        key={achievement.title}
                                        className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        <div className="mb-6 inline-flex rounded-xl p-4 bg-primary/10">
                                            <achievement.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                                        <p className="text-muted-foreground">{achievement.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="container">
                            <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-12 text-center">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Start Your Project?</h2>
                                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    Let's create something amazing together. Our team is ready to bring your vision to life.
                                </p>
                                <Link href="/contact">
                                    <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-purple-500 hover:opacity-90">
                                        <span className="relative z-10">Start Your Project</span>
                                        <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
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