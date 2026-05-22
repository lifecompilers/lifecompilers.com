import { ImageResponse } from "next/og"

export const alt = "LifeCOMPILERS — Custom software for web, mobile, and desktop"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
// Image content rarely changes; let scrapers cache aggressively.
export const revalidate = false

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 15% 20%, rgba(20, 184, 166, 0.35) 0%, transparent 50%), radial-gradient(circle at 85% 85%, rgba(16, 185, 129, 0.30) 0%, transparent 55%), linear-gradient(135deg, #061518 0%, #0a1f24 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="72" height="72" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
            <rect width="180" height="180" rx="37" fill="#ffffff" />
            <g transform="translate(9 9) scale(0.9)">
              <path
                fill="#0a1f24"
                d="M101.141 53H136.632C151.023 53 162.689 64.6662 162.689 79.0573V112.904H148.112V79.0573C148.112 78.7105 148.098 78.3662 148.072 78.0251L112.581 112.898C112.701 112.902 112.821 112.904 112.941 112.904H148.112V126.672H112.941C98.5504 126.672 86.5638 114.891 86.5638 100.5V66.7434H101.141V100.5C101.141 101.15 101.191 101.792 101.289 102.422L137.56 66.7816C137.255 66.7563 136.945 66.7434 136.632 66.7434H101.141V53Z"
              />
              <path
                fill="#0a1f24"
                d="M65.2926 124.136L14 66.7372H34.6355L64.7495 100.436V66.7372H80.1365V118.47C80.1365 126.278 70.4953 129.958 65.2926 124.136Z"
              />
            </g>
          </svg>
          <div style={{ display: "flex", fontSize: "44px", fontWeight: 800, letterSpacing: "-0.02em" }}>
            <span style={{ color: "#ffffff" }}>Life</span>
            <span style={{ color: "#2dd4bf" }}>COMPILERS</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "92px",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              maxWidth: "1000px",
            }}
          >
            We build software that grows your business.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "34px",
              color: "#a7f3d0",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Custom web, mobile, and desktop apps — built by a product-minded studio.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "26px",
            color: "rgba(255,255,255,0.7)",
            fontWeight: 600,
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <span>lifecompilers.com</span>
          <span style={{ display: "flex", gap: "16px" }}>
            <span>Web</span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
            <span>Mobile</span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
            <span>Desktop</span>
          </span>
        </div>
      </div>
    ),
    { ...size },
  )
}
