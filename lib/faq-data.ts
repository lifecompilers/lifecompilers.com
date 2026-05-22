export type FaqItem = { question: string; answer: string }

export const faqItems: FaqItem[] = [
  {
    question: "What services does LifeCOMPILERS offer?",
    answer:
      "LifeCOMPILERS builds custom software across three areas: web applications with React and Next.js, mobile apps for Android and iOS, and cross-platform desktop apps for Windows, macOS, and Linux. We also offer product strategy, technical consulting, and ongoing maintenance.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer:
      "A typical MVP takes 6 to 12 weeks from kickoff to launch, depending on scope. We work in two-week sprints with weekly demos so you can ship the smallest version that proves market value and iterate from real user feedback.",
  },
  {
    question: "Which technologies and frameworks do you use?",
    answer:
      "Our default stack is TypeScript, React, and Next.js on the frontend; Node.js or Python on the backend; PostgreSQL or MongoDB for data; and React Native or native frameworks for mobile. For desktop we use Electron or Tauri. We choose tools based on what fits your product, not what's trendy.",
  },
  {
    question: "Do you work with startups or only established companies?",
    answer:
      "Both. A large share of our work is helping early-stage startups go from idea to first paying customers, but we also partner with established businesses on internal tools, modernization, and new product lines.",
  },
  {
    question: "Where is LifeCOMPILERS located and do you work remotely?",
    answer:
      "We are based in Ratnagiri, Maharashtra, India, and work remotely with clients worldwide. Communication happens over your preferred tools — Slack, email, or video — with weekly written updates and demos.",
  },
  {
    question: "How much does it cost to build a custom application?",
    answer:
      "Project pricing depends on scope, integrations, and timeline. Most engagements fall between a fixed-scope MVP build and a longer monthly retainer. We provide a written estimate after a free 30-minute discovery call where we map out the scope together.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes. After launch we offer monthly retainers that cover bug fixes, security updates, dependency upgrades, performance monitoring, and small feature work. You always own the source code and infrastructure.",
  },
  {
    question: "How do we start working together?",
    answer:
      "Send a short message through the contact form on this page describing your project. We respond within one business day and schedule a free discovery call to understand your goals, constraints, and timeline.",
  },
]
