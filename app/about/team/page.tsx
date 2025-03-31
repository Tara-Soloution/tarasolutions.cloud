import { Button } from "@/components/ui/button"
import { ArrowRight, Users, UserCircle, Building2, Globe, Award, Brain, Rocket, GraduationCap, Mail } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import CTASection from '@/components/cta-section'
import Image from 'next/image'

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
        name: "Sarah Johnson",
        role: "CEO & Founder",
        bio: "Tech visionary with 15+ years of experience in cloud computing and digital transformation.",
        image: "/team/sarah.jpg",
        linkedin: "https://linkedin.com/in/sarah-johnson",
        email: "sarah@tarasolutions.cloud",
    },
    {
        name: "Michael Chen",
        role: "CTO",
        bio: "Expert in scalable architecture and cloud-native solutions with a passion for innovation.",
        image: "/team/michael.jpg",
        linkedin: "https://linkedin.com/in/michael-chen",
        email: "michael@tarasolutions.cloud",
    },
    {
        name: "Emily Rodriguez",
        role: "COO",
        bio: "Operations specialist focused on building efficient, scalable business processes.",
        image: "/team/emily.jpg",
        linkedin: "https://linkedin.com/in/emily-rodriguez",
        email: "emily@tarasolutions.cloud",
    },
]

const departments = [
    {
        name: "Engineering",
        lead: "David Kim",
        role: "Head of Engineering",
        members: [
            { name: "Alex Thompson", role: "Senior Full Stack Developer" },
            { name: "Lisa Wang", role: "Cloud Architect" },
            { name: "James Wilson", role: "DevOps Engineer" },
        ],
    },
    {
        name: "Product",
        lead: "Rachel Martinez",
        role: "Head of Product",
        members: [
            { name: "Tom Lee", role: "Product Manager" },
            { name: "Sophie Chen", role: "UX Designer" },
            { name: "Chris Anderson", role: "Product Analyst" },
        ],
    },
    {
        name: "Cloud Solutions",
        lead: "Kevin Patel",
        role: "Head of Cloud Solutions",
        members: [
            { name: "Maria Garcia", role: "Cloud Architect" },
            { name: "Ryan Murphy", role: "Solutions Engineer" },
            { name: "Anna Smith", role: "Cloud Security Specialist" },
        ],
    },
]

const teamStats = [
    {
        title: "Team Size",
        value: "50+",
        description: "Expert professionals",
        icon: Users,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        title: "Countries",
        value: "12+",
        description: "Global presence",
        icon: Globe,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
    {
        title: "Experience",
        value: "10+",
        description: "Average years",
        icon: Award,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
    },
    {
        title: "Projects",
        value: "200+",
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
                                    <div
                                        key={leader.name}
                                        className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        <div className="relative h-48 w-48 mx-auto mb-6 rounded-full overflow-hidden">
                                            <Image
                                                src={leader.image}
                                                alt={leader.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-center mb-2">{leader.name}</h3>
                                        <p className="text-primary text-center mb-4">{leader.role}</p>
                                        <p className="text-muted-foreground text-center mb-6">{leader.bio}</p>
                                        <div className="flex justify-center space-x-4">
                                            <Link href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                                                <Button variant="ghost" size="icon">
                                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.016-2.005-1.22-2.005-1.22 0-1.41.952-1.41 1.94v5.669h-3v-11h2.84v1.58h.04c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.866z" />
                                                    </svg>
                                                </Button>
                                            </Link>
                                            <Link href={`mailto:${leader.email}`}>
                                                <Button variant="ghost" size="icon">
                                                    <Mail className="h-5 w-5" />
                                                </Button>
                                            </Link>
                                        </div>
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