import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Mail,
  Github,
  Linkedin,
  Code,
  BookOpen,
  Award,
  Building,
  Calendar,
  Phone,
  MapPin,
  GraduationCap,
  Rocket,
  Check,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Ghulam Abbas Ataie | CTO | Tara Solutions",
  description:
    "Lernen Sie Ghulam Abbas Ataie kennen, CTO bei Tara Solutions. Erfahrener Software-Ingenieur mit Expertise in Cloud Computing und Microservices-Architektur.",
  keywords: [
    "Ghulam Abbas Ataie",
    "CTO",
    "Tara Solutions",
    "Cloud Computing",
    "Microservices",
    "Softwareentwicklung",
  ],
  openGraph: {
    title: "Ghulam Abbas Ataie | CTO | Tara Solutions",
    description:
      "Lernen Sie Ghulam Abbas Ataie kennen, CTO bei Tara Solutions. Erfahrener Software-Ingenieur mit Expertise in Cloud Computing und Microservices-Architektur.",
    images: [
      {
        url: "/team/abbas-avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Ghulam Abbas Ataie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghulam Abbas Ataie | CTO | Tara Solutions",
    description:
      "Lernen Sie Ghulam Abbas Ataie kennen, CTO bei Tara Solutions. Erfahrener Software-Ingenieur mit Expertise in Cloud Computing und Microservices-Architektur.",
    images: ["/team/abbas-avatar.jpg"],
  },
  alternates: {
    canonical: "https://tarasolutions.cloud/de/about/team/abbas",
  },
};

const workExperience = [
  {
    company: "Tara Solutions Inc.",
    role: "Technischer Geschäftsführer (CTO)",
    period: "Januar 2023 - Heute",
    location: "Remote",
    highlight:
      "Führend in technischer Innovation und strategischer Entwicklung",
    description: [
      "Entwicklung von Web- und Mobile-Anwendungen mit Node.js, React.js, Nomad, TypeScript, React Native",
      "Strategische Partnerschaft mit Cloud Station LLC FZ (Dubai) für Enterprise-Cloud-Lösungen",
      "Technische Teamleitung, Implementierung von Code-Qualitätsstandards und Best Practices",
      "Architektur und strategische Planung von Microservices und Cloud-Infrastrukturen",
      "Entwicklung und Umsetzung der technischen Vision und Strategie für das Unternehmen",
      "Leitung und Mentoring eines internationalen Entwicklungsteams mit Fokus auf Agile Methoden und CI/CD",
    ],
    technologies: [
      "Node.js",
      "React.js",
      "TypeScript",
      "React Native",
      "Cloud Computing",
      "Microservices",
    ],
  },
  {
    company: "Listoli LLC, USA",
    role: "Senior Fullstack-Entwickler",
    period: "Oktober 2022 - Dezember 2023",
    location: "Remote",
    highlight: "Entwicklung hochskalierbarer Cloud-Lösungen",
    description: [
      "Optimierung von PostgreSQL-Datenbanken für E-Commerce-Systeme",
      "Design und Entwicklung von RESTful APIs und Microservices mit NestJS und Next.js",
      "CI/CD-Automatisierung mit GitHub Actions und Google Cloud Platform",
    ],
    technologies: ["PostgreSQL", "NestJS", "Next.js", "GitHub Actions", "GCP"],
  },
  {
    company: "Click.af",
    role: "Fullstack-Entwickler",
    period: "Juni 2021 - September 2022",
    location: "Kabul",
    highlight: "Entwicklung innovativer E-Commerce-Lösungen",
    description: [
      "Entwicklung von Web- und Mobile-Anwendungen mit React.js, Node.js, Next.js, React Native",
      "Integration der Vendor-API für effizientes Auftrags- und Zahlungsmanagement",
      "Implementierung von E-Commerce-Funktionen und Benutzeroberflächen",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Next.js",
      "React Native",
      "E-Commerce",
    ],
  },
  {
    company: "BlueBit Networking Services",
    role: "Fullstack-Entwickler",
    period: "Februar 2021 - Juli 2021",
    location: "Kabul",
    highlight: "Entwicklung von Netzwerklösungen",
    description: [
      "Entwicklung und Verwaltung von hochfrequentierten Webanwendungen mit Python, Django, React Native, MySQL und React.js",
      "Entwicklung eines Petitionenmanagementsystems für das Verteidigungsministerium",
      "Optimierung der Arbeitsabläufe und Benutzerfreundlichkeit der entwickelten Systeme",
    ],
    technologies: ["Python", "Django", "React Native", "MySQL", "React.js"],
  },
  {
    company: "IAP",
    role: "Junior Web-Entwickler",
    period: "Februar 2020 - April 2020",
    location: "Kabul",
    highlight: "Entwicklung von Geschäftsanwendungen",
    description: [
      "Entwicklung des MOEC Socio-Economic Provincial Profiles Digitalisierungssystems",
      "Webentwicklung mit PHP Laravel, MySQL, HTML, CSS, Vue.js und JavaScript",
      "Support und Wartung von bestehenden Websites, Fehlerbehebung und Optimierung",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Vue.js", "JavaScript"],
  },
];

const skills = {
  programming: {
    icon: "💻",
    title: "Programmiersprachen",
    description: "Beherrschung moderner Programmiersprachen",
    skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
    color: "from-blue-500 to-cyan-500",
  },
  frameworks: {
    icon: "⚡",
    title: "Frameworks & Bibliotheken",
    description: "Erfahrung mit modernen Frameworks",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "NestJS",
      "Express.js",
      "React Native",
      "Django",
    ],
    color: "from-purple-500 to-pink-500",
  },
  database: {
    icon: "🗄️",
    title: "Datenbanken & Storage",
    description: "Datenbankdesign und -optimierung",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "ElasticSearch"],
    color: "from-green-500 to-emerald-500",
  },
  cloud: {
    icon: "☁️",
    title: "Cloud & DevOps",
    description: "Cloud-Infrastruktur und -Services",
    skills: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "GitHub Actions",
    ],
    color: "from-orange-500 to-red-500",
  },
  architecture: {
    icon: "🏗️",
    title: "Architektur & Methoden",
    description: "Software-Architektur und Entwicklungspraktiken",
    skills: [
      "Microservices",
      "RESTful APIs",
      "Event-Driven Architecture",
      "GraphQL",
      "Agile/Scrum",
      "TDD",
    ],
    color: "from-yellow-500 to-amber-500",
  },
};

