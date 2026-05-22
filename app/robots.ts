import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site-meta"

// Crawler policy: LifeCOMPILERS wants to be cited by answer engines, so all
// known AI retrieval bots are explicitly allowed below. To opt out of any one
// (commonly: training-only bots like CCBot or Bytespider while keeping
// retrieval bots like ChatGPT-User), change its rule to `disallow: ["/"]`.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },

      // OpenAI
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },

      // Anthropic
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },

      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },

      // Google AI (Gemini/Bard training opt-out signal)
      { userAgent: "Google-Extended", allow: "/" },

      // Apple Intelligence
      { userAgent: "Applebot-Extended", allow: "/" },

      // Meta AI
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },

      // Common Crawl (corpus used by many LLM trainers)
      { userAgent: "CCBot", allow: "/" },

      // ByteDance
      { userAgent: "Bytespider", allow: "/" },

      // Amazon
      { userAgent: "Amazonbot", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
