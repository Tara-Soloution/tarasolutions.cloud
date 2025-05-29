import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Map } from "lucide-react";
import Link from "next/link";
import ContactForm from "../../components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Tara Solutions - Get in Touch",
  description:
    "Contact Tara Solutions for expert software development services. Reach out via email, phone, or fill out our contact form. We're here to help transform your ideas into reality.",
  keywords:
    "contact Tara Solutions, software development contact, tech company contact, Afghanistan tech company, software development services",
  openGraph: {
    title: "Contact Us | Tara Solutions - Get in Touch",
    description:
      "Contact Tara Solutions for expert software development services. Reach out via email, phone, or fill out our contact form.",
    type: "website",
    locale: "en_US",
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
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
            <section className="container mx-auto px-4">
              <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h1 className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                    Let's Create Together
                  </h1>
                  <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                    Whether you're a startup or an enterprise, we're here to
                    help you transform your ideas into reality. Our team of
                    experts is ready to guide you through your digital journey.
                  </p>
                  <Link href="/work">
                    <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-green-500 hover:opacity-90">
                      <span className="relative z-10">View Our Work</span>
                      <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

            {/* Contact Information Section */}
            <section id="contact-form" className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground">
                  Choose your preferred way to connect with us
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <article className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <div className="mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:info@tarasolutions.cloud"
                      className="hover:text-primary transition-colors"
                    >
                      info@tarasolutions.cloud
                    </a>
                  </p>
                </article>

                <article className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <div className="mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="tel:+93703064120"
                      className="hover:text-primary transition-colors"
                    >
                      +93 70 306 4120
                    </a>
                  </p>
                </article>

                <article className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <div className="mb-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="https://wa.me/93703064120"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      +93 70 306 4120
                    </a>
                  </p>
                </article>

                <article className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <div className="mb-4">
                    <Map className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">
                    Kabul, Shar-e-Naw, Behind Etisalat Tower
                  </p>
                </article>
              </div>
            </section>

            {/* Contact Form Section */}
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
