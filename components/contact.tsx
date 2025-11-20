"use client"
import { MapPin, Mail, Github, Linkedin, Facebook, ChevronRight } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-foreground rounded-[3rem] p-6 md:p-12 overflow-hidden relative">
          {/* Background decorative circle */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/30 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div className="text-background">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Let's Build Something
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                  Amazing Together
                </span>
              </h2>
              <p className="text-background/70 text-lg mb-8 max-w-md leading-relaxed">
                Ready to start your next project? Get in touch with us today for a free consultation and strategy
                session.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-background/10 flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                    <MapPin className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                    <p className="text-background/70">
                      1239(A), Sawant Nagar, Nachane,
                      <br />
                      Ratnagiri, Maharashtra, INDIA.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-background/10 flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                    <Mail className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-background/70">contact@lifecompilers.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-bold text-background mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[Github, Linkedin, Facebook].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-4 bg-background/5 rounded-2xl text-background/60 hover:bg-background hover:text-foreground transition-all hover:-translate-y-1"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-background rounded-3xl p-6 md:p-8 shadow-2xl">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground ml-1">First Name</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 rounded-xl bg-muted border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-foreground"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground ml-1">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 rounded-xl bg-muted border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-foreground"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 rounded-xl bg-muted border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium appearance-none text-muted-foreground"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">Interested In</label>
                  <div className="relative">
                    <select className="w-full px-5 py-4 rounded-xl bg-muted border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium resize-none text-foreground">
                      <option>Mobile App Development</option>
                      <option>Web Development</option>
                      <option>Desktop App Development</option>
                      <option>Other</option>
                    </select>
                    <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 rotate-90 text-muted-foreground pointer-events-none w-5 h-5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl bg-muted border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-foreground"
                    placeholder="Tell us about your project goals..."
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold py-5 rounded-xl shadow-xl shadow-teal-600/20 transition-all hover:-translate-y-1 hover:shadow-teal-600/30">
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
