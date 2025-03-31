import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Factory, LineChart, Package, Settings } from "lucide-react"
import Link from "next/link"
import BackButton from "@/components/back-button"

const features = [
    {
        title: "Production Planning",
        description: "Advanced production scheduling and resource allocation system for optimal manufacturing efficiency.",
        icon: Settings,
    },
    {
        title: "Quality Control",
        description: "Comprehensive quality management system with real-time monitoring and analytics.",
        icon: CheckCircle2,
    },
    {
        title: "Inventory Management",
        description: "Smart inventory tracking system with predictive analytics and automated reordering.",
        icon: Package,
    },
    {
        title: "Supply Chain Optimization",
        description: "End-to-end supply chain management with real-time visibility and optimization tools.",
        icon: LineChart,
    },
]

const benefits = [
    "Increased production efficiency",
    "Reduced operational costs",
    "Improved quality control",
    "Better inventory management",
    "Optimized supply chain",
    "Real-time analytics and insights",
]

export default function ManufacturingPage() {
    return (
        <div className="relative min-h-screen">
            {/* Background gradients */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-orange-500/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10">
                {/* Back Button */}
                <div className="container py-6">
                    <BackButton href="/industries" />
                </div>

                {/* Hero Section */}
                <section className="container py-24 text-center">
                    <div className="mx-auto mb-8 inline-flex rounded-lg bg-orange-500/10 p-3">
                        <Factory className="h-8 w-8 text-orange-500" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        Manufacturing Solutions
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        Optimizing production processes and supply chain management with advanced industrial software solutions.
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
                                <div className="mb-4 inline-flex rounded-lg bg-orange-500/10 p-3">
                                    <feature.icon className="h-6 w-6 text-orange-500" />
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
                                <CheckCircle2 className="h-5 w-5 text-orange-500" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container py-24">
                    <div className="rounded-lg border bg-card p-8 text-center md:p-12">
                        <h2 className="text-3xl font-bold tracking-tight">Ready to Optimize Your Manufacturing Process?</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                            Let's discuss how our manufacturing solutions can help you improve efficiency and reduce operational costs.
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