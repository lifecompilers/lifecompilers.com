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
import { LAST_MODIFIED, SITE_URL } from "@/lib/site-meta"

// TODO: replace with the real business phone number, then mirror in components/contact.tsx
const BUSINESS_PHONE: string | null = null
// TODO: replace with founder name(s) — feeds Organization.founder + Knowledge Panel
const FOUNDER_NAME: string | null = null

const worldwide = { "@type": "Place", name: "Worldwide" }

export default function App() {
  const orgRef = { "@id": `${SITE_URL}/#organization` }
  const lastModifiedISO = LAST_MODIFIED.toISOString()

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
          contentUrl: `${SITE_URL}/logo-image`,
          encodingFormat: "image/png",
          width: 512,
          height: 512,
        },
        image: `${SITE_URL}/opengraph-image`,
        description:
          "LifeCOMPILERS is a custom software development studio building web, mobile, and desktop applications for startups and growing businesses.",
        foundingDate: "2020",
        slogan: "We build software that grows your business.",
        brand: {
          "@type": "Brand",
          name: "LifeCOMPILERS",
          slogan: "We build software that grows your business.",
        },
        knowsAbout: [
          "Custom software development",
          "Web application development",
          "Mobile app development",
          "Desktop application development",
          "MVP development",
          "TypeScript",
          "React",
          "Next.js",
          "React Native",
          "Electron",
          "Tauri",
          "Node.js",
          "PostgreSQL",
          "MongoDB",
        ],
        ...(FOUNDER_NAME ? { founder: { "@type": "Person", name: FOUNDER_NAME } } : {}),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          email: "contact@lifecompilers.com",
          ...(BUSINESS_PHONE ? { telephone: BUSINESS_PHONE } : {}),
          areaServed: worldwide,
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
        parentOrganization: orgRef,
        address: {
          "@type": "PostalAddress",
          streetAddress: "1239(A), Sawant Nagar, Nachane",
          addressLocality: "Ratnagiri",
          addressRegion: "Maharashtra",
          // TODO: confirm correct PIN — Ratnagiri city is 415612, Nachane locality is 415639
          postalCode: "415612",
          addressCountry: "IN",
        },
        areaServed: worldwide,
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
        dateModified: lastModifiedISO,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-heading", "#faq-mvp-timeline", "#faq-location"],
        },
      },
      {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#primaryimage`,
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
      },
      // Each nav link is its own SiteNavigationElement so Google can recognize
      // them individually for potential sitelinks. Parallel-array form is invalid.
      { "@type": "SiteNavigationElement", name: "Services", url: `${SITE_URL}/#services` },
      { "@type": "SiteNavigationElement", name: "Approach", url: `${SITE_URL}/#approach` },
      { "@type": "SiteNavigationElement", name: "Testimonials", url: `${SITE_URL}/#testimonials` },
      { "@type": "SiteNavigationElement", name: "FAQ", url: `${SITE_URL}/#faq` },
      { "@type": "SiteNavigationElement", name: "Contact", url: `${SITE_URL}/#contact` },
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
        areaServed: worldwide,
        serviceType: "Web Application Development",
        audience: { "@type": "BusinessAudience", audienceType: "Startups and growing businesses" },
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-mobile`,
        name: "Mobile App Development",
        provider: orgRef,
        description:
          "Android and iOS apps built with React Native or native frameworks, shipped to the Play Store and App Store in 8 to 14 weeks.",
        areaServed: worldwide,
        serviceType: "Mobile Application Development",
        audience: { "@type": "BusinessAudience", audienceType: "Startups and growing businesses" },
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-desktop`,
        name: "Desktop App Development",
        provider: orgRef,
        description:
          "Cross-platform desktop applications for Windows, macOS, and Linux built with Electron or Tauri, with auto-updates and code signing.",
        areaServed: worldwide,
        serviceType: "Desktop Application Development",
        audience: { "@type": "BusinessAudience", audienceType: "Startups and growing businesses" },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        name: "Frequently Asked Questions",
        inLanguage: "en-US",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          "@id": `${SITE_URL}/#faq-${item.slug}`,
          url: `${SITE_URL}/#faq-${item.slug}`,
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
          ...(t.role ? { worksFor: { "@type": "Organization", name: t.role } } : {}),
        },
        reviewBody: t.content,
        ...(t.reviewAspect ? { reviewAspect: t.reviewAspect } : {}),
        // TODO: add datePublished (ISO date) per testimonial to qualify for review snippets
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
