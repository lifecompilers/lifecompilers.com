import { Users, Target, Rocket, Github } from "lucide-react"

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
            <p className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Why Choose Us</p>
            <h2 id="approach-heading" className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
              More than a vendor.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
                We are your partner.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We don't just write code; we build businesses. Our product-minded team focuses on product-market fit,
              customer needs, and rapid time-to-market.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Customer Success",
                  desc: "Your growth is our primary metric for success.",
                  icon: Users,
                  color: "bg-teal-500",
                  text: "text-teal-400",
                },
                {
                  title: "Product-Minded",
                  desc: "Intuitive solutions that fit market needs perfectly.",
                  icon: Target,
                  color: "bg-emerald-500",
                  text: "text-emerald-400",
                },
                {
                  title: "Innovative Tech",
                  desc: "Leveraging React, NextJS, and modern stacks.",
                  icon: Rocket,
                  color: "bg-cyan-500",
                  text: "text-cyan-400",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div
                    aria-hidden="true"
                    className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.color} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center text-primary`}
                  >
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-3xl blur-lg opacity-20 dark:opacity-30"></div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-6 lg:p-8 relative shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background/80 p-6 rounded-2xl border border-border text-center transform hover:-translate-y-1 transition-transform duration-200 shadow-sm">
                  <div className="text-4xl font-black text-teal-500 mb-2">100%</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Satisfaction</div>
                </div>
                <div className="bg-background/80 p-6 rounded-2xl border border-border text-center transform hover:-translate-y-1 transition-transform duration-200 shadow-sm">
                  <div className="text-4xl font-black text-emerald-500 mb-2">24/7</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Support</div>
                </div>
                <div className="bg-gradient-to-br from-teal-600 to-emerald-600 p-8 rounded-2xl border border-white/10 text-center col-span-2 transform hover:-translate-y-1 transition-transform duration-200 shadow-lg">
                  <Github aria-hidden="true" className="w-8 h-8 text-white mx-auto mb-4 opacity-90" />
                  <div className="text-xl font-bold text-white mb-2">Open Source</div>
                  <div className="text-sm text-teal-100">Actively contributing to the community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach
