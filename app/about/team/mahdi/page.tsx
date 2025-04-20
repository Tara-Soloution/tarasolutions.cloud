import Link from "next/link"
import Image from 'next/image'
import { Metadata } from "next"
import { Mail, Phone, MapPin, Facebook, Linkedin, Github, Calendar, Globe, Languages, Code, Database, Server, Terminal, ChevronLeft, Building, Award, Rocket, BookOpen, GraduationCap, ExternalLink, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import CTASection from '@/components/cta-section'

export const metadata: Metadata = {
    title: "Mohammad Mahdi Alizada | Backend Lead | Tara Solutions",
    description: "Full Stack Developer with 5 years of experience in building innovative and efficient web solutions. Currently serving as Backend Lead at Tara Solutions.",
    keywords: [
        "Full Stack Developer",
        "Backend Lead",
        "Laravel",
        "React",
        "Node.js",
        "Elixir",
        "Web Development",
        "Software Engineer",
        "Tara Solutions"
    ],
    openGraph: {
        title: "Mohammad Mahdi Alizada | Backend Lead | Tara Solutions",
        description: "Full Stack Developer with 5 years of experience in building innovative and efficient web solutions. Currently serving as Backend Lead at Tara Solutions.",
        images: [
            {
                url: "/team/mahdi-avatar.jpg",
                width: 1200,
                height: 630,
                alt: "Mohammad Mahdi Alizada",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mohammad Mahdi Alizada | Backend Lead | Tara Solutions",
        description: "Full Stack Developer with 5 years of experience in building innovative and efficient web solutions. Currently serving as Backend Lead at Tara Solutions.",
        images: ["/team/mahdi-avatar.jpg"],
    },
    alternates: {
        canonical: "https://tarasolutions.cloud/about/team/mahdi",
    },
}

const workExperience = [
    {
        company: "Tooti Sabz",
        role: "Backend Developer",
        period: "15/07/2024 – CURRENT",
        location: "Kabul, Afghanistan",
        highlights: [
            "Database Analysis and Design",
            "API & Backend Logic Development",
            "Database Interaction",
            "Testing and Quality Assurance",
            "Chat Service Implementation",
            "DevOps and Containerization",
            "Collaboration and Integration",
            "Tooti Admin Panel Management System"
        ],
        description: "As a Backend Developer at Tooti Sabz Company, I was responsible for architecting and implementing the backend systems that power the Tooti application. My work focused on ensuring high performance, scalability, and maintainability of the system.",
        technologies: ["Laravel", "React.js", "MySQL/PostgreSQL", "Docker", "Redis", "WebSockets", "Laravel Echo", "Pusher", "Elixir", "REST APIs", "Git", "PHPUnit", "JWT/Sanctum"],
        reference: {
            name: "Mohammad Alim",
            role: "HR",
            email: "hr@tootisabz.tech"
        }
    },
    {
        company: "Tara Solutions",
        role: "Full Stack Developer",
        period: "01/01/2024 – CURRENT",
        location: "Kabul, Afghanistan",
        highlights: [
            "Frontend Architecture and Component Design",
            "Backend & API Development",
            "Real-Time Functionality Implementation",
            "Database Design and Management",
            "Project Management & Team Collaboration"
        ],
        description: "At Tara Solutions, I worked as a Full Stack Developer and also took on Project Management responsibilities for several key projects. I led the full development lifecycle, from planning and architecture to deployment and maintenance.",
        technologies: ["Node.js", "Express.js", "Laravel", "React.js", "Next.js", "MySQL", "PostgreSQL", "MongoDB", "REST APIs", "Socket.io", "WebSockets", "Git", "JWT"],
        reference: {
            name: "Habib Mostafa",
            role: "HR",
            email: "hr@tarasolutions.cloud"
        }
    },
    {
        company: "Smart Friqi",
        role: "Full Stack Developer",
        period: "01/02/2022 – 01/02/2024",
        location: "Kabul, Afghanistan",
        highlights: [
            "Designing and Building Reusable Frontend Components",
            "Developing RESTful APIs with Laravel",
            "Adding Real-Time Functionality to Web Applications",
            "Full Development Lifecycle & Collaboration"
        ],
        description: "As a Full Stack Developer at Smart Friqi, I was responsible for end-to-end development of web applications using Laravel on the backend and Vue.js on the frontend.",
        technologies: ["Laravel", "Vue.js", "MySQL/PostgreSQL", "JavaScript", "HTML5/CSS3", "Tailwind CSS", "Pusher", "WebSockets", "REST APIs", "Git", "JWT/Sanctum"],
        reference: {
            name: "Rahmatullah Sadid",
            role: "HR",
            email: "hr@smartfriqi.org"
        }
    },
    {
        company: "Techland Organization",
        role: "Web Developer and Web Designer",
        period: "01/01/2020 – 15/08/2021",
        location: "Kabul, Afghanistan",
        highlights: [
            "Designing and creating reusable Frontend components",
            "Developing Rest Full APIs",
            "Adding Real-time functionality to web applications"
        ],
        description: "Worked as a Web Developer and Web Designer, focusing on creating responsive and efficient web applications.",
        technologies: ["Laravel", "Vue.js", "MySQL", "JavaScript", "HTML/CSS"],
        reference: {
            name: "Sayed Mahdi Mosavi",
            role: "CEO",
            email: "sayedmahdi87@gmail.com"
        }
    }
]

const education = [
    {
        degree: "Bachelor in Computer Science",
        institution: "Kabul Polytechnic University",
        period: "2018 – 2023",
        location: "Kabul, Afghanistan",
        website: "https://kpu.edu.af/en"
    },
    {
        degree: "Secondary School",
        institution: "AbdulRahim-e-shaheed high school",
        period: "2005 – 2017",
        location: "Kabul, Afghanistan"
    }
]

const projects = [
    {
        name: "Tooti Application Chat Service",
        period: "15/02/2025 – CURRENT",
        description: "Developed the chat service for the Tooti application using Elixir and the Phoenix framework. It is capable of handling over 100 million requests, similar to the WhatsApp chat application.",
        technologies: ["Elixir", "Phoenix", "WebSockets"]
    },
    {
        name: "Tooti Social Application Platform",
        period: "15/07/2024 – CURRENT",
        description: "A social application platform built with Laravel for the backend.",
        link: "https://inkd.in/ebiSG5Si",
        technologies: ["Laravel", "React.js", "MySQL"]
    },
    {
        name: "Tooti Dashboard Admin Panel",
        period: "15/07/2024 – CURRENT",
        description: "MIS and Chat support management system built with Laravel for the backend and React JS for the frontend.",
        technologies: ["Laravel", "React.js", "MySQL"]
    },
    {
        name: "Tara Solutions Website",
        period: "2024",
        description: "Designed and developed a modern, fully responsive corporate website for Tara Solutions, showcasing the company's offerings with a clean design and high performance.",
        link: "https://www.tarasolutions.cloud",
        technologies: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"]
    },
    {
        name: "DAWEO MIS System",
        period: "20/03/2024 – 20/05/2024",
        description: "Management Information System for Danner Afghanistan for Women Empowerment Organization, covering user management, psychological patients, vocational trainings, and more.",
        technologies: ["Laravel", "React.js", "MySQL"]
    },
    {
        name: "Shahre-Kodak ERP",
        period: "10/05/2023 – 10/11/2023",
        description: "Complete ERP system for a chain store including HR Management, Stock Management, Product Management, Sales Management, and Store Management.",
        technologies: ["Laravel", "React.js", "MySQL"]
    }
]

const skills = {
    frontend: {
        icon: "🎨",
        title: "Frontend Development",
        description: "Creating responsive and intuitive user interfaces",
        skills: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Next.js", "Vue.js", "React.js", "Nuxt.js"]
    },
    backend: {
        icon: "⚙️",
        title: "Backend Development",
        description: "Building scalable and robust server solutions",
        skills: ["PHP", "Laravel", "Node.js", "Python", "Filamentphp", "Elixir"]
    },
    database: {
        icon: "🗄️",
        title: "Database",
        description: "Managing and optimizing data systems",
        skills: ["MySQL", "PostgreSQL", "Redis", "MongoDB"]
    },
    general: {
        icon: "🛠️",
        title: "General Skills",
        description: "Essential tools and practices",
        skills: ["Git", "Github", "Docker", "TALL Stack"]
    }
}

const languages = [
    {
        name: "Persian",
        level: "Native",
        icon: "🇮🇷"
    },
    {
        name: "English",
        level: "C1 (Listening), B2 (Reading, Speaking), B1 (Writing)",
        icon: "🇬🇧"
    }
]

export default function MahdiProfile() {
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
                                        src="/team/mahdi-avatar.jpg"
                                        alt="Mohammad Mahdi Alizada"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
                                    Mohammad Mahdi Alizada
                                </h1>
                                <p className="text-xl text-primary mb-6">Backend Lead</p>
                                <p className="max-w-2xl text-lg text-muted-foreground mb-8">
                                    Full Stack Developer with 5 years of experience in building innovative and efficient web solutions.
                                    Specializing in backend development and database architecture.
                                    Currently based in Kabul, Afghanistan.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <div className="flex items-center space-x-2 text-muted-foreground">
                                        <Mail className="h-4 w-4" />
                                        <span>mahdializada761@gmail.com</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-muted-foreground">
                                        <Phone className="h-4 w-4" />
                                        <span>+93 700985918</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-muted-foreground">
                                        <MapPin className="h-4 w-4" />
                                        <span>Kabul, Afghanistan</span>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <Link href="https://www.linkedin.com/in/mohammad-mahdi-alizada-3a57b2274" target="_blank">
                                        <Button variant="ghost" size="icon" className="hover:text-blue-500">
                                            <Linkedin className="h-5 w-5" />
                                        </Button>
                                    </Link>
                                    <Link href="https://github.com/mahdializada" target="_blank">
                                        <Button variant="ghost" size="icon" className="hover:text-gray-900 dark:hover:text-white">
                                            <Github className="h-5 w-5" />
                                        </Button>
                                    </Link>
                                    <Link href="https://www.facebook.com/mahdi.alizada.71" target="_blank">
                                        <Button variant="ghost" size="icon" className="hover:text-blue-500">
                                            <Facebook className="h-5 w-5" />
                                        </Button>
                                    </Link>
                                    <Link href="mailto:mahdializada761@gmail.com">
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
                                        <h3 className="text-4xl font-bold mb-2">5+</h3>
                                        <p className="text-muted-foreground">Years Experience</p>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                                    <div className="relative">
                                        <h3 className="text-4xl font-bold mb-2">20+</h3>
                                        <p className="text-muted-foreground">Projects Completed</p>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                                    <div className="relative">
                                        <h3 className="text-4xl font-bold mb-2">10+</h3>
                                        <p className="text-muted-foreground">Technologies</p>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                                    <div className="relative">
                                        <h3 className="text-4xl font-bold mb-2">3</h3>
                                        <p className="text-muted-foreground">Languages</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Work Experience Section */}
                        <section className="container">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                                <Building className="mr-4 h-8 w-8 text-primary" />
                                Professional Journey
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
                                                        "{job.description}"
                                                    </p>

                                                    <ul className="list-none space-y-3 text-muted-foreground mb-6">
                                                        {job.highlights.map((highlight, i) => (
                                                            <li key={i} className="flex items-start group/item hover:text-primary transition-colors">
                                                                <span className="mr-3 mt-1.5">
                                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary group-hover/item:scale-125 transition-transform" />
                                                                </span>
                                                                {highlight}
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

                        {/* Education Section */}
                        <section className="container">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                                <GraduationCap className="mr-4 h-8 w-8 text-primary" />
                                Education
                            </h2>
                            <div className="grid gap-8 md:grid-cols-2">
                                {education.map((edu) => (
                                    <div
                                        key={edu.institution}
                                        className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
                                    >
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 via-primary/3 to-transparent rounded-bl-full" />

                                        <div className="relative">
                                            <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                                            <p className="text-primary mb-2">{edu.institution}</p>
                                            <div className="flex items-center text-muted-foreground mb-4">
                                                <Calendar className="h-4 w-4 mr-2" />
                                                <span>{edu.period}</span>
                                                <span className="mx-2">•</span>
                                                <span>{edu.location}</span>
                                            </div>
                                            {edu.website && (
                                                <Link href={edu.website} target="_blank" className="inline-flex items-center mt-4 text-primary hover:underline">
                                                    <ExternalLink className="h-4 w-4 mr-2" />
                                                    Visit Website
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Projects Section */}
                        <section className="container">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                                <Rocket className="mr-4 h-8 w-8 text-primary" />
                                Featured Projects
                            </h2>
                            <div className="grid gap-8 md:grid-cols-2">
                                {projects.map((project) => (
                                    <div
                                        key={project.name}
                                        className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
                                    >
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 via-primary/3 to-transparent rounded-bl-full" />

                                        <div className="relative">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-xl font-semibold">{project.name}</h3>
                                                {project.link && (
                                                    <Link href={project.link} target="_blank">
                                                        <Button variant="ghost" size="icon">
                                                            <ExternalLink className="h-5 w-5" />
                                                        </Button>
                                                    </Link>
                                                )}
                                            </div>

                                            <p className="text-muted-foreground mb-4">{project.description}</p>

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

                        {/* Skills Section */}
                        <section className="container">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                                <Code className="mr-4 h-8 w-8 text-primary" />
                                Technical Expertise
                            </h2>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {Object.entries(skills).map(([key, category]) => (
                                    <div
                                        key={key}
                                        className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
                                    >
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 via-primary/3 to-transparent rounded-bl-full" />

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
                                                        className="relative overflow-hidden rounded-lg p-3 bg-primary/5 group-hover:shadow-lg opacity-90 hover:opacity-100 transition-all transform hover:scale-105 hover:rotate-1"
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

                        {/* Languages Section */}
                        <section className="container">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                                <BookOpen className="mr-4 h-8 w-8 text-primary" />
                                Languages
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

                        {/* CTA Section */}
                        <CTASection />
                    </div>
                </div>
            </div>
        </div>
    )
} 