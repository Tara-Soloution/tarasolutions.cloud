import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Portfolio | Tara Solutions",
    description: "Explore our portfolio of successful projects and solutions. See how we've helped businesses transform their digital presence.",
}

const portfolioItems = [
    {
        title: "E-commerce Platform",
        category: "Web Development",
        description: "A modern e-commerce platform with advanced features and seamless user experience.",
        technologies: ["React", "Node.js", "MongoDB", "AWS"],
        image: "/portfolio/ecommerce.jpg",
        link: "/work/case-studies#ecommerce",
    },
    {
        title: "Mobile Banking App",
        category: "Mobile Development",
        description: "A secure and user-friendly mobile banking application for a leading financial institution.",
        technologies: ["React Native", "Node.js", "PostgreSQL", "Azure"],
        image: "/portfolio/banking.jpg",
        link: "/work/case-studies#banking",
    },
    {
        title: "Healthcare Dashboard",
        category: "Web Development",
        description: "A comprehensive healthcare management dashboard for medical professionals.",
        technologies: ["Vue.js", "Python", "PostgreSQL", "GCP"],
        image: "/portfolio/healthcare.jpg",
        link: "/work/case-studies#healthcare",
    },
    {
        title: "Inventory Management",
        category: "Enterprise Solutions",
        description: "An enterprise-level inventory management system for a manufacturing company.",
        technologies: ["Angular", "Java", "MySQL", "AWS"],
        image: "/portfolio/inventory.jpg",
        link: "/work/case-studies#inventory",
    },
    {
        title: "Learning Platform",
        category: "EdTech",
        description: "An interactive learning platform for online education and training.",
        technologies: ["React", "Django", "MongoDB", "DigitalOcean"],
        image: "/portfolio/education.jpg",
        link: "/work/case-studies#education",
    },
    {
        title: "Analytics Dashboard",
        category: "Data Visualization",
        description: "A powerful analytics dashboard for business intelligence and reporting.",
        technologies: ["React", "Python", "PostgreSQL", "AWS"],
        image: "/portfolio/analytics.jpg",
        link: "/work/case-studies#analytics",
    },
]

export default function PortfolioPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                        Our Portfolio
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Explore our collection of successful projects and solutions
                    </p>
                </div>
            </div>

            {/* Portfolio Grid */}
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-green-500/5 border hover:from-primary/10 hover:to-green-500/10 transition-all duration-300"
                        >
                            <div className="relative h-48">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-green-500/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-4xl font-bold text-primary">
                                        {item.title.charAt(0)}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-2">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="font-semibold mb-2">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {item.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 rounded-md text-sm bg-primary/5 text-primary"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <a
                                    href={item.link}
                                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-green-500 text-white font-medium hover:opacity-90 transition-opacity"
                                >
                                    View Case Study
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Let's create something amazing together
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