import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShoppingBag,
  CreditCard,
  BarChart,
  Users,
  Shield,
  Brain,
  Clock,
  Package,
  LineChart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/cta-section";

const features = [
  {
    title: "Point of Sale Systems",
    description:
      "Modern POS solutions with integrated payment processing and inventory management",
    icon: CreditCard,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Inventory Management",
    description: "Real-time stock tracking and automated reordering systems",
    icon: Package,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Customer Analytics",
    description: "Advanced customer insights and behavior analysis tools",
    icon: Users,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "E-commerce Platforms",
    description:
      "Seamless online shopping experiences with integrated backend systems",
    icon: LineChart,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

const benefits = [
  {
    title: "Enhanced Customer Experience",
    description:
      "Streamlined shopping experiences that boost customer satisfaction",
    icon: Brain,
  },
  {
    title: "Secure Transactions",
    description: "Advanced security measures for safe payment processing",
    icon: Shield,
  },
  {
    title: "Operational Efficiency",
    description: "Automated systems that reduce manual tasks and errors",
    icon: Clock,
  },
  {
    title: "Data-Driven Insights",
    description: "Comprehensive analytics for informed business decisions",
    icon: BarChart,
  },
];

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
        <div className="pt-24 pb-20">
          <div className="space-y-32">
            {/* Hero Section */}
            <div className="container mx-auto px-4">
              <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <div className="inline-flex rounded-xl bg-green-500/10 p-4 mb-8">
                    <ShoppingBag className="h-8 w-8 text-green-500" />
                  </div>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                    Retail Solutions
                    <br />
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                      Transforming Commerce
                    </span>
                  </h1>
                  <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                    Revolutionize your retail operations with cutting-edge
                    technology solutions designed to enhance customer experience
                    and drive business growth.
                  </p>
                  <Link href="/contact">
                    <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-90">
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
                  Our Retail Solutions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Comprehensive tools and platforms for modern retail
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-green-500/20"
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
                  Why Choose Our Retail Solutions?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Experience the benefits of modern retail technology
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-green-500/20"
                  >
                    <div className="mb-4">
                      <benefit.icon className="h-8 w-8 text-green-500" />
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
                    <div className="text-4xl font-bold text-green-500 mb-2">
                      50+
                    </div>
                    <div className="text-muted-foreground">
                      Retail Locations
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">
                      10%
                    </div>
                    <div className="text-muted-foreground">Sales Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">
                      98%
                    </div>
                    <div className="text-muted-foreground">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">
                      12/7
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
