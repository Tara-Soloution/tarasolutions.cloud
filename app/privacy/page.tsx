import { Metadata } from "next";
import CTASection from "@/components/cta-section";
import { Shield, Lock, FileCheck, UserCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Our commitment to protecting your privacy and personal information. Learn how we collect, use, and safeguard your data.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "data privacy",
    "user privacy",
    "privacy rights",
    "data collection",
    "privacy commitment",
  ],
  openGraph: {
    title: "Privacy Policy | Tara Solutions",
    description:
      "Our commitment to protecting your privacy and personal information.",
    images: [
      {
        url: "/privacy-og.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Tara Solutions",
    description:
      "Our commitment to protecting your privacy and personal information.",
    images: ["/privacy-og.png"],
  },
  alternates: {
    canonical: "https://tarasolutions.cloud/privacy",
  },
};

const privacyFeatures = [
  {
    title: "Data Collection",
    description:
      "We collect only the information necessary to provide and improve our services",
    icon: FileCheck,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Data Security",
    description:
      "Your information is protected with industry-standard security measures",
    icon: Lock,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "User Rights",
    description:
      "You have full control over your personal data and privacy settings",
    icon: UserCheck,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Transparency",
    description: "We're committed to being open about our data practices",
    icon: Shield,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
];

export default function Privacy() {
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
            <div className="container mx-auto px-4">
              <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                    Privacy Policy
                    <br />
                    <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                      Your data, our responsibility
                    </span>
                  </h1>
                  <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
                    Our commitment to protecting your privacy and personal
                    information
                  </p>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <section className="container mx-auto px-4ainer">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Our Privacy Commitments
                </h2>
                <p className="text-lg text-muted-foreground">
                  Built with security and transparency in mind
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {privacyFeatures.map((feature) => (
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
            <section className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Detailed Privacy Information
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Understanding our data practices
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                    <h3 className="text-2xl font-semibold mb-4">
                      Information We Collect
                    </h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Name and contact information</li>
                      <li>Account credentials</li>
                      <li>Payment information</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                    <h3 className="text-2xl font-semibold mb-4">
                      How We Use Your Information
                    </h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Providing and improving our services</li>
                      <li>Processing your transactions</li>
                      <li>Sending you important updates</li>
                      <li>Responding to your requests</li>
                    </ul>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                    <h3 className="text-2xl font-semibold mb-4">
                      Data Security
                    </h3>
                    <p className="text-muted-foreground">
                      We implement appropriate security measures to protect your
                      personal information from unauthorized access, alteration,
                      disclosure, or destruction.
                    </p>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                    <h3 className="text-2xl font-semibold mb-4">Your Rights</h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Access your personal data</li>
                      <li>Correct inaccurate data</li>
                      <li>Request deletion of your data</li>
                      <li>Object to data processing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="container mx-auto px-4">
              <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-12 text-center">
                <div className="max-w-2xl mx-auto">
                  <div className="inline-flex rounded-xl p-4 bg-primary/10 mb-6">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Questions About Our Privacy Policy?
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
