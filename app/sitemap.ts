import type { MetadataRoute } from "next"
import { LAST_MODIFIED, SITE_URL } from "@/lib/site-meta"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
