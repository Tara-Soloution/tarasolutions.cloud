import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Code, Layout, Server, Database, Cpu, BookOpen, Cloud, Building2, ShoppingCart, Palette } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
    {
        title: "Quds University",
        description: "A comprehensive educational platform for Quds Higher Education Institute, featuring student management, course information, and academic resources. The platform serves as a central hub for students, faculty, and administrative staff.",
        link: "https://qods.edu.af/",
        image: "/projects/quds.png",
        tags: ["Education", "Web Platform", "Student Management", "Academic Portal"],
        icon: BookOpen,
        features: [
            "Student Portal",
            "Course Management",
            "Academic Resources",
            "Administrative Tools"
        ]
    },
    {
        title: "Cloud Station",
        description: "A powerful cloud deployment platform enabling developers to launch their applications with ease and efficiency. Built with modern cloud technologies and developer experience in mind.",
        link: "https://www.cloud-station.io/",
        image: "/projects/cloud-station.png",
        tags: ["Cloud", "DevOps", "Deployment", "Infrastructure"],
        icon: Cloud,
        features: [
            "One-Click Deployment",
            "Auto-Scaling",
            "Monitoring Tools",
            "CI/CD Integration"
        ]
    },
    {
        title: "Daweo",
        description: "A modern web application platform offering innovative solutions for businesses and organizations. Built with cutting-edge technologies and focused on user experience.",
        link: "https://daweo.org/",
        image: "/projects/daweo.png",
        tags: ["Web Application", "Business Solutions", "Enterprise Software"],
        icon: Building2,
        features: [
            "Business Management",
            "Analytics Dashboard",
            "User Management",
            "API Integration"
        ]
    },
    {
        title: "Daweo Online",
        description: "An online platform providing digital services and solutions for modern businesses. Focused on e-commerce and digital transformation.",
        link: "http://daweo.online/",
        image: "/projects/daweo-online.png",
        tags: ["Digital Services", "E-commerce", "Online Platform"],
        icon: ShoppingCart,
        features: [
            "E-commerce Solutions",
            "Payment Integration",
            "Inventory Management",
            "Customer Portal"
        ]
    },
    {
        title: "Heart UI",
        description: "A beautiful and modern UI component library built for the cloud era. Designed to help developers create consistent and beautiful user interfaces quickly.",
        link: "https://heart-ui.cloud-station.app/",
        image: "/projects/heart-ui.png",
        tags: ["UI Library", "Components", "Design System", "Frontend"],
        icon: Palette,
        features: [
            "Reusable Components",
            "Theme Customization",
            "Accessibility",
            "Responsive Design"
        ]
    }
]

export default function WorkPage() {
    return (
        <div className="space-y-24">
            {/* Hero Section */}
            <section className="container flex min-h-[60vh] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
                <div className="space-y-6">
                    <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                        Our Digital Journey
                    </h1>
                    <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Discover how we've helped businesses transform their digital presence.
                        From educational platforms to cloud solutions, each project tells a unique story of innovation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" variant="outline">
                            <Globe className="mr-2 h-4 w-4" />
                            View Live Projects
                        </Button>
                        <Link href="/contact">
                            <Button size="lg">
                                Start Your Project
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Education</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Cloud Solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Web Applications</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>UI/UX Design</span>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="container space-y-16 py-24 md:py-32">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative flex flex-col overflow-hidden rounded-lg border bg-card">
                            <div className="aspect-video relative overflow-hidden bg-muted">
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <project.icon className="h-12 w-12 text-primary" />
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-4 space-y-2">
                                        <h4 className="text-sm font-medium">Key Features:</h4>
                                        <ul className="text-sm text-muted-foreground">
                                            {project.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center gap-2">
                                                    <span className="h-1 w-1 rounded-full bg-primary" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                        <Button
                                            variant="outline"
                                            className="group relative w-full overflow-hidden rounded-full bg-card transition-all hover:bg-accent hover:text-accent-foreground"
                                        >
                                            <span className="relative z-10 flex items-center justify-center">
                                                View Project
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </span>
                                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 opacity-0 transition-opacity group-hover:opacity-100" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="container space-y-8 py-24 md:py-32">
                <div className="mx-auto max-w-[58rem] text-center">
                    <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Ready to Start Your Project?</h2>
                    <p className="mt-4 text-muted-foreground sm:text-lg">
                        Let's create something amazing together. Our team is ready to bring your vision to life.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Link href="/contact">
                        <Button size="lg">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
} 