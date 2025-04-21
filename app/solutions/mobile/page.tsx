import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Code,
  Layout,
  Server,
  Database,
  Shield,
  Zap,
  BarChart,
  Palette,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import BackButton from "@/components/back-button";
import { WaveIllustration } from "@/components/wave-illustration";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Mobile Development Solutions",
  description:
    "Build powerful mobile applications for iOS and Android platforms. Our expert mobile development services deliver high-performance, user-friendly apps that engage users and drive business growth.",
  keywords: [
    "mobile development",
    "iOS development",
    "Android development",
    "mobile apps",
    "cross-platform apps",
    "mobile UI/UX",
    "app development",
    "mobile optimization",
    "mobile security",
    "app performance",
  ],
  openGraph: {
    title: "Mobile Development Solutions | Tara Solutions",
    description:
      "Build powerful mobile applications for iOS and Android platforms. Our expert mobile development services deliver high-performance, user-friendly apps.",
    images: [
      {
        url: "/mobile-development-og.png",
        width: 1200,
        height: 630,
        alt: "Mobile Development Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Development Solutions | Tara Solutions",
    description:
      "Build powerful mobile applications for iOS and Android platforms. Our expert mobile development services deliver high-performance, user-friendly apps.",
    images: ["/mobile-development-og.png"],
  },
  alternates: {
    canonical: "https://tarasolutions.cloud/solutions/mobile",
  },
};

const features = [
  {
    title: "iOS Development",
    description:
      "Native iOS applications built with Swift and modern frameworks.",
    icon: Smartphone,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    details: [
      "Swift UI",
      "iOS 15+ Support",
      "App Store Optimization",
      "Push Notifications",
    ],
  },
  {
    title: "Android Development",
    description:
      "Native Android applications using Kotlin and Jetpack Compose.",
    icon: Smartphone,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    details: [
      "Kotlin",
      "Jetpack Compose",
      "Material Design 3",
      "Google Play Optimization",
    ],
  },
  {
    title: "Cross-Platform",
    description: "Cross-platform solutions using React Native and Flutter.",
    icon: Code,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    details: [
      "React Native",
      "Flutter",
      "Code Sharing",
      "Platform-Specific Features",
    ],
  },
  {
    title: "UI/UX Design",
    description: "Mobile-first design solutions for optimal user experience.",
    icon: Palette,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    details: [
      "Mobile UI Design",
      "User Research",
      "Prototyping",
      "Design Systems",
    ],
  },
  {
    title: "Backend Integration",
    description: "Seamless backend integration for your mobile applications.",
    icon: Server,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    details: ["REST APIs", "GraphQL", "Real-time Updates", "Offline Support"],
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security for mobile applications.",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    details: [
      "App Security",
      "Data Encryption",
      "Biometric Auth",
      "Compliance",
    ],
  },
];

const techStack = [
  {
    category: "iOS Development",
    technologies: [
      { name: "Swift", icon: "🍎" },
      { name: "SwiftUI", icon: "🎨" },
      { name: "UIKit", icon: "📱" },
      { name: "Core Data", icon: "💾" },
      { name: "CloudKit", icon: "☁️" },
      { name: "Push Notifications", icon: "🔔" },
    ],
  },
  {
    category: "Android Development",
    technologies: [
      { name: "Kotlin", icon: "🤖" },
      { name: "Jetpack Compose", icon: "🎨" },
      { name: "Material Design", icon: "🎯" },
      { name: "Room", icon: "💾" },
      { name: "Firebase", icon: "🔥" },
      { name: "Google Play", icon: "🎮" },
    ],
  },
  {
    category: "Cross-Platform",
    technologies: [
      { name: "React Native", icon: "⚛️" },
      { name: "Flutter", icon: "🦋" },
      { name: "Xamarin", icon: "💜" },
      { name: "Ionic", icon: "⚡" },
      { name: "Cordova", icon: "📱" },
      { name: "Capacitor", icon: "⚡" },
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
    description:
      "We create beautiful mobile-first designs and interactive prototypes.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development",
    description:
      "We build your mobile application using the latest technologies.",
    icon: Code,
  },
  {
    step: "04",
    title: "Testing & Launch",
    description:
      "We thoroughly test and deploy your application to app stores.",
    icon: Zap,
  },
];

export default function MobilePage() {
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
                    <Smartphone className="h-10 w-10 text-primary" />
                  </div>
                  <h1 className="bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                    Mobile Development
                  </h1>
                  <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Build powerful mobile applications that deliver exceptional
                    user experiences across iOS and Android platforms.
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
                  Our Development Process
                </h2>
                <p className="mt-4 text-muted-foreground/80 sm:text-lg">
                  A systematic approach to delivering exceptional mobile
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
              className="container mx-auto px-4 space-y-12 py-16 md:py-24"
            >
              <div className="mx-auto max-w-[58rem] text-center">
                <h2 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl">
                  Our Mobile Services
                </h2>
                <p className="mt-4 text-muted-foreground/80 sm:text-lg">
                  Complete mobile development solutions for iOS and Android
                  platforms
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
            <section className="container mx-auto px-4  space-y-12 py-16 md:py-24">
              <div className="mx-auto max-w-[58rem] text-center">
                <h2 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl">
                  Our Technology Stack
                </h2>
                <p className="mt-4 text-muted-foreground/80 sm:text-lg">
                  We use the latest technologies to build powerful mobile
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
            <section className="container mx-auto px-4 space-y-16 py-24 md:py-32">
              <div className="mx-auto max-w-[58rem] text-center">
                <h2 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl">
                  Why Choose Our Mobile Solutions?
                </h2>
                <p className="mt-4 text-muted-foreground/80 sm:text-lg">
                  Experience the benefits of our comprehensive mobile
                  development solutions
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
                        Native Experience
                      </h3>
                      <p className="text-muted-foreground/80">
                        True native performance and user experience on each
                        platform.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-xl font-bold tracking-tight text-transparent">
                        Cross-Platform
                      </h3>
                      <p className="text-muted-foreground/80">
                        Efficient development for both iOS and Android
                        platforms.
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
                        Optimized performance for smooth user experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Smartphone className="h-24 w-24 text-primary" />
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
                      Start Your Mobile Project
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
