import { Metadata } from "next"
import CTASection from '@/components/cta-section'
import { FileText, Shield, Scale, Gavel, Mail } from "lucide-react"

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Read our terms of service to understand your rights and responsibilities when using our services.",
    keywords: [
        "terms of service",
        "user agreement",
        "service terms",
        "legal terms",
        "user rights",
        "service conditions",
        "terms and conditions",
        "legal agreement"
    ],
    openGraph: {
        title: "Terms of Service | Tara Solutions",
        description: "Read our terms of service to understand your rights and responsibilities.",
        images: [
            {
                url: "/terms-og.png",
                width: 1200,
                height: 630,
                alt: "Terms of Service",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms of Service | Tara Solutions",
        description: "Read our terms of service to understand your rights and responsibilities.",
        images: ["/terms-og.png"],
    },
    alternates: {
        canonical: "https://tarasolutions.cloud/terms",
    },
}

const termsFeatures = [
    {
        title: "Service Agreement",
        description: "Clear terms and conditions for using our services",
        icon: FileText,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        title: "User Protection",
        description: "Your rights and protections as a user",
        icon: Shield,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
    {
        title: "Fair Usage",
        description: "Guidelines for fair and responsible service usage",
        icon: Scale,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
    {
        title: "Legal Compliance",
        description: "Adherence to applicable laws and regulations",
        icon: Gavel,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
    },
]

export default function Terms() {
    return (
        <div className="relative min-h-screen">
            {/* Background gradients */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10">
                <div className="pt-24 pb-20">
                    <div className="space-y-32">
                        {/* Hero Section */}
                        <div className="container mx-auto px-4 py-16 relative pt-32 pb-20 sm:pt-40 sm:pb-24">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                                    Terms of Service
                                    <br />
                                    <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                                        Your guide to using our services
                                    </span>
                                </h1>
                                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
                                    Please read these terms carefully before using our services
                                </p>
                            </div>
                        </div>

                        {/* Features Section */}
                        <section className="container mx-auto px-4 py-16">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Key Terms Overview</h2>
                                <p className="text-lg text-muted-foreground">Understanding our service agreement</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {termsFeatures.map((feature) => (
                                    <div
                                        key={feature.title}
                                        className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        <div className={`mb-6 inline-flex rounded-xl p-4 ${feature.bgColor}`}>
                                            <feature.icon className={`h-8 w-8 ${feature.color}`} />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Content Sections */}
                        <section className="container mx-auto px-4 py-16">
                            <div className="max-w-4xl mx-auto space-y-12">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Detailed Terms</h2>
                                    <p className="text-lg text-muted-foreground">Comprehensive service agreement details</p>
                                </div>

                                <div className="grid gap-8 md:grid-cols-2">
                                    <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                                        <h3 className="text-2xl font-semibold mb-4">Service Description</h3>
                                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                            <li>Cloud Solutions</li>
                                            <li>Web Development</li>
                                            <li>Mobile Development</li>
                                            <li>Consulting Services</li>
                                        </ul>
                                    </div>

                                    <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                                        <h3 className="text-2xl font-semibold mb-4">User Responsibilities</h3>
                                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                            <li>Provide accurate information</li>
                                            <li>Maintain account security</li>
                                            <li>Comply with laws</li>
                                            <li>Avoid harmful activities</li>
                                        </ul>
                                    </div>

                                    <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                                        <h3 className="text-2xl font-semibold mb-4">Intellectual Property</h3>
                                        <p className="text-muted-foreground">
                                            All content, features, and functionality of our services are owned by Tara Solutions and are protected by international copyright, trademark, and other intellectual property laws.
                                        </p>
                                    </div>

                                    <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                                        <h3 className="text-2xl font-semibold mb-4">Limitation of Liability</h3>
                                        <p className="text-muted-foreground">
                                            Tara Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Contact Section */}
                        <section className="container mx-auto px-4 py-16">
                            <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-12 text-center">
                                <div className="max-w-2xl mx-auto">
                                    <div className="inline-flex rounded-xl p-4 bg-primary/10 mb-6">
                                        <Mail className="h-8 w-8 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Questions About Our Terms?</h2>
                                    <p className="text-lg text-muted-foreground mb-6">
                                        We're here to help. Contact us at info@tarasolutions.cloud
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <CTASection />
        </div>
    )
} 