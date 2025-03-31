import CTASection from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Globe, Building2 } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
    return (
        <div className="space-y-24">
            {/* Hero Section */}
            <section className="container flex min-h-[60vh] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
                <div className="space-y-4">
                    <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                        Let's Create Together
                    </h1>
                    <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Whether you're a startup or an enterprise, we're here to help you transform your ideas into reality.
                        Our team of experts is ready to guide you through your digital journey.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">

                    <Link href="/work">
                        <Button variant="outline" size="lg">
                            View Our Work
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Contact Section */}
            <section className="container space-y-16 py-24 md:py-32">
                <div className="mx-auto max-w-[58rem] text-center">
                    <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Get in Touch</h2>
                    <p className="mt-4 text-muted-foreground sm:text-lg">
                        Have a question or want to learn more? We'd love to hear from you.
                    </p>
                </div>

                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">Contact Information</h3>
                            <p className="text-muted-foreground">
                                Reach out to us through any of these channels. We typically respond within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <Mail className="mt-1 h-5 w-5 text-primary" />
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <p className="text-sm text-muted-foreground">info@tarasolutions.cloud</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Phone className="mt-1 h-5 w-5 text-primary" />
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <p className="text-sm text-muted-foreground">+93 70 306 4120</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <MapPin className="mt-1 h-5 w-5 text-primary" />
                                <div>
                                    <h4 className="font-medium">Office</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Kabul, Shar-e-Naw
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">Business Hours</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>Saturday - Thursday: 9:00 AM - 6:00 PM</p>
                                <p>Friday: Closed</p>
                            </div>
                        </div>
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
            </section>

            {/* CTA Section */}
            <section className="container space-y-8 py-24 md:py-32">
                <div className="mx-auto max-w-[58rem] text-center">
                    <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Ready to Transform Your Business?</h2>
                    <p className="mt-4 text-muted-foreground sm:text-lg">
                        Join hundreds of satisfied clients who have partnered with us to achieve their digital goals.
                    </p>
                </div>

                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 text-center">
                        <MessageSquare className="h-12 w-12 text-primary" />
                        <h3 className="text-xl font-bold">Expert Consultation</h3>
                        <p className="text-sm text-muted-foreground">
                            Get personalized advice from our team of industry experts
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 text-center">
                        <Globe className="h-12 w-12 text-primary" />
                        <h3 className="text-xl font-bold">Global Reach</h3>
                        <p className="text-sm text-muted-foreground">
                            Work with a team that serves clients worldwide
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 text-center">
                        <Building2 className="h-12 w-12 text-primary" />
                        <h3 className="text-xl font-bold">Enterprise Ready</h3>
                        <p className="text-sm text-muted-foreground">
                            Solutions scaled for businesses of all sizes
                        </p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Link href="/contact">
                        <Button size="lg">
                            Start Your Project
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </section>
            <CTASection />
        </div>
    )
} 