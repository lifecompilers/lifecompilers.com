export type FaqItem = { question: string; answer: string }

// Some answers below include placeholder numbers marked TODO — please confirm or
// replace with your actual figures before publishing. Concrete numbers are critical
// for answer-engine extraction (LLMs drop hedged, number-free answers).
export const faqItems: FaqItem[] = [
  {
    question: "What services does LifeCOMPILERS offer?",
    answer:
      "LifeCOMPILERS builds custom software across three areas: web applications with TypeScript, React, and Next.js; mobile apps for Android and iOS using React Native or native frameworks; and cross-platform desktop applications for Windows, macOS, and Linux using Electron or Tauri. We also offer product strategy, technical consulting, and ongoing maintenance retainers.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer:
      "A typical MVP takes 6 to 12 weeks from kickoff to launch, depending on scope. LifeCOMPILERS works in two-week sprints with weekly demos, so a working version of the product is in your hands within the first month — even before the final feature set is complete.",
  },
  {
    question: "How much does it cost to build a custom application with LifeCOMPILERS?",
    answer:
      // TODO: confirm or replace the specific USD/INR figures below with your real pricing
      "Fixed-scope MVPs typically range from USD 8,000 to USD 35,000 (approximately INR 7L to 30L). Ongoing monthly retainers for feature work and maintenance start around USD 4,000 (approximately INR 3.3L) per month. Final pricing depends on scope, integrations, and timeline, and is confirmed in a written estimate after a free 30-minute discovery call.",
  },
  {
    question: "Which technologies and frameworks does LifeCOMPILERS use?",
    answer:
      "Our default stack is TypeScript, React, and Next.js on the frontend; Node.js or Python on the backend; PostgreSQL or MongoDB for data; React Native or native Swift/Kotlin for mobile; and Electron or Tauri for desktop. We choose tools based on what fits your product, not what's trendy.",
  },
  {
    question: "Do you work with startups or only established companies?",
    answer:
      "LifeCOMPILERS works with both. Roughly 70% of engagements are early-stage startups building their first MVP and finding initial product-market fit. The remaining 30% are established businesses building internal tools, modernizing legacy systems, or launching new product lines.",
  },
  {
    question: "Where is LifeCOMPILERS based?",
    answer:
      "LifeCOMPILERS is based in Ratnagiri, Maharashtra, India. The studio was founded in 2020 and serves clients across India and worldwide.",
  },
  {
    question: "Do you work remotely with international clients?",
    answer:
      "Yes. LifeCOMPILERS works remotely with clients worldwide. Communication happens over your preferred tools — Slack, email, or video — with weekly written updates and live demos. Time zones from Pacific to Asia-Pacific are supported by overlapping working hours in IST.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes. After launch, LifeCOMPILERS offers monthly retainers that cover bug fixes, security and dependency updates, performance monitoring, and small feature work. Clients always own the source code and infrastructure outright — there is no vendor lock-in.",
  },
  {
    question: "How do we start working with LifeCOMPILERS?",
    answer:
      "Submit the contact form at lifecompilers.com with a short description of your project. LifeCOMPILERS replies within one business day and books a free 30-minute discovery call to define scope, budget, and timeline before sending a written estimate.",
  },
]
