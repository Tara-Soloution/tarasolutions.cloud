import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Globe, Smartphone, Server, Shield, Star, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CTASection from "@/components/cta-section"

export const metadata: Metadata = {
    title: "Portfolio | Tara Solutions",
    description: "Explore our portfolio of successful projects and solutions. See how we've helped businesses transform their digital presence.",
}

const portfolioCategories = [
    {
        title: "Web Applications",
        description: "Modern, responsive web applications built with cutting-edge technologies",
        icon: Globe,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        projects: [
            {
                title: "Ahsen Elite",
                description: "A modern e-commerce platform for luxury products with advanced features and seamless user experience.",
                image: "/case-studies/ecommerce.jpg",
                tags: ["React", "Node.js", "MongoDB", "AWS"],
                link: "http://ahsenelite.com/"
            },
            {
                title: "Daweo Management System",
                description: "A comprehensive management system for business operations and analytics.",
                image: "/case-studies/healthcare.jpg",
                tags: ["Vue.js", "Python", "PostgreSQL", "GCP"],
                link: "http://daweo.online/"
            }
        ]
    },
    {
        title: "Mobile Applications",
        description: "Cross-platform mobile applications for iOS and Android",
        icon: Smartphone,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        projects: [
            {
                title: "Mobile Banking App",
                description: "A secure and user-friendly mobile banking application for a leading financial institution.",
                image: "/portfolio/banking.jpg",
                tags: ["React Native", "Node.js", "PostgreSQL", "Azure"],
                link: "/work/case-studies#banking"
            }
        ]
    },
    {
        title: "Enterprise Solutions",
        description: "Scalable enterprise software for large organizations",
        icon: Server,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        projects: [
            {
                title: "Cloud Station",
                description: "A comprehensive cloud management platform for enterprise infrastructure and services.",
                image: "/portfolio/analytics.jpg",
                tags: ["React", "Node.js", "AWS", "Docker"],
                link: "https://cloud-station.io"
            }
        ]
    }
]

const technologies = [
    {
        title: "Frontend",
        icon: Code2,
        items: ["React", "Vue.js", "Angular", "Next.js", "TypeScript"]
    },
    {
        title: "Backend",
        icon: Server,
        items: ["Node.js", "Python", "Java", "Go", "Rust"]
    },
    {
        title: "Mobile",
        icon: Smartphone,
        items: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
        title: "Cloud",
        icon: Globe,
        items: ["AWS", "Azure", "GCP", "DigitalOcean"]
    },
    {
        title: "Security",
        icon: Shield,
        items: ["OAuth", "JWT", "SSL/TLS", "Penetration Testing"]
    },
    {
        title: "Performance",
        icon: Zap,
        items: ["CDN", "Caching", "Load Balancing", "Optimization"]
    }
]

export default function PortfolioPage() {
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
                                    Our Portfolio
                                    <br />
                                    <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                                        showcasing innovation
                                    </span>
                                </h1>
                                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                                    Explore our diverse collection of projects, from web applications to enterprise solutions.
                                </p>
                            </div>
                        </div>

                        {/* Technologies Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Technologies We Use</h2>
                                <p className="text-lg text-muted-foreground">Our tech stack for building robust solutions</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {technologies.map((tech) => (
                                    <div key={tech.title} className="group relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] hover:border-primary/20 hover:bg-card">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="relative">
                                            <div className="mb-4">
                                                <tech.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                                            </div>
                                            <h3 className="text-xl font-semibold mb-4">{tech.title}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {tech.items.map((item) => (
                                                    <span key={item} className="rounded-full bg-accent/50 px-3 py-1 text-sm transition-colors duration-300 group-hover:bg-accent/70">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Portfolio Categories */}
                        {portfolioCategories.map((category) => (
                            <section key={category.title} className="container">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`rounded-xl p-3 ${category.bgColor} transition-transform duration-300 hover:scale-110`}>
                                        <category.icon className={`h-6 w-6 ${category.color}`} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">{category.title}</h2>
                                        <p className="text-muted-foreground">{category.description}</p>
                                    </div>
                                </div>
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {category.projects.map((project) => (
                                        <Link
                                            key={project.title}
                                            href={project.link}
                                            className="group relative block overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary),0.15)] hover:bg-card"
                                        >
                                            <div className="relative h-[280px] overflow-hidden">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="w-full">
                                                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                                        <p className="text-white/90 text-sm mb-3 line-clamp-2">{project.description}</p>
                                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                                            {project.tags.map((tag) => (
                                                                <span key={tag} className="rounded-full bg-white/10 backdrop-blur-sm px-2.5 py-0.5 text-xs text-white">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <Button
                                                            variant="secondary"
                                                            size="sm"
                                                            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20"
                                                        >
                                                            View Project
                                                            <ArrowRight className="ml-2 h-3.5 w-3.5" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        ))}

                        {/* CTA Section */}
                        <CTASection />
                    </div>
                </div>
            </div>
        </div>
    )
} 