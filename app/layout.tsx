import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata, Viewport } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000"
}

export const metadata: Metadata = {
  metadataBase: new URL('https://tarasolutions.cloud'),
  title: "Tara Solutions - Pioneering Software Solutions",
  description: "Transform your business with innovative technology solutions. We specialize in cloud, mobile, and web development.",
  keywords: "software solutions, cloud computing, mobile development, web development, technology consulting, digital transformation",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: ["/favicon.ico"]
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Tara Solutions"
  },
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
    title: "Tara Solutions - Pioneering Software Solutions",
    description: "Transform your business with innovative technology solutions. We specialize in cloud, mobile, and web development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tara Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tara Solutions - Pioneering Software Solutions",
    description: "Transform your business with innovative technology solutions. We specialize in cloud, mobile, and web development.",
    images: ["/og-image.png"]
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          <div className="relative flex min-h-screen flex-col">
            <MouseMoveEffect />
            <Navbar />
            <main className="flex-1 w-full">
              {children}
            </main>
            <Footer />
            <Toaster />
            <SpeedInsights />

          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'