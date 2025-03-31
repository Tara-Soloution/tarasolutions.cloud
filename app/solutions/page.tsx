import Image from 'next/image'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Smartphone } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Enterprise Solutions",
    description: "Comprehensive enterprise solutions for modern businesses. From AI-optimized infrastructure to scalable cloud management, we provide cutting-edge technology solutions to drive your business forward.",
    keywords: [
        "enterprise solutions",
        "AI infrastructure",
        "cloud management",
        "startup infrastructure",
        "SaaS development",
        "solopreneur platform",
        "business technology",
        "digital transformation",
        "cloud solutions",
        "enterprise software"
    ],
    openGraph: {
        title: "Enterprise Solutions | Tara Solutions",
        description: "Comprehensive enterprise solutions for modern businesses. From AI-optimized infrastructure to scalable cloud management.",
        images: [
            {
                url: "/solutions-og.png",
                width: 1200,
                height: 630,
                alt: "Enterprise Solutions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise Solutions | Tara Solutions",
        description: "Comprehensive enterprise solutions for modern businesses. From AI-optimized infrastructure to scalable cloud management.",
        images: ["/solutions-og.png"],
    },
    alternates: {
        canonical: "https://tarasolutions.cloud/solutions",
    },
}

const solutions = [
    {
        title: 'AI-Optimized Infrastructure',
        description: 'Deploy AI models swiftly. Scale resources dynamically. Integrate ML frameworks seamlessly. Accelerate AI innovation to market.',
        icon: '/icons/ai-infrastructure.svg',
        details: [
            'AI Model Deployment',
            'Dynamic Scaling',
            'ML Framework Integration',
            'Innovation Acceleration'
        ],
        link: '/solutions/cloud',
        longDescription: 'Our AI-optimized infrastructure provides a robust foundation for deploying and scaling artificial intelligence models. We offer specialized environments for machine learning workloads, automated scaling based on demand, and seamless integration with popular ML frameworks. Our solutions help businesses accelerate their AI initiatives from development to production.'
    },
    {
        title: 'Enterprise Cloud Management',
        description: 'Unify multi-cloud operations. Enhance security measures. Ensure comprehensive compliance. Optimize cloud infrastructure efficiently.',
        icon: '/icons/cloud-management.svg',
        details: [
            'Multi-cloud Operations',
            'Security Enhancement',
            'Compliance Management',
            'Infrastructure Optimization'
        ],
        link: '/solutions/cloud',
        longDescription: 'Streamline your multi-cloud environment with our comprehensive cloud management solutions. We provide unified monitoring, automated security measures, and compliance management across different cloud providers. Our platform helps you optimize costs, enhance security, and maintain consistent operations across your cloud infrastructure.'
    },
    {
        title: 'Scalable Startup Infrastructure',
        description: 'Implement rapid deployment pipelines. Monitor performance comprehensively. Concentrate on product development confidently.',
        icon: '/icons/startup-infrastructure.svg',
        details: [
            'Rapid Deployment',
            'Performance Monitoring',
            'Product Development',
            'Resource Management'
        ],
        link: '/solutions/cloud',
        longDescription: 'Launch your startup with confidence using our scalable infrastructure solutions. We provide automated deployment pipelines, comprehensive monitoring, and resource optimization tools. Focus on building your product while we handle the infrastructure, ensuring your startup can scale efficiently as it grows.'
    },
    {
        title: 'Enterprise-Grade Cloud Solutions',
        description: 'Maintain high-availability systems. Balance loads globally. Implement advanced security. Reduce costs while maximizing performance',
        icon: '/icons/enterprise-cloud.svg',
        details: [
            'High Availability',
            'Global Load Balancing',
            'Advanced Security',
            'Cost Optimization'
        ],
        link: '/solutions/cloud',
        longDescription: 'Enterprise-grade cloud solutions designed for reliability, security, and performance. Our platform offers global load balancing, advanced security features, and cost optimization tools. We ensure your critical business applications maintain high availability while operating efficiently across multiple regions.'
    },
    {
        title: 'SaaS Development Acceleration',
        description: 'Launch applications instantly. Automate CI/CD processes. Manage infrastructure robustly. Grow your product without operational hurdles.',
        icon: '/icons/saas-development.svg',
        details: [
            'Instant Deployment',
            'CI/CD Automation',
            'Infrastructure Management',
            'Product Growth'
        ],
        link: '/solutions/web',
        longDescription: 'Accelerate your SaaS development with our comprehensive platform. We provide automated CI/CD pipelines, robust infrastructure management, and tools for rapid deployment. Our solutions help you focus on product development while we handle the technical complexities of scaling and maintaining your SaaS application.'
    },
    {
        title: 'Mobile App Development',
        description: 'Build powerful mobile applications. Support multiple platforms. Ensure seamless user experience. Scale your mobile presence effectively.',
        icon: Smartphone,
        details: [
            'iOS & Android Development',
            'Cross-platform Solutions',
            'Mobile UI/UX Design',
            'App Store Optimization'
        ],
        link: '/solutions/mobile',
        longDescription: 'Create engaging mobile applications that delight users and drive business growth. Our mobile development solutions cover both iOS and Android platforms, offering native and cross-platform development options. We focus on delivering high-performance, user-friendly apps with modern design and seamless user experience.'
    }
]

function SolutionsHero() {
    return (
        <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                    Enterprise Solutions
                    <br />
                    <span className="text-gray-400">for modern businesses</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10">
                    Empower your business with cutting-edge technology solutions designed to scale, secure, and streamline your operations.
                </p>
                <Link href="/contact">
                    <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90">
                        <span className="relative z-10">Get Started</span>
                        <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}

function SolutionsCTA() {
    return (
        <div className="relative py-20">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Transform Your Business with Our Solutions
                        </h2>
                        <p className="text-xl text-gray-400 mb-8">
                            Our enterprise solutions are designed to help you:
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <div className="rounded-full p-1 bg-gradient-to-r from-primary to-accent">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-300">Scale your infrastructure with AI-optimized solutions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="rounded-full p-1 bg-gradient-to-r from-primary to-accent">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-300">Enhance security and compliance measures</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="rounded-full p-1 bg-gradient-to-r from-primary to-accent">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-300">Accelerate your development pipeline</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-[#131B2E] p-8 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm hover:bg-[#1B2438] transition-colors duration-300">
                        <h3 className="text-2xl font-semibold mb-4">Schedule a Free Consultation</h3>
                        <p className="text-gray-400 mb-6">
                            Let's discuss how these solutions can be tailored to your specific business needs.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Calendar className="w-5 h-5 text-primary" />
                                <span>30-minute strategy session</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Personalized solution roadmap</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Immediate availability</span>
                            </div>
                            <Link
                                href="/contact"
                                className="mt-8 inline-flex items-center justify-center w-full gap-2 px-8 py-4 text-lg bg-gradient-to-r from-primary to-accent rounded-xl hover:opacity-90 transition-opacity"
                            >
                                <Calendar className="w-5 h-5" />
                                <span>Book Your Free Session</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Solutions() {
    return (
        <div className="relative min-h-screen">
            {/* Background gradients */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10">
                <SolutionsHero />

                {/* Solutions Grid Section */}
                <div className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                            Empowering Tech Innovation Across Industries
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {solutions.map((solution, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                                >
                                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                                        {typeof solution.icon === 'string' ? (
                                            <Image
                                                src={solution.icon}
                                                alt={solution.title}
                                                width={24}
                                                height={24}
                                                className="text-primary transition-transform group-hover:scale-110"
                                            />
                                        ) : (
                                            <solution.icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold transition-colors group-hover:text-primary">{solution.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">{solution.description}</p>
                                    <p className="mt-4 text-sm text-muted-foreground/80 line-clamp-3">{solution.longDescription}</p>
                                    <ul className="mt-4 space-y-2">
                                        {solution.details.map((detail, detailIndex) => (
                                            <li
                                                key={detailIndex}
                                                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-muted-foreground/80"
                                            >
                                                <span className="h-1 w-1 rounded-full bg-primary transition-transform group-hover:scale-150" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6">
                                        <Link href={solution.link}>
                                            <Button
                                                variant="ghost"
                                                className="group/btn relative w-full overflow-hidden rounded-full bg-card transition-all hover:bg-accent hover:text-accent-foreground"
                                            >
                                                <span className="relative z-10 flex items-center justify-center">
                                                    Learn More
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                                </span>
                                                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 opacity-0 transition-opacity group-hover/btn:opacity-100" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <SolutionsCTA />
            </div>
        </div>
    )
}