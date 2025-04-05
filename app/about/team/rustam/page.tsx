import { Metadata } from "next"
import { Mail, Linkedin, Github, Twitter, Award, Code, Brain, Globe, BookOpen, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Timeline, TimelineItem } from "@/components/ui/timeline"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export const metadata: Metadata = {
    title: "Rustam Ali Hussaini | CEO | Tara Solutions",
    description: "Visionary leader and technical expert with extensive experience in cloud architecture, business strategy, and full-stack development. CEO of Tara Solutions.",
    keywords: [
        "Rustam Ali Hussaini",
        "CEO",
        "Tara Solutions",
        "Cloud Architecture",
        "Business Strategy",
        "Full-Stack Development",
        "Technical Leadership",
        "Innovation"
    ],
    openGraph: {
        title: "Rustam Ali Hussaini | CEO | Tara Solutions",
        description: "Visionary leader and technical expert with extensive experience in cloud architecture, business strategy, and full-stack development. CEO of Tara Solutions.",
        images: [
            {
                url: "/team/rustam-avatar.png",
                width: 1200,
                height: 630,
                alt: "Rustam Ali Hussaini",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rustam Ali Hussaini | CEO | Tara Solutions",
        description: "Visionary leader and technical expert with extensive experience in cloud architecture, business strategy, and full-stack development. CEO of Tara Solutions.",
        images: ["/team/rustam-avatar.png"],
    },
    alternates: {
        canonical: "https://tarasolutions.cloud/about/team/rustam",
    },
}

const workExperience = [
    {
        role: "CEO",
        company: "Tara Solutions",
        period: "December 2023 - Present",
        location: "Kabul, Afghanistan",
        highlight: "Founding and leading Tara Solutions",
        description: "As the founding CEO of Tara Solutions, I lead the company in developing cutting-edge solutions and driving business growth. My focus is on strategic planning, team leadership, and ensuring the company's vision aligns with market needs.",
        technologies: ["Strategic Leadership", "Business Development", "Team Management", "Cloud Architecture"],
    },
    {
        role: "Full-Stack Developer",
        company: "Ramaki Group of Companies",
        period: "August 2024 - Present",
        location: "Kabul, Afghanistan",
        highlight: "Developing enterprise-scale ecommerce solutions",
        description: "Leading the development of Laravel and Filament packages for Ramaki's Large Enterprise Ecommerce platform, implementing comprehensive management systems for tenants, sellers, products, warehouses, and inventory.",
        technologies: ["Laravel", "Filament", "Livewire", "Alpine.js", "Tailwind CSS"],
    },
    {
        role: "Full-Stack Developer",
        company: "Smart Friqi",
        period: "October 2022 - October 2023",
        location: "Kabul, Afghanistan",
        highlight: "Enterprise Resource Planning Development",
        description: "Led the development of comprehensive ERP systems, implemented CI/CD pipelines, and managed team collaboration for efficient project delivery.",
        technologies: ["Nuxt.js", "Laravel", "Vuetify", "CI/CD", "GitHub"],
    },
    {
        role: "Database Designer",
        company: "TeebAlhoor",
        period: "September 2021 - September 2022",
        location: "Dubai, UAE (Remote)",
        highlight: "Enterprise Database Architecture",
        description: "Designed and implemented database solutions for various enterprise applications including ecommerce, payroll management, and task management systems.",
        technologies: ["Database Design", "System Architecture", "Enterprise Solutions"],
    },
    {
        role: "Developer & Instructor",
        company: "TechLand Organization",
        period: "February 2021 - August 2021",
        location: "Kabul, Afghanistan",
        highlight: "Technical Education & Development",
        description: "Developed web applications and taught programming languages while mentoring aspiring developers.",
        technologies: ["PHP", "Laravel", "JavaScript", "C++", "Teaching"],
    },
]

const skills = [
    {
        icon: Code,
        title: "Technical Expertise",
        description: "Full-stack development with focus on scalable solutions",
        skills: [
            "PHP", "Laravel", "Livewire", "Filament", "JavaScript",
            "ReactJS", "TypeScript", "MySQL", "Nuxt.JS", "Tailwind CSS",
            "Ant Design", "Chakra UI", "CI/CD", "GitHub", "RESTful API"
        ],
    },
    {
        icon: Brain,
        title: "Business Leadership",
        description: "Strategic planning and business development",
        skills: [
            "Strategic Planning", "Business Development", "Team Leadership",
            "Project Management", "Innovation Management", "Market Analysis"
        ],
    },
    {
        icon: Globe,
        title: "Cloud & Architecture",
        description: "Enterprise-scale system design and implementation",
        skills: [
            "Cloud Architecture", "System Design", "Enterprise Solutions",
            "Database Design", "API Development", "Security Implementation"
        ],
    },
]

const projects = [
    {
        title: "Ramaki Ecommerce",
        description: "Enterprise-scale ecommerce platform with multi-tenancy support, multi-language capabilities, and comprehensive management systems for products, warehouses, and inventory.",
        technologies: ["Laravel", "Filament", "Livewire", "Alpine.js", "Tailwind CSS"],
    },
    {
        title: "DAWEO MIS",
        description: "Management Information System for Danner Afghanistan for Women Empowerment Organization, supporting operations across multiple provinces with comprehensive management features.",
        technologies: ["React.js", "Laravel", "Chakra UI", "Tailwind CSS"],
    },
    {
        title: "Shahre-Kodak ERP",
        description: "Complete enterprise resource planning system for a chain store, including HR, stock, product, sales, and store management modules.",
        technologies: ["React.js", "Laravel", "Ant Design"],
    },
]

const education = [
    {
        degree: "Bachelor in Computer Science",
        institution: "Kabul Polytechnic University",
        period: "2017 - 2023",
        location: "Kabul, Afghanistan",
    },
    {
        degree: "TOEFL Certification",
        institution: "English Language Proficiency",
        period: "June 2019",
        location: "Kabul, Afghanistan",
    },
]

const languages = [
    { name: "Dari", level: "Native" },
    { name: "English", level: "Advanced" },
]

const awards = [
    {
        title: "Religious Peace Academy Award",
        organization: "HWPL Religious Peace Academy",
        year: "2024, 2023",
        description: "Promoter of Religious and Cultural Understanding, Fosterer of Interfaith dialogue",
    },
    {
        title: "United Nations General Assembly Delegate",
        organization: "Virtual PIMUN Conference",
        year: "2020",
        description: "1st Edition Delegate",
    },
    {
        title: "ECOSOC Delegate",
        organization: "Pamir International Model United Nations",
        year: "2019",
        description: "4th Edition Delegate",
    },
    {
        title: "Top Peace Builder",
        organization: "Canadian Embassy, Kabul",
        year: "2019",
        description: "Equality and Conflict-Resolution",
    },
    {
        title: "Emerging Entrepreneurs' Summit",
        organization: "Shaheed Professor Rabani Education University",
        year: "2019",
        description: "Ranked 5th out of 200 business ideas",
    },
]

export default function RustamProfile() {
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
                    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative h-48 w-48 mb-8">
                                    <Avatar className="h-full w-full">
                                        <AvatarImage src="/team/rustam-avatar.png" alt="Rustam Ali Hussaini" />
                                        <AvatarFallback>RAH</AvatarFallback>
                                    </Avatar>
                                </div>
                                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                                    Rustam Ali Hussaini
                                </h1>
                                <p className="text-2xl sm:text-3xl font-semibold text-primary mb-6">
                                    CEO | Tara Solutions
                                </p>
                                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-8">
                                    Visionary leader with extensive experience in cloud architecture and business strategy,
                                    driving innovation and growth at Tara Solutions.
                                </p>
                                <div className="flex space-x-4 mb-8">
                                    <Button variant="ghost" size="icon" asChild>
                                        <a href="https://www.linkedin.com/in/rustam-ali-hussaini" target="_blank" rel="noopener noreferrer">
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                    </Button>
                                    <Button variant="ghost" size="icon" asChild>
                                        <a href="https://github.com/RustamAliHussaini" target="_blank" rel="noopener noreferrer">
                                            <Github className="h-5 w-5" />
                                        </a>
                                    </Button>
                                    <Button variant="ghost" size="icon" asChild>
                                        <a href="https://twitter.com/rustamhussaini" target="_blank" rel="noopener noreferrer">
                                            <Twitter className="h-5 w-5" />
                                        </a>
                                    </Button>
                                    <Button variant="ghost" size="icon" asChild>
                                        <a href="mailto:rustam@tarasolutions.cloud">
                                            <Mail className="h-5 w-5" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <Card className="p-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-blue-500/10 rounded-lg">
                                    <Code className="h-6 w-6 text-blue-500" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">4+</p>
                                    <p className="text-muted-foreground">Years Experience</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-purple-500/10 rounded-lg">
                                    <Brain className="h-6 w-6 text-purple-500" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">15+</p>
                                    <p className="text-muted-foreground">Projects Completed</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-green-500/10 rounded-lg">
                                    <Award className="h-6 w-6 text-green-500" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">8+</p>
                                    <p className="text-muted-foreground">Awards & Honors</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Technical Expertise */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold tracking-tight mb-8">Technical Expertise</h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            {skills.map((skill, index) => (
                                <Card key={index} className="p-6">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="p-3 bg-primary/10 rounded-lg">
                                            <skill.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold">{skill.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground mb-4">{skill.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.skills.map((item, i) => (
                                            <Badge key={i} variant="secondary">{item}</Badge>
                                        ))}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Professional Journey */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold tracking-tight mb-8">Professional Journey</h2>
                        <Timeline>
                            {workExperience.map((exp, index) => (
                                <TimelineItem
                                    key={index}
                                    title={exp.role}
                                    subtitle={`${exp.company} | ${exp.period}`}
                                    description={exp.description}
                                    highlight={exp.highlight}
                                    technologies={exp.technologies}
                                />
                            ))}
                        </Timeline>
                    </section>

                    {/* Featured Projects */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Projects</h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            {projects.map((project, index) => (
                                <Card key={index} className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <Badge key={i} variant="secondary">{tech}</Badge>
                                        ))}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold tracking-tight mb-8">Education</h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            {education.map((edu, index) => (
                                <Card key={index} className="p-6">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="p-3 bg-primary/10 rounded-lg">
                                            <BookOpen className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                            <p className="text-muted-foreground">{edu.institution}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{edu.period} | {edu.location}</p>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Languages */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold tracking-tight mb-8">Languages</h2>
                        <div className="grid gap-4 md:grid-cols-2">
                            {languages.map((lang, index) => (
                                <Card key={index} className="p-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-medium">{lang.name}</span>
                                        <Badge variant="outline">{lang.level}</Badge>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Awards & Achievements */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold tracking-tight mb-8">Awards & Achievements</h2>
                        <div className="grid gap-8">
                            {awards.map((award, index) => (
                                <Card key={index} className="p-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-primary/10 rounded-lg">
                                            <Trophy className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">{award.title}</h3>
                                            <p className="text-muted-foreground">{award.organization} | {award.year}</p>
                                            <p className="mt-2">{award.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
} 