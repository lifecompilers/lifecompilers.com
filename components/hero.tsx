import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-background">
      {/* Vibrant Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-teal-500/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        <div className="absolute top-[10%] right-[0%] w-[35%] h-[35%] rounded-full bg-emerald-500/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob [animation-delay:2s]"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] rounded-full bg-cyan-500/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob [animation-delay:4s]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 border border-primary/20 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Your Trusted Technology Partner
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight mb-8 leading-[1.1]">
            We provide the best strategy to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 animate-gradient-x">
              grow your business
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Innovative software solutions tailored to help businesses thrive in a changing digital landscape. We design intuitive apps for web, mobile, and desktop.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a 
              href="#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
            >
              Start Your Project
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-card hover:bg-accent text-foreground border-2 border-border hover:border-primary/30 px-8 py-4 rounded-xl text-lg font-bold transition-all hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