const projects = [
  {
    name: "Tara Solutions Cloud",
    description: "Entwicklung der offiziellen Website von Tara Solutions Inc.",
    highlights: [
      "Fokus auf Leistungsoptimierung und Sicherheit",
      "Moderne Technologien und Best Practices",
      "Responsive Design und optimale Benutzererfahrung",
    ],
    technologies: ["Next.js", "React.js", "Node.js"],
    link: "www.tarasolutions.cloud",
  },
  {
    name: "Cloud Station Plattform",
    description: "Skalierbare Enterprise-Cloud-Services-Plattform",
    highlights: [
      "Globale Nutzerbasis",
      "Hochleistungsfähige Frontend- und Backend-Implementierung",
      "Skalierbare Architektur",
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Kafka", "Nats"],
    link: "www.cloud-station.io",
  },
  {
    name: "Ahsen Elite E-Commerce",
    description: "Web- und Mobile-Anwendungen mit sicherer Zahlungsabwicklung",
    highlights: [
      "Sichere Zahlungsabwicklung und Bestellverwaltung",
      "Optimale Benutzererfahrung",
      "Responsive Design",
    ],
    technologies: ["React.js", "React Native", "Next.js", "Node.js"],
    link: "ahsenelite.com",
  },
  {
    name: "Pflanzenerkrankungs-Erkennungssystem",
    description:
      "KI-gestütztes Deep-Learning-System zur Erkennung von Pflanzenkrankheiten",
    highlights: [
      "Echtzeitdiagnose mit Raspberry Pi und Kamera",
      "Deep Learning-basierte Erkennung",
      "Benutzerfreundliche Oberfläche",
    ],
    technologies: [
      "Deep Learning",
      "Raspberry Pi",
      "Python",
      "Computer Vision",
    ],
  },
];

const education = [
  {
    school: "University of Europe for Applied Sciences",
    degree: "Master in Data Science",
    period: "März 2025 - Heute",
    location: "Remote",
    description: [
      "Hochqualifiziertes Masterprogramm mit Fokus auf modernste Technologien und Methoden",
      "Kernfächer: Data Science, Data Engineering, Data Analytics, Machine Learning",
      "Spezialisierung: Cloud Computing, Decision Support Systems",
      "Zusätzliche Qualifikationen: Unternehmerisches Denken & Digitale Geschäftsmodelle",
    ],
  },
  {
    school: "Kabul Polytechnic University",
    degree: "Bachelor in Informatik",
    period: "März 2016 - August 2019",
    location: "Kabul",
    description: [
      "Abschluss mit zweitem Platz im Jahrgang",
      "Mentoring und Unterstützung von Kommilitonen in Programmierung",
      "Schwerpunkte: Software Engineering, Datenbanken, Netzwerke und Algorithmen",
    ],
  },
];

const languages = [
  { name: "Dari", level: "Muttersprache", icon: "🌟" },
  { name: "Englisch", level: "Fließend - C1", icon: "🌍" },
  { name: "Deutsch", level: "Grundkenntnisse - B1", icon: "🇩🇪" },
];

const awards = [
  {
    title: "Asia Kabul Regional Wettbewerb 2018",
    description: "3. Platz unter 40 Teams",
    icon: "🏆",
  },
  {
    title: "Duolingo Englisch Test",
    description: "Punktzahl: 120 von 160",
    icon: "🎯",
  },
  {
    title: "ACM/ICPC",
    description: "Teilnahme an internationalen Programmierwettbewerben",
    icon: "💻",
  },
];

export default function AbbasProfile() {
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
                      src="/team/abbas-avatar.jpg"
                      alt="Ghulam Abbas Ataie"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
                    Ghulam Abbas Ataie
                  </h1>
                  <p className="text-xl text-primary mb-6">
                    Senior Software-Entwickler | Full Stack Engineer | Cloud
                    Architect
                  </p>
                  <p className="max-w-2xl text-lg text-muted-foreground mb-8">
                    Senior Software-Entwickler und technischer Leiter mit über 5
                    Jahren Erfahrung in der Entwicklung und Skalierung von
                    Enterprise-Anwendungen. Nachgewiesene Expertise in
                    Full-Stack-Entwicklung, Cloud-Architektur und technischer
                    Führung.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>+98 9912906146</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>abbas.ataie.montazer@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Tehran, Iran</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.linkedin.com/in/abbas-ataie-72a4431b9/"
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
                    <Link href="https://github.com/abbasatayee" target="_blank">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-gray-900 dark:hover:text-white"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="mailto:abbas.ataie.montazer@gmail.com">
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
                    <h3 className="text-4xl font-bold mb-2">5+</h3>
                    <p className="text-muted-foreground">Jahre Erfahrung</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                  <div className="relative">
                    <h3 className="text-4xl font-bold mb-2">20+</h3>
                    <p className="text-muted-foreground">
                      Projekte abgeschlossen
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                  <div className="relative">
                    <h3 className="text-4xl font-bold mb-2">5+</h3>
                    <p className="text-muted-foreground">Unternehmen beraten</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                  <div className="relative">
                    <h3 className="text-4xl font-bold mb-2">10+</h3>
                    <p className="text-muted-foreground">Technologien</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="container mx-auto px-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                <Code className="mr-4 h-8 w-8 text-primary" />
                Technische Expertise
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
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
            <section className="container mx-auto px-4 ">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                <Building className="mr-4 h-8 w-8 text-primary" />
                Beruflicher Werdegang
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
                Ausgewählte Projekte
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                  <div
                    key={project.name}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 via-primary/3 to-transparent rounded-bl-full" />

                    <div className="relative">
                      <h3 className="text-xl font-semibold mb-4">
                        {project.name}
                      </h3>
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
                Ausbildung
              </h2>
              <div className="grid gap-8 md:grid-cols-1">
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
                Sprachen
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
                    {/* {lang.score && (
                      <p className="text-sm text-muted-foreground">
                        {lang.score}
                      </p>
                    )} */}
                  </div>
                ))}
              </div>
            </section>

            {/* Awards Section */}
            <section className="container mx-auto px-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
                <Award className="mr-4 h-8 w-8 text-primary" />
                Auszeichnungen & Erfolge
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
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
