import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Server,
  Shield,
  Zap,
  Clock,
  Database,
  Cpu,
  HardDrive,
  ShieldCheck,
  Check,
} from "lucide-react";

import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Premium Web Hosting Services | Fast, Secure & Reliable",
  description:
    "Get lightning-fast, secure, and reliable web hosting with AI-powered tools. Choose from our Stellar, Stellar Plus, and Stellar Business plans. 99.9% uptime guarantee, free SSL, and 24/7 support.",
  keywords:
    "web hosting, website hosting, cloud hosting, shared hosting, SSL hosting, fast hosting, secure hosting, reliable hosting, AI hosting, website builder",
  openGraph: {
    title: "Premium Web Hosting Services | Fast, Secure & Reliable",
    description:
      "Get lightning-fast, secure, and reliable web hosting with AI-powered tools. Choose from our Stellar, Stellar Plus, and Stellar Business plans.",
    type: "website",
    url: "https://tarasolutions.cloud/hosting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tara Solutions Web Hosting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Web Hosting Services | Fast, Secure & Reliable",
    description:
      "Get lightning-fast, secure, and reliable web hosting with AI-powered tools. Choose from our Stellar, Stellar Plus, and Stellar Business plans.",
    images: ["/og-image.png"],
  },
};

const hostingPlans = [
  {
    title: "Stellar",
    description: "Perfect for starting your online journey",
    price: "€6.99",
    period: "/mo",
    features: [
      "3 Websites",
      "20 GB SSD",
      "30 Mailboxes",
      "Cloud Storage",
      "AI Website Builder",
      "AI Tools",
    ],
    popular: false,
    renewalInfo: "Renews at €6.99/month",
  },
  {
    title: "Stellar Plus",
    description: "Most popular choice for growing websites",
    price: "€9.99",
    period: "/mo",
    features: [
      "Unlimited websites",
      "Unmetered SSD",
      "Unlimited mailboxes",
      "AutoBackup & Cloud Storage",
      "AI Website Builder",
      "AI Tools",
    ],
    popular: true,
    renewalInfo: "Renews at €9.99/month",
  },
  {
    title: "Stellar Business",
    description: "Advanced features for business websites",
    price: "€12.99",
    period: "/mo",
    features: [
      "Unlimited websites",
      "50 GB SSD",
      "Unlimited mailboxes",
      "AutoBackup & Cloud Storage",
      "AI Website Builder",
      "AI Tools",
    ],
    popular: false,
    renewalInfo: "Renews at €12.99/month",
  },
];

const benefits = [
  {
    title: "99.9% Uptime",
    description: "Reliable hosting with guaranteed uptime",
    icon: Server,
  },
  {
    title: "Free SSL",
    description: "Secure your website with free SSL certificates",
    icon: Shield,
  },
  {
    title: "Fast Loading",
    description: "Optimized servers for maximum speed",
    icon: Zap,
  },
  {
    title: "24/7 Support",
    description: "Expert support available around the clock",
    icon: Clock,
  },
];

