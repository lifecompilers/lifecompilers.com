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

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-600/20" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600/30 via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />

      {/* Header */}
      <header className="relative z-10 px-4 lg:px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-500/20 rounded-full px-6 py-3 relative overflow-hidden">
            {/* Add subtle gradient overlay for more depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

            <div className="flex items-center space-x-2 relative z-10">
              <div className="p-2 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-space-grotesk font-bold text-white drop-shadow-lg bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent tracking-tight">
                LifeCOMPILERS
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-2 relative z-10">
              <button
                onClick={() => scrollToSection("home")}
                className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 ease-out group overflow-hidden rounded-full font-space-grotesk font-medium tracking-wide"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-sm scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-full border border-white/30" />
                <span className="absolute inset-0 bg-gradient-to-r from-white/5 via-violet-300/10 to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="relative z-10 group-hover:drop-shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                  Home
                </span>
              </button>
              <button
                onClick={() => scrollToSection("partner-approach")}
                className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 ease-out group overflow-hidden rounded-full font-space-grotesk font-medium tracking-wide"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-sm scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-full border border-white/30" />
                <span className="absolute inset-0 bg-gradient-to-r from-white/5 via-violet-300/10 to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="relative z-10 group-hover:drop-shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                  About
                </span>
              </button>
              <button
                onClick={() => scrollToSection("work-process")}
                className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 ease-out group overflow-hidden rounded-full font-space-grotesk font-medium tracking-wide"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-sm scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-full border border-white/30" />
                <span className="absolute inset-0 bg-gradient-to-r from-white/5 via-violet-300/10 to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="relative z-10 group-hover:drop-shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                  Work Process
                </span>
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 ease-out group overflow-hidden rounded-full font-space-grotesk font-medium tracking-wide"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-sm scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-full border border-white/30" />
                <span className="absolute inset-0 bg-gradient-to-r from-white/5 via-violet-300/10 to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="relative z-10 group-hover:drop-shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                  Testimonials
                </span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 ease-out group overflow-hidden rounded-full font-space-grotesk font-medium tracking-wide"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-sm scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-full border border-white/30" />
                <span className="absolute inset-0 bg-gradient-to-r from-white/5 via-violet-300/10 to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="relative z-10 group-hover:drop-shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                  Contact Us
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-black text-white mb-6 leading-tight tracking-tight">
            We provide the best{" "}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
              strategy
            </span>
            <br />
            to grow up your{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
              business
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-inter font-light">
            We aim at providing innovative and impactful software development solutions that'll help businesses keep
            pace with the changing technology trends. We design & develop intuitive and user-friendly web-based apps and
            desktop & mobile applications, and much more.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white px-10 py-4 rounded-full text-lg font-space-grotesk font-bold shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105 tracking-wide"
          >
            DISCOVER MORE
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Partner Approach Section */}
      <section id="partner-approach" className="relative px-4 py-20">
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
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-400" />
                  <span className="text-white/90 font-inter">Collaborative Development Process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-400" />
                  <span className="text-white/90 font-inter">Transparent Communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-400" />
                  <span className="text-white/90 font-inter">Long-term Partnership Focus</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-2xl">
                <MessageSquare className="h-32 w-32 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Mindset Section */}
      <section
        id="product-mindset"
        className="relative px-4 py-20 bg-gradient-to-r from-white/5 via-emerald-500/5 to-teal-500/5 backdrop-blur-sm"
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
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-400" />
                  <span className="text-white/90 font-inter">User-Centric Design Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-400" />
                  <span className="text-white/90 font-inter">Data-Driven Decision Making</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-400" />
                  <span className="text-white/90 font-inter">Continuous Improvement Focus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-400" />
                  <span className="text-white/90 font-inter">Market-Ready Solutions</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-2xl">
                <div className="w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                  <Code2 className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section id="work-process" className="relative px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white text-center mb-12 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent tracking-tight">
            Our Work Process
          </h2>
          <p className="text-xl text-white/90 text-center mb-16 max-w-3xl mx-auto leading-relaxed font-inter font-light">
            We follow a structured approach to ensure your project is delivered on time, within budget, and exceeds your
            expectations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <CardHeader className="text-center pt-8 pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-space-grotesk font-bold tracking-tight">
                  Discovery & Planning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-white/80 leading-relaxed font-inter">
                  We start by understanding your business goals, target audience, and project requirements through
                  detailed discussions and research.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <CardHeader className="text-center pt-8 pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-space-grotesk font-bold tracking-tight">
                  Design & Prototyping
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-white/80 leading-relaxed font-inter">
                  Our design team creates wireframes, mockups, and interactive prototypes to visualize your solution
                  before development begins.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <CardHeader className="text-center pt-8 pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-space-grotesk font-bold tracking-tight">
                  Development & Testing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-white/80 leading-relaxed font-inter">
                  We build your solution using cutting-edge technologies and conduct thorough testing to ensure quality
                  and performance.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                4
              </div>
              <CardHeader className="text-center pt-8 pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-space-grotesk font-bold tracking-tight">Launch & Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-white/80 leading-relaxed font-inter">
                  We deploy your solution and provide ongoing support, maintenance, and updates to ensure continued
                  success.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white text-center mb-12 bg-gradient-to-r from-white via-pink-200 to-violet-200 bg-clip-text text-transparent tracking-tight">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl shadow-pink-500/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-4 leading-relaxed font-inter text-lg">
                  "We are very pleased with the services provided. All of our requests were addressed and our
                  expectations of what our website would look like were exceeded. Team has done an excellent job
                  building our web site. Thank you for all your support."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-space-grotesk font-bold text-lg tracking-tight">Mr. Suraj Bhosale</div>
                    <div className="text-sm text-white/70 font-inter">Dive Sindhudurg</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl shadow-cyan-500/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-4 leading-relaxed font-inter text-lg">
                  "Services offered by LifeCOMPILERS team are simply astonishing and remarkable. They work with passion
                  and provide a sense of fulfillment and honesty. Getting work done from LifeCOMPILERS is truly
                  amazing."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-space-grotesk font-bold text-lg tracking-tight">Prof. Sujit Nagare</div>
                    <div className="text-sm text-white/70 font-inter">Indira Institute of Pharmacy</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="text-5xl font-space-grotesk font-black text-transparent bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text mb-2 tracking-tighter">
                50+
              </div>
              <div className="text-white/80 font-inter">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="text-5xl font-space-grotesk font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2 tracking-tighter">
                25+
              </div>
              <div className="text-white/80 font-inter">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="text-5xl font-space-grotesk font-black text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text mb-2 tracking-tighter">
                5+
              </div>
              <div className="text-white/80 font-inter">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative px-4 py-20 bg-gradient-to-r from-white/5 via-purple-500/5 to-pink-500/5 backdrop-blur-sm"
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
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-white/90 font-inter text-lg">info@lifecompilers.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-white/90 font-inter text-lg">+1 (555) 847-2639</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-white/90 font-inter text-lg">
                    1239(A), Sawant Nagar, Nachane
                    <br />
                    Ratnagiri, Maharashtra, INDIA
                  </span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h4 className="text-xl font-space-grotesk font-bold mb-4 text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://facebook.com/lifecompilers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform group-hover:scale-110 shadow-lg hover:shadow-blue-500/30">
                      <Facebook className="h-6 w-6 text-white" />
                    </div>
                  </Link>
                  <Link
                    href="https://twitter.com/lifecompilers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-3 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full hover:from-sky-600 hover:to-sky-700 transition-all duration-300 transform group-hover:scale-110 shadow-lg hover:shadow-sky-500/30">
                      <Twitter className="h-6 w-6 text-white" />
                    </div>
                  </Link>
                  <Link
                    href="https://linkedin.com/company/lifecompilers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full hover:from-blue-800 hover:to-blue-900 transition-all duration-300 transform group-hover:scale-110 shadow-lg hover:shadow-blue-700/30">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                  </Link>
                  <Link
                    href="https://instagram.com/lifecompilers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform group-hover:scale-110 shadow-lg hover:shadow-pink-500/30">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                  </Link>
                  <Link
                    href="https://github.com/lifecompilers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform group-hover:scale-110 shadow-lg hover:shadow-gray-700/30">
                      <Github className="h-6 w-6 text-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400 font-inter text-lg backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400 font-inter text-lg backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none font-inter text-lg backdrop-blur-sm"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white py-4 rounded-xl font-space-grotesk font-semibold text-lg shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-space-grotesk font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent tracking-tight">
                LifeCOMPILERS
              </span>
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/lifecompilers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/lifecompilers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/lifecompilers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/lifecompilers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/lifecompilers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-6 pt-4 border-t border-white/10">
            <p className="text-white/60 text-sm font-inter">
              © {new Date().getFullYear()} LifeCOMPILERS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
