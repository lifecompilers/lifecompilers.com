"use client"
import { MapPin, Mail, Github, Linkedin, ChevronRight } from "lucide-react"

const socialLinks = [
  { Icon: Github, href: "https://github.com/lifecompilers", label: "LifeCOMPILERS on GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/company/lifecompilers", label: "LifeCOMPILERS on LinkedIn" },
  // TODO: add Facebook / Twitter / Instagram only if the handles actually exist
]

const Contact = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-foreground rounded-[3rem] p-6 md:p-12 overflow-hidden relative">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/30 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"
          ></div>

          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div className="text-background">
              <h2 id="contact-heading" className="text-4xl md:text-5xl font-black mb-6">
                Let's build something
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                  amazing together.
                </span>
              </h2>
              <p className="text-background/70 text-lg mb-8 max-w-md leading-relaxed">
                Ready to start your next project? Send a message and we'll respond within one business day with a free
                30-minute discovery call.
              </p>

              <address className="space-y-8 not-italic">
                <div className="flex items-start gap-5 group">
                  <div
                    aria-hidden="true"
                    className="w-12 h-12 rounded-2xl bg-background/10 flex items-center justify-center group-hover:bg-teal-500 transition-colors"
                  >
                    <MapPin className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                    <p className="text-background/70">
                      1239(A), Sawant Nagar, Nachane,
                      <br />
                      Ratnagiri, Maharashtra, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div
                    aria-hidden="true"
                    className="w-12 h-12 rounded-2xl bg-background/10 flex items-center justify-center group-hover:bg-teal-500 transition-colors"
                  >
                    <Mail className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <a
                      href="mailto:contact@lifecompilers.com"
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      contact@lifecompilers.com
                    </a>
                  </div>
                </div>
              </address>

              <div className="mt-12">
                <h3 className="font-bold text-background mb-4">Follow Us</h3>
                <ul className="flex gap-4">
                  {socialLinks.map(({ Icon, href, label }) => (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={label}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="inline-flex p-4 bg-background/5 rounded-2xl text-background/60 hover:bg-background hover:text-foreground transition-all hover:-translate-y-1"
                      >
                        <Icon aria-hidden="true" size={20} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background rounded-3xl p-6 md:p-8 shadow-2xl">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6"
                aria-label="Project inquiry form"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-foreground ml-1 block">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-muted border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-foreground"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-foreground ml-1 block">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-muted border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-foreground"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-foreground ml-1 block">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-muted border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-foreground"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="interest" className="text-sm font-bold text-foreground ml-1 block">
                    Interested In
                  </label>
                  <div className="relative">
                    <select
                      id="interest"
                      name="interest"
                      defaultValue="Mobile App Development"
                      className="w-full px-5 py-4 rounded-xl bg-muted border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium resize-none text-foreground appearance-none"
                    >
                      <option>Mobile App Development</option>
                      <option>Web Development</option>
                      <option>Desktop App Development</option>
                      <option>Other</option>
                    </select>
                    <ChevronRight
                      aria-hidden="true"
                      className="absolute right-5 top-1/2 -translate-y-1/2 rotate-90 text-muted-foreground pointer-events-none w-5 h-5"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-foreground ml-1 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-muted border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-foreground"
                    placeholder="Tell us about your project goals..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold py-5 rounded-xl shadow-xl shadow-teal-600/20 transition-all hover:-translate-y-1 hover:shadow-teal-600/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
