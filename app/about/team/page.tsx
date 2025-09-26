import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Users,
  Globe,
  Award,
  Rocket,
  Mail,
  Heart,
  Lightbulb,
  Shield,
  Target,
  Clock,
  Star,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Our Team | Tara Solutions",
  description:
    "Meet the talented team behind Tara Solutions. Our diverse group of experts is driving innovation in technology solutions.",
  keywords: [
    "team",
    "leadership",
    "experts",
    "tech team",
    "company culture",
    "diversity",
    "innovation",
    "talent",
  ],
  openGraph: {
    title: "Our Team | Tara Solutions",
    description:
      "Meet the talented team behind Tara Solutions. Our diverse group of experts is driving innovation in technology solutions.",
    images: [
      {
        url: "/team-og.png",
        width: 1200,
        height: 630,
        alt: "Our Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Tara Solutions",
    description:
      "Meet the talented team behind Tara Solutions. Our diverse group of experts is driving innovation in technology solutions.",
    images: ["/team-og.png"],
  },
  alternates: {
    canonical: "https://tarasolutions.cloud/about/team",
  },
};

const leadership = [
  {
    name: "Abbas Ataie",
    role: "CEO & Co-Founder",
    bio: "Results-driven Software Engineer with 5+ years of expertise in cloud computing and microservices architecture.",
    image: "/team/abbas-avatar.jpg",
    linkedin: "https://www.linkedin.com/in/abbas-ataie-72a4431b9/",
    twitter: "https://twitter.com/abbasataie",
    github: "https://github.com/abbasatayee",
    email: "abbas.ataie@tarasolutions.cloud",
    expertise: ["Cloud Computing", "Microservices", "Technical Leadership"],
  },
  {
    name: "Rustam Ali Hussaini",
    role: "CTO",
    bio: "Visionary leader with extensive experience in cloud architecture and business strategy.",
    image: "/team/rustam-avatar.png",
    linkedin: "https://www.linkedin.com/in/rustam-hussaini-b717101b9/",
    twitter: "https://twitter.com/rustamhussaini",
    github: "https://github.com/rustamhussaini",
    email: "rustam@tarasolutions.cloud",
    expertise: ["Business Strategy", "Cloud Architecture", "Innovation"],
  },

  {
    name: "Hakima Merzayee",
    role: "Frontend Lead",
    bio: "Full-stack software engineer with expertise in modern web technologies and a passion for building scalable applications.",
    image: "/team/hakima-avatar.jpg",
    linkedin: "https://www.linkedin.com/in/hakima-merzayee/",
    github: "https://github.com/hakima",
    email: "hakima.merzayee3@gmail.com",
    expertise: ["Frontend Development", "Full Stack", "Technical Leadership"],
  },
  {
    name: "Mohammad Mahdi Alizada",
    role: "Backend Lead",
    bio: "Full Stack Developer with 4 years of experience in creating innovative and efficient web solutions.",
    image: "/team/mahdi-avatar.jpg",
    linkedin: "https://www.linkedin.com/in/mohammad-mahdi-alizada-3a57b2274",
    github: "https://github.com/mahdializada",
    email: "mahdializada761@gmail.com",
    expertise: ["Backend Development", "Full Stack", "Database Design"],
  },
  {
    name: "Husain Hedayati",
    role: "Senior Developer",
    bio: "Experienced software developer with expertise in modern web technologies and cloud solutions.",
    image: "/team/hussain-avatar.jpg",
    linkedin: "#",
    github: "#",
    email: "husain@tarasolutions.cloud",
    expertise: ["Software Development", "Web Technologies", "Cloud Solutions"],
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
    icon: Lightbulb,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "Excellence",
    description:
      "We strive for perfection in every project, ensuring the highest quality standards.",
    icon: Star,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and open communication to achieve great results.",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    title: "Integrity",
    description:
      "We maintain the highest ethical standards in all our business practices.",
    icon: Shield,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

const teamStats = [
  {
    title: "Team Size",
    value: "11+",
    description: "Expert professionals",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Countries",
    value: "3+",
    description: "Global presence",
    icon: Globe,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Experience",
    value: "5+",
    description: "Average years",
    icon: Award,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "Projects",
    value: "20+",
    description: "Completed",
    icon: Rocket,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Success Rate",
    value: "100%",
    description: "Client satisfaction",
    icon: Target,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    title: "Response Time",
    value: "<24h",
    description: "Average support",
    icon: Clock,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
];

const culture = [
  {
    title: "Remote-First",
    description:
      "We embrace remote work and provide the tools and support needed for effective collaboration across time zones.",
    icon: Globe,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Continuous Learning",
    description:
      "We encourage and support ongoing education and professional development for all team members.",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "Work-Life Balance",
    description:
      "We promote a healthy balance between work and personal life, with flexible schedules and wellness initiatives.",
    icon: Heart,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

export default function Team() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <div className=" pt-24 pb-20">
          <div className="space-y-32">
            {/* Hero Section */}
            <div className="container mx-auto px-4">
              <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                    Meet Our Team
                    <br />
                    <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                      The People Behind Innovation
                    </span>
                  </h1>
                  <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
                    A diverse group of experts passionate about transforming
                    businesses through technology.
                  </p>
                </div>
              </div>
            </div>
            {/* dev */}
            {/* Leadership Section */}
            <section className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Leadership Team
                </h2>
                <p className="text-lg text-muted-foreground">
                  Guiding our vision and strategy
                </p>
              </div>
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {leadership.map((leader) => (
                  <div key={leader.name} className="h-[500px]">
                    <Link
                      href={`/about/team/${
                        leader.name === "Rustam Ali Hussaini"
                          ? "rustam"
                          : leader.name === "Abbas Ataie"
                          ? "abbas"
                          : leader.name === "Hakima Merzayee"
                          ? "hakima"
                          : leader.name === "Mohammad Mahdi Alizada"
                          ? "mahdi"
                          : "husain"
                      }`}
                      className="block h-full group/card transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all group-hover/card:shadow-xl group-hover/card:shadow-primary/20 group-hover/card:border-primary/50 h-full flex flex-col">
                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />

                        <div className="relative flex-1 flex flex-col">
                          <div className="relative h-40 w-40 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover/card:ring-primary/40">
                            <Image
                              src={leader.image}
                              alt={leader.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-semibold text-center mb-2">
                            {leader.name}
                          </h3>
                          <p className="text-primary text-center mb-4">
                            {leader.role}
                          </p>
                          <p className="text-muted-foreground text-center mb-6 flex-1">
                            {leader.bio}
                          </p>
                          <div className="flex justify-center space-x-4 mt-auto">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="pointer-events-none opacity-70"
                            >
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.016-2.005-1.22-2.005-1.22 0-1.41.952-1.41 1.94v5.669h-3v-11h2.84v1.58h.04c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.866z" />
                              </svg>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="pointer-events-none opacity-70"
                            >
                              <Mail className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Values Section */}
            <section className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Our Values
                </h2>
                <p className="text-lg text-muted-foreground">
                  The principles that guide our work
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div
                      className={`mb-6 inline-flex rounded-xl p-4 ${value.bgColor}`}
                    >
                      <value.icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Culture Section */}
            <section className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Our Culture
                </h2>
                <p className="text-lg text-muted-foreground">
                  What makes us unique
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {culture.map((item) => (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div
                      className={`mb-6 inline-flex rounded-xl p-4 ${item.bgColor}`}
                    >
                      <item.icon className={`h-8 w-8 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Stats Section */}
            <section className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Team Stats
                </h2>
                <p className="text-lg text-muted-foreground">
                  Numbers that define us
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {teamStats.map((stat) => (
                  <div
                    key={stat.title}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div
                      className={`mb-6 inline-flex rounded-xl p-4 ${stat.bgColor}`}
                    >
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold mb-1">
                      {stat.title}
                    </div>
                    <div className="text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <CTASection />
          </div>
        </div>
      </div>
    </div>
  );
}
