import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mr. Suraj Bhosale",
      role: "Dive Sindhudurg",
      content: "The team at LifeCOMPILERS exceeded our expectations. Their attention to detail and understanding of our business requirements was outstanding.",
      initial: "S",
      color: "from-teal-400 to-teal-600"
    },
    {
      name: "Prof. Sujit Nagare",
      role: "Indira Institute of Pharmacy",
      content: "Astonishing and remarkable services. I was particularly impressed by their passion, honesty, and sense of fulfillment in delivering the project.",
      initial: "P",
      color: "from-emerald-400 to-emerald-600"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">Client Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We take pride in building lasting relationships and delivering real value.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-card p-10 rounded-3xl shadow-xl shadow-black/5 dark:shadow-black/20 border border-border hover:border-primary/30 transition-all hover:-translate-y-2">
              <div className="flex flex-col h-full">
                <div className="mb-6 text-primary/40">
                   {/* Large Quote Icon */}
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                   </svg>
                </div>
                <p className="text-lg text-foreground/80 italic mb-8 flex-grow leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xl font-bold shadow-md`}>
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{t.name}</h4>
                    <p className="text-sm text-primary font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
