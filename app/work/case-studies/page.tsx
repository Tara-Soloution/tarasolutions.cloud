import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Case Studies | Tara Solutions",
    description: "Explore our success stories and case studies. See how we've helped businesses transform their digital presence and operations.",
}

const caseStudies = [
    {
        title: "Global E-commerce Platform Transformation",
        client: "Retail Giant Inc.",
        industry: "Retail",
        challenge: "A traditional retail company needed to modernize their e-commerce platform to compete in the digital market.",
        solution: "We developed a scalable cloud-based e-commerce solution with advanced features and seamless integration.",
        results: [
            "200% increase in online sales",
            "50% reduction in page load time",
            "Improved customer satisfaction",
            "Expanded to 5 new markets",
        ],
        image: "/case-studies/ecommerce.jpg",
    },
    {
        title: "Healthcare Management System",
        client: "HealthCare Plus",
        industry: "Healthcare",
        challenge: "A healthcare provider needed a comprehensive system to manage patient records and appointments.",
        solution: "We created a secure, HIPAA-compliant healthcare management system with advanced features.",
        results: [
            "40% reduction in administrative time",
            "99.9% system uptime",
            "Enhanced patient care",
            "Improved data security",
        ],
        image: "/case-studies/healthcare.jpg",
    },
    {
        title: "Financial Services Platform",
        client: "FinTech Solutions",
        industry: "Financial Services",
        challenge: "A financial services company needed a modern platform for their digital banking services.",
        solution: "We developed a secure, scalable financial platform with real-time processing capabilities.",
        results: [
            "300% increase in digital transactions",
            "Zero security incidents",
            "Reduced operational costs",
            "Enhanced user experience",
        ],
        image: "/case-studies/finance.jpg",
    },
]

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                        Case Studies
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Real results from our client success stories
                    </p>
                </div>
            </div>

            {/* Case Studies Grid */}
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-green-500/5 border hover:from-primary/10 hover:to-green-500/10 transition-all duration-300"
                        >
                            <div className="relative h-48">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-green-500/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-4xl font-bold text-primary">
                                        {study.title.charAt(0)}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                        <span>{study.client}</span>
                                        <span>•</span>
                                        <span>{study.industry}</span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h4 className="font-semibold mb-2">Challenge</h4>
                                    <p className="text-muted-foreground">{study.challenge}</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="font-semibold mb-2">Solution</h4>
                                    <p className="text-muted-foreground">{study.solution}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Results</h4>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                        {study.results.map((result, i) => (
                                            <li key={i}>{result}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <h2 className="text-3xl font-bold mb-6">Ready to Start Your Success Story?</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Let's create something amazing together
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-green-500 text-white font-medium hover:opacity-90 transition-opacity"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    )
} 