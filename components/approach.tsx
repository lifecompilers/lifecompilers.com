import { Users, Target, Rocket, Github, Calendar } from "lucide-react"

const principles = [
  {
    title: "Two-week sprints, weekly demos",
    desc: "Working software in front of you every week, not a slide deck at the end of the quarter.",
    icon: Users,
    color: "bg-teal-500",
  },
  {
    title: "Product-minded engineering",
    desc: "We push back on requirements that won't ship value, and propose smaller alternatives that will.",
    icon: Target,
    color: "bg-emerald-500",
  },
  {
    title: "Modern, boring stack",
    desc: "TypeScript, React, Next.js, PostgreSQL — proven tools we can support five years from now.",
    icon: Rocket,
    color: "bg-cyan-500",
  },
]

const Approach = () => {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="py-20 bg-foreground/5 dark:bg-background relative overflow-hidden"
    >
      <div aria-hidden="true" className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-bold tracking-wider uppercase text-sm mb-3">How We Work</p>
            <h2 id="approach-heading" className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
              More than a vendor.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
                Your engineering partner.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              LifeCOMPILERS works in two-week sprints with weekly demos, prioritizing product-market fit, customer
              feedback, and fast time-to-market. Clients own all source code and infrastructure from day one.
            </p>

            <dl className="space-y-6">
              {principles.map((item) => (
                <div key={item.title} className="flex gap-5 items-start">
                  <div
                    aria-hidden="true"
                    className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.color} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center text-primary`}
                  >
                    <item.icon size={24} />
                  </div>
                  <div>
                    <dt className="text-xl font-bold text-foreground mb-2">{item.title}</dt>
                    <dd className="text-muted-foreground">{item.desc}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-3xl blur-lg opacity-20 dark:opacity-30"></div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-6 lg:p-8 relative shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background/80 p-6 rounded-2xl border border-border text-center transform hover:-translate-y-1 transition-transform duration-200 shadow-sm">
                  <Calendar aria-hidden="true" className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                  <div className="text-3xl font-black text-teal-500 mb-1">2020</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Founded</div>
                </div>
                <div className="bg-background/80 p-6 rounded-2xl border border-border text-center transform hover:-translate-y-1 transition-transform duration-200 shadow-sm">
                  <div aria-hidden="true" className="text-3xl font-black text-emerald-500 mb-1 mt-8">3</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Core practices</div>
                  <div className="text-xs text-muted-foreground mt-1">Web · Mobile · Desktop</div>
                </div>
                <a
                  href="https://github.com/lifecompilers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-teal-600 to-emerald-600 p-8 rounded-2xl border border-white/10 text-center col-span-2 transform hover:-translate-y-1 transition-transform duration-200 shadow-lg block"
                >
                  <Github aria-hidden="true" className="w-8 h-8 text-white mx-auto mb-4 opacity-90" />
                  <div className="text-xl font-bold text-white mb-2">Open source on GitHub</div>
                  <div className="text-sm text-teal-100">github.com/lifecompilers</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach
