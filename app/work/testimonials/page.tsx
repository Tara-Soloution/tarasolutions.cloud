import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Testimonials | Tara Solutions",
    description: "Read what our clients say about working with Tara Solutions. Discover how we've helped businesses achieve their goals.",
}

const testimonials = [
    {
        quote: "Tara Solutions transformed our business with their innovative technology solutions. Their expertise and dedication to our success were invaluable.",
        author: "Sarah Johnson",
        role: "CEO",
        company: "Retail Giant Inc.",
        image: "/testimonials/sarah.jpg",
    },
    {
        quote: "The team at Tara Solutions delivered exceptional results. Their attention to detail and commitment to quality exceeded our expectations.",
        author: "Michael Chen",
        role: "CTO",
        company: "FinTech Solutions",
        image: "/testimonials/michael.jpg",
    },
    {
        quote: "Working with Tara Solutions was a game-changer for our healthcare platform. Their expertise in security and compliance was crucial for our success.",
        author: "Dr. Emily Rodriguez",
        role: "Medical Director",
        company: "HealthCare Plus",
        image: "/testimonials/emily.jpg",
    },
    {
        quote: "The mobile app developed by Tara Solutions has revolutionized how we serve our customers. Their technical expertise and user-centric approach made all the difference.",
        author: "David Kim",
        role: "Product Manager",
        company: "Banking Solutions",
        image: "/testimonials/david.jpg",
    },
    {
        quote: "Tara Solutions helped us modernize our manufacturing processes. Their enterprise solutions have significantly improved our efficiency and productivity.",
        author: "Lisa Patel",
        role: "Operations Director",
        company: "Manufacturing Corp",
        image: "/testimonials/lisa.jpg",
    },
    {
        quote: "The educational platform developed by Tara Solutions has transformed how we deliver online learning. Their innovative approach to EdTech is truly impressive.",
        author: "James Wilson",
        role: "Education Director",
        company: "Learning Institute",
        image: "/testimonials/james.jpg",
    },
]

export default function TestimonialsPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                        Client Testimonials
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        What our clients say about working with us
                    </p>
                </div>
            </div>

            {/* Testimonials Grid */}
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border hover:from-primary/10 hover:to-purple-500/10 transition-all duration-300"
                        >
                            <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-2xl font-bold text-primary">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                </div>
                            </div>
                            <blockquote className="text-lg mb-6">
                                "{testimonial.quote}"
                            </blockquote>
                            <div>
                                <div className="font-semibold">{testimonial.author}</div>
                                <div className="text-sm text-muted-foreground">
                                    {testimonial.role} at {testimonial.company}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">98%</div>
                        <div className="text-muted-foreground">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">150+</div>
                        <div className="text-muted-foreground">Projects Completed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">50+</div>
                        <div className="text-muted-foreground">Enterprise Clients</div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <h2 className="text-3xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Let's create something amazing together
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    )
} 