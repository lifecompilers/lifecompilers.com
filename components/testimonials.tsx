import { testimonials } from "@/lib/testimonials-data"

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Client Stories</p>
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-black text-foreground mb-6">
            What our clients say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from teams we've shipped products with across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <figure
              key={idx}
              className="bg-card p-8 rounded-3xl shadow-xl shadow-black/5 dark:shadow-black/20 border border-border hover:border-primary/30 transition-all hover:-translate-y-2 flex flex-col h-full"
            >
              <div aria-hidden="true" className="mb-4 text-primary/40">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>
              <blockquote className="text-lg text-foreground/80 italic mb-6 flex-grow leading-relaxed">
                {t.content}
              </blockquote>
              <figcaption className="flex items-center gap-4 pt-6 border-t border-border">
                <div
                  aria-hidden="true"
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xl font-bold shadow-md`}
                >
                  {t.initial}
                </div>
                <cite className="not-italic">
                  <div className="font-bold text-foreground text-lg">{t.name}</div>
                  <div className="text-sm text-primary font-medium">{t.role}</div>
                </cite>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
