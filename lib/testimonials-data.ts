export type Testimonial = {
  name: string
  role: string
  content: string
  initial: string
  color: string
  reviewAspect?: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Mr. Suraj Bhosale",
    role: "Dive Sindhudurg",
    content:
      "The team at LifeCOMPILERS exceeded our expectations. Their attention to detail and understanding of our business requirements was outstanding.",
    initial: "S",
    color: "from-teal-500 to-cyan-600",
    reviewAspect: "Attention to detail and requirements gathering",
  },
  {
    name: "Prof. Sujit Nagare",
    role: "Indira Institute of Pharmacy",
    content:
      "Astonishing and remarkable services from LifeCOMPILERS. I was particularly impressed by their passion, honesty, and sense of fulfillment in delivering the project.",
    initial: "P",
    color: "from-amber-500 to-orange-600",
    reviewAspect: "Project delivery and professionalism",
  },
]
