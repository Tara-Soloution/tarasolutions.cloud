import CTASection from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Globe, Building2, MessageCircle, Map } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
                                <h1 className="tracking-tight bg-gradient-to-r from-primary to-purple-300 bg-clip-text text-transparent text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                                    Let's Create Together
                                </h1>
                                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                                    Whether you're a startup or an enterprise, we're here to help you transform your ideas into reality.
                                    Our team of experts is ready to guide you through your digital journey.
                                </p>
                                <Link href="/work">
                                    <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-purple-500 hover:opacity-90">
                                        <span className="relative z-10">View Our Work</span>
                                        <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Contact Information Section */}
                        <section className="container">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get in Touch</h2>
                                <p className="text-lg text-muted-foreground">Choose your preferred way to connect with us</p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20">
                                    <div className="mb-4">
                                        <Mail className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                                    <p className="text-muted-foreground">info@tarasolutions.cloud</p>
                                </div>

                                <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20">
                                    <div className="mb-4">
                                        <Phone className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                                    <p className="text-muted-foreground">+93 70 306 4120</p>
                                </div>

                                <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20">
                                    <div className="mb-4">
                                        <MessageCircle className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                                    <p className="text-muted-foreground">+93 70 306 4120</p>
                                </div>

                                <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20">
                                    <div className="mb-4">
                                        <Map className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                                    <p className="text-muted-foreground">Kabul, Shar-e-Naw</p>
                                </div>
                            </div>
                        </section>

                        {/* Contact Form Section */}
                        <section className="container">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold">Send us a Message</h3>
                                        <p className="text-muted-foreground">
                                            Fill out the form and we'll get back to you within 24 hours.
                                        </p>
                                    </div>

                                    <div className="rounded-lg border bg-card p-8">
                                        <form className="space-y-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium">
                                                    Name
                                                </label>
                                                <Input id="name" placeholder="John Doe" />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium">
                                                    Email
                                                </label>
                                                <Input id="email" type="email" placeholder="john@example.com" />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="company" className="text-sm font-medium">
                                                    Company
                                                </label>
                                                <Input id="company" placeholder="Acme Inc." />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="subject" className="text-sm font-medium">
                                                    Subject
                                                </label>
                                                <Input id="subject" placeholder="How can we help?" />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-medium">
                                                    Message
                                                </label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Tell us about your project or question..."
                                                    className="min-h-[150px]"
                                                />
                                            </div>

                                            <Button className="w-full">Send Message</Button>
                                        </form>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold">Business Hours</h3>
                                        <div className="space-y-2 text-muted-foreground">
                                            <p>Saturday - Thursday: 9:00 AM - 6:00 PM</p>
                                            <p>Friday: Closed</p>
                                        </div>
                                    </div>

                                    <div className="rounded-lg border bg-card p-8">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.828104348517!2d69.17052531545678!3d34.528189979999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d171b9f4f2c3c1%3A0x38d171b9f4f2c3c1!2sShar-e-Naw%2C%20Kabul%2C%20Afghanistan!5e0!3m2!1sen!2s!4v1648640000000!5m2!1sen!2s"
                                            width="100%"
                                            height="450"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="rounded-lg"
                                        />
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
    )
} 