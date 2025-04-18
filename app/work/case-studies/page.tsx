import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Case Studies | Tara Solutions",
  description:
    "Explore our success stories and case studies. See how we've helped businesses transform their digital presence and operations.",
};

const caseStudies = [
  {
    title: "Enterprise CI/CD Pipeline",
    description:
      "Implemented a robust CI/CD pipeline for a large enterprise, streamlining their development and deployment processes.",
    category: "DevOps",
    image: "/projects/cloud-station.jpg",
    duration: "3 months",
    team: "5 members",
    results: [
      "90% reduction in deployment time",
      "Zero downtime deployments",
      "Automated testing and validation",
      "Enhanced security compliance",
    ],
    tags: ["CI/CD", "DevOps", "Automation", "Cloud Native"],
    href: "https://cloud-station.io",
  },
  {
    title: "Ahsen Elite E-commerce Platform",
    description:
      "Developed a modern e-commerce platform for Ahsen Elite, delivering a seamless shopping experience.",
    category: "E-commerce",
    image: "/projects/ahsen-elite.png",
    duration: "6 months",
    team: "8 members",
    results: [
      "150% increase in online sales",
      "40% faster checkout process",
      "Mobile-first responsive design",
      "Integrated payment solutions",
    ],
    tags: ["E-commerce", "Web Development", "UI/UX", "Payment Integration"],
    href: "http://ahsenelite.com/",
  },
  {
    title: "Daweo Analytics Dashboard",
    description:
      "Created a comprehensive analytics dashboard for Daweo Online, providing real-time insights and data visualization.",
    category: "Analytics",
    image: "/projects/daweo.png",
    duration: "5 months",
    team: "7 members",
    results: [
      "Real-time data processing",
      "Interactive visualizations",
      "Custom reporting tools",
      "Automated data collection",
    ],
    tags: [
      "Analytics",
      "Data Visualization",
      "Dashboard",
      "Real-time Processing",
    ],
    href: "http://daweo.org/",
  },
];

const metrics = [
  {
    title: "Project Success Rate",
    value: "98%",
    icon: CheckCircle2,
    description: "Of projects delivered on time and within scope",
  },
  {
    title: "Average Duration",
    value: "6 months",
    icon: Clock,
    description: "For complex enterprise solutions",
  },
  {
    title: "Team Size",
    value: "8-12",
    icon: Users,
    description: "Members per project on average",
  },
  {
    title: "Client Satisfaction",
    value: "95%",
    icon: Target,
    description: "Based on client feedback",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-24 pb-20">
          <div className="space-y-32">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                  Case Studies
                  <br />
                  <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                    success stories in action
                  </span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                  Explore detailed accounts of how we've helped businesses
                  transform through innovative technology solutions.
                </p>
              </div>
            </div>

            {/* Metrics Section */}
            <section className="container">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.title}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div className="mb-4">
                      <metric.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {metric.value}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {metric.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Studies Grid */}
            <section className="container">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Featured Case Studies
                </h2>
                <p className="text-lg text-muted-foreground">
                  Explore our most impactful projects
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {caseStudies.map((study) => (
                  <div
                    key={study.title}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <Link
                      href={study.href}
                      className="relative h-48 overflow-hidden"
                    >
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex-1">
                        <Link href={study.href} className="block group">
                          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                            {study.category}
                          </span>
                          <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {study.title}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground mb-4">
                          {study.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-accent/50 px-3 py-1 text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <div className="text-sm text-muted-foreground">
                              Duration
                            </div>
                            <div className="font-semibold">
                              {study.duration}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">
                              Team Size
                            </div>
                            <div className="font-semibold">{study.team}</div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <Link href={study.href}>
                          <Button
                            variant="ghost"
                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                          >
                            View Case Study
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
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
