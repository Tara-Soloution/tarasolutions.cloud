import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, CheckCircle2, Shield, Wallet } from "lucide-react"
import Link from "next/link"
import BackButton from "@/components/back-button"

const features = [
    {
        title: "Banking Systems",
        description: "Secure and scalable banking solutions with advanced transaction processing and account management.",
        icon: Wallet,
    },
    {
        title: "Insurance Management",
        description: "Comprehensive insurance platform for policy management, claims processing, and risk assessment.",
        icon: Shield,
    },
    {
        title: "Investment Platforms",
        description: "Advanced trading and portfolio management solutions for financial institutions and investors.",
        icon: BarChart,
    },
    {
        title: "Risk Analytics",
        description: "Sophisticated risk assessment and compliance tools for financial institutions.",
        icon: Shield,
    },
]

const benefits = [
    "Enhanced security and compliance",
    "Improved operational efficiency",
    "Better risk management",
    "Streamlined customer service",
    "Real-time transaction processing",
    "Advanced analytics and reporting",
]

export default function FinancialServicesPage() {
    return (
        <div className="relative min-h-screen">
            {/* Background gradients */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-yellow-500/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10">
                {/* Back Button */}
                <div className="container py-6">
                    <BackButton href="/industries" />
                </div>

                {/* Hero Section */}
                <section className="container py-24 text-center">
                    <div className="mx-auto mb-8 inline-flex rounded-lg bg-yellow-500/10 p-3">
                        <Wallet className="h-8 w-8 text-yellow-500" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        Financial Services Solutions
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        Securing and streamlining financial operations with cutting-edge fintech solutions for banks, insurance, and investment firms.
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
                                <div className="mb-4 inline-flex rounded-lg bg-yellow-500/10 p-3">
                                    <feature.icon className="h-6 w-6 text-yellow-500" />
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
                                <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container py-24">
                    <div className="rounded-lg border bg-card p-8 text-center md:p-12">
                        <h2 className="text-3xl font-bold tracking-tight">Ready to Transform Your Financial Services?</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                            Let's discuss how our financial solutions can help you enhance security, improve efficiency, and deliver better customer service.
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