const features = [
  {
    title: "High Performance",
    description: "Lightning-fast servers with SSD storage",
    icon: Cpu,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "Enterprise Security",
    description: "Advanced security measures to protect your data",
    icon: ShieldCheck,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    title: "Modern Infrastructure",
    description: "State-of-the-art hosting infrastructure",
    icon: Database,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    title: "Scalable Storage",
    description: "Easily upgrade your storage as you grow",
    icon: HardDrive,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
];

export default function HostingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Premium Web Hosting Services",
    description:
      "Get lightning-fast, secure, and reliable web hosting with AI-powered tools",
    offers: {
      "@type": "AggregateOffer",
      offers: hostingPlans.map((plan) => ({
        "@type": "Offer",
        name: plan.title,
        description: plan.description,
        price: plan.price.replace("€", ""),
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: plan.price.replace("€", ""),
          priceCurrency: "EUR",
          billingIncrement: 1,
          unitText: "MONTH",
        },
      })),
    },
  };

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto px-4 pt-24 pb-20">
          <div className="space-y-32">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16 relative pt-32 pb-20 sm:pt-40 sm:pb-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                  Web Hosting That
                  <br />
                  <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                    Powers Your Success
                  </span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                  Fast, secure, and reliable web hosting with AI-powered tools
                  and unmetered resources.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-green-500 hover:opacity-90">
                      <span className="relative z-10">Get Started</span>
                      <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Hosting Plans Section */}
            <section className="container mx-auto px-4 py-16">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Choose Your Hosting Plan
                </h2>
                <p className="text-lg text-muted-foreground">
                  Scalable solutions for every stage of your growth
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
                {hostingPlans.map((plan) => (
                  <div
                    key={plan.title}
                    className={`group relative flex flex-col overflow-visible rounded-2xl border bg-card transition-all hover:shadow-lg hover:border-primary ${
                      plan.popular
                        ? "border-2 border-primary shadow-lg shadow-primary/20 lg:-mt-4 lg:mb-4 scale-[1.02]"
                        : "border-border hover:shadow-primary/20"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#84fab0] to-[#8fd3f4] px-10 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm z-10">
                        Most Popular
                      </div>
                    )}
                    <div
                      className={`p-8 ${
                        plan.popular
                          ? "pt-8 bg-gradient-to-b from-primary/[0.03] to-transparent"
                          : ""
                      }`}
                    >
                      <div className={`${plan.popular ? "pt-4" : ""}`}>
                        <h3
                          className={`text-2xl font-semibold mb-3 ${
                            plan.popular ? "text-primary" : ""
                          }`}
                        >
                          {plan.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {plan.description}
                        </p>
                        <div className="mb-6">
                          <div className="flex items-baseline">
                            <span
                              className={`text-4xl font-bold ${
                                plan.popular ? "text-primary" : ""
                              }`}
                            >
                              {plan.price}
                            </span>
                            <span className="text-muted-foreground ml-2">
                              {plan.period}
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground mt-2">
                            {plan.renewalInfo}
                          </div>
                        </div>
                        <Link href="/contact" className="block mb-8">
                          <Button
                            className={`w-full relative group px-6 py-5 text-base ${
                              plan.popular
                                ? "bg-gradient-to-r from-primary to-green-500 hover:opacity-90 shadow-md hover:shadow-lg transition-shadow duration-300"
                                : "bg-primary/10 text-primary hover:bg-primary/20"
                            }`}
                          >
                            <span className="relative z-10">Get Started</span>
                            {plan.popular && (
                              <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                            )}
                          </Button>
                        </Link>
                        <ul className="space-y-4">
                          {plan.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-3"
                            >
                              <div
                                className={`rounded-full p-1 ${
                                  plan.popular
                                    ? "bg-primary/20"
                                    : "bg-primary/10"
                                }`}
                              >
                                <Check
                                  className={`h-4 w-4 ${
                                    plan.popular
                                      ? "text-primary"
                                      : "text-primary/80"
                                  }`}
                                />
                              </div>
                              <span
                                className={plan.popular ? "font-medium" : ""}
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="container mx-auto px-4 py-16">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Why Choose Our Hosting?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Experience the power of reliable web hosting
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div className="mb-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
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

            {/* Features Section */}
            <section className="container mx-auto px-4 py-16">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Core Features
                </h2>
                <p className="text-lg text-muted-foreground">
                  Built with excellence and reliability in mind
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div
                      className={`mb-6 inline-flex rounded-xl p-4 ${feature.bgColor}`}
                    >
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Stats Section */}
            <section className="container mx-auto px-4 py-16">
              <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      99.9%
                    </div>
                    <div className="text-muted-foreground">
                      Uptime Guarantee
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      24/7
                    </div>
                    <div className="text-muted-foreground">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      100%
                    </div>
                    <div className="text-muted-foreground">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      10k+
                    </div>
                    <div className="text-muted-foreground">Websites Hosted</div>
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
