import { Github, Linkedin, Facebook, Mail, MapPin } from "lucide-react"

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
      { name: "Web Development", href: "#services" },
      { name: "Mobile App Development", href: "#services" },
      { name: "Desktop Applications", href: "#services" },
      { name: "Product Consulting", href: "#contact" },
    ],
  },
]

const socials = [
  { Icon: Github, href: "https://github.com/lifecompilers", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/company/lifecompilers", label: "LinkedIn" },
  { Icon: Facebook, href: "https://facebook.com/lifecompilers", label: "Facebook" },
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
              Custom software development for web, mobile, and desktop — built for startups and growing businesses.
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
              <h2 className="text-foreground font-bold mb-4 text-sm uppercase tracking-wider">{section.title}</h2>
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
            <h2 className="text-foreground font-bold mb-4 text-sm uppercase tracking-wider">Connect</h2>
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
            Made with <span style={{ color: "#f43f5e" }}>&#10084;</span> in India
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
