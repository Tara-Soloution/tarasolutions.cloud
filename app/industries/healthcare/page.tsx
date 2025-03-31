import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Hospital, LineChart, Shield, Users } from "lucide-react"
import Link from "next/link"
import BackButton from "@/components/back-button"

const features = [
    {
        title: "Electronic Health Records",
        description: "Secure and comprehensive patient data management system with advanced encryption and compliance features.",
        icon: Shield,
    },
    {
        title: "Telemedicine Platform",
        description: "Seamless virtual healthcare delivery system with high-quality video consultations and remote monitoring.",
        icon: Users,
    },
    {
        title: "Patient Management",
        description: "Streamlined patient care workflow with appointment scheduling, billing, and follow-up management.",
        icon: Hospital,
    },
    {
        title: "Healthcare Analytics",
        description: "Data-driven insights for improved patient outcomes and operational efficiency.",
        icon: LineChart,
    },
]

const benefits = [
    "Improved patient care and outcomes",
    "Enhanced operational efficiency",
    "Reduced administrative burden",
    "Better compliance with healthcare regulations",
    "Increased patient satisfaction",
    "Streamlined communication between healthcare providers",
]

export default function HealthcarePage() {
    return (
        <div className="relative min-h-screen">
            {/* Background gradients */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10">
                {/* Back Button */}
                <div className="container py-6">
                    <BackButton href="/industries" />
                </div>

                {/* Hero Section */}
                <section className="container py-24 text-center">
                    <div className="mx-auto mb-8 inline-flex rounded-lg bg-blue-500/10 p-3">
                        <Hospital className="h-8 w-8 text-blue-500" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        Healthcare Solutions
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        Revolutionizing healthcare delivery with cutting-edge software solutions designed for modern healthcare providers.
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
                                <div className="mb-4 inline-flex rounded-lg bg-blue-500/10 p-3">
                                    <feature.icon className="h-6 w-6 text-blue-500" />
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
                                <CheckCircle2 className="h-5 w-5 text-blue-500" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container py-24">
                    <div className="rounded-lg border bg-card p-8 text-center md:p-12">
                        <h2 className="text-3xl font-bold tracking-tight">Ready to Transform Your Healthcare Practice?</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                            Let's discuss how our healthcare solutions can help you provide better patient care and improve operational efficiency.
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                            <Button size="lg" asChild>
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                            <Button size="lg" variant="outline">Schedule Demo</Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
} 