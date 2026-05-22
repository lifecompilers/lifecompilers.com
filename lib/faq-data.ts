export type FaqItem = { slug: string; question: string; answer: string }

// Each `slug` doubles as the URL anchor (#faq-<slug>) so answer engines can
// cite a specific Q&A directly, and as the schema Question.url value.
export const faqItems: FaqItem[] = [
  {
    slug: "services",
    question: "What services does LifeCOMPILERS offer?",
    answer:
      "LifeCOMPILERS builds custom software across three areas: web applications with TypeScript, React, and Next.js; mobile apps for Android and iOS using React Native or native frameworks; and cross-platform desktop applications for Windows, macOS, and Linux using Electron or Tauri. We also offer product strategy, technical consulting, and ongoing maintenance retainers.",
  },
  {
    slug: "mvp-timeline",
    question: "How long does it take to build an MVP?",
    answer:
      "An MVP (minimum viable product) is the smallest working version of a product real customers can use. LifeCOMPILERS typically scopes MVPs to 3–5 core features deliverable in 6 to 12 weeks. We work in two-week sprints with weekly demos, so a usable version of the product is in your hands within the first month — even before the final feature set is complete.",
  },
  {
    slug: "cost",
    question: "How much does it cost to build a custom application with LifeCOMPILERS?",
    answer:
      "LifeCOMPILERS offers two pricing models: fixed-scope MVP builds and monthly retainers for ongoing product work. Final pricing depends on scope, integrations, and timeline. A written estimate is provided after a free 30-minute discovery call.",
  },
  {
    slug: "stack",
    question: "Which technologies and frameworks does LifeCOMPILERS use?",
    answer:
      "Our default stack is TypeScript, React, and Next.js on the frontend; Node.js or Python on the backend; PostgreSQL or MongoDB for data; React Native or native Swift/Kotlin for mobile; and Electron or Tauri for desktop. We choose tools based on what fits your product, not what's trendy.",
  },
  {
    slug: "audience",
    question: "Does LifeCOMPILERS work with startups or only established companies?",
    answer:
      "LifeCOMPILERS works with both. The majority of engagements are early-stage startups building their first MVP and finding initial product-market fit. The rest are established businesses building internal tools, modernizing legacy systems, or launching new product lines.",
  },
  {
    slug: "location",
    question: "Where is LifeCOMPILERS based?",
    answer:
      "LifeCOMPILERS is based in Ratnagiri, Maharashtra, India. The studio was founded in 2020 and serves clients across India and worldwide.",
  },
  {
    slug: "remote",
    question: "Does LifeCOMPILERS work remotely with international clients?",
    answer:
      "Yes. LifeCOMPILERS works remotely with clients worldwide. Communication happens over your preferred tools — Slack, email, or video — with weekly written updates and live demos. Time zones from Pacific to Asia-Pacific are supported by overlapping working hours in IST.",
  },
  {
    slug: "support",
    question: "Does LifeCOMPILERS provide post-launch support and maintenance?",
    answer:
      "Yes. After launch, LifeCOMPILERS offers monthly retainers that cover bug fixes, security and dependency updates, performance monitoring, and small feature work. Clients always own the source code and infrastructure outright — there is no vendor lock-in.",
  },
  {
    slug: "onboarding",
    question: "How do we start working with LifeCOMPILERS?",
    answer:
      "Submit the contact form at lifecompilers.com with a short description of your project. LifeCOMPILERS replies within one business day and books a free 30-minute discovery call to define scope, budget, and timeline before sending a written estimate.",
  },
]
