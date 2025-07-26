"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code2,
  Users,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-600/20 animate-pulse" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600/30 via-transparent to-transparent animate-pulse" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent animate-pulse" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 lg:px-6 py-4 animate-slide-down">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-500/20 rounded-full px-6 py-3 relative overflow-hidden">
            {/* Add subtle gradient overlay for more depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

            <div className="flex items-center space-x-2 relative z-10">
              <div className="p-2 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full animate-spin-slow">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-space-grotesk font-bold text-white drop-shadow-lg bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent tracking-tight">
                LifeCOMPILERS
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-2 relative z-10">
              {["Home", "About", "Work Process", "Testimonials", "Contact Us"].map((item, index) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-").replace(" ", "-")}`}
                  className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 ease-out group overflow-hidden rounded-full font-space-grotesk font-medium tracking-wide animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-sm scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-full border border-white/30" />
                  <span className="absolute inset-0 bg-gradient-to-r from-white/5 via-violet-300/10 to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                  <span className="relative z-10 group-hover:drop-shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                    {item === "About" ? "About" : item === "Work Process" ? "Work Process" : item}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative px-4 py-20 lg:py-32 animate-fade-in-up">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-black text-white mb-6 leading-tight tracking-tight animate-slide-up">
            We provide the best{" "}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">
              strategy
            </span>
            <br />
            to grow up your{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">
              business
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-inter font-light animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            We aim at providing innovative and impactful software development solutions that'll help businesses keep
            pace with the changing technology trends. We design & develop intuitive and user-friendly web-based apps and
            desktop & mobile applications, and much more.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white px-10 py-4 rounded-full text-lg font-space-grotesk font-bold shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105 tracking-wide animate-bounce-subtle"
            style={{ animationDelay: "0.6s" }}
          >
            DISCOVER MORE
            <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
          </Button>
        </div>
      </section>

      {/* Partner Approach Section */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        id="partner-approach"
        className="relative px-4 py-20 opacity-0"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent tracking-tight">
                Partner Approach
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed font-inter font-light">
                We are driven by 'Customer success' culture and don't think of ourselves as a service provider but your
                technology partner who is committed to your success.
              </p>
              <div className="space-y-4">
                {["Collaborative Development Process", "Transparent Communication", "Long-term Partnership Focus"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex items-center space-x-3 animate-slide-in-left"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CheckCircle className="h-6 w-6 text-emerald-400 animate-pulse" />
                      <span className="text-white/90 font-inter">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-2xl animate-pulse-slow">
                <MessageSquare className="h-32 w-32 text-white/60 animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Mindset Section */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        id="product-mindset"
        className="relative px-4 py-20 bg-gradient-to-r from-white/5 via-emerald-500/5 to-teal-500/5 backdrop-blur-sm opacity-0"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white text-center mb-12 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent tracking-tight">
            Product Mindset
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-3xl font-space-grotesk font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent tracking-tight">
                Building Solutions That Matter
              </h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed font-inter font-light">
                We don't just write code - we build products that solve real problems. Our product mindset ensures every
                feature we develop adds genuine value to your business and your users.
              </p>
              <div className="space-y-4">
                {[
                  "User-Centric Design Approach",
                  "Data-Driven Decision Making",
                  "Continuous Improvement Focus",
                  "Market-Ready Solutions",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center space-x-3 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CheckCircle className="h-6 w-6 text-emerald-400 animate-pulse" />
                    <span className="text-white/90 font-inter">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-2xl animate-pulse-slow">
                <div className="w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center animate-spin-slow">
                  <Code2 className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section ref={(el) => (sectionsRef.current[2] = el)} id="work-process" className="relative px-4 py-20 opacity-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white text-center mb-12 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent tracking-tight">
            Our Work Process
          </h2>
          <p className="text-xl text-white/90 text-center mb-16 max-w-3xl mx-auto leading-relaxed font-inter font-light">
            We follow a structured approach to ensure your project is delivered on time, within budget, and exceeds your
            expectations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Discovery & Planning",
                desc: "We start by understanding your business goals, target audience, and project requirements through detailed discussions and research.",
                gradient: "from-blue-500 to-purple-600",
                shadow: "shadow-blue-500/20 hover:shadow-blue-500/40",
              },
              {
                icon: Users,
                title: "Design & Prototyping",
                desc: "Our design team creates wireframes, mockups, and interactive prototypes to visualize your solution before development begins.",
                gradient: "from-emerald-500 to-teal-600",
                shadow: "shadow-emerald-500/20 hover:shadow-emerald-500/40",
              },
              {
                icon: Code2,
                title: "Development & Testing",
                desc: "We build your solution using cutting-edge technologies and conduct thorough testing to ensure quality and performance.",
                gradient: "from-violet-500 to-purple-600",
                shadow: "shadow-violet-500/20 hover:shadow-violet-500/40",
              },
              {
                icon: CheckCircle,
                title: "Launch & Support",
                desc: "We deploy your solution and provide ongoing support, maintenance, and updates to ensure continued success.",
                gradient: "from-cyan-500 to-blue-600",
                shadow: "shadow-cyan-500/20 hover:shadow-cyan-500/40",
              },
            ].map((step, index) => (
              <Card
                key={step.title}
                className={`bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl ${step.shadow} transition-all duration-300 hover:scale-105 relative animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce`}
                >
                  {index + 1}
                </div>
                <CardHeader className="text-center pt-8 pb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse`}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-space-grotesk font-bold tracking-tight">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-white/80 leading-relaxed font-inter">{step.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={(el) => (sectionsRef.current[3] = el)} id="testimonials" className="relative px-4 py-20 opacity-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white text-center mb-12 bg-gradient-to-r from-white via-pink-200 to-violet-200 bg-clip-text text-transparent tracking-tight">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Mr. Suraj Bhosale",
                company: "Dive Sindhudurg",
                text: "We are very pleased with the services provided. All of our requests were addressed and our expectations of what our website would look like were exceeded. Team has done an excellent job building our web site. Thank you for all your support.",
                gradient: "from-pink-500 to-violet-600",
                shadow: "shadow-pink-500/20",
              },
              {
                name: "Prof. Sujit Nagare",
                company: "Indira Institute of Pharmacy",
                text: "Services offered by LifeCOMPILERS team are simply astonishing and remarkable. They work with passion and provide a sense of fulfillment and honesty. Getting work done from LifeCOMPILERS is truly amazing.",
                gradient: "from-cyan-500 to-blue-600",
                shadow: "shadow-cyan-500/20",
              },
            ].map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className={`bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl ${testimonial.shadow} animate-slide-up`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4 leading-relaxed font-inter text-lg">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mr-3 animate-pulse`}
                    >
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-space-grotesk font-bold text-lg tracking-tight">{testimonial.name}</div>
                      <div className="text-sm text-white/70 font-inter">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-8">
            {[
              { number: "50+", label: "Projects Completed", gradient: "from-violet-400 to-pink-400" },
              { number: "25+", label: "Happy Clients", gradient: "from-cyan-400 to-blue-400" },
              { number: "5+", label: "Years Experience", gradient: "from-emerald-400 to-teal-400" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`text-5xl font-space-grotesk font-black text-transparent bg-gradient-to-r ${stat.gradient} bg-clip-text mb-2 tracking-tighter animate-bounce-subtle`}
                >
                  {stat.number}
                </div>
                <div className="text-white/80 font-inter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={(el) => (sectionsRef.current[4] = el)}
        id="contact"
        className="relative px-4 py-20 bg-gradient-to-r from-white/5 via-purple-500/5 to-pink-500/5 backdrop-blur-sm opacity-0"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white text-center mb-12 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight">
            Get In Touch
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-white">
              <h3 className="text-3xl font-space-grotesk font-bold mb-6 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent tracking-tight">
                Let's Start Your Project
              </h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed font-inter font-light">
                Ready to transform your ideas into reality? Contact us today to discuss your project requirements and
                get a free consultation.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Mail, text: "info@lifecompilers.com", gradient: "from-violet-500 to-purple-600" },
                  { icon: Phone, text: "+1 (555) 847-2639", gradient: "from-cyan-500 to-blue-600" },
                  {
                    icon: MapPin,
                    text: "1239(A), Sawant Nagar, Nachane\nRatnagiri, Maharashtra, INDIA",
                    gradient: "from-emerald-500 to-teal-600",
                  },
                ].map((contact, index) => (
                  <div
                    key={contact.text}
                    className="flex items-center space-x-4 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`p-3 bg-gradient-to-r ${contact.gradient} rounded-full animate-pulse`}>
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-white/90 font-inter text-lg whitespace-pre-line">{contact.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h4 className="text-xl font-space-grotesk font-bold mb-4 text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: Facebook,
                      href: "https://facebook.com/lifecompilers",
                      gradient: "from-blue-600 to-blue-700",
                      hoverGradient: "hover:from-blue-700 hover:to-blue-800",
                      shadow: "hover:shadow-blue-500/30",
                    },
                    {
                      icon: Twitter,
                      href: "https://twitter.com/lifecompilers",
                      gradient: "from-sky-500 to-sky-600",
                      hoverGradient: "hover:from-sky-600 hover:to-sky-700",
                      shadow: "hover:shadow-sky-500/30",
                    },
                    {
                      icon: Linkedin,
                      href: "https://linkedin.com/company/lifecompilers",
                      gradient: "from-blue-700 to-blue-800",
                      hoverGradient: "hover:from-blue-800 hover:to-blue-900",
                      shadow: "hover:shadow-blue-700/30",
                    },
                    {
                      icon: Instagram,
                      href: "https://instagram.com/lifecompilers",
                      gradient: "from-pink-500 to-purple-600",
                      hoverGradient: "hover:from-pink-600 hover:to-purple-700",
                      shadow: "hover:shadow-pink-500/30",
                    },
                    {
                      icon: Github,
                      href: "https://github.com/lifecompilers",
                      gradient: "from-gray-700 to-gray-800",
                      hoverGradient: "hover:from-gray-800 hover:to-gray-900",
                      shadow: "hover:shadow-gray-700/30",
                    },
                  ].map((social, index) => (
                    <Link
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group animate-bounce-subtle"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`p-3 bg-gradient-to-r ${social.gradient} ${social.hoverGradient} rounded-full transition-all duration-300 transform group-hover:scale-110 shadow-lg ${social.shadow}`}
                      >
                        <social.icon className="h-6 w-6 text-white" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl animate-slide-in-right">
              <CardContent className="p-8">
                <form className="space-y-6">
                  {["Your Name", "Your Email"].map((placeholder, index) => (
                    <div key={placeholder} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <input
                        type={placeholder === "Your Email" ? "email" : "text"}
                        placeholder={placeholder}
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400 font-inter text-lg backdrop-blur-sm transition-all duration-300 focus:scale-105"
                      />
                    </div>
                  ))}
                  <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none font-inter text-lg backdrop-blur-sm transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white py-4 rounded-xl font-space-grotesk font-semibold text-lg shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105 animate-pulse-subtle">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 py-8 border-t border-white/10 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full animate-spin-slow">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-space-grotesk font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent tracking-tight">
                LifeCOMPILERS
              </span>
            </div>

            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram, Github].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-white/60 hover:text-white transition-colors duration-300 animate-bounce-subtle"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-6 pt-4 border-t border-white/10">
            <p className="text-white/60 text-sm font-inter">
              © {new Date().getFullYear()} LifeCOMPILERS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes slide-down {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slide-up {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slide-in-left {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slide-in-right {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; background-size: 200% 200%; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        .animate-slide-down { animation: slide-down 0.8s ease-out; }
        .animate-slide-up { animation: slide-up 0.6s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.6s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.6s ease-out; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-pulse-subtle { animation: pulse-subtle 3s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
