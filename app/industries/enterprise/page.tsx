import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, Building2, CheckCircle2, FileText, Workflow } from "lucide-react"
import Link from "next/link"
import BackButton from "@/components/back-button"
import CTASection from "@/components/cta-section"

const features = [
    {
        title: "ERP Systems",
        description: "Comprehensive enterprise resource planning solutions for streamlined business operations.",
        icon: Building2,
    },
    {
        title: "Business Intelligence",
        description: "Advanced analytics and reporting tools for data-driven decision making.",
        icon: BarChart,
    },
    {
        title: "Workflow Automation",
        description: "Intelligent automation solutions for optimizing business processes and reducing manual tasks.",
        icon: Workflow,
    },
    {
        title: "Document Management",
        description: "Secure document handling and collaboration platform for enterprise teams.",
        icon: FileText,
    },
]

const benefits = [
    "Improved operational efficiency",
    "Enhanced decision-making",
    "Reduced manual processes",
    "Better resource utilization",
    "Increased productivity",
    "Streamlined collaboration",
]

export default function EnterprisePage() {
    return (
        <div className="relative min-h-screen">
            {/* Background gradients */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-indigo-500/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10">
                {/* Back Button */}
                <div className="container py-6">
                    <BackButton href="/industries" />
                </div>

                {/* Hero Section */}
                <section className="container py-24 text-center">
                    <div className="mx-auto mb-8 inline-flex rounded-lg bg-indigo-500/10 p-3">
                        <Building2 className="h-8 w-8 text-indigo-500" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        Enterprise Solutions
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        Empowering businesses with comprehensive enterprise software solutions for improved efficiency and growth.
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
                                <div className="mb-4 inline-flex rounded-lg bg-indigo-500/10 p-3">
                                    <feature.icon className="h-6 w-6 text-indigo-500" />
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
                                <CheckCircle2 className="h-5 w-5 text-indigo-500" />
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