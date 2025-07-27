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
  Menu,
  X,
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap,
  Target,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false) // Close mobile menu after navigation
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-600/20" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600/30 via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />

      {/* Header */}
      <header className="relative z-10 px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-500/20 rounded-full px-8 py-4 relative overflow-hidden">
            {/* Add subtle gradient overlay for more depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

            <div className="flex items-center space-x-3 relative z-10">
              <div className="p-2.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full shadow-lg">
                <Code2 className="h-7 w-7 text-white" />
              </div>
              <span className="text-xl font-space-grotesk font-bold text-white drop-shadow-lg bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent tracking-tight">
                LifeCOMPILERS
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 relative z-10">
              <button
                onClick={() => scrollToSection("home")}
                className="relative px-6 py-3 text-white/90 hover:text-white transition-all duration-300 ease-out group overflow-hidden rounded-full font-space-grotesk font-medium tracking-wide"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-sm scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-full border border-white/30" />
                <span className="absolute inset-0 bg-gradient-to-r from-white/5 via-violet-300/10 to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="relative z-10 group-hover:drop-shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                  Home
                </span>
              </button>
              <button
                onClick={() => scrollToSection("partner-approach")}
                className="relative px-6 py-3 text-white/90 hover:text-white transition-all duration-300 ease-out group overflow-hidden rounded-full font-space-grotesk font-medium tracking-wide"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-sm scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-full border border-white/30" />
                <span className="absolute inset-0 bg-gradient-to-r from-white/5 via-violet-300/10 to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="relative z-10 group-hover:drop-shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                  About
                </span>
              </button>
              <button
                onClick={() => scrollToSection("work-process")}
                className="relative px-6 py-3 text-white/90 hover:text-white transition-all duration-300 ease-out group overflow-hidden rounded-full font-space-grotesk font-medium tracking-wide"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-sm scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-full border border-white/30" />
                <span className="absolute inset-0 bg-gradient-to-r from-white/5 via-violet-300/10 to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="relative z-10 group-hover:drop-shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                  Work Process
                </span>
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="relative px-6 py-3 text-white/90 hover:text-white transition-all duration-300 ease-out group overflow-hidden rounded-full font-space-grotesk font-medium tracking-wide"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-sm scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-full border border-white/30" />
                <span className="absolute inset-0 bg-gradient-to-r from-white/5 via-violet-300/10 to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="relative z-10 group-hover:drop-shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                  Testimonials
                </span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="relative px-6 py-3 text-white/90 hover:text-white transition-all duration-300 ease-out group overflow-hidden rounded-full font-space-grotesk font-medium tracking-wide"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-sm scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-full border border-white/30" />
                <span className="absolute inset-0 bg-gradient-to-r from-white/5 via-violet-300/10 to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="relative z-10 group-hover:drop-shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                  Contact Us
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative z-10 p-3 text-white hover:text-white/80 transition-colors duration-200 rounded-full hover:bg-white/10"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-6 right-6 mt-4 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-500/20 rounded-2xl overflow-hidden z-50">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
              <div className="relative z-10 py-2">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block w-full px-8 py-4 text-left text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-space-grotesk font-medium tracking-wide"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("partner-approach")}
                  className="block w-full px-8 py-4 text-left text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-space-grotesk font-medium tracking-wide"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("work-process")}
                  className="block w-full px-8 py-4 text-left text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-space-grotesk font-medium tracking-wide"
                >
                  Work Process
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block w-full px-8 py-4 text-left text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-space-grotesk font-medium tracking-wide"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full px-8 py-4 text-left text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-space-grotesk font-medium tracking-wide"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Hero Section */}
      <section id="home" className="relative px-6 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-space-grotesk font-black text-white mb-8 leading-tight tracking-tight">
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
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-inter font-light">
              We aim at providing innovative and impactful software development solutions that'll help businesses keep
              pace with the changing technology trends. We design & develop intuitive and user-friendly web-based apps
              and desktop & mobile applications, and much more.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white px-12 py-6 rounded-full text-lg font-space-grotesk font-bold shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105 tracking-wide"
            >
              DISCOVER MORE
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Approach Section */}
      <section id="partner-approach" className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-white mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent tracking-tight">
              Partner Approach
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-inter">
              We don't just deliver projects – we build lasting partnerships that drive your success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-xl text-white/90 leading-relaxed font-inter font-light">
                  We are driven by 'Customer success' culture and don't think of ourselves as a service provider but
                  your technology partner who is committed to your success.
                </p>
                <p className="text-lg text-white/80 leading-relaxed font-inter">
                  Our collaborative approach ensures that every decision we make aligns with your business objectives
                  and long-term vision.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-space-grotesk font-semibold text-white mb-2">
                      Collaborative Development Process
                    </h4>
                    <p className="text-white/70 font-inter leading-relaxed">
                      Work closely with our team throughout the entire development lifecycle
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-space-grotesk font-semibold text-white mb-2">
                      Transparent Communication
                    </h4>
                    <p className="text-white/70 font-inter leading-relaxed">
                      Regular updates, clear timelines, and open dialogue at every step
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-space-grotesk font-semibold text-white mb-2">
                      Long-term Partnership Focus
                    </h4>
                    <p className="text-white/70 font-inter leading-relaxed">
                      Ongoing support and evolution of your digital solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl">
                  {/* Partnership illustration using icons and CSS */}
                  <div className="relative">
                    <div className="flex items-center justify-center space-x-8">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                          <Users className="h-10 w-10 text-white" />
                        </div>
                        <div className="text-white/80 font-space-grotesk text-sm font-semibold">Your Team</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-1 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full mb-2"></div>
                        <MessageSquare className="h-8 w-8 text-cyan-400" />
                        <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full mt-2"></div>
                      </div>
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                          <Code2 className="h-10 w-10 text-white" />
                        </div>
                        <div className="text-white/80 font-space-grotesk text-sm font-semibold">Our Team</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Mindset Section */}
      <section
        id="product-mindset"
        className="relative px-6 py-24 bg-gradient-to-r from-white/5 via-emerald-500/5 to-teal-500/5 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-white mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent tracking-tight">
              Product Mindset
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-inter">
              Building solutions that solve real problems and create lasting value
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-space-grotesk font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent tracking-tight">
                  Building Solutions That Matter
                </h3>
                <p className="text-xl text-white/90 leading-relaxed font-inter font-light">
                  We don't just write code - we build products that solve real problems. Our product mindset ensures
                  every feature we develop adds genuine value to your business and your users.
                </p>
                <p className="text-lg text-white/80 leading-relaxed font-inter">
                  Every line of code is written with purpose, every feature is designed with intention, and every
                  solution is crafted to drive measurable results.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-emerald-400" />
                    <span className="text-white font-space-grotesk font-semibold">User-Centric Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-emerald-400" />
                    <span className="text-white font-space-grotesk font-semibold">Data-Driven Decisions</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-400" />
                    <span className="text-white font-space-grotesk font-semibold">Continuous Improvement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-emerald-400" />
                    <span className="text-white font-space-grotesk font-semibold">Market-Ready Solutions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl">
                  {/* Product development illustration */}
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-2xl">
                      <Code2 className="h-16 w-16 text-white" />
                    </div>
                    {/* Orbiting elements */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-1/2 -left-8 transform -translate-y-1/2">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section id="work-process" className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent tracking-tight">
              Our Work Process
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-inter">
              We follow a structured approach to ensure your project is delivered on time, within budget, and exceeds
              your expectations at every milestone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 relative group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                1
              </div>
              <CardHeader className="text-center pt-12 pb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-space-grotesk font-bold tracking-tight mb-3">
                  Discovery & Planning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center px-6 pb-8">
                <CardDescription className="text-white/80 leading-relaxed font-inter text-base">
                  We start by understanding your business goals, target audience, and project requirements through
                  detailed discussions and comprehensive research.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 relative group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                2
              </div>
              <CardHeader className="text-center pt-12 pb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-space-grotesk font-bold tracking-tight mb-3">
                  Design & Prototyping
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center px-6 pb-8">
                <CardDescription className="text-white/80 leading-relaxed font-inter text-base">
                  Our design team creates wireframes, mockups, and interactive prototypes to visualize your solution
                  before development begins.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300 hover:scale-105 relative group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                3
              </div>
              <CardHeader className="text-center pt-12 pb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-space-grotesk font-bold tracking-tight mb-3">
                  Development & Testing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center px-6 pb-8">
                <CardDescription className="text-white/80 leading-relaxed font-inter text-base">
                  We build your solution using cutting-edge technologies and conduct thorough testing to ensure quality
                  and performance excellence.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 relative group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                4
              </div>
              <CardHeader className="text-center pt-12 pb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-space-grotesk font-bold tracking-tight mb-3">
                  Launch & Support
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center px-6 pb-8">
                <CardDescription className="text-white/80 leading-relaxed font-inter text-base">
                  We deploy your solution and provide ongoing support, maintenance, and updates to ensure continued
                  success and growth.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Services Grid */}
          <div className="mt-24">
            <h3 className="text-3xl md:text-4xl font-space-grotesk font-bold text-white text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Core Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-space-grotesk font-bold mb-4">Web Development</h4>
                  <p className="text-white/80 font-inter leading-relaxed">
                    Modern, responsive websites and web applications built with the latest technologies
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-space-grotesk font-bold mb-4">Mobile Apps</h4>
                  <p className="text-white/80 font-inter leading-relaxed">
                    Native and cross-platform mobile applications for iOS and Android
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-space-grotesk font-bold mb-4">Backend Systems</h4>
                  <p className="text-white/80 font-inter leading-relaxed">
                    Scalable backend infrastructure and API development for robust applications
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-white mb-6 bg-gradient-to-r from-white via-pink-200 to-violet-200 bg-clip-text text-transparent tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-inter">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl shadow-pink-500/20 hover:shadow-pink-500/30 transition-all duration-300">
              <CardContent className="p-10">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-white/90 mb-8 leading-relaxed font-inter text-lg italic">
                  "We are very pleased with the services provided. All of our requests were addressed and our
                  expectations of what our website would look like were exceeded. Team has done an excellent job
                  building our web site. Thank you for all your support."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-space-grotesk font-bold text-xl tracking-tight">Mr. Suraj Bhosale</div>
                    <div className="text-white/70 font-inter text-lg">Dive Sindhudurg</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300">
              <CardContent className="p-10">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-white/90 mb-8 leading-relaxed font-inter text-lg italic">
                  "Services offered by LifeCOMPILERS team are simply astonishing and remarkable. They work with passion
                  and provide a sense of fulfillment and honesty. Getting work done from LifeCOMPILERS is truly
                  amazing."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-space-grotesk font-bold text-xl tracking-tight">Prof. Sujit Nagare</div>
                    <div className="text-white/70 font-inter text-lg">Indira Institute of Pharmacy</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="border-t border-white/10 pt-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="text-6xl md:text-7xl font-space-grotesk font-black text-transparent bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text mb-4 tracking-tighter">
                  50+
                </div>
                <div className="text-white/80 font-inter text-xl font-medium">Projects Completed</div>
                <div className="text-white/60 font-inter text-sm mt-2">Across various industries</div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="text-6xl md:text-7xl font-space-grotesk font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-4 tracking-tighter">
                  25+
                </div>
                <div className="text-white/80 font-inter text-xl font-medium">Happy Clients</div>
                <div className="text-white/60 font-inter text-sm mt-2">Long-term partnerships</div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="text-6xl md:text-7xl font-space-grotesk font-black text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text mb-4 tracking-tighter">
                  5+
                </div>
                <div className="text-white/80 font-inter text-xl font-medium">Years Experience</div>
                <div className="text-white/60 font-inter text-sm mt-2">In software development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative px-6 py-24 bg-gradient-to-r from-white/5 via-purple-500/5 to-pink-500/5 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight">
              Get In Touch
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-inter">
              Ready to transform your ideas into reality? Let's discuss your project and create something amazing
              together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-space-grotesk font-bold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent tracking-tight">
                  Let's Start Your Project
                </h3>
                <p className="text-xl text-white/90 leading-relaxed font-inter font-light">
                  Ready to transform your ideas into reality? Contact us today to discuss your project requirements and
                  get a free consultation.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl shadow-lg">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-space-grotesk font-semibold text-white mb-2">Email Us</h4>
                    <span className="text-white/90 font-inter text-lg">info@lifecompilers.com</span>
                    <p className="text-white/70 font-inter text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-space-grotesk font-semibold text-white mb-2">Call Us</h4>
                    <span className="text-white/90 font-inter text-lg">+1 (555) 847-2639</span>
                    <p className="text-white/70 font-inter text-sm mt-1">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-lg">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-space-grotesk font-semibold text-white mb-2">Visit Us</h4>
                    <span className="text-white/90 font-inter text-lg">
                      1239(A), Sawant Nagar, Nachane
                      <br />
                      Ratnagiri, Maharashtra, INDIA
                    </span>
                    <p className="text-white/70 font-inter text-sm mt-1">By appointment only</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-8 border-t border-white/10">
                <h4 className="text-xl font-space-grotesk font-bold mb-6 text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://facebook.com/lifecompilers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform group-hover:scale-110 shadow-lg hover:shadow-blue-500/30">
                      <Facebook className="h-6 w-6 text-white" />
                    </div>
                  </Link>
                  <Link
                    href="https://twitter.com/lifecompilers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-4 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl hover:from-sky-600 hover:to-sky-700 transition-all duration-300 transform group-hover:scale-110 shadow-lg hover:shadow-sky-500/30">
                      <Twitter className="h-6 w-6 text-white" />
                    </div>
                  </Link>
                  <Link
                    href="https://linkedin.com/company/lifecompilers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-4 bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl hover:from-blue-800 hover:to-blue-900 transition-all duration-300 transform group-hover:scale-110 shadow-lg hover:shadow-blue-700/30">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                  </Link>
                  <Link
                    href="https://instagram.com/lifecompilers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform group-hover:scale-110 shadow-lg hover:shadow-pink-500/30">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                  </Link>
                  <Link
                    href="https://github.com/lifecompilers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform group-hover:scale-110 shadow-lg hover:shadow-gray-700/30">
                      <Github className="h-6 w-6 text-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Card className="bg-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
              <CardContent className="p-10">
                <form className="space-y-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-white font-space-grotesk font-medium text-sm">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent font-inter text-lg backdrop-blur-sm transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white font-space-grotesk font-medium text-sm">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent font-inter text-lg backdrop-blur-sm transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-white font-space-grotesk font-medium text-sm">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent font-inter text-lg backdrop-blur-sm transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-white font-space-grotesk font-medium text-sm">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent resize-none font-inter text-lg backdrop-blur-sm transition-all duration-200"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white py-6 rounded-xl font-space-grotesk font-semibold text-lg shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full shadow-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-space-grotesk font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent tracking-tight">
                LifeCOMPILERS
              </span>
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/lifecompilers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/lifecompilers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/lifecompilers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/lifecompilers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/lifecompilers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-white/10">
            <p className="text-white/60 font-inter">
              © {new Date().getFullYear()} LifeCOMPILERS. All rights reserved. | Made with ❤️ in India
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
