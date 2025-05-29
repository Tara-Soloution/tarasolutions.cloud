import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
  Brain,
  Laptop,
  Shield,
  BarChart,
  Clock,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/cta-section";

const features = [
  {
    title: "Learning Management Systems",
    description:
      "Comprehensive platforms for course delivery, student engagement, and progress tracking",
    icon: Laptop,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Student Information Systems",
    description:
      "Streamlined management of student data, enrollment, and academic records",
    icon: Users,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Virtual Classrooms",
    description:
      "Interactive online learning environments with real-time collaboration tools",
    icon: MessageSquare,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Assessment Tools",
    description:
      "Advanced testing and evaluation systems with analytics and feedback",
    icon: BarChart,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

const benefits = [
  {
    title: "Enhanced Learning Experience",
    description:
      "Interactive and engaging learning environments that promote student success",
    icon: Brain,
  },
  {
    title: "Time-Saving Tools",
    description:
      "Automated processes that free up time for teaching and learning",
    icon: Clock,
  },
  {
    title: "Data Security",
    description:
      "Robust security measures to protect sensitive educational information",
    icon: Shield,
  },
  {
    title: "Comprehensive Resources",
    description: "Access to a wide range of educational materials and tools",
    icon: BookOpen,
  },
];

export default function EducationPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <div className="pt-24 pb-20">
          <div className="space-y-32">
            {/* Hero Section */}
            <div className="container mx-auto px-4">
              <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <div className="inline-flex rounded-xl bg-purple-500/10 p-4 mb-8">
                    <GraduationCap className="h-8 w-8 text-purple-500" />
                  </div>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                    Education Solutions
                    <br />
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                      Empowering Learning
                    </span>
                  </h1>
                  <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                    Transform your educational institution with cutting-edge
                    technology solutions designed to enhance learning outcomes
                    and streamline administrative processes.
                  </p>
                  <Link href="/contact">
                    <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">
                      <span className="relative z-10">Get Started</span>
                      <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <section className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Our Education Solutions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Comprehensive tools and platforms for modern education
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    <div
                      className={`mb-6 inline-flex rounded-xl p-4 ${feature.bgColor}`}
                    >
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Why Choose Our Education Solutions?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Experience the benefits of modern educational technology
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    <div className="mb-4">
                      <benefit.icon className="h-8 w-8 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Stats Section */}
            <section className="container mx-auto px-4">
              <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-500 mb-2">
                      50+
                    </div>
                    <div className="text-muted-foreground">
                      Educational Institutions
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-500 mb-2">
                      100K+
                    </div>
                    <div className="text-muted-foreground">Students Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-500 mb-2">
                      98%
                    </div>
                    <div className="text-muted-foreground">
                      Satisfaction Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-500 mb-2">
                      24/7
                    </div>
                    <div className="text-muted-foreground">
                      Technical Support
                    </div>
                  </div>
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
