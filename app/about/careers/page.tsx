import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Careers | Tara Solutions",
    description: "Join Tara Solutions' team of innovators. Explore exciting career opportunities in technology and make an impact.",
}

const openPositions = [
    {
        title: "Senior Full Stack Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        description: "We're looking for an experienced Full Stack Developer to join our engineering team and help build cutting-edge solutions.",
        requirements: [
            "5+ years of experience in full-stack development",
            "Strong expertise in React, Node.js, and cloud technologies",
            "Experience with microservices architecture",
            "Excellent problem-solving skills",
        ],
    },
    {
        title: "Cloud Solutions Architect",
        department: "Cloud",
        location: "Hybrid",
        type: "Full-time",
        description: "Join our cloud team to design and implement scalable cloud solutions for enterprise clients.",
        requirements: [
            "8+ years of experience in cloud architecture",
            "Expertise in AWS, Azure, or GCP",
            "Strong understanding of security best practices",
            "Experience with infrastructure as code",
        ],
    },
    {
        title: "UI/UX Designer",
        department: "Design",
        location: "Remote",
        type: "Full-time",
        description: "Help us create beautiful and intuitive user interfaces for our clients' applications.",
        requirements: [
            "3+ years of experience in UI/UX design",
            "Proficiency in Figma and Adobe Creative Suite",
            "Strong portfolio of previous work",
            "Experience with design systems",
        ],
    },
]

export default function CareersPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                        Join Our Team
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Build the future of technology with us
                    </p>
                </div>
            </div>

            {/* Why Join Us Section */}
            <div className="container mx-auto px-4 mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Why Join Tara Solutions?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-purple-500/5 border">
                        <h3 className="text-xl font-semibold mb-3">Growth & Learning</h3>
                        <p className="text-muted-foreground">
                            Continuous learning opportunities and career development programs to help you grow professionally.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-purple-500/5 border">
                        <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
                        <p className="text-muted-foreground">
                            Flexible working hours and remote work options to maintain a healthy work-life balance.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-purple-500/5 border">
                        <h3 className="text-xl font-semibold mb-3">Competitive Benefits</h3>
                        <p className="text-muted-foreground">
                            Comprehensive health insurance, competitive salary, and other benefits to support your well-being.
                        </p>
                    </div>
                </div>
            </div>

            {/* Open Positions */}
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
                <div className="space-y-6">
                    {openPositions.map((position, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-purple-500/5 border hover:from-primary/10 hover:to-purple-500/10 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <h3 className="text-xl font-bold">{position.title}</h3>
                                <div className="flex items-center space-x-4 mt-2 md:mt-0">
                                    <span className="text-sm text-muted-foreground">{position.department}</span>
                                    <span className="text-sm text-muted-foreground">{position.location}</span>
                                    <span className="text-sm text-muted-foreground">{position.type}</span>
                                </div>
                            </div>
                            <p className="text-muted-foreground mb-4">{position.description}</p>
                            <div>
                                <h4 className="font-semibold mb-2">Requirements:</h4>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                    {position.requirements.map((req, i) => (
                                        <li key={i}>{req}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-6">
                                <a
                                    href={`/contact?position=${encodeURIComponent(position.title)}`}
                                    className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 