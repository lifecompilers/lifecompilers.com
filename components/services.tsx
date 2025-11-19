import React from 'react';
import { Smartphone, Globe, Monitor, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Mobile Apps',
      subtitle: 'Android & iOS',
      desc: 'Custom, scalable mobile applications designed for measurable business results and engagement.',
      icon: <Smartphone className="h-8 w-8" />,
      styles: {
        bg: 'bg-teal-50 dark:bg-teal-950/30',
        hoverBg: 'group-hover:bg-teal-500',
        iconColor: 'text-teal-600 dark:text-teal-400',
        hoverIconColor: 'group-hover:text-white',
        border: 'hover:border-teal-200 dark:hover:border-teal-800',
        shadow: 'hover:shadow-teal-500/10'
      }
    },
    {
      title: 'Web Development',
      subtitle: 'NextJS & React',
      desc: 'Next-gen web applications that revolutionize business ideas with speed and performance.',
      icon: <Globe className="h-8 w-8" />,
      styles: {
        bg: 'bg-emerald-50 dark:bg-emerald-950/30',
        hoverBg: 'group-hover:bg-emerald-500',
        iconColor: 'text-emerald-600 dark:text-emerald-400',
        hoverIconColor: 'group-hover:text-white',
        border: 'hover:border-emerald-200 dark:hover:border-emerald-800',
        shadow: 'hover:shadow-emerald-500/10'
      }
    },
    {
      title: 'Desktop Apps',
      subtitle: 'Cross-Platform',
      desc: 'Robust custom desktop solutions built with advanced technologies for Windows, Mac, and Linux.',
      icon: <Monitor className="h-8 w-8" />,
      styles: {
        bg: 'bg-cyan-50 dark:bg-cyan-950/30',
        hoverBg: 'group-hover:bg-cyan-500',
        iconColor: 'text-cyan-600 dark:text-cyan-400',
        hoverIconColor: 'group-hover:text-white',
        border: 'hover:border-cyan-200 dark:hover:border-cyan-800',
        shadow: 'hover:shadow-cyan-500/10'
      }
    }
  ];

  return (
    <section id="services" className="py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6">Core Services</h3>
          <div className="w-24 h-2 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`group relative p-8 rounded-3xl bg-card border-2 border-border ${service.styles.border} transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-black/5 dark:shadow-black/20 ${service.styles.shadow}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${service.styles.bg} ${service.styles.hoverBg} flex items-center justify-center mb-8 transition-colors duration-300`}>
                <div className={`${service.styles.iconColor} ${service.styles.hoverIconColor} transition-colors duration-300`}>
                  {service.icon}
                </div>
              </div>
              
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">{service.subtitle}</span>
              <h4 className="text-2xl font-bold text-foreground mb-4">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed mb-8">{service.desc}</p>
              
              <a href="#contact" className="inline-flex items-center font-bold text-foreground group-hover:text-primary transition-colors">
                Learn more <ChevronRight className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
