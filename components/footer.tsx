import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { LAST_MODIFIED } from "@/lib/site-meta"

const LAST_UPDATED_LABEL = LAST_MODIFIED.toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
})

const sections = [
  {
    title: "Company",
    links: [
      { name: "About", href: "#approach" },
      { name: "Services", href: "#services" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "FAQ", href: "#faq" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#service-web" },
      { name: "Mobile App Development", href: "#service-mobile" },
      { name: "Desktop Applications", href: "#service-desktop" },
    ],
  },
]

const socials = [
  { Icon: Github, href: "https://github.com/lifecompilers", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/company/lifecompilers", label: "LinkedIn" },
]

const Footer = () => {
  return (
    <footer className="bg-background text-muted-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-foreground">
              Life<span className="text-primary">COMPILERS</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed max-w-xs">
              LifeCOMPILERS is a Ratnagiri-based studio shipping React, Next.js, and React Native applications for
              startups and growing businesses since 2020.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <address className="not-italic">
                  1239(A), Sawant Nagar, Nachane,
                  <br />
                  Ratnagiri, Maharashtra, India
                </address>
              </li>
              <li className="flex items-center gap-2">
                <Mail aria-hidden="true" className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="mailto:contact@lifecompilers.com" className="hover:text-primary transition-colors">
                  contact@lifecompilers.com
                </a>
              </li>
            </ul>
          </div>

          {sections.map((section) => (
            <nav key={section.title} aria-label={section.title}>
              <h3 className="text-foreground font-bold mb-4 text-sm uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-foreground font-bold mb-4 text-sm uppercase tracking-wider">Connect</h3>
            <ul className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={`LifeCOMPILERS on ${label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-10 h-10 items-center justify-center rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    <Icon aria-hidden="true" size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <p>© {new Date().getFullYear()} LifeCOMPILERS. All rights reserved.</p>
          <p>
            <time dateTime={LAST_MODIFIED.toISOString()}>Last updated: {LAST_UPDATED_LABEL}</time>
          </p>
          <p>
            Made with <span className="text-rose-500">&#10084;</span> in India
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
