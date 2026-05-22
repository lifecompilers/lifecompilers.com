import { ChevronDown } from "lucide-react"
import { faqItems } from "@/lib/faq-data"

const Faq = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 bg-foreground/5 dark:bg-background relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
            Frequently Asked Questions
          </p>
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Answers, before you ask.
          </h2>
          <div aria-hidden="true" className="w-24 h-2 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-3">
          {faqItems.map((item, idx) => (
            <details
              key={item.slug}
              id={`faq-${item.slug}`}
              open={idx === 0}
              className="group bg-card border border-border rounded-2xl overflow-hidden transition-all open:shadow-md"
            >
              <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-6 py-5 text-left text-lg font-bold text-foreground hover:text-primary transition-colors [&::-webkit-details-marker]:hidden">
                <h3 className="m-0 text-lg font-bold leading-snug">{item.question}</h3>
                <ChevronDown
                  className="flex-shrink-0 h-5 w-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="px-6 pb-5 -mt-1 text-muted-foreground leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
