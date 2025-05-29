import { Metadata } from "next";
import CTASection from "@/components/cta-section";
import { Cookie, Shield, Settings, ChartBar, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn about how we use cookies and similar technologies to enhance your browsing experience and improve our services.",
  keywords: [
    "cookie policy",
    "cookies",
    "web cookies",
    "browser cookies",
    "cookie usage",
    "cookie consent",
    "cookie preferences",
    "tracking cookies",
  ],
  openGraph: {
    title: "Cookie Policy | Tara Solutions",
    description:
      "Learn about how we use cookies and similar technologies to enhance your browsing experience.",
    images: [
      {
        url: "/cookies-og.png",
        width: 1200,
        height: 630,
        alt: "Cookie Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Tara Solutions",
    description:
      "Learn about how we use cookies and similar technologies to enhance your browsing experience.",
    images: ["/cookies-og.png"],
  },
  alternates: {
    canonical: "https://tarasolutions.cloud/cookies",
  },
};

const cookieFeatures = [
  {
    title: "Essential Cookies",
    description: "Core functionality cookies required for website operation",
    icon: Shield,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Analytics Cookies",
    description: "Help us understand how visitors use our website",
    icon: ChartBar,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Functional Cookies",
    description: "Enable enhanced features and personalization",
    icon: Settings,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Cookie Control",
    description: "You have full control over cookie preferences",
    icon: Cookie,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
];

export default function Cookies() {
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
            <div className="container mx-auto px-4 ">
              <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                    Cookie Policy
                    <br />
                    <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                      Understanding our cookie usage
                    </span>
                  </h1>
                  <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
                    Learn how we use cookies to improve your browsing experience
                  </p>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <section className="container mx-auto px-4 ">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Types of Cookies We Use
                </h2>
                <p className="text-lg text-muted-foreground">
                  Understanding our cookie categories
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {cookieFeatures.map((feature) => (
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

            {/* Content Sections */}
            <section className="container mx-auto px-4 ">
              <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Cookie Information
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Detailed information about our cookie practices
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                    <h3 className="text-2xl font-semibold mb-4">
                      What Are Cookies?
                    </h3>
                    <p className="text-muted-foreground">
                      Cookies are small text files that are placed on your
                      computer or mobile device when you visit our website. They
                      help us provide you with a better experience and enable
                      certain features to function properly.
                    </p>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                    <h3 className="text-2xl font-semibold mb-4">
                      How to Control Cookies
                    </h3>
                    <p className="text-muted-foreground">
                      You can control and/or delete cookies as you wish. You can
                      delete all cookies that are already on your computer and
                      you can set most browsers to prevent them from being
                      placed.
                    </p>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                    <h3 className="text-2xl font-semibold mb-4">
                      Third-Party Cookies
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      We may use third-party services that use cookies:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Google Analytics</li>
                      <li>Social Media Platforms</li>
                      <li>Payment Processors</li>
                    </ul>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                    <h3 className="text-2xl font-semibold mb-4">
                      Policy Updates
                    </h3>
                    <p className="text-muted-foreground">
                      We may update this Cookie Policy from time to time to
                      reflect changes in our practices or for operational,
                      legal, or regulatory reasons.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="container mx-auto px-4 ">
              <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-12 text-center">
                <div className="max-w-2xl mx-auto">
                  <div className="inline-flex rounded-xl p-4 bg-primary/10 mb-6">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Questions About Our Cookie Policy?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    We're here to help. Contact us at info@tarasolutions.cloud
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}
