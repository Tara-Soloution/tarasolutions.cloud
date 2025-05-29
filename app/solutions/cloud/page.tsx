import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cloud,
  Server,
  Database,
  Cpu,
  Shield,
  Zap,
  Globe,
  BarChart,
  Smartphone,
  Lock,
  Settings,
  Network,
  Workflow,
  LineChart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import BackButton from "@/components/back-button";
import { WaveIllustration } from "@/components/wave-illustration";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Cloud Solutions",
  description:
    "Transform your business with our comprehensive cloud solutions. From infrastructure to security, we provide everything you need to thrive in the digital age with scalable, secure, and high-performance cloud services.",
  keywords: [
    "cloud solutions",
    "cloud infrastructure",
    "server management",
    "database solutions",
    "cloud security",
    "performance optimization",
    "cloud computing",
    "cloud services",
    "enterprise cloud",
    "cloud migration",
  ],
  openGraph: {
    title: "Cloud Solutions | Tara Solutions",
    description:
      "Transform your business with our comprehensive cloud solutions. From infrastructure to security, we provide everything you need to thrive in the digital age.",
    images: [
      {
        url: "/cloud-solutions-og.png",
        width: 1200,
        height: 630,
        alt: "Cloud Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Solutions | Tara Solutions",
    description:
      "Transform your business with our comprehensive cloud solutions. From infrastructure to security, we provide everything you need to thrive in the digital age.",
    images: ["/cloud-solutions-og.png"],
  },
  alternates: {
    canonical: "https://tarasolutions.cloud/solutions/cloud",
  },
};

const features = [
  {
    title: "Cloud Infrastructure",
    description:
      "Scalable and reliable cloud infrastructure built on cutting-edge technologies.",
    icon: Cloud,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    details: [
      "Auto-scaling capabilities",
      "High availability architecture",
      "Disaster recovery solutions",
      "Multi-region deployment",
    ],
  },
  {
    title: "Server Management",
    description:
      "Efficient server management and optimization for peak performance.",
    icon: Server,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    details: [
      "Automated provisioning",
      "Performance monitoring",
      "Resource optimization",
      "Load balancing",
    ],
  },
  {
    title: "Database Solutions",
    description: "Robust database management and optimization services.",
    icon: Database,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    details: [
      "Database optimization",
      "Backup and recovery",
      "Data migration",
      "Performance tuning",
    ],
  },
  {
    title: "Computing Resources",
    description: "Optimized computing resources for your specific needs.",
    icon: Cpu,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    details: [
      "Resource allocation",
      "Cost optimization",
      "Performance scaling",
      "Workload management",
    ],
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security and compliance solutions.",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    details: [
      "Security monitoring",
      "Compliance management",
      "Access control",
      "Threat detection",
    ],
  },
  {
    title: "High Performance",
    description: "Optimized performance for demanding workloads.",
    icon: Zap,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    details: [
      "Performance optimization",
      "Caching strategies",
      "CDN integration",
      "Load distribution",
    ],
  },
];

const techStack = [
  {
    category: "Cloud Providers",
    technologies: [
      { name: "AWS", icon: "☁️" },
      { name: "Azure", icon: "🌤️" },
      { name: "GCP", icon: "🌥️" },
      { name: "DigitalOcean", icon: "🌊" },
      { name: "Linode", icon: "🔄" },
      { name: "Vultr", icon: "⚡" },
    ],
  },
  {
    category: "Infrastructure",
    technologies: [
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "⚓" },
      { name: "Terraform", icon: "🏗️" },
      { name: "Ansible", icon: "🤖" },
      { name: "Jenkins", icon: "🔄" },
      { name: "GitLab CI", icon: "🦊" },
    ],
  },
  {
    category: "Monitoring",
    technologies: [
      { name: "Prometheus", icon: "📊" },
      { name: "Grafana", icon: "📈" },
      { name: "ELK Stack", icon: "🔍" },
      { name: "Datadog", icon: "🐕" },
      { name: "New Relic", icon: "📱" },
      { name: "Splunk", icon: "🔎" },
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Assessment & Planning",
    description:
      "We analyze your current infrastructure and create a detailed migration plan.",
    icon: Globe,
  },
  {
    step: "02",
    title: "Architecture Design",
    description:
      "We design a scalable and secure cloud architecture for your needs.",
    icon: Network,
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "We implement the cloud infrastructure and migrate your applications.",
    icon: Workflow,
  },
  {
    step: "04",
    title: "Optimization",
    description:
      "We optimize performance and costs for your cloud environment.",
    icon: LineChart,
  },
];

