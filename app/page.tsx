import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Approach from "@/components/approach"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LifeCOMPILERS",
    url: "https://lifecompilers.com",
    logo: "https://lifecompilers.com/logo.png",
    description: "Innovative software solutions tailored to help businesses thrive in a changing digital landscape",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@lifecompilers.com",
    },
    sameAs: [
      "https://twitter.com/lifecompilers",
      "https://linkedin.com/company/lifecompilers",
      "https://github.com/lifecompilers",
    ],
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
