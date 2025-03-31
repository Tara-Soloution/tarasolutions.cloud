import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Company | Tara Solutions",
    description: "Learn about Tara Solutions' story, mission, and values. Discover how we're shaping the future of technology solutions.",
}

export default function CompanyPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                        Our Story
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Building the future of technology solutions with innovation and expertise
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                        <p className="text-muted-foreground mb-6">
                            Tara Solutions is a leading technology consulting and development company dedicated to helping businesses thrive in the digital age. Founded with a vision to bridge the gap between technology and business success, we've grown into a trusted partner for organizations worldwide.
                        </p>
                        <p className="text-muted-foreground">
                            Our journey began with a simple mission: to make technology accessible and beneficial for businesses of all sizes. Today, we continue to uphold this mission while pushing the boundaries of what's possible in the tech world.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-green-500/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="text-6xl font-bold text-primary mb-4">2018</div>
                                <div className="text-xl text-muted-foreground">Year Founded</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-green-500/5 border">
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-muted-foreground">
                            To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital era.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-green-500/5 border">
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-muted-foreground">
                            To be the global leader in technology solutions, setting new standards for innovation and client success.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-green-500/5 border">
                            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                            <p className="text-muted-foreground">
                                We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-green-500/5 border">
                            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                            <p className="text-muted-foreground">
                                We maintain the highest standards in everything we do, from code quality to client service.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-green-500/5 border">
                            <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                            <p className="text-muted-foreground">
                                We operate with transparency and honesty, building trust with our clients and partners.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Join us in shaping the future of technology
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-green-500 text-white font-medium hover:opacity-90 transition-opacity"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    )
} 