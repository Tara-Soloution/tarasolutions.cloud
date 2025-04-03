import Link from "next/link"
import Image from 'next/image'
import { Metadata } from "next"
import { Mail, Github, Linkedin, Twitter, Code, BookOpen, Award, Building, Calendar, ExternalLink, Check, Rocket, GraduationCap, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import CTASection from '@/components/cta-section'

export const metadata: Metadata = {
    title: "Ghulam Abbas Ataie | CTO & Co-Founder | Tara Solutions",
    description: "Learn more about Abbas Ataie, CTO & Co-Founder at Tara Solutions. Results-driven Software Engineer with expertise in cloud computing and digital transformation.",
    keywords: [
        "Ghulam Abbas Ataie",
        "Abbas Ataie",
        "CTO",
        "Co-Founder",
        "Tara Solutions",
        "cloud computing",
        "digital transformation",
        "tech leadership",
        "software engineering"
    ],
    openGraph: {
        title: "Ghulam Abbas Ataie | CTO & Co-Founder | Tara Solutions",
        description: "Learn more about Abbas Ataie, CTO & Co-Founder at Tara Solutions. Results-driven Software Engineer with expertise in cloud computing and digital transformation.",
        images: [
            {
                url: "/team/abbas-avatar.png",
                width: 1200,
                height: 630,
                alt: "Ghulam Abbas Ataie",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ghulam Abbas Ataie | CTO & Co-Founder | Tara Solutions",
        description: "Learn more about Abbas Ataie, CTO & Co-Founder at Tara Solutions. Results-driven Software Engineer with expertise in cloud computing and digital transformation.",
        images: ["/team/abbas-avatar.png"],
    },
    alternates: {
        canonical: "https://tarasolutions.cloud/about/team/abbas",
    },
}

const workExperience = [
    {
        company: "Tara Solutions Inc.",
        role: "CTO & Co-Founder",
        period: "January 2024 - Present",
        location: "Remote",
        highlight: "Architecting the future of cloud solutions",
        description: [
            "Developing cutting-edge web and mobile applications using Node.js, React.js, Nomad, TypeScript, React Native, Kafka, Next.js, and RabbitMQ",
            "Partnership & Collaboration with Cloud Station LLC FZ (Dubai) to enhance cross-platform functionalities and integrate enterprise cloud solutions",
            "Leading the technical team, ensuring code quality, scalability, and best practices",
            "Managing and assigning tasks to developers to ensure efficient execution",
            "Supporting the architecture and strategic planning of microservices and cloud infrastructures"
        ],
        technologies: ["Node.js", "React.js", "TypeScript", "Kafka", "RabbitMQ", "Microservices"]
    },
    {
        company: "Listoli LLC, USA",
        role: "Full-Stack Independent Contractor",
        period: "October 2022 - December 2023",
        location: "Remote",
        highlight: "Enterprise-grade solutions architect",
        description: [
            "Designed and optimized high-performance PostgreSQL databases for authentication, e-commerce, and content management systems",
            "Developed RESTful APIs and microservices using NestJS, React, and Next.js",
            "Automated CI/CD pipelines with GitHub Actions and Google Cloud Platform (GCP)",
            "Improved development efficiency and reduced deployment times",
            "Ensured scalability and data integrity across all systems"
        ],
        technologies: ["NestJS", "React", "Next.js", "PostgreSQL", "GCP", "GitHub Actions"]
    },
    {
        company: "Click.af",
        role: "Full-Stack Developer",
        period: "June 2021 - September 2022",
        location: "Kabul",
        highlight: "Leading e-commerce innovator",
        description: [
            "Developed and managed web and mobile applications using React.js, Node.js, Next.js, React Native, CS-Cart, and Java",
            "Built and integrated Vendor API for efficient order, payment, and return management",
            "Implemented mobile and web applications for vendor management",
            "Enhanced platform functionality and user experience",
            "Contributed to Afghanistan's premier e-commerce platform"
        ],
        technologies: ["React.js", "Node.js", "Next.js", "React Native", "Java", "CS-Cart"]
    },
    {
        company: "BlueBit Networking Services",
        role: "Full-Stack Developer",
        period: "February 2021 - July 2021",
        location: "Kabul",
        highlight: "Solo developer for critical systems",
        description: [
            "Led development of high-traffic web applications using Python, Django, React Native, MySQL, and React.js",
            "Developed Petition Management System for the Ministry of Defense of Afghanistan",
            "Streamlined petition processing and improved workflow efficiency",
            "Managed complete development lifecycle independently",
            "Implemented robust security measures for sensitive data"
        ],
        technologies: ["Python", "Django", "React Native", "MySQL", "React.js"]
    },
    {
        company: "IAP",
        role: "Junior Web Developer",
        period: "February 2020 - April 2020",
        location: "Kabul",
        highlight: "Foundation in enterprise development",
        description: [
            "Developed MOEC Socio-Economic Provincial Profiles Digitalization System",
            "Collaborated with Tetra Tech for implementation and data accuracy",
            "Built dynamic web applications using PHP Laravel, MySQL, Vue.js",
            "Provided support and maintenance for existing platforms",
            "Gained extensive experience in software development practices"
        ],
        technologies: ["PHP Laravel", "MySQL", "Vue.js", "JavaScript", "HTML/CSS"]
    }
]

const education = [
    {
        school: "University of Europe for Applied Sciences",
        degree: "Master's in Data Science",
        period: "March 2025 - Present",
        location: "Germany",
        link: "https://ue-germany.de",
        description: "Pursuing advanced studies in Data Science to enhance expertise in AI and machine learning."
    },
    {
        school: "Kabul Polytechnic University",
        degree: "Bachelor's in Computer Science",
        period: "March 2016 - August 2019",
        location: "Kabul",
        highlight: "Graduated with Second Position",
        description: "Achieved second position in the graduating class, demonstrating strong academic performance and technical expertise."
    }
]

const projects = [
    {
        name: "Cloud Station",
        url: "https://www.cloud-station.io",
        description: "Enterprise-grade cloud services platform with global reach",
        highlights: [
            "Architected and developed scalable cloud platform",
            "Implemented microservices architecture",
            "Integrated advanced security measures",
            "Optimized performance for global user base"
        ],
        technologies: ["React.js", "Next.js", "Node.js", "Kafka", "Nats"]
    },
    {
        name: "Tara Solutions Website",
        url: "https://www.tarasolutions.cloud",
        description: "Official website showcasing our services and expertise",
        highlights: [
            "Modern, responsive design",
            "Optimized performance metrics",
            "Enhanced user experience",
            "Secure contact and inquiry system"
        ],
        technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"]
    },
    {
        name: "Ahsen Elite",
        url: "https://ahsenelite.com",
        description: "Full-featured e-commerce platform",
        highlights: [
            "Secure payment processing",
            "Order management system",
            "Mobile-first design",
            "Real-time inventory tracking"
        ],
        technologies: ["React.js", "React Native", "Next.js", "Node.js"]
    },
    {
        name: "Plant Disease Detection Machine",
        description: "AI-powered system for agricultural disease detection",
        highlights: [
            "Deep Learning image classification",
            "Raspberry Pi integration",
            "Real-time disease diagnosis",
            "Instant remedy suggestions"
        ],
        technologies: ["Python", "Deep Learning", "Raspberry Pi", "Computer Vision"]
    }
]

const skills = {
    frontend: {
        icon: "🎨",
        title: "Frontend Development",
        description: "Creating responsive and intuitive user interfaces",
        skills: ["React.js", "Next.js", "TypeScript", "React Native"],
        color: "from-blue-500 to-cyan-500"
    },
    backend: {
        icon: "⚙️",
        title: "Backend Architecture",
        description: "Building scalable and robust server solutions",
        skills: ["Node.js", "NestJS", "Express.js", "Microservices"],
        color: "from-green-500 to-emerald-500"
    },
    database: {
        icon: "🗄️",
        title: "Database & Storage",
        description: "Managing and optimizing data systems",
        skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
        color: "from-amber-500 to-orange-500"
    },
    cloud: {
        icon: "☁️",
        title: "Cloud & DevOps",
        description: "Orchestrating cloud infrastructure",
        skills: ["Docker", "Nomad", "GitOps", "CI/CD"],
        color: "from-purple-500 to-pink-500"
    },
    messaging: {
        icon: "📡",
        title: "Message Queuing",
        description: "Implementing distributed systems",
        skills: ["Kafka", "RabbitMQ", "Nats", "Message Brokers"],
        color: "from-indigo-500 to-violet-500"
    }
}

const languages = [
    { name: "Dari", level: "Native", icon: "🌟" },
    { name: "English", level: "C1", icon: "🌍", score: "Duolingo Score: 120/160" },
    { name: "German", level: "A2", icon: "🇩🇪" }
]

const awards = [
    {
        title: "Asia Kabul Regional ACM/ICPC Contest 2018",
        description: "Ranked 3rd out of 40 teams",
        icon: "🏆"
    },
    {
        title: "Duolingo English Test",
        description: "Score: 120 out of 160",
        icon: "🎯"
    },
    {
        title: "Academic Excellence",
        description: "Graduated 2nd in class at Kabul Polytechnic University",
        icon: "🎓"
    }
]

export default function AbbasProfile() {
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
                                        src="/team/abbas-avatar.png"
                                        alt="Ghulam Abbas Ataie"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
                                    Ghulam Abbas Ataie
                                </h1>
                                <p className="text-xl text-primary mb-6">CTO & Co-Founder</p>
                                <p className="max-w-2xl text-lg text-muted-foreground mb-8">
                                    Results-driven Software Engineer with 5+ years of expertise in modern web technologies.
                                    Specializing in scalable cloud solutions and microservices architecture.
                                    Currently based in Tehran, Iran.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <div className="flex items-center space-x-2 text-muted-foreground">
                                        <Mail className="h-4 w-4" />
                                        <span>abbas.ataie.montazer@gmail.com</span>
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
                                    <Link href="https://www.linkedin.com/in/abbas-ataie-72a4431b9/" target="_blank">
                                        <Button variant="ghost" size="icon" className="hover:text-blue-500">
                                            <Linkedin className="h-5 w-5" />
                                        </Button>
                                    </Link>
                                    <Link href="https://github.com/abbasatayee" target="_blank">
                                        <Button variant="ghost" size="icon" className="hover:text-gray-900 dark:hover:text-white">
                                            <Github className="h-5 w-5" />
                                        </Button>
                                    </Link>
                                    <Link href="https://twitter.com/abbasataie" target="_blank">
                                        <Button variant="ghost" size="icon" className="hover:text-sky-500">
                                            <Twitter className="h-5 w-5" />
                                        </Button>
                                    </Link>
                                    <Link href="mailto:abbas.ataie.montazer@gmail.com">
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
                                        <h3 className="text-4xl font-bold mb-2">3</h3>
                                        <p className="text-muted-foreground">Countries Worked</p>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                                    <div className="relative">
                                        <h3 className="text-4xl font-bold mb-2">15+</h3>
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
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-xl font-semibold">{project.name}</h3>
                                                {project.url && (
                                                    <Link href={project.url} target="_blank">
                                                        <Button variant="ghost" size="icon">
                                                            <ExternalLink className="h-5 w-5" />
                                                        </Button>
                                                    </Link>
                                                )}
                                            </div>

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
                            <div className="grid gap-8 md:grid-cols-2">
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
                                            {edu.highlight && (
                                                <p className="text-lg font-medium text-primary/80 mb-4 italic border-l-4 border-primary/20 pl-4">
                                                    {edu.highlight}
                                                </p>
                                            )}
                                            <p className="text-muted-foreground">{edu.description}</p>
                                            {edu.link && (
                                                <Link href={edu.link} target="_blank" className="inline-flex items-center mt-4 text-primary hover:underline">
                                                    <ExternalLink className="h-4 w-4 mr-2" />
                                                    Visit Website
                                                </Link>
                                            )}
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