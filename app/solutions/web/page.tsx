import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  Code,
  Layout,
  Server,
  Database,
  Cpu,
  Shield,
  Zap,
  BarChart,
  Palette,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import BackButton from "@/components/back-button";
import { WaveIllustration } from "@/components/wave-illustration";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Web Development Solutions",
  description:
    "Create powerful web applications with our expert web development services. From modern UI/UX design to backend development, we deliver high-performance web solutions that drive business growth.",
  keywords: [
    "web development",
    "UI/UX design",
    "frontend development",
    "backend development",
    "web applications",
    "responsive design",
    "web performance",
    "web security",
    "API development",
    "web optimization",
  ],
  openGraph: {
    title: "Web Development Solutions | Tara Solutions",
    description:
      "Create powerful web applications with our expert web development services. From modern UI/UX design to backend development.",
    images: [
      {
        url: "/web-development-og.png",
        width: 1200,
        height: 630,
        alt: "Web Development Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Solutions | Tara Solutions",
    description:
      "Create powerful web applications with our expert web development services. From modern UI/UX design to backend development.",
    images: ["/web-development-og.png"],
  },
  alternates: {
    canonical: "https://tarasolutions.cloud/solutions/web",
  },
};

const features = [
  {
    title: "Web Development",
    description:
      "Modern and responsive web applications built with cutting-edge technologies.",
    icon: Code,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    details: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "API Integration",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces that enhance user experience.",
    icon: Palette,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    details: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    title: "Backend Development",
    description: "Scalable and secure backend solutions for your applications.",
    icon: Server,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    details: ["Node.js", "Python", "Database Design", "API Development"],
  },
  {
    title: "Performance Optimization",
    description: "Optimized performance for fast and efficient applications.",
    icon: Zap,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    details: [
      "Code Optimization",
      "Caching Strategies",
      "CDN Integration",
      "Load Balancing",
    ],
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security for your web applications.",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    details: ["SSL/TLS", "Authentication", "Authorization", "Data Protection"],
  },
  {
    title: "Analytics & Monitoring",
    description: "Comprehensive analytics and monitoring solutions.",
    icon: BarChart,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    details: [
      "Performance Metrics",
      "User Analytics",
      "Error Tracking",
      "Real-time Monitoring",
    ],
  },
];

const techStack = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Redux", icon: "🔄" },
      { name: "GraphQL", icon: "📊" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Redis", icon: "🔴" },
      { name: "Docker", icon: "🐳" },
    ],
  },
  {
    category: "DevOps",
    technologies: [
      { name: "AWS", icon: "☁️" },
      { name: "GitHub", icon: "🐙" },
      { name: "CI/CD", icon: "🔄" },
      { name: "Kubernetes", icon: "⚓" },
      { name: "Terraform", icon: "🏗️" },
      { name: "Prometheus", icon: "📊" },
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We analyze your requirements and create a detailed project plan.",
    icon: Globe,
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "We create beautiful designs and interactive prototypes.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development",
    description: "We build your application using the latest technologies.",
    icon: Code,
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "We thoroughly test and deploy your application.",
    icon: Zap,
  },
];

export default function WebPage() {
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
                    <Globe className="h-10 w-10 text-primary" />
                  </div>
                  <h1 className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                    Web Development
                  </h1>
                  <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Create powerful web applications that drive business growth
                    and user engagement.
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
            <section className="container mx-auto px-4 py-16 space-y-12 md:py-24">
              <div className="mx-auto max-w-[58rem] text-center">
                <h2 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl">
                  Our Development Process
                </h2>
                <p className="mt-4 text-muted-foreground/80 sm:text-lg">
                  A systematic approach to delivering exceptional web
                  applications
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
              className="container mx-auto px-4 py-16 space-y-12 md:py-24"
            >
              <div className="mx-auto max-w-[58rem] text-center">
                <h2 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl">
                  Our Web Services
                </h2>
                <p className="mt-4 text-muted-foreground/80 sm:text-lg">
                  End-to-end web development solutions for modern digital
                  experiences
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
            <section className="container mx-auto px-4 py-16 space-y-12 md:py-24">
              <div className="mx-auto max-w-[58rem] text-center">
                <h2 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl">
                  Our Technology Stack
                </h2>
                <p className="mt-4 text-muted-foreground/80 sm:text-lg">
                  We use the latest technologies to build powerful web
                  applications
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
            <section className="container mx-auto px-4 py-16 space-y-16 md:py-32">
              <div className="mx-auto max-w-[58rem] text-center">
                <h2 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl">
                  Why Choose Our Web Solutions?
                </h2>
                <p className="mt-4 text-muted-foreground/80 sm:text-lg">
                  Experience the benefits of our comprehensive web development
                  solutions
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Layout className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-xl font-bold tracking-tight text-transparent">
                        Modern Design
                      </h3>
                      <p className="text-muted-foreground/80">
                        Beautiful and responsive designs that work perfectly
                        across all devices.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-xl font-bold tracking-tight text-transparent">
                        Clean Code
                      </h3>
                      <p className="text-muted-foreground/80">
                        Well-structured and maintainable code following best
                        practices.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-xl font-bold tracking-tight text-transparent">
                        Performance
                      </h3>
                      <p className="text-muted-foreground/80">
                        Optimized performance for fast loading and smooth user
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="h-24 w-24 text-primary" />
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
                      Start Your Web Project
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
