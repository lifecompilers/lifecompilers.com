import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "LifeCOMPILERS - Innovative Software Solutions for Business Growth",
    template: "%s | LifeCOMPILERS",
  },
  description:
    "LifeCOMPILERS provides innovative software solutions tailored to help businesses thrive in a changing digital landscape. Expert web, mobile, and desktop app development services.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "desktop applications",
    "business software solutions",
    "custom software",
    "LifeCOMPILERS",
    "digital transformation",
    "technology consulting",
  ],
  authors: [{ name: "LifeCOMPILERS" }],
  creator: "LifeCOMPILERS",
  publisher: "LifeCOMPILERS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lifecompilers.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lifecompilers.com",
    title: "LifeCOMPILERS - Innovative Software Solutions for Business Growth",
    description:
      "Innovative software solutions tailored to help businesses thrive in a changing digital landscape. We design intuitive apps for web, mobile, and desktop.",
    siteName: "LifeCOMPILERS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LifeCOMPILERS - Your Trusted Technology Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeCOMPILERS - Innovative Software Solutions for Business Growth",
    description:
      "Innovative software solutions tailored to help businesses thrive in a changing digital landscape. Expert web, mobile, and desktop app development.",
    images: ["/twitter-image.png"],
    creator: "@lifecompilers",
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
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
