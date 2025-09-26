import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Code,
  BookOpen,
  Award,
  Building,
  Calendar,
  ExternalLink,
  Check,
  Rocket,
  GraduationCap,
  Phone,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Hussain Hedayati | Software Engineer | Tara Solutions",
  description:
    "Meet Hussain Hedayati, Software Engineer at Tara Solutions. Master's in Computer Science with 4+ years of full-stack development experience in Laravel, Vue.js, PHP, Python, and Machine Learning.",
  keywords: [
    "Hussain Hedayati",
    "Software Engineer",
    "Tara Solutions",
    "Laravel Developer",
    "Vue.js Developer",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "PHP Developer",
  ],
  openGraph: {
    title: "Hussain Hedayati | Software Engineer | Tara Solutions",
    description:
      "Meet Hussain Hedayati, Software Engineer at Tara Solutions. Master's in Computer Science with 4+ years of full-stack development experience in Laravel, Vue.js, PHP, Python, and Machine Learning.",
    images: [
      {
        url: "/team/hussain-avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Hussain Hedayati",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussain Hedayati | Software Engineer | Tara Solutions",
    description:
      "Meet Hussain Hedayati, Software Engineer at Tara Solutions. Master's in Computer Science with 4+ years of full-stack development experience in Laravel, Vue.js, PHP, Python, and Machine Learning.",
    images: ["/team/hussain-avatar.jpg"],
  },
  alternates: {
    canonical: "https://tarasolutions.cloud/about/team/husain",
  },
};

const workExperience = [
  {
    company: "Upper Company",
    role: "Full Stack Developer - Team Lead",
    period: "Oct 2023 – Apr 2025",
    location: "Mashhad, Iran",
    highlight:
      "Leading full-stack development with focus on robust APIs and clean UI",
    description: [
      "Software development across backend and frontend with focus on robust APIs and clean UI",
      "Database design and deployment using CI/CD and containerized workflows",
      "Delivered user-friendly interfaces with Laravel, Vue.js, HTML5, CSS, and Bootstrap",
      "Led team development processes and mentored junior developers",
      "Implemented best practices for code quality and deployment automation",
    ],
    technologies: [
      "Laravel",
      "Vue.js",
      "PHP",
      "HTML5/CSS",
      "Bootstrap",
      "CI/CD",
      "Docker",
    ],
  },
  {
    company: "Tara Solutions",
    role: "Independent Contractor - Full Stack Developer",
    period: "Oct 2023 – Dec 2024",
    location: "Remote (Kabul-based client)",
    highlight:
      "Delivered full-stack features and fixes on tight timelines with consistent quality",
    description: [
      "Delivered full-stack features and fixes on tight timelines with consistent quality",
      "Built and improved web apps using PHP/Laravel, Vue.js, and RESTful APIs",
      "Collaborated async with stakeholders; shipped reliable releases via Git and CI/CD",
      "Maintained high code quality standards while meeting aggressive deadlines",
      "Provided technical consultation and implementation guidance",
    ],
    technologies: ["PHP", "Laravel", "Vue.js", "RESTful APIs", "Git", "CI/CD"],
  },
  {
    company: "Naikbeen Control Panel",
    role: "Databus Developer - Internship",
    period: "Apr 2023 – Jul 2023",
    location: "Kabul, Afghanistan",
    highlight:
      "Customized and maintained multiple websites for performance and UX",
    description: [
      "Customized and maintained multiple websites for performance and UX",
      "Enhanced front-end with HTML, CSS, JavaScript; improved responsiveness",
      "Managed server-side logic and database integration; handled deployments",
      "Gained hands-on experience with web development lifecycle",
      "Contributed to improving user experience across multiple client projects",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Database Integration",
      "Web Deployment",
    ],
  },
  {
    company: "Code9ine Company",
    role: "Junior Back-end Developer",
    period: "Jan 2022 – Dec 2022",
    location: "Kabul, Afghanistan",
    highlight: "Developed and maintained backend features using Laravel",
    description: [
      "Developed and maintained backend features using Laravel",
      "Implemented database queries and optimized backend logic for performance",
      "Supported debugging, bug fixing, and backend feature enhancements",
      "Collaborated with frontend developers to ensure seamless integration",
      "Contributed to code reviews and technical documentation",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Backend Development",
      "Database Optimization",
    ],
  },
];

const education = [
  {
    school: "GISMA University of Applied Sciences GmbH",
    degree: "Master in Computer Science",
    period: "Oct 2024 – Sep 2025",
    location: "Germany",
    description:
      "Advanced studies in Computer Science with focus on Machine Learning and Data Science. Thesis: 'Fake News Detection Using Machine Learning (DL)' - Achieved 98% accuracy with best balanced F1 and recall in project results. Core Subjects: Computer Programming (Python, C++), Advanced Programming (Java), Machine Learning, Advanced Database, Advanced Mathematics, Data Science. Research: 'Leveraging Generative AI for Requirement Gathering in Software Startups'.",
  },
  {
    school: "Balkh University",
    degree: "Bachelor in Computer Science",
    period: "2017 – 2022",
    location: "Afghanistan",
    description:
      "Comprehensive Computer Science education covering fundamental and advanced programming concepts. Core Subjects: Basic/Advanced Computer Programming (Java, PHP), Basic/Advanced Database, Mathematics, Networks. Practical Projects: University Library Management System using Laravel.",
  },
];

const projects = [
  {
    name: "Fake News Detection Using Machine Learning",
    description:
      "Master's thesis project implementing deep learning for fake news detection",
    highlights: [
      "Achieved 98% accuracy in fake news detection",
      "Best balanced F1 and recall scores in project results",
      "Implemented using Deep Learning techniques",
      "Comprehensive evaluation and testing methodology",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "Machine Learning",
      "Deep Learning",
    ],
  },
  {
    name: "University Library Management System",
    description: "Full-stack web application for university library management",
    highlights: [
      "Complete library management functionality",
      "User authentication and role-based access",
      "Book inventory and borrowing system",
      "Responsive web interface",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "E-commerce Platform Development",
    description: "Full-stack e-commerce solutions with modern architecture",
    highlights: [
      "Robust API development with Laravel",
      "Modern frontend with Vue.js",
      "Database design and optimization",
      "CI/CD deployment pipelines",
    ],
    technologies: [
      "Laravel",
      "Vue.js",
      "PHP",
      "MySQL",
      "RESTful APIs",
      "Docker",
    ],
  },
];

const skills = {
  programming: {
    icon: "💻",
    title: "Programming Languages",
    description: "Proficient in multiple programming languages",
    skills: ["PHP", "JavaScript", "Python", "Java", "SQL"],
    color: "from-blue-500 to-cyan-500",
  },
  frameworks: {
    icon: "⚙️",
    title: "Frameworks & Libraries",
    description: "Modern frameworks and development tools",
    skills: [
      "Laravel",
      "Vue.js",
      "Flask",
      "Bootstrap",
      "Tailwind CSS",
      "jQuery",
    ],
    color: "from-green-500 to-emerald-500",
  },
  ml: {
    icon: "🤖",
    title: "Machine Learning & Data",
    description: "AI and data science technologies",
    skills: ["scikit-learn", "PyTorch", "NumPy", "Pandas"],
    color: "from-purple-500 to-pink-500",
  },
  database: {
    icon: "🗄️",
    title: "Databases & Storage",
    description: "Database management and optimization",
    skills: ["MySQL", "MongoDB"],
    color: "from-amber-500 to-orange-500",
  },
  devops: {
    icon: "☁️",
    title: "Cloud & DevOps",
    description: "Cloud infrastructure and deployment",
    skills: ["Docker", "Git", "CI/CD", "DevOps", "cPanel", "DirectAdmin"],
    color: "from-indigo-500 to-purple-500",
  },
};

const languages = [
  { name: "Persian/Dari", level: "Native", icon: "🌟" },
  { name: "English", level: "Fluent (C1)", icon: "🌍" },
  { name: "German", level: "Basic (A2)", icon: "🇩🇪" },
];

const awards = [
  {
    title: "Machine Learning Excellence",
    description:
      "Achieved 98% accuracy in Fake News Detection project with best balanced F1 and recall scores",
    icon: "🏆",
  },
  {
    title: "Academic Research",
    description:
      "Research on 'Leveraging Generative AI for Requirement Gathering in Software Startups'",
    icon: "🔬",
  },
  {
    title: "Full-Stack Development",
    description:
      "4+ years of experience delivering robust web applications and e-commerce platforms",
    icon: "💻",
  },
  {
    title: "Team Leadership",
    description:
      "Led development teams and mentored junior developers in multiple organizations",
    icon: "👥",
  },
];

export default function HusainProfile() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <div className="pt-24 pb-20">
          <div className="space-y-32">
            {/* Hero Section */}
            <div className="container mx-auto px-4">
              <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
                <div className="flex flex-col items-center text-center mb-16">
                  <div className="relative h-48 w-48 mb-8 rounded-full overflow-hidden ring-4 ring-primary/20">
                    <Image
                      src="/team/hussain-avatar.jpg"
                      alt="Hussain Hedayati"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
                    Hussain Hedayati
                  </h1>
                  <p className="text-xl text-primary mb-6">Software Engineer</p>
                  <p className="max-w-2xl text-lg text-muted-foreground mb-8">
                    Software Engineer with a Master's in Computer Science and 4+
                    years of full-stack development experience. Skilled in
                    Laravel, Vue.js, PHP, Python, and JavaScript. Strong
                    background in e-commerce platforms, web applications, and
                    machine learning projects.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>+49 176 561 303 13</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>hedayati1488@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <Link
                      href="https://linkedin.com/in/hedayati1488/"
                      target="_blank"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-blue-500"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="https://github.com/hussain1488" target="_blank">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-gray-900 dark:hover:text-white"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="https://www.hedayat.me" target="_blank">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-green-500"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="mailto:hedayati1488@gmail.com">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-red-500"
                      >
                        <Mail className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <section className="container mx-auto px-4">
              <div className="grid gap-8 md:grid-cols-4">
                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                  <div className="relative">
                    <h3 className="text-4xl font-bold mb-2">4+</h3>
                    <p className="text-muted-foreground">Years Experience</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                  <div className="relative">
                    <h3 className="text-4xl font-bold mb-2">15+</h3>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                  <div className="relative">
                    <h3 className="text-4xl font-bold mb-2">20+</h3>
                    <p className="text-muted-foreground">Technologies</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                  <div className="relative">
                    <h3 className="text-4xl font-bold mb-2">100%</h3>
                    <p className="text-muted-foreground">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="container mx-auto px-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                <Code className="mr-4 h-8 w-8 text-primary" />
                Technical Expertise
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(skills).map(([key, category]) => (
                  <div
                    key={key}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
                  >
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 opacity-5 bg-gradient-to-br ${category.color}`}
                    />

                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-center mb-6">
                        <span className="text-4xl mr-4">{category.icon}</span>
                        <div>
                          <h3 className="text-xl font-semibold">
                            {category.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {category.skills.map((skill) => (
                          <div
                            key={skill}
                            className={`
                                                            relative overflow-hidden rounded-lg p-3
                                                            bg-gradient-to-r ${category.color} group-hover:shadow-lg
                                                            opacity-90 hover:opacity-100 transition-all
                                                            transform hover:scale-105 hover:rotate-1
                                                        `}
                          >
                            <div className="absolute inset-0 bg-black opacity-75" />
                            <div className="relative">
                              <p className="font-medium text-white">{skill}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Work Experience Section */}
            <section className="container mx-auto px-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                <Building className="mr-4 h-8 w-8 text-primary" />
                Professional Journey
              </h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/10 hidden md:block" />

                <div className="space-y-12">
                  {workExperience.map((job, index) => (
                    <div key={index} className="group relative">
                      {/* Timeline dot with ping effect */}
                      <div className="absolute left-8 -translate-x-1/2 hidden md:block">
                        <div className="relative">
                          <div className="w-4 h-4 rounded-full bg-primary" />
                          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                        </div>
                      </div>

                      <div className="md:ml-16 relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                        {/* Decorative corner gradient */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 via-primary/3 to-transparent rounded-bl-full" />

                        <div className="relative">
                          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            {job.role}
                          </h3>
                          <p className="text-primary mb-2 text-lg font-medium">
                            {job.company}
                          </p>
                          <div className="flex items-center text-muted-foreground mb-4">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{job.period}</span>
                            <span className="mx-2">•</span>
                            <span>{job.location}</span>
                          </div>

                          <p className="text-lg font-medium text-primary/80 mb-6 italic border-l-4 border-primary/20 pl-4">
                            "{job.highlight}"
                          </p>

                          <ul className="list-none space-y-3 text-muted-foreground mb-6">
                            {job.description.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start group/item hover:text-primary transition-colors"
                              >
                                <span className="mr-3 mt-1.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary group-hover/item:scale-125 transition-transform" />
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, techIndex) => (
                              <span
                                key={tech}
                                className={`
                                                                    inline-flex items-center rounded-md px-3 py-1
                                                                    text-sm font-medium bg-primary/5 text-primary
                                                                    hover:bg-primary/10 transition-all transform hover:scale-105
                                                                    border border-primary/10 hover:border-primary/20
                                                                    ${
                                                                      techIndex %
                                                                        2 ===
                                                                      0
                                                                        ? "hover:-rotate-1"
                                                                        : "hover:rotate-1"
                                                                    }
                                                                `}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="container mx-auto px-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                <Rocket className="mr-4 h-8 w-8 text-primary" />
                Featured Projects
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <div
                    key={project.name}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 via-primary/3 to-transparent rounded-bl-full" />

                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">
                          {project.name}
                        </h3>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {project.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <Check className="h-4 w-4 mr-2 text-primary" />
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-md px-3 py-1 text-sm font-medium bg-primary/5 text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="container mx-auto px-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                <GraduationCap className="mr-4 h-8 w-8 text-primary" />
                Education
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {education.map((edu) => (
                  <div
                    key={edu.school}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 via-primary/3 to-transparent rounded-bl-full" />

                    <div className="relative">
                      <h3 className="text-xl font-semibold mb-2">
                        {edu.school}
                      </h3>
                      <p className="text-primary mb-2">{edu.degree}</p>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{edu.period}</span>
                        <span className="mx-2">•</span>
                        <span>{edu.location}</span>
                      </div>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages Section */}
            <section className="container mx-auto px-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                <BookOpen className="mr-4 h-8 w-8 text-primary" />
                Languages
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{lang.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold">{lang.name}</h3>
                        <p className="text-primary">{lang.level}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Awards Section */}
            <section className="container mx-auto px-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                <Award className="mr-4 h-8 w-8 text-primary" />
                Awards & Achievements
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {awards.map((award) => (
                  <div
                    key={award.title}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{award.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold">{award.title}</h3>
                        <p className="text-muted-foreground">
                          {award.description}
                        </p>
                      </div>
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