export default function CloudPage() {
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
          <div className="container mx-auto px-4">
            <BackButton href="/solutions" text="Back to Solutions" />
          </div>
          <div className="space-y-16">
            {/* Hero Section */}
            <div className="container mx-auto px-4">
              <section className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl py-12 text-center md:py-16">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5" />
                <WaveIllustration className="absolute inset-0 w-full" />
                <div className="relative z-10 space-y-6">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Cloud className="h-10 w-10 text-primary" />
                  </div>
                  <h1 className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                    Cloud Solutions
                  </h1>
                  <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Transform your business with our comprehensive cloud
                    solutions. From infrastructure to security, we provide
                    everything you need to thrive in the digital age.
                  </p>
                  <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="group relative overflow-hidden rounded-full bg-primary transition-all hover:bg-primary/90"
                      >
                        <span className="relative z-10 flex items-center">
                          Start Your Project
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Button>
                    </Link>
                    <Link href="#services">
                      <Button
                        variant="outline"
                        size="lg"
                        className="group relative overflow-hidden rounded-full"
                      >
                        <span className="relative z-10 flex items-center">
                          Explore Services
                        </span>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            {/* Process Section */}
            <section className="container mx-auto px-4 space-y-12 py-16 md:py-24">
              <div className="mx-auto max-w-[58rem] text-center">
                <h2 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl">
                  Our Cloud Journey
                </h2>
                <p className="mt-4 text-muted-foreground/80 sm:text-lg">
                  A systematic approach to cloud transformation and optimization
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {process.map((step) => (
                  <div
                    key={step.step}
                    className="group relative overflow-hidden rounded-xl border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <step.icon className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
                    </div>
                    <div className="mb-2 text-sm font-medium text-primary">
                      Step {step.step}
                    </div>
                    <h3 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-xl font-bold tracking-tight text-transparent transition-colors group-hover:text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base text-muted-foreground/80">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Features Grid */}
            <section
              id="services"
              className="container mx-auto px-4 space-y-12 py-16 md:py-24"
            >
              <div className="mx-auto max-w-[58rem] text-center">
                <h2 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl">
                  Our Cloud Services
                </h2>
                <p className="mt-4 text-muted-foreground/80 sm:text-lg">
                  Comprehensive cloud solutions for modern businesses
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div
                      className={`mb-6 inline-flex rounded-xl p-4 ${feature.bgColor}`}
                    >
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      {feature.description}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {feature.details.map((detail) => (
                        <span
                          key={detail}
                          className="rounded-full bg-accent/50 px-4 py-1.5 text-sm"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technology Stack */}
            <section className="container mx-auto px-4 space-y-12 py-16 md:py-24">
              <div className="mx-auto max-w-[58rem] text-center">
                <h2 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl">
                  Our Technology Stack
                </h2>
                <p className="mt-4 text-muted-foreground/80 sm:text-lg">
                  We leverage the best cloud technologies for your business
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {techStack.map((category) => (
                  <div
                    key={category.category}
                    className="group relative overflow-hidden rounded-xl border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <h3 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text mb-6 text-xl font-bold tracking-tight text-transparent">
                      {category.category}
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {category.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2 rounded-lg bg-accent/50 p-3"
                        >
                          <span className="text-xl">{tech.icon}</span>
                          <span className="text-sm font-medium text-muted-foreground/80">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="container mx-auto px-4 space-y-16 py-24 md:py-32">
              <div className="mx-auto max-w-[58rem] text-center">
                <h2 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl">
                  Why Choose Our Cloud Solutions?
                </h2>
                <p className="mt-4 text-muted-foreground/80 sm:text-lg">
                  Experience the benefits of our comprehensive cloud solutions
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Cloud className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-xl font-bold tracking-tight text-transparent">
                        Scalability
                      </h3>
                      <p className="text-muted-foreground/80">
                        Scale your infrastructure up or down based on demand.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-xl font-bold tracking-tight text-transparent">
                        Security
                      </h3>
                      <p className="text-muted-foreground/80">
                        Enterprise-grade security and compliance features.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-xl font-bold tracking-tight text-transparent">
                        Cost Optimization
                      </h3>
                      <p className="text-muted-foreground/80">
                        Optimize costs while maintaining performance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cloud className="h-24 w-24 text-primary" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden rounded-full bg-primary transition-all hover:bg-primary/90"
                  >
                    <span className="relative z-10 flex items-center">
                      Start Your Cloud Journey
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Button>
                </Link>
              </div>
            </section>

            {/* CTA Section */}
            <CTASection />
          </div>
        </div>
      </div>
    </div>
  );
}
