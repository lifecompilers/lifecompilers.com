import { Smartphone, Globe, Monitor, ChevronRight } from "lucide-react"

const Services = () => {
  const services = [
    {
      id: "service-web",
      title: "Web Development",
      subtitle: "React & Next.js",
      desc: "Production web applications built with TypeScript, React, and Next.js — server-rendered, fast, accessible, and ready to scale from MVP to thousands of users.",
      cta: "Discuss a web project",
      icon: <Globe className="h-8 w-8" />,
      styles: {
        bg: "bg-emerald-50 dark:bg-emerald-950/30",
        hoverBg: "group-hover:bg-emerald-500",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        hoverIconColor: "group-hover:text-white",
        border: "hover:border-emerald-200 dark:hover:border-emerald-800",
        shadow: "hover:shadow-emerald-500/10",
      },
    },
    {
      id: "service-mobile",
      title: "Mobile App Development",
      subtitle: "Android & iOS",
      desc: "Android and iOS apps built with React Native or native frameworks, shipped to the Play Store and App Store in 8 to 14 weeks.",
      cta: "Discuss a mobile project",
      icon: <Smartphone className="h-8 w-8" />,
      styles: {
        bg: "bg-teal-50 dark:bg-teal-950/30",
        hoverBg: "group-hover:bg-teal-500",
        iconColor: "text-teal-600 dark:text-teal-400",
        hoverIconColor: "group-hover:text-white",
        border: "hover:border-teal-200 dark:hover:border-teal-800",
        shadow: "hover:shadow-teal-500/10",
      },
    },
    {
      id: "service-desktop",
      title: "Desktop Apps",
      subtitle: "Windows, macOS, Linux",
      desc: "Cross-platform desktop applications built with Electron or Tauri, with auto-updates and code signing for Windows, macOS, and Linux.",
      cta: "Discuss a desktop project",
      icon: <Monitor className="h-8 w-8" />,
      styles: {
        bg: "bg-cyan-50 dark:bg-cyan-950/30",
        hoverBg: "group-hover:bg-cyan-500",
        iconColor: "text-cyan-600 dark:text-cyan-400",
        hoverIconColor: "group-hover:text-white",
        border: "hover:border-cyan-200 dark:hover:border-cyan-800",
        shadow: "hover:shadow-cyan-500/10",
      },
    },
  ]

  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Expertise</p>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-black text-foreground mb-6">
            What we build
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Three core practices: web development with React and Next.js, mobile app development for Android and iOS,
            and cross-platform desktop applications for Windows, macOS, and Linux.
          </p>
          <div aria-hidden="true" className="w-24 h-2 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className={`group relative p-6 rounded-3xl bg-card border-2 border-border ${service.styles.border} transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-black/5 dark:shadow-black/20 ${service.styles.shadow}`}
            >
              <div
                aria-hidden="true"
                className={`w-16 h-16 rounded-2xl ${service.styles.bg} ${service.styles.hoverBg} flex items-center justify-center mb-6 transition-colors duration-200`}
              >
                <div
                  className={`${service.styles.iconColor} ${service.styles.hoverIconColor} transition-colors duration-200`}
                >
                  {service.icon}
                </div>
              </div>

              <p className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                {service.subtitle}
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>

              <a
                href="#contact"
                className="inline-flex items-center font-bold text-foreground group-hover:text-primary transition-colors duration-200"
              >
                {service.cta}
                <ChevronRight aria-hidden="true" className="h-5 w-5 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
