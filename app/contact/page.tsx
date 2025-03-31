"use client"

import CTASection from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageCircle, Map } from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"
import { useToast } from "@/components/ui/use-toast"
import ReCAPTCHA from "react-google-recaptcha"

export default function ContactPage() {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const captchaToken = await recaptchaRef.current?.executeAsync()

            if (!captchaToken) {
                throw new Error("Please complete the CAPTCHA verification")
            }

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    captchaToken
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message")
            }

            toast({
                title: "Success!",
                description: "Your message has been sent successfully.",
            })

            // Reset form and CAPTCHA
            setFormData({
                name: "",
                email: "",
                company: "",
                subject: "",
                message: ""
            })
            recaptchaRef.current?.reset()
        } catch (error) {
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to send message",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

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
                                <h1 className="tracking-tight bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                                    Let's Create Together
                                </h1>
                                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                                    Whether you're a startup or an enterprise, we're here to help you transform your ideas into reality.
                                    Our team of experts is ready to guide you through your digital journey.
                                </p>
                                <Link href="/work">
                                    <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-green-500 hover:opacity-90">
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
                                    <p className="text-muted-foreground">Kabul, Shar-e-Naw, Behind Etisalat Tower</p>
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
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium">
                                                    Name
                                                </label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium">
                                                    Email
                                                </label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="john@example.com"
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="company" className="text-sm font-medium">
                                                    Company
                                                </label>
                                                <Input
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    placeholder="Acme Inc."
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="subject" className="text-sm font-medium">
                                                    Subject
                                                </label>
                                                <Input
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    placeholder="How can we help?"
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-medium">
                                                    Message
                                                </label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Tell us about your project or question..."
                                                    className="min-h-[150px]"
                                                    required
                                                />
                                            </div>

                                            <div className="flex justify-center">
                                                <ReCAPTCHA
                                                    ref={recaptchaRef}
                                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                className="w-full"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? "Sending..." : "Send Message"}
                                            </Button>
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
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3286.520120951034!2d69.16825143623834!3d34.54038409772013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssg!4v1743443092911!5m2!1sen!2ssg"
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