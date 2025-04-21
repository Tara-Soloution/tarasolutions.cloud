"use client";

import { useState, useRef, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        const navbarHeight = 80;
        const elementPosition = contactForm.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [mounted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!recaptchaRef.current) {
        throw new Error("reCAPTCHA not initialized");
      }

      const captchaToken = await recaptchaRef.current.executeAsync();

      if (!captchaToken) {
        throw new Error("Failed to get CAPTCHA token");
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
      recaptchaRef.current.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to send message",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="container mx-auto px-4">
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
                  size="invisible"
                  onError={() => {
                    toast({
                      title: "Error",
                      description:
                        "Failed to initialize CAPTCHA. Please try again.",
                      variant: "destructive",
                    });
                  }}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
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
  );
}
