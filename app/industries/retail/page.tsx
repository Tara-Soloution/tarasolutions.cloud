import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, LineChart, Package, ShoppingBag, Store } from "lucide-react"
import Link from "next/link"
import BackButton from "@/components/back-button"
import CTASection from "@/components/cta-section"

const features = [
    {
        title: "Point of Sale Systems",
        description: "Modern POS solutions with integrated payment processing, inventory tracking, and customer management.",
        icon: Store,
    },
    {
        title: "Inventory Management",
        description: "Real-time inventory tracking with predictive analytics and automated reordering capabilities.",
        icon: Package,
    },
    {
        title: "Customer Analytics",
        description: "Advanced analytics platform for understanding customer behavior and optimizing sales strategies.",
        icon: LineChart,
    },
    {
        title: "E-commerce Platform",
        description: "Seamless online shopping experience with integrated inventory and order management.",
        icon: ShoppingBag,
    },
]

const benefits = [
    "Increased sales and revenue",
    "Improved inventory control",
    "Better customer experience",
    "Reduced operational costs",
    "Enhanced data insights",
    "Streamlined operations",
]

export default function RetailPage() {
    return (
        <div className="relative min-h-screen">
            {/* Background gradients */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10">
                {/* Back Button */}
                <div className="container py-6">
                    <BackButton href="/industries" />
                </div>

                {/* Hero Section */}
                <section className="container py-24 text-center">
                    <div className="mx-auto mb-8 inline-flex rounded-lg bg-green-500/10 p-3">
                        <ShoppingBag className="h-8 w-8 text-green-500" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        Retail Solutions
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        Enhancing retail operations with modern POS systems, inventory management, and e-commerce solutions.
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
                                <div className="mb-4 inline-flex rounded-lg bg-green-500/10 p-3">
                                    <feature.icon className="h-6 w-6 text-green-500" />
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
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
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