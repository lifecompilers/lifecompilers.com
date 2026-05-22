import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Approach from "@/components/approach"
import Testimonials from "@/components/testimonials"
import { testimonials } from "@/lib/testimonials-data"
import Faq from "@/components/faq"
import { faqItems } from "@/lib/faq-data"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

const SITE_URL = "https://lifecompilers.com"
// TODO: replace with the real business phone number, then mirror in components/contact.tsx
const BUSINESS_PHONE: string | null = null

export default function App() {
  const orgRef = { "@id": `${SITE_URL}/#organization` }

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
          url: `${SITE_URL}/logo-image`,
          width: 512,
          height: 512,
        },
        image: `${SITE_URL}/opengraph-image`,
        description:
          "LifeCOMPILERS is a custom software development studio building web, mobile, and desktop applications for startups and growing businesses.",
        foundingDate: "2020",
        slogan: "We build software that grows your business.",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          email: "contact@lifecompilers.com",
          ...(BUSINESS_PHONE ? { telephone: BUSINESS_PHONE } : {}),
          areaServed: "Worldwide",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
        sameAs: [
          // TODO: add or remove based on which profiles are actually claimed
          "https://github.com/lifecompilers",
          "https://linkedin.com/company/lifecompilers",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#localbusiness`,
        name: "LifeCOMPILERS",
        description:
          "Custom software development studio based in Ratnagiri, India. Specializes in web, mobile, and desktop application development for startups and growing businesses worldwide.",
        image: `${SITE_URL}/opengraph-image`,
        logo: `${SITE_URL}/logo-image`,
        url: SITE_URL,
        priceRange: "$$",
        email: "contact@lifecompilers.com",
        ...(BUSINESS_PHONE ? { telephone: BUSINESS_PHONE } : {}),
        address: {
          "@type": "PostalAddress",
          streetAddress: "1239(A), Sawant Nagar, Nachane",
          addressLocality: "Ratnagiri",
          addressRegion: "Maharashtra",
          // TODO: confirm the correct PIN code for the address
          postalCode: "415612",
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
        publisher: orgRef,
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "LifeCOMPILERS — Custom software development for web, mobile, and desktop",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: orgRef,
        primaryImageOfPage: { "@id": `${SITE_URL}/#primaryimage` },
        inLanguage: "en-US",
        breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
      },
      {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#primaryimage`,
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
        ],
      },
      {
        "@type": "SiteNavigationElement",
        name: ["Services", "Approach", "Testimonials", "FAQ", "Contact"],
        url: [
          `${SITE_URL}/#services`,
          `${SITE_URL}/#approach`,
          `${SITE_URL}/#testimonials`,
          `${SITE_URL}/#faq`,
          `${SITE_URL}/#contact`,
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#services-list`,
        name: "LifeCOMPILERS Services",
        itemListElement: [
          { "@type": "ListItem", position: 1, item: { "@id": `${SITE_URL}/#service-web` } },
          { "@type": "ListItem", position: 2, item: { "@id": `${SITE_URL}/#service-mobile` } },
          { "@type": "ListItem", position: 3, item: { "@id": `${SITE_URL}/#service-desktop` } },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-web`,
        name: "Web Application Development",
        provider: orgRef,
        description:
          "Production web applications built with TypeScript, React, and Next.js — server-rendered, fast, accessible, and ready to scale from MVP to thousands of users.",
        areaServed: "Worldwide",
        serviceType: "Web Application Development",
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-mobile`,
        name: "Mobile App Development",
        provider: orgRef,
        description:
          "Android and iOS apps built with React Native or native frameworks, shipped to the Play Store and App Store in 8 to 14 weeks.",
        areaServed: "Worldwide",
        serviceType: "Mobile Application Development",
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-desktop`,
        name: "Desktop App Development",
        provider: orgRef,
        description:
          "Cross-platform desktop applications for Windows, macOS, and Linux built with Electron or Tauri, with auto-updates and code signing.",
        areaServed: "Worldwide",
        serviceType: "Desktop Application Development",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        name: "Frequently Asked Questions",
        inLanguage: "en-US",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      ...testimonials.map((t, idx) => ({
        "@type": "Review",
        "@id": `${SITE_URL}/#review-${idx + 1}`,
        itemReviewed: orgRef,
        author: {
          "@type": "Person",
          name: t.name,
          ...(t.role ? { jobTitle: t.role } : {}),
        },
        reviewBody: t.content,
      })),
    ],
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-teal-100 selection:text-teal-900">
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
