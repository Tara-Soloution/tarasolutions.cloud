import Link from "next/link"
import Image from 'next/image'
import { Metadata } from "next"
import { Mail, Github, Linkedin, Twitter, Code, BookOpen, Award, Building, Calendar, ExternalLink, Check, Rocket, GraduationCap, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import CTASection from '@/components/cta-section'

export const metadata: Metadata = {
    title: "Mohammad Mahdi Alizada | Backend Lead | Tara Solutions",
    description: "Meet Mohammad Mahdi Alizada, Backend Lead at Tara Solutions. Experienced Full Stack Developer with expertise in web development and cloud solutions.",
    keywords: [
        "Mohammad Mahdi Alizada",
        "Backend Lead",
        "Tara Solutions",
        "Full Stack Developer",
        "Web Development",
        "Cloud Solutions"
    ],
    openGraph: {
        title: "Mohammad Mahdi Alizada | Backend Lead | Tara Solutions",
        description: "Meet Mohammad Mahdi Alizada, Backend Lead at Tara Solutions. Experienced Full Stack Developer with expertise in web development and cloud solutions.",
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
        description: "Meet Mohammad Mahdi Alizada, Backend Lead at Tara Solutions. Experienced Full Stack Developer with expertise in web development and cloud solutions.",
        images: ["/team/mahdi-avatar.jpg"],
    },
    alternates: {
        canonical: "https://tarasolutions.cloud/about/team/mahdi",
    },
}

const workExperience = [
    {
        company: "Tara Solutions",
        role: "Backend Lead",
        period: "January 2024 - Present",
        location: "Kabul, Afghanistan",
        highlight: "Leading backend development and architecture",
        description: [
            "Designing and creating reusable Frontend components",
            "Developing Rest Full APIs",
            "Adding Real-time functionality to web applications",
            "Database Design and Analysis"
        ],
        technologies: ["Laravel", "React", "Node.js", "PostgreSQL", "MongoDB"]
    },
    {
        company: "Tooti Sabz",
        role: "Backend Developer",
        period: "July 2024 - Present",
        location: "Kabul, Afghanistan",
        highlight: "Database and API development specialist",
        description: [
            "Database Analysis and Design for tooti application",
            "Develop API & Backend Logic",
            "Database Interaction and query optimization",
            "Writing unit, integration, and feature tests"
        ],
        technologies: ["Laravel", "React", "MySQL", "Redis"]
    },
    {
        company: "Smart Friqi",
        role: "Web Developer",
        period: "February 2022 - February 2024",
        location: "Kabul, Afghanistan",
        highlight: "Full stack development expert",
        description: [
            "Designing and creating reusable Frontend components",
            "Developing Rest Full APIs",
            "Adding Real-time functionality to web applications",
            "Database Design and Analysis"
        ],
        technologies: ["Laravel", "Nuxt.js", "Vue.js", "MySQL"]
    },
    {
        company: "Techland Organization",
        role: "Web Developer and Web Designer",
        period: "January 2020 - August 2021",
        location: "Kabul, Afghanistan",
        highlight: "Full stack development and design",
        description: [
            "Designing and creating reusable Frontend components",
            "Developing Rest Full APIs",
            "Adding Real-time functionality to web applications"
        ],
        technologies: ["Laravel", "Vue.js", "MySQL", "HTML/CSS"]
    }
]

const education = [
    {
        school: "Kabul Polytechnic University",
        degree: "Bachelor's in Computer Science",
        period: "2018 - 2023",
        location: "Kabul, Afghanistan",
        link: "https://kpu.edu.af/en",
        description: "Developed strong foundation in software development and engineering principles."
    },
    {
        school: "AbdulRahim-e-shaheed high school",
        degree: "Secondary Education",
        period: "2005 - 2017",
        location: "Kabul, Afghanistan",
        description: "Completed secondary education with focus on science and mathematics."
    }
]

const projects = [
    {
        name: "Tooti Social Application Platform",
        url: "https://inkd.in/ebiSG5Si",
        description: "Social application platform built with Laravel",
        highlights: [
            "Database Analysis and Design",
            "API Development",
            "Backend Logic Implementation",
            "Testing and Optimization"
        ],
        technologies: ["Laravel", "MySQL", "Redis"]
    },
    {
        name: "Tooti Dashboard Admin Panel",
        description: "MIS and Chat support management system",
        highlights: [
            "Admin Panel Development",
            "Real-time Chat Support",
            "Management Information System",
            "User Management"
        ],
        technologies: ["Laravel", "React", "MySQL"]
    },
    {
        name: "Shahr-e-Kodak Management System",
        description: "Supermarket management system",
        highlights: [
            "Inventory Management",
            "Sales Tracking",
            "Customer Management",
            "Reporting System"
        ],
        technologies: ["Laravel", "MySQL", "Vue.js"]
    },
    {
        name: "DAWEO MIS System",
        description: "Management Information System for Women Empowerment Organization",
        highlights: [
            "Data Management",
            "Reporting System",
            "User Management",
            "Document Management"
        ],
        technologies: ["Laravel", "React", "MySQL"]
    }
]

const skills = {
    frontend: {
        icon: "🎨",
        title: "Frontend Development",
        description: "Creating responsive and intuitive user interfaces",
        skills: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Next.js", "Vue.js", "React.js", "Nuxt.js"],
        color: "from-blue-500 to-cyan-500"
    },
    backend: {
        icon: "⚙️",
        title: "Backend Development",
        description: "Building robust server solutions",
        skills: ["PHP", "Laravel", "Node.js", "Python", "Filamentphp", "Elixir"],
        color: "from-green-500 to-emerald-500"
    },
    database: {
        icon: "🗄️",
        title: "Database & Storage",
        description: "Managing and optimizing data systems",
        skills: ["MySQL", "PostgreSQL", "Redis", "MongoDB"],
        color: "from-amber-500 to-orange-500"
    },
    devops: {
        icon: "🛠️",
        title: "DevOps & Tools",
        description: "Development and deployment tools",
        skills: ["Git", "Github", "Docker", "TALL Stack"],
        color: "from-purple-500 to-pink-500"
    }
}

const languages = [
    { name: "Persian", level: "Native", icon: "🌟" },
    { name: "English", level: "C1", icon: "🌍" }
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
                    {/* Hero Section */}
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <div className="relative h-48 w-48 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-primary/20">
                            <Image
                                src="/team/mahdi-avatar.jpg"
                                alt="Mohammad Mahdi Alizada"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight mb-4">Mohammad Mahdi Alizada</h1>
                        <p className="text-xl text-primary mb-4">Backend Lead</p>
                        <p className="text-lg text-muted-foreground mb-8">
                            Full Stack Developer with 4 years of experience in creating innovative and efficient web solutions.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <Button variant="outline" size="icon" asChild>
                                <Link href="https://www.linkedin.com/in/mohammad-mahdi-alizada-3a57b2274" target="_blank">
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href="https://github.com/mahdializada" target="_blank">
                                    <Github className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href="mailto:mahdializada761@gmail.com">
                                    <Mail className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
                        <div className="prose prose-lg dark:prose-invert">
                            <p>
                                I am a dedicated and skilled Full Stack Developer with 4 years of experience in creating innovative and efficient web solutions. I hold a degree from Kabul Polytechnic University, where I developed a strong foundation in software development and engineering principles.
                            </p>
                            <p>
                                My goal is to further my education by pursuing a master's degree, enabling me to deepen my technical expertise and continue exploring my passion for innovation. I thrive in environments that challenge me to solve complex problems and contribute to impactful projects.
                            </p>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold tracking-tight mb-8">Skills & Expertise</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {Object.values(skills).map((skill) => (
                                <div
                                    key={skill.title}
                                    className="relative overflow-hidden rounded-2xl border bg-card p-6"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                                    <div className="relative">
                                        <div className="text-4xl mb-4">{skill.icon}</div>
                                        <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                                        <p className="text-muted-foreground mb-4">{skill.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.skills.map((item) => (
                                                <span
                                                    key={item}
                                                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold tracking-tight mb-8">Work Experience</h2>
                        <div className="space-y-8">
                            {workExperience.map((job) => (
                                <div
                                    key={`${job.company}-${job.period}`}
                                    className="relative overflow-hidden rounded-2xl border bg-card p-6"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                                    <div className="relative">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-semibold">{job.role}</h3>
                                                <p className="text-primary">{job.company}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-muted-foreground">{job.period}</p>
                                                <p className="text-sm text-muted-foreground">{job.location}</p>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground mb-4">{job.highlight}</p>
                                        <ul className="space-y-2">
                                            {job.description.map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {job.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold tracking-tight mb-8">Education</h2>
                        <div className="space-y-8">
                            {education.map((edu) => (
                                <div
                                    key={`${edu.school}-${edu.period}`}
                                    className="relative overflow-hidden rounded-2xl border bg-card p-6"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                                    <div className="relative">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                                <p className="text-primary">{edu.school}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-muted-foreground">{edu.period}</p>
                                                <p className="text-sm text-muted-foreground">{edu.location}</p>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground">{edu.description}</p>
                                        {edu.link && (
                                            <Button variant="link" className="mt-4" asChild>
                                                <Link href={edu.link} target="_blank">
                                                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold tracking-tight mb-8">Projects</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {projects.map((project) => (
                                <div
                                    key={project.name}
                                    className="relative overflow-hidden rounded-2xl border bg-card p-6"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                                    <div className="relative">
                                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                        <p className="text-muted-foreground mb-4">{project.description}</p>
                                        <ul className="space-y-2 mb-4">
                                            {project.highlights.map((highlight, index) => (
                                                <li key={index} className="flex items-start">
                                                    <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        {project.url && (
                                            <Button variant="link" className="mt-4" asChild>
                                                <Link href={project.url} target="_blank">
                                                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Languages Section */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold tracking-tight mb-8">Languages</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {languages.map((lang) => (
                                <div
                                    key={lang.name}
                                    className="relative overflow-hidden rounded-2xl border bg-card p-6"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                                    <div className="relative">
                                        <div className="flex items-center mb-2">
                                            <span className="text-2xl mr-2">{lang.icon}</span>
                                            <h3 className="text-xl font-semibold">{lang.name}</h3>
                                        </div>
                                        <p className="text-muted-foreground">Level: {lang.level}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight mb-8">Contact</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="relative overflow-hidden rounded-2xl border bg-card p-6">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                                <div className="relative">
                                    <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <Mail className="h-5 w-5 text-primary mr-2" />
                                            <a href="mailto:mahdializada761@gmail.com" className="hover:underline">
                                                mahdializada761@gmail.com
                                            </a>
                                        </div>
                                        <div className="flex items-center">
                                            <Phone className="h-5 w-5 text-primary mr-2" />
                                            <a href="tel:+93700985918" className="hover:underline">
                                                (+93) 700985918
                                            </a>
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="h-5 w-5 text-primary mr-2" />
                                            <span>1001, Kabul, Afghanistan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-2xl border bg-card p-6">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                                <div className="relative">
                                    <h3 className="text-xl font-semibold mb-4">Connect</h3>
                                    <div className="space-y-4">
                                        <Button variant="outline" className="w-full" asChild>
                                            <Link href="https://www.linkedin.com/in/mohammad-mahdi-alizada-3a57b2274" target="_blank">
                                                <Linkedin className="h-5 w-5 mr-2" />
                                                LinkedIn
                                            </Link>
                                        </Button>
                                        <Button variant="outline" className="w-full" asChild>
                                            <Link href="https://github.com/mahdializada" target="_blank">
                                                <Github className="h-5 w-5 mr-2" />
                                                GitHub
                                            </Link>
                                        </Button>
                                        <Button variant="outline" className="w-full" asChild>
                                            <Link href="https://www.facebook.com/mahdi.alizada.71" target="_blank">
                                                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                                Facebook
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 