import type { MetadataRoute } from "next"

// Pinned to a fixed date so the sitemap doesn't claim a fresh lastModified on
// every build. Bump this when the homepage content materially changes.
const LAST_MODIFIED = new Date("2026-05-22")

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lifecompilers.com"

  return [
    {
      url: baseUrl,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
