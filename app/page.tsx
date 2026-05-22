import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Approach from "@/components/approach"
import Testimonials from "@/components/testimonials"
import Faq from "@/components/faq"
import { faqItems } from "@/lib/faq-data"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

const SITE_URL = "https://lifecompilers.com"

export default function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "LifeCOMPILERS",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/icon.svg`,
        },
        description:
          "LifeCOMPILERS is a software development studio building custom web, mobile, and desktop applications for startups and growing businesses.",
        foundingDate: "2020",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          email: "contact@lifecompilers.com",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
        sameAs: [
          "https://twitter.com/lifecompilers",
          "https://linkedin.com/company/lifecompilers",
          "https://github.com/lifecompilers",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#localbusiness`,
        name: "LifeCOMPILERS",
        image: `${SITE_URL}/icon.svg`,
        url: SITE_URL,
        priceRange: "$$",
        email: "contact@lifecompilers.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1239(A), Sawant Nagar, Nachane",
          addressLocality: "Ratnagiri",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        areaServed: { "@type": "Country", name: "Worldwide" },
        serviceType: [
          "Custom Software Development",
          "Web Application Development",
          "Mobile App Development",
          "Desktop Application Development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "LifeCOMPILERS",
        description: "Custom software development for web, mobile, and desktop.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        name: "Mobile App Development",
        provider: { "@id": `${SITE_URL}/#organization` },
        description:
          "Custom, scalable Android and iOS mobile applications designed for measurable business results and user engagement.",
        areaServed: "Worldwide",
        serviceType: "Mobile Application Development",
      },
      {
        "@type": "Service",
        name: "Web Development",
        provider: { "@id": `${SITE_URL}/#organization` },
        description:
          "Next-gen web applications built with React and Next.js that prioritize speed, performance, and conversion.",
        areaServed: "Worldwide",
        serviceType: "Web Application Development",
      },
      {
        "@type": "Service",
        name: "Desktop App Development",
        provider: { "@id": `${SITE_URL}/#organization` },
        description:
          "Robust cross-platform desktop applications for Windows, macOS, and Linux built with modern frameworks like Electron and Tauri.",
        areaServed: "Worldwide",
        serviceType: "Desktop Application Development",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <main id="main">
        <Hero />
        <Services />
        <Approach />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
