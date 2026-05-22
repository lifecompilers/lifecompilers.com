import { ChevronRight } from "lucide-react"

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-background"
    >
      <div aria-hidden="true" className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-teal-500/15 blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[5%] w-[35%] h-[35%] rounded-full bg-emerald-500/15 blur-[100px] animate-blob [animation-delay:5s]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20 shadow-sm backdrop-blur-sm">
            <span aria-hidden="true" className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Custom software development studio · Ratnagiri, India
          </p>

          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl font-black text-foreground tracking-tight mb-6 leading-[1.1]"
          >
            Custom software <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500">
              that grows your business.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            LifeCOMPILERS is a custom software development studio founded in 2020 in Ratnagiri, India. We build web,
            Android, iOS, and cross-platform desktop apps with React, Next.js, and modern stacks — for startups and
            growing businesses worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold transition-all duration-200 shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Start Your Project
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-card hover:bg-accent text-foreground border-2 border-border hover:border-primary/30 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
