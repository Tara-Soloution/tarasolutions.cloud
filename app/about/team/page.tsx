import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Our Team | Tara Solutions",
    description: "Meet the talented team behind Tara Solutions. Our experts bring together diverse skills and experience to deliver exceptional results.",
}

const teamMembers = [
    {
        name: "John Smith",
        role: "CEO & Founder",
        image: "/team/john.jpg",
        bio: "With over 15 years of experience in technology and business leadership, John founded Tara Solutions with a vision to transform how businesses leverage technology.",
    },
    {
        name: "Sarah Johnson",
        role: "CTO",
        image: "/team/sarah.jpg",
        bio: "Sarah brings extensive expertise in cloud architecture and software development, leading our technical innovation and development teams.",
    },
    {
        name: "Michael Chen",
        role: "Head of Solutions",
        image: "/team/michael.jpg",
        bio: "Michael specializes in crafting tailored solutions for enterprise clients, ensuring our services meet their unique needs and challenges.",
    },
    {
        name: "Emily Rodriguez",
        role: "Lead Developer",
        image: "/team/emily.jpg",
        bio: "Emily is a full-stack development expert who leads our development teams in creating cutting-edge applications and solutions.",
    },
    {
        name: "David Kim",
        role: "UX/UI Director",
        image: "/team/david.jpg",
        bio: "David focuses on creating exceptional user experiences, ensuring our solutions are both powerful and user-friendly.",
    },
    {
        name: "Lisa Patel",
        role: "Project Manager",
        image: "/team/lisa.jpg",
        bio: "Lisa ensures smooth project execution and client satisfaction through effective project management and communication.",
    },
]

export default function TeamPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                        Meet Our Team
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        The talented individuals behind Tara Solutions' success
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-green-500/5 border hover:from-primary/10 hover:to-green-500/10 transition-all duration-300"
                        >
                            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-green-500/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-4xl font-bold text-primary">
                                        {member.name.charAt(0)}
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                            <p className="text-primary text-center mb-4">{member.role}</p>
                            <p className="text-muted-foreground text-center">{member.bio}</p>
                        </div>
                    ))}
                </div>

                {/* Join Our Team Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-6">Join Our Growing Team</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        We're always looking for talented individuals to join our team
                    </p>
                    <a
                        href="/about/careers"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-green-500 text-white font-medium hover:opacity-90 transition-opacity"
                    >
                        View Open Positions
                    </a>
                </div>
            </div>
        </div>
    )
} 