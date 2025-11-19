import React from 'react';
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Approach from '@/components/approach';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
