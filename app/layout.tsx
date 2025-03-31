import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://tarasolutions.cloud'),
  title: {
    default: "Tara Solutions - Enterprise Software Solutions",
    template: "%s | Tara Solutions"
  },
  description: "Tara Solutions delivers innovative, high-performance software solutions for modern businesses. Specializing in cloud infrastructure, web development, and mobile applications.",
  keywords: [
    "software solutions",
    "cloud infrastructure",
    "web development",
    "mobile applications",
    "enterprise software",
    "digital transformation",
    "IT consulting",
    "cloud services",
    "software development",
    "technology solutions"
  ],
  authors: [{ name: "Tara Solutions" }],
  creator: "Tara Solutions",
  publisher: "Tara Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tarasolutions.cloud",
    siteName: "Tara Solutions",
    title: "Tara Solutions - Enterprise Software Solutions",
    description: "Innovative software solutions for modern businesses. Cloud infrastructure, web development, and mobile applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tara Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tara Solutions - Enterprise Software Solutions",
    description: "Innovative software solutions for modern businesses. Cloud infrastructure, web development, and mobile applications.",
    images: ["/og-image.png"],
    creator: "@tarasolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://tarasolutions.cloud",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <MouseMoveEffect />
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'