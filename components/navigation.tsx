"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ["home", "services", "approach", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Approach", href: "#approach" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:justify-center">
          {/* Brand - visible on mobile */}
          <div className="flex items-center md:hidden">
            <a href="#home" className="text-2xl font-bold text-foreground">
              Life<span className="text-primary">COMPILERS</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-card/80 backdrop-blur-xl border border-border/50 rounded-full px-3 py-2 shadow-lg shadow-primary/5">
            {/* Brand inside pill */}
            <a href="#home" className="text-lg font-bold text-foreground px-4 py-2">
              Life<span className="text-primary">COMPILERS</span>
            </a>

            {/* Divider */}
            <div className="h-8 w-px bg-border/50" />

            <div className="flex items-center gap-1 relative">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                      isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-primary rounded-full -z-10 animate-in fade-in zoom-in-95 duration-300" />
                    )}
                    {link.name}
                  </a>
                )
              })}
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-border/50" />

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-accent text-muted-foreground hover:text-primary transition-colors"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* CTA Button */}
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-full font-bold transition-all shadow-md shadow-primary/25 hover:shadow-primary/40 hover:scale-105 text-sm ml-1"
            >
              Talk To Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-accent text-muted-foreground hover:text-primary transition-colors"
              >
                {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-card/95 backdrop-blur-xl border-t border-border shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-bold text-muted-foreground hover:text-primary hover:bg-accent rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
