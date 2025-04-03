import Link from "next/link"
import Image from 'next/image'
import { Metadata } from "next"
import { Mail, Github, Linkedin, Code, BookOpen, Award, Building, Calendar, Phone, MapPin, GraduationCap, Rocket, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import CTASection from '@/components/cta-section'

export const metadata: Metadata = {
    title: "Hakima Merzayee | Frontend Lead | Tara Solutions",
    description: "Learn more about Hakima Merzayee, Frontend Lead at Tara Solutions. Full-stack software engineer with expertise in modern web technologies.",
    keywords: [
        "Hakima Merzayee",
        "Frontend Lead",
        "Tara Solutions",
        "Full Stack Engineer",
        "React.js",
        "Next.js",
        "Software Development"
    ],
    openGraph: {
        title: "Hakima Merzayee | Frontend Lead | Tara Solutions",
        description: "Learn more about Hakima Merzayee, Frontend Lead at Tara Solutions. Full-stack software engineer with expertise in modern web technologies.",
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
        description: "Learn more about Hakima Merzayee, Frontend Lead at Tara Solutions. Full-stack software engineer with expertise in modern web technologies.",
        images: ["/team/hakima-avatar.png"],
    },
    alternates: {
        canonical: "https://tarasolutions.cloud/about/team/hakima",
    },
}

const workExperience = [
    {
        company: "Tara Solutions Inc.",
        role: "Frontend Lead",
        period: "May 2024 - Present",
        location: "Remote",
        highlight: "Leading frontend development initiatives",
        description: [
            "Developing and maintaining web applications with modern technologies",
            "Collaborating with UI/UX designers & backend teams for seamless integration",
            "Implementing state management & performance optimization strategies",
            "Writing clean, scalable, and testable code",
            "Leading frontend architecture decisions"
        ],
        technologies: ["React.js", "Next.js", "TypeScript", "State Management", "Testing"]
    },
    {
        company: "Listoli LLC, USA",
        role: "Full-Stack Engineer",
        period: "February 2023 - April 2024",
        location: "Remote",
        highlight: "End-to-end application development",
        description: [
            "Developed and maintained responsive user interfaces",
            "Built APIs for seamless front-end and back-end communication",
            "Implemented secure user authentication and authorization",
            "Conducted unit and smoke tests to ensure code reliability",
            "Debugged and resolved issues for optimal application performance"
        ],
        technologies: ["React.js", "Node.js", "API Development", "Testing", "Authentication"]
    },
    {
        company: "Smart Fariqi",
        role: "Full-Stack Developer",
        period: "April 2022 - April 2023",
        location: "Kabul",
        highlight: "Full-stack system development",
        description: [
            "Designed and developed reusable front-end components",
            "Developed RESTful APIs for seamless system integration",
            "Implemented real-time functionality in web applications",
            "Designed and analyzed databases",
            "Conducted testing and quality control"
        ],
        technologies: ["React.js", "API Development", "Real-time Systems", "Database Design"]
    },
    {
        company: "ByteKent Technology Company",
        role: "Technical Manager",
        period: "January 2020 - January 2021",
        location: "Kabul",
        highlight: "Technical leadership and project management",
        description: [
            "Led project planning sessions and managed overall progress",
            "Adapted workflows and coordinated tasks to meet project needs",
            "Designed and developed software projects",
            "Ensured timely project delivery",
            "Managed technical team and resources"
        ],
        technologies: ["Project Management", "Software Design", "Team Leadership"]
    },
    {
        company: "BasSoft IT Services",
        role: "Web Developer",
        period: "April 2018 - December 2019",
        location: "Kabul",
        highlight: "Full-stack web development",
        description: [
            "Designed and developed projects (Desktop applications, websites)",
            "Analyzed, designed, and developed databases",
            "Performed software testing and quality control",
            "Collaborated with cross-functional teams",
            "Implemented responsive web designs"
        ],
        technologies: ["Web Development", "Database Design", "Desktop Applications"]
    }
]

const skills = {
    frontend: {
        icon: "🎨",
        title: "Frontend Development",
        description: "Building responsive and intuitive interfaces",
        skills: ["React.js", "Next.js", "Vue.js", "JavaScript", "TypeScript"],
        color: "from-blue-500 to-cyan-500"
    },
    backend: {
        icon: "⚙️",
        title: "Backend Development",
        description: "Creating robust server-side solutions",
        skills: ["PHP", "Laravel", "Node.js", "RESTful APIs", "SQL"],
        color: "from-green-500 to-emerald-500"
    },
    testing: {
        icon: "🎯",
        title: "Testing & Quality",
        description: "Ensuring code reliability and performance",
        skills: ["Unit Testing", "Integration Testing", "E2E Testing", "Test Automation"],
        color: "from-purple-500 to-pink-500"
    },
    tools: {
        icon: "🛠️",
        title: "Tools & Technologies",
        description: "Essential development tools",
        skills: ["Git", "MySQL", "PostgreSQL", "Bootstrap", "CSS"],
        color: "from-orange-500 to-red-500"
    }
}

const projects = [
    {
        name: "Skin Disease Detection",
        description: "AI-powered system for detecting skin diseases",
        highlights: [
            "Built using Deep Learning to detect 5 specific diseases",
            "Implemented image processing algorithms",
            "Created user-friendly interface for medical professionals",
            "Integrated with medical databases"
        ],
        technologies: ["Deep Learning", "Python", "Image Processing", "UI/UX"]
    },
    {
        name: "Enterprise Management Suite",
        description: "Comprehensive business management solution",
        highlights: [
            "Real-time User Management System",
            "File Management System",
            "Product Management System",
            "Task Management System",
            "Real-time Chat Application",
            "Advertisement Management System"
        ],
        technologies: ["React.js", "Node.js", "Real-time", "Database Design"]
    }
]

const education = [
    {
        school: "Kabul Polytechnic University",
        degree: "Bachelor's in Computer Science",
        period: "March 2016 - August 2019",
        location: "Kabul",
        description: "Comprehensive study of computer science fundamentals and software engineering principles."
    }
]

const languages = [
    { name: "Dari", level: "Native", icon: "🌟" },
    { name: "English", level: "B2 (Upper Intermediate)", icon: "🌍", score: "Duolingo Score: 105" },
    { name: "German", level: "A1 (Beginner)", icon: "🇩🇪" }
]

const awards = [
    {
        title: "Duolingo English Proficiency",
        description: "Score: 105",
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
                                    Full-stack software engineer with expertise in modern web technologies,
                                    passionate about building scalable and maintainable applications.
                                    Currently based in Tehran, Iran.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <div className="flex items-center space-x-2 text-muted-foreground">
                                        <Mail className="h-4 w-4" />
                                        <span>hakima.merzayee3@gmail.com</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-muted-foreground">
                                        <Phone className="h-4 w-4" />
                                        <span>+98 9912906146</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-muted-foreground">
                                        <MapPin className="h-4 w-4" />
                                        <span>Tehran, Iran (Qarchak)</span>
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
                                        <h3 className="text-4xl font-bold mb-2">6+</h3>
                                        <p className="text-muted-foreground">Years Experience</p>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                                    <div className="relative">
                                        <h3 className="text-4xl font-bold mb-2">15+</h3>
                                        <p className="text-muted-foreground">Projects Completed</p>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                                    <div className="relative">
                                        <h3 className="text-4xl font-bold mb-2">5+</h3>
                                        <p className="text-muted-foreground">Companies Served</p>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                                    <div className="relative">
                                        <h3 className="text-4xl font-bold mb-2">10+</h3>
                                        <p className="text-muted-foreground">Technologies</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Skills Section */}
                        <section className="container">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                                <Code className="mr-4 h-8 w-8 text-primary" />
                                Technical Expertise
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
                                Education
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
                                        {lang.score && (
                                            <p className="text-sm text-muted-foreground">{lang.score}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Awards Section */}
                        <section className="container">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                                <Award className="mr-4 h-8 w-8 text-primary" />
                                Awards & Achievements
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