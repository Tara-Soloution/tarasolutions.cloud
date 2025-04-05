import Link from "next/link"
import Image from 'next/image'
import { Metadata } from "next"
import { Users, UserCircle, Globe, Award, Brain, Rocket, Mail, Code, Cloud } from "lucide-react"

import { Button } from "@/components/ui/button"
import CTASection from '@/components/cta-section'

// Function to generate avatar URL
const getAvatarUrl = (name: string, size: number = 200) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=${size}&background=random&color=fff&bold=true&font-size=0.5`
}

export const metadata: Metadata = {
    title: "Our Team | Tara Solutions",
    description: "Meet the talented team behind Tara Solutions. Our diverse group of experts is driving innovation in technology solutions.",
    keywords: [
        "team",
        "leadership",
        "experts",
        "tech team",
        "company culture",
        "diversity",
        "innovation",
        "talent"
    ],
    openGraph: {
        title: "Our Team | Tara Solutions",
        description: "Meet the talented team behind Tara Solutions. Our diverse group of experts is driving innovation in technology solutions.",
        images: [
            {
                url: "/team-og.png",
                width: 1200,
                height: 630,
                alt: "Our Team",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Team | Tara Solutions",
        description: "Meet the talented team behind Tara Solutions. Our diverse group of experts is driving innovation in technology solutions.",
        images: ["/team-og.png"],
    },
    alternates: {
        canonical: "https://tarasolutions.cloud/about/team",
    },
}

const leadership = [
    {
        name: "Rustam Ali Hussaini",
        role: "CEO & Co-Founder",
        bio: "Visionary leader with extensive experience in cloud architecture and business strategy.",
        image: "/team/rustam-avatar.png",
        linkedin: "https://www.linkedin.com/in/rustam-hussaini-b717101b9/",
        twitter: "https://twitter.com/rustamhussaini",
        github: "https://github.com/rustamhussaini",
        email: "rustam@tarasolutions.cloud",
        expertise: ["Business Strategy", "Cloud Architecture", "Innovation"],
    },
    {
        name: "Ghulam Abbas Ataie",
        role: "CTO",
        bio: "Results-driven Software Engineer with 5+ years of expertise in cloud computing and microservices architecture.",
        image: "/team/abbas-avatar.jpg",
        linkedin: "https://www.linkedin.com/in/abbas-ataie-72a4431b9/",
        twitter: "https://twitter.com/abbasataie",
        github: "https://github.com/abbasatayee",
        email: "abbas.ataie@tarasolutions.cloud",
        expertise: ["Cloud Computing", "Microservices", "Technical Leadership"],
    },
    {
        name: "Hakima Merzayee",
        role: "Frontend Lead",
        bio: "Full-stack software engineer with expertise in modern web technologies and a passion for building scalable applications.",
        image: "/team/hakima-avatar.jpg",
        linkedin: "https://www.linkedin.com/in/hakima-merzayee/",
        github: "https://github.com/hakima",
        email: "hakima.merzayee3@gmail.com",
        expertise: ["Frontend Development", "Full Stack", "Technical Leadership"],
    }
]

const departments = [
    {
        name: "Engineering",
        lead: "Mohammad Hassan",
        role: "Head of Engineering",
        description: "Building scalable and innovative solutions",
        icon: Code,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        members: [
            { name: "Zahidullah", role: "Senior Full Stack Developer", expertise: ["React", "Node.js", "AWS"], image: getAvatarUrl("Zahidullah") },
            { name: "Sara", role: "Cloud Architect", expertise: ["AWS", "Azure", "GCP"], image: getAvatarUrl("Sara") },
            { name: "Khalid", role: "DevOps Engineer", expertise: ["Kubernetes", "Docker", "CI/CD"], image: getAvatarUrl("Khalid") },
        ],
    },
    {
        name: "Product",
        lead: "Laila",
        role: "Head of Product",
        description: "Creating exceptional user experiences",
        icon: Brain,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        members: [
            { name: "Omar", role: "Product Manager", expertise: ["Product Strategy", "User Research"], image: getAvatarUrl("Omar") },
            { name: "Yasmin", role: "UX Designer", expertise: ["UI/UX", "Design Systems"], image: getAvatarUrl("Yasmin") },
            { name: "Karim", role: "Product Analyst", expertise: ["Data Analysis", "Metrics"], image: getAvatarUrl("Karim") },
        ],
    },
    {
        name: "Cloud Solutions",
        lead: "Rahim",
        role: "Head of Cloud Solutions",
        description: "Delivering enterprise-grade cloud solutions",
        icon: Cloud,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        members: [
            { name: "Maryam", role: "Cloud Architect", expertise: ["Cloud Architecture", "Security"], image: getAvatarUrl("Maryam") },
            { name: "Nasir", role: "Solutions Engineer", expertise: ["Solution Design", "Integration"], image: getAvatarUrl("Nasir") },
            { name: "Zainab", role: "Cloud Security Specialist", expertise: ["Security", "Compliance"], image: getAvatarUrl("Zainab") },
        ],
    },
]

const teamStats = [
    {
        title: "Team Size",
        value: "10+",
        description: "Expert professionals",
        icon: Users,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        title: "Countries",
        value: "3+",
        description: "Global presence",
        icon: Globe,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
    {
        title: "Experience",
        value: "5+",
        description: "Average years",
        icon: Award,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
    },
    {
        title: "Projects",
        value: "20+",
        description: "Completed",
        icon: Rocket,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
]

export default function Team() {
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
                                    Meet Our Team
                                    <br />
                                    <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                                        The People Behind Innovation
                                    </span>
                                </h1>
                                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                                    A diverse group of experts passionate about transforming businesses through technology.
                                </p>
                            </div>
                        </div>

                        {/* Leadership Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Leadership Team</h2>
                                <p className="text-lg text-muted-foreground">Guiding our vision and strategy</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {leadership.map((leader) => (
                                    <div key={leader.name} className="h-[500px]">
                                        <Link
                                            href={`/about/team/${leader.name === "Rustam Ali Hussaini" ? "rustam" : leader.name === "Ghulam Abbas Ataie" ? "abbas" : "hakima"}`}
                                            className="block h-full group/card transition-all duration-300 hover:scale-[1.02]"
                                        >
                                            <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all group-hover/card:shadow-xl group-hover/card:shadow-primary/20 group-hover/card:border-primary/50 h-full flex flex-col">
                                                {/* Hover effect overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />

                                                <div className="relative flex-1 flex flex-col">
                                                    <div className="relative h-48 w-48 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover/card:ring-primary/40">
                                                        <Image
                                                            src={leader.image}
                                                            alt={leader.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <h3 className="text-2xl font-semibold text-center mb-2">{leader.name}</h3>
                                                    <p className="text-primary text-center mb-4">{leader.role}</p>
                                                    <p className="text-muted-foreground text-center mb-6 flex-1">{leader.bio}</p>
                                                    <div className="flex justify-center space-x-4 mt-auto">
                                                        <Button variant="ghost" size="icon" className="pointer-events-none opacity-70">
                                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.016-2.005-1.22-2.005-1.22 0-1.41.952-1.41 1.94v5.669h-3v-11h2.84v1.58h.04c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.866z" />
                                                            </svg>
                                                        </Button>
                                                        <Button variant="ghost" size="icon" className="pointer-events-none opacity-70">
                                                            <Mail className="h-5 w-5" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Department Tree Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Organization</h2>
                                <p className="text-lg text-muted-foreground">Meet our talented departments</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {departments.map((dept) => (
                                    <div
                                        key={dept.name}
                                        className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        <h3 className="text-2xl font-semibold mb-6">{dept.name}</h3>
                                        <div className="mb-8">
                                            <div className="flex items-center mb-4">
                                                <UserCircle className="h-8 w-8 text-primary mr-3" />
                                                <div>
                                                    <div className="font-semibold">{dept.lead}</div>
                                                    <div className="text-sm text-muted-foreground">{dept.role}</div>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                {dept.members.map((member) => (
                                                    <div key={member.name} className="flex items-center">
                                                        <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                                                        <div>
                                                            <div className="font-medium">{member.name}</div>
                                                            <div className="text-sm text-muted-foreground">{member.role}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Stats Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Team Stats</h2>
                                <p className="text-lg text-muted-foreground">Numbers that define us</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {teamStats.map((stat) => (
                                    <div
                                        key={stat.title}
                                        className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        <div className={`mb-6 inline-flex rounded-xl p-4 ${stat.bgColor}`}>
                                            <stat.icon className={`h-8 w-8 ${stat.color}`} />
                                        </div>
                                        <div className="text-3xl font-bold mb-2">{stat.value}</div>
                                        <div className="text-lg font-semibold mb-1">{stat.title}</div>
                                        <div className="text-muted-foreground">{stat.description}</div>
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