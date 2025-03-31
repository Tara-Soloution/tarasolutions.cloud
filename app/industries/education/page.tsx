import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, GraduationCap, LineChart, Monitor, Users } from "lucide-react"
import Link from "next/link"
import BackButton from "@/components/back-button"
import CTASection from "@/components/cta-section"

const features = [
    {
        title: "Learning Management System",
        description: "Comprehensive platform for course delivery, student engagement, and educational content management.",
        icon: Monitor,
    },
    {
        title: "Student Information System",
        description: "Integrated system for managing student records, attendance, grades, and academic progress.",
        icon: Users,
    },
    {
        title: "Virtual Classrooms",
        description: "Interactive online learning environment with real-time collaboration and engagement tools.",
        icon: GraduationCap,
    },
    {
        title: "Assessment Tools",
        description: "Advanced assessment and analytics platform for tracking student performance and learning outcomes.",
        icon: LineChart,
    },
]

const benefits = [
    "Enhanced student engagement",
    "Improved learning outcomes",
    "Streamlined administrative tasks",
    "Better resource management",
    "Personalized learning experiences",
    "Real-time progress tracking",
]

export default function EducationPage() {
    return (
        <div className="relative min-h-screen">
            {/* Background gradients */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10">
                {/* Back Button */}
                <div className="container py-6">
                    <BackButton href="/industries" />
                </div>

                {/* Hero Section */}
                <section className="container py-24 text-center">
                    <div className="mx-auto mb-8 inline-flex rounded-lg bg-purple-500/10 p-3">
                        <GraduationCap className="h-8 w-8 text-purple-500" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        Education Solutions
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        Transforming education with innovative learning platforms and educational technology solutions.
                    </p>
                </section>

                {/* Features Section */}
                <section className="container py-12">
                    <h2 className="mb-12 text-center text-3xl font-bold">Our Solutions</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-accent"
                            >
                                <div className="mb-4 inline-flex rounded-lg bg-purple-500/10 p-3">
                                    <feature.icon className="h-6 w-6 text-purple-500" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="container py-12">
                    <h2 className="mb-12 text-center text-3xl font-bold">Key Benefits</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-purple-500" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <CTASection />
            </div>
        </div>
    )
} 