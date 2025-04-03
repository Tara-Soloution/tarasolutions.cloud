import Link from "next/link"
import Image from 'next/image'
import { Metadata } from "next"
import { Mail, Github, Linkedin, Code, BookOpen, Award, Building, Calendar, Phone, MapPin, GraduationCap, Rocket, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import CTASection from '@/components/cta-section'

export const metadata: Metadata = {
    title: "Hakima Merzayee | Frontend Lead | Tara Solutions",
    description: "Lernen Sie Hakima Merzayee kennen, Frontend Lead bei Tara Solutions. Erfahrene Full-Stack-Entwicklerin mit Expertise in modernen Webtechnologien.",
    keywords: [
        "Hakima Merzayee",
        "Frontend Lead",
        "Tara Solutions",
        "Full Stack",
        "Webentwicklung",
        "React",
        "TypeScript"
    ],
    openGraph: {
        title: "Hakima Merzayee | Frontend Lead | Tara Solutions",
        description: "Lernen Sie Hakima Merzayee kennen, Frontend Lead bei Tara Solutions. Erfahrene Full-Stack-Entwicklerin mit Expertise in modernen Webtechnologien.",
        images: [
            {
                url: "/team/hakima-avatar.jpg",
                width: 1200,
                height: 630,
                alt: "Hakima Merzayee",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hakima Merzayee | Frontend Lead | Tara Solutions",
        description: "Lernen Sie Hakima Merzayee kennen, Frontend Lead bei Tara Solutions. Erfahrene Full-Stack-Entwicklerin mit Expertise in modernen Webtechnologien.",
        images: ["/team/hakima-avatar.jpg"],
    },
    alternates: {
        canonical: "https://tarasolutions.cloud/de/about/team/hakima",
    },
}

const workExperience = [
    {
        company: "Tara Solutions Inc.",
        role: "Frontend Lead",
        period: "März 2024 - Heute",
        location: "Remote",
        highlight: "Führend in Frontend-Entwicklung und UI/UX-Design",
        description: [
            "Leitung des Frontend-Entwicklungsteams",
            "Entwicklung und Implementierung von UI/UX-Strategien",
            "Entwicklung skalierbarer Frontend-Architekturen",
            "Implementierung modernster Webtechnologien",
            "Mentoring und technische Führung"
        ],
        technologies: ["React", "TypeScript", "UI/UX", "Frontend-Architektur", "Teamführung"]
    },
    {
        company: "Listoli LLC, USA",
        role: "Senior Frontend Developer",
        period: "Januar 2023 - Februar 2024",
        location: "Remote",
        highlight: "Entwicklung moderner Webanwendungen",
        description: [
            "Entwicklung und Wartung von Frontend-Systemen",
            "Implementierung von UI-Komponenten",
            "Optimierung der Benutzererfahrung",
            "Entwicklung von Frontend-Architekturen",
            "Code-Review und Qualitätssicherung"
        ],
        technologies: ["React", "TypeScript", "UI/UX", "Frontend-Architektur", "Testing"]
    },
    {
        company: "Click.af",
        role: "Frontend Developer",
        period: "März 2022 - Dezember 2022",
        location: "Kabul",
        highlight: "Entwicklung von E-Commerce-Frontends",
        description: [
            "Entwicklung von E-Commerce-Benutzeroberflächen",
            "Implementierung von Zahlungssystemen",
            "Optimierung der Benutzererfahrung",
            "Entwicklung von Frontend-Komponenten",
            "Integration von Drittanbieter-Services"
        ],
        technologies: ["React", "UI/UX", "E-Commerce", "Frontend-Entwicklung", "API-Integration"]
    },
    {
        company: "BlueBit Networking Services",
        role: "Frontend Developer",
        period: "Januar 2021 - Februar 2022",
        location: "Kabul",
        highlight: "Entwicklung von Netzwerkmanagement-Tools",
        description: [
            "Entwicklung von Netzwerkmanagement-Benutzeroberflächen",
            "Implementierung von Monitoring-Dashboards",
            "Entwicklung von Frontend-Komponenten",
            "Integration von Netzwerkprotokollen",
            "Optimierung der Benutzererfahrung"
        ],
        technologies: ["React", "UI/UX", "Netzwerktechnik", "Frontend-Entwicklung", "Dashboard-Design"]
    },
    {
        company: "IAP",
        role: "Frontend Developer",
        period: "Juni 2020 - Dezember 2020",
        location: "Kabul",
        highlight: "Entwicklung von Geschäftsanwendungen",
        description: [
            "Entwicklung von Geschäftsanwendungs-Benutzeroberflächen",
            "Implementierung von Frontend-Komponenten",
            "Entwicklung von Benutzeroberflächen",
            "Integration von Geschäftsprozessen",
            "Wartung und Support"
        ],
        technologies: ["React", "UI/UX", "Geschäftsanwendungen", "Frontend-Entwicklung", "API-Integration"]
    }
]

const skills = {
    frontend: {
        icon: "🎨",
        title: "Frontend-Entwicklung",
        description: "Entwicklung moderner Benutzeroberflächen",
        skills: ["React.js", "Next.js", "TypeScript", "UI/UX", "Responsive Design"],
        color: "from-blue-500 to-cyan-500"
    },
    backend: {
        icon: "⚙️",
        title: "Backend-Entwicklung",
        description: "Entwicklung robuster Serverlösungen",
        skills: ["Node.js", "Express", "RESTful APIs", "GraphQL", "MongoDB"],
        color: "from-green-500 to-emerald-500"
    },
    testing: {
        icon: "🧪",
        title: "Testing & Qualität",
        description: "Qualitätssicherung und Tests",
        skills: ["Jest", "React Testing Library", "Cypress", "E2E Testing", "Unit Testing"],
        color: "from-purple-500 to-pink-500"
    },
    tools: {
        icon: "🛠️",
        title: "Tools & Technologien",
        description: "Entwicklungs- und Produktivitätstools",
        skills: ["Git", "Docker", "VS Code", "Figma", "Jira"],
        color: "from-orange-500 to-red-500"
    }
}

const projects = [
    {
        name: "E-Commerce Platform",
        description: "Moderne E-Commerce-Lösung",
        highlights: [
            "Responsive Design und optimierte Benutzererfahrung",
            "Hochperformante Frontend-Architektur",
            "Integration von Zahlungssystemen",
            "Echtzeit-Inventarmanagement"
        ],
        technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]
    },
    {
        name: "Netzwerkmanagement Dashboard",
        description: "Umfassendes Netzwerkmanagement-Tool",
        highlights: [
            "Echtzeit-Netzwerkmonitoring",
            "Interaktive Visualisierungen",
            "Benutzerfreundliche Oberfläche",
            "Anpassbare Dashboards"
        ],
        technologies: ["React", "D3.js", "WebSocket", "Material-UI", "Chart.js"]
    }
]

const education = [
    {
        school: "Kabul Polytechnic University",
        degree: "Bachelor in Informatik",
        period: "2018 - 2022",
        location: "Kabul",
        description: "Grundlegende Ausbildung in Informatik und Softwareentwicklung."
    }
]

const languages = [
    { name: "Dari", level: "Muttersprache", icon: "🌟" },
    { name: "Englisch", level: "C1 (Fortgeschritten)", icon: "🌍" },
    { name: "Deutsch", level: "B1 (Mittelstufe)", icon: "🇩🇪" }
]

const awards = [
    {
        title: "Best Frontend Developer",
        description: "Tara Solutions 2023",
        icon: "🏆"
    },
    {
        title: "Duolingo English Proficiency",
        description: "Score: 120/120",
        icon: "🎯"
    }
]

export default function HakimaProfile() {
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
                            <div className="flex flex-col items-center text-center mb-16">
                                <div className="relative h-48 w-48 mb-8 rounded-full overflow-hidden ring-4 ring-primary/20">
                                    <Image
                                        src="/team/hakima-avatar.jpg"
                                        alt="Hakima Merzayee"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
                                    Hakima Merzayee
                                </h1>
                                <p className="text-xl text-primary mb-6">Frontend Lead</p>
                                <p className="max-w-2xl text-lg text-muted-foreground mb-8">
                                    Erfahrene Full-Stack-Entwicklerin mit über 4 Jahren Expertise in modernen Webtechnologien.
                                    Spezialisiert auf die Entwicklung skalierbarer und benutzerfreundlicher Webanwendungen.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <div className="flex items-center space-x-2 text-muted-foreground">
                                        <Mail className="h-4 w-4" />
                                        <span>hakima.merzayee3@gmail.com</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-muted-foreground">
                                        <Phone className="h-4 w-4" />
                                        <span>+93 700000000</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-muted-foreground">
                                        <MapPin className="h-4 w-4" />
                                        <span>Kabul, Afghanistan</span>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <Link href="https://www.linkedin.com/in/hakima-merzayee/" target="_blank">
                                        <Button variant="ghost" size="icon" className="hover:text-blue-500">
                                            <Linkedin className="h-5 w-5" />
                                        </Button>
                                    </Link>
                                    <Link href="https://github.com/hakima" target="_blank">
                                        <Button variant="ghost" size="icon" className="hover:text-gray-900 dark:hover:text-white">
                                            <Github className="h-5 w-5" />
                                        </Button>
                                    </Link>
                                    <Link href="mailto:hakima.merzayee3@gmail.com">
                                        <Button variant="ghost" size="icon" className="hover:text-red-500">
                                            <Mail className="h-5 w-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <section className="container">
                            <div className="grid gap-8 md:grid-cols-4">
                                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                                    <div className="relative">
                                        <h3 className="text-4xl font-bold mb-2">4+</h3>
                                        <p className="text-muted-foreground">Jahre Erfahrung</p>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                                    <div className="relative">
                                        <h3 className="text-4xl font-bold mb-2">15+</h3>
                                        <p className="text-muted-foreground">Projekte abgeschlossen</p>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                                    <div className="relative">
                                        <h3 className="text-4xl font-bold mb-2">3+</h3>
                                        <p className="text-muted-foreground">Unternehmen beraten</p>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                                    <div className="relative">
                                        <h3 className="text-4xl font-bold mb-2">8+</h3>
                                        <p className="text-muted-foreground">Technologien</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Skills Section */}
                        <section className="container">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                                <Code className="mr-4 h-8 w-8 text-primary" />
                                Technische Expertise
                            </h2>
                            <div className="grid gap-8 md:grid-cols-2">
                                {Object.entries(skills).map(([key, category]) => (
                                    <div
                                        key={key}
                                        className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
                                    >
                                        {/* Background gradient */}
                                        <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${category.color}`} />

                                        {/* Content */}
                                        <div className="relative">
                                            <div className="flex items-center mb-6">
                                                <span className="text-4xl mr-4">{category.icon}</span>
                                                <div>
                                                    <h3 className="text-xl font-semibold">{category.title}</h3>
                                                    <p className="text-sm text-muted-foreground">{category.description}</p>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                {category.skills.map((skill) => (
                                                    <div
                                                        key={skill}
                                                        className={`
                                                            relative overflow-hidden rounded-lg p-3
                                                            bg-gradient-to-r ${category.color} group-hover:shadow-lg
                                                            opacity-90 hover:opacity-100 transition-all
                                                            transform hover:scale-105 hover:rotate-1
                                                        `}
                                                    >
                                                        <div className="absolute inset-0 bg-black opacity-75" />
                                                        <div className="relative">
                                                            <p className="font-medium text-white">{skill}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Work Experience Section */}
                        <section className="container">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                                <Building className="mr-4 h-8 w-8 text-primary" />
                                Beruflicher Werdegang
                            </h2>
                            <div className="relative">
                                {/* Timeline line */}
                                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/10 hidden md:block" />

                                <div className="space-y-12">
                                    {workExperience.map((job, index) => (
                                        <div key={index} className="group relative">
                                            {/* Timeline dot with ping effect */}
                                            <div className="absolute left-8 -translate-x-1/2 hidden md:block">
                                                <div className="relative">
                                                    <div className="w-4 h-4 rounded-full bg-primary" />
                                                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                                                </div>
                                            </div>

                                            <div className="md:ml-16 relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                                                {/* Decorative corner gradient */}
                                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 via-primary/3 to-transparent rounded-bl-full" />

                                                <div className="relative">
                                                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                                        {job.role}
                                                    </h3>
                                                    <p className="text-primary mb-2 text-lg font-medium">{job.company}</p>
                                                    <div className="flex items-center text-muted-foreground mb-4">
                                                        <Calendar className="h-4 w-4 mr-2" />
                                                        <span>{job.period}</span>
                                                        <span className="mx-2">•</span>
                                                        <span>{job.location}</span>
                                                    </div>

                                                    <p className="text-lg font-medium text-primary/80 mb-6 italic border-l-4 border-primary/20 pl-4">
                                                        "{job.highlight}"
                                                    </p>

                                                    <ul className="list-none space-y-3 text-muted-foreground mb-6">
                                                        {job.description.map((item, i) => (
                                                            <li key={i} className="flex items-start group/item hover:text-primary transition-colors">
                                                                <span className="mr-3 mt-1.5">
                                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary group-hover/item:scale-125 transition-transform" />
                                                                </span>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <div className="flex flex-wrap gap-2">
                                                        {job.technologies.map((tech, techIndex) => (
                                                            <span
                                                                key={tech}
                                                                className={`
                                                                    inline-flex items-center rounded-md px-3 py-1
                                                                    text-sm font-medium bg-primary/5 text-primary
                                                                    hover:bg-primary/10 transition-all transform hover:scale-105
                                                                    border border-primary/10 hover:border-primary/20
                                                                    ${techIndex % 2 === 0 ? 'hover:-rotate-1' : 'hover:rotate-1'}
                                                                `}
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Projects Section */}
                        <section className="container">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                                <Rocket className="mr-4 h-8 w-8 text-primary" />
                                Ausgewählte Projekte
                            </h2>
                            <div className="grid gap-8 md:grid-cols-2">
                                {projects.map((project) => (
                                    <div
                                        key={project.name}
                                        className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
                                    >
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 via-primary/3 to-transparent rounded-bl-full" />

                                        <div className="relative">
                                            <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
                                            <p className="text-muted-foreground mb-4">{project.description}</p>

                                            <ul className="space-y-2 mb-6">
                                                {project.highlights.map((highlight, index) => (
                                                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                                                        <Check className="h-4 w-4 mr-2 text-primary" />
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="inline-flex items-center rounded-md px-3 py-1 text-sm font-medium bg-primary/5 text-primary"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education Section */}
                        <section className="container">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                                <GraduationCap className="mr-4 h-8 w-8 text-primary" />
                                Ausbildung
                            </h2>
                            <div className="grid gap-8 md:grid-cols-1">
                                {education.map((edu) => (
                                    <div
                                        key={edu.school}
                                        className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
                                    >
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 via-primary/3 to-transparent rounded-bl-full" />

                                        <div className="relative">
                                            <h3 className="text-xl font-semibold mb-2">{edu.school}</h3>
                                            <p className="text-primary mb-2">{edu.degree}</p>
                                            <div className="flex items-center text-muted-foreground mb-4">
                                                <Calendar className="h-4 w-4 mr-2" />
                                                <span>{edu.period}</span>
                                                <span className="mx-2">•</span>
                                                <span>{edu.location}</span>
                                            </div>
                                            <p className="text-muted-foreground">{edu.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Languages Section */}
                        <section className="container">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                                <BookOpen className="mr-4 h-8 w-8 text-primary" />
                                Sprachen
                            </h2>
                            <div className="grid gap-8 md:grid-cols-3">
                                {languages.map((lang) => (
                                    <div
                                        key={lang.name}
                                        className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
                                    >
                                        <div className="flex items-center mb-4">
                                            <span className="text-4xl mr-4">{lang.icon}</span>
                                            <div>
                                                <h3 className="text-xl font-semibold">{lang.name}</h3>
                                                <p className="text-primary">{lang.level}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Awards Section */}
                        <section className="container">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                                <Award className="mr-4 h-8 w-8 text-primary" />
                                Auszeichnungen & Erfolge
                            </h2>
                            <div className="grid gap-8 md:grid-cols-3">
                                {awards.map((award) => (
                                    <div
                                        key={award.title}
                                        className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
                                    >
                                        <div className="flex items-center mb-4">
                                            <span className="text-4xl mr-4">{award.icon}</span>
                                            <div>
                                                <h3 className="text-xl font-semibold">{award.title}</h3>
                                                <p className="text-muted-foreground">{award.description}</p>
                                            </div>
                                        </div>
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