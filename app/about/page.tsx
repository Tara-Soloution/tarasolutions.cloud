import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Heart,
  Target,
  Users,
  Lightbulb,
  Shield,
  Code,
  Globe,
  TrendingUp,
  Zap,
  Brain,
  Rocket,
  Cpu,
  Network,
  Cloud,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About Us | Tara Solutions",
  description:
    "Learn about Tara Solutions - a leading technology company delivering innovative solutions for modern businesses. Discover our mission, values, and the team behind our success.",
  keywords: [
    "about us",
    "company profile",
    "tech company",
    "team",
    "mission",
    "values",
    "technology solutions",
    "innovation",
    "digital transformation",
    "software development",
  ],
  openGraph: {
    title: "About Us | Tara Solutions",
    description:
      "Learn about Tara Solutions - a leading technology company delivering innovative solutions for modern businesses.",
    images: [
      {
        url: "/about-og.png",
        width: 1200,
        height: 630,
        alt: "About Tara Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Tara Solutions",
    description:
      "Learn about Tara Solutions - a leading technology company delivering innovative solutions for modern businesses.",
    images: ["/about-og.png"],
  },
  alternates: {
    canonical: "https://tarasolutions.cloud/about",
  },
};

const values = [
  {
    title: "Innovation First",
    description:
      "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
    icon: Lightbulb,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "Client Success",
    description:
      "Your success is our success. We're committed to delivering exceptional results.",
    icon: Target,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Quality Driven",
    description:
      "We maintain the highest standards in every project we undertake.",
    icon: Shield,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Global Reach",
    description:
      "We serve clients worldwide with localized solutions and global expertise.",
    icon: Globe,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

const stats = [
  {
    number: "20+",
    label: "Projects Completed",
    icon: Code,
  },
  {
    number: "10+",
    label: "Team Members",
    icon: Users,
  },
  {
    number: "3+",
    label: "Countries Served",
    icon: Globe,
  },
  {
    number: "99%",
    label: "Client Satisfaction",
    icon: Heart,
  },
];

const technologies = [
  {
    title: "Cloud Computing",
    description:
      "Leveraging the power of cloud platforms for scalable and efficient solutions.",
    icon: Cloud,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Implementing cutting-edge AI solutions for intelligent automation.",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Edge Computing",
    description: "Optimizing performance with distributed computing solutions.",
    icon: Cpu,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "5G & IoT",
    description: "Building connected solutions for the future of technology.",
    icon: Network,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "Tara Solutions was established with a vision to transform digital landscapes.",
  },
  {
    year: "2021",
    title: "Global Expansion",
    description:
      "Extended our services to international markets and grew our team.",
  },
  {
    year: "2022",
    title: "Innovation Award",
    description:
      "Recognized for outstanding contributions to technology innovation.",
  },
  {
    year: "2023",
    title: "20+ Projects",
    description:
      "Achieved milestone of successfully delivering over 20 projects.",
  },
];

export default function About() {
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
            <div className="container mx-auto px-4 relative pt-32 pb-20 sm:pt-40 sm:pb-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                  About Us
                  <br />
                  <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                    Our Story
                  </span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                  We're a team of passionate technologists dedicated to
                  transforming businesses through innovative solutions.
                </p>
                <div className="flex justify-center gap-4">
                  <Link href="/contact">
                    <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-green-500 hover:opacity-90">
                      <span className="relative z-10">Get Started</span>
                      <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    </Button>
                  </Link>
                  <Link href="/work">
                    <Button variant="outline" className="px-8 py-6 text-lg">
                      View Our Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <section className="container mx-auto px-4">
              <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-12">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To empower businesses with cutting-edge technology solutions
                    that drive growth, innovation, and success in the digital
                    age. We're committed to delivering excellence through
                    creativity, expertise, and unwavering dedication to our
                    clients.
                  </p>
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Our Values
                </h2>
                <p className="text-lg text-muted-foreground">
                  The principles that guide everything we do
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div
                      className={`mb-6 inline-flex rounded-xl p-4 ${value.bgColor}`}
                    >
                      <value.icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies Section */}
            <section className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Our Technology Stack
                </h2>
                <p className="text-lg text-muted-foreground">
                  Cutting-edge technologies we work with
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {technologies.map((tech) => (
                  <div
                    key={tech.title}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div
                      className={`mb-6 inline-flex rounded-xl p-4 ${tech.bgColor}`}
                    >
                      <tech.icon className={`h-8 w-8 ${tech.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                    <p className="text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Stats Section */}
            <section className="container mx-auto px-4">
              <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="inline-flex rounded-xl p-4 bg-primary/10 mb-4">
                        <stat.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-4xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Timeline Section */}
            <section className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Our Journey
                </h2>
                <p className="text-lg text-muted-foreground">
                  Milestones that mark our growth
                </p>
              </div>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />
                <div className="space-y-8 md:space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className="relative">
                      <div
                        className={`flex items-center ${
                          index % 2 === 0 ? "justify-start" : "justify-end"
                        }`}
                      >
                        <div
                          className={`w-full md:w-1/2 ${
                            index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                          }`}
                        >
                          <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 md:p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                            {/* Timeline dot */}
                            <div
                              className={`absolute top-0 h-4 w-4 bg-primary rounded-full transform -translate-y-1/2 ${
                                index % 2 === 0
                                  ? "right-0 translate-x-1/2"
                                  : "left-0 -translate-x-1/2"
                              }`}
                            />
                            {/* Mobile timeline indicator */}
                            <div className="md:hidden absolute -left-4 top-6 h-full w-0.5 bg-border" />
                            <div className="md:hidden absolute -left-5 top-6 h-3 w-3 rounded-full bg-primary" />
                            <div className="flex flex-col md:block">
                              <div className="text-sm font-semibold text-primary mb-2">
                                {milestone.year}
                              </div>
                              <h3 className="text-xl font-semibold mb-2">
                                {milestone.title}
                              </h3>
                              <p className="text-muted-foreground">
                                {milestone.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
