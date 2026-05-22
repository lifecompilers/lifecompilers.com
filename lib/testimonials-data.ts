export type Testimonial = {
  name: string
  role: string
  content: string
  initial: string
  color: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Mr. Suraj Bhosale",
    role: "Dive Sindhudurg",
    content:
      "The team at LifeCOMPILERS exceeded our expectations. Their attention to detail and understanding of our business requirements was outstanding.",
    initial: "S",
    color: "from-teal-400 to-teal-600",
  },
  {
    name: "Prof. Sujit Nagare",
    role: "Indira Institute of Pharmacy",
    content:
      "Astonishing and remarkable services. I was particularly impressed by their passion, honesty, and sense of fulfillment in delivering the project.",
    initial: "P",
    color: "from-emerald-400 to-emerald-600",
  },
]
