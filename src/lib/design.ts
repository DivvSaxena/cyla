export const design = {
  space: { xs: "0.5rem", sm: "0.75rem", md: "1rem", lg: "1.5rem", xl: "2rem", "2xl": "3rem", "3xl": "4.5rem", "4xl": "6rem" },
  type: { label: "0.8125rem", body: "1rem", lead: "1.1875rem", h3: "1.375rem", h2: "clamp(2rem, 5vw, 3.25rem)", h1: "clamp(3rem, 10vw, 5.5rem)" },
  radius: { small: "0.75rem", medium: "1.125rem", large: "1.75rem", pill: "999px" },
  width: { content: "72rem", reading: "42rem", hero: "38rem" },
  breakpoint: { tablet: "48rem", desktop: "64rem" },
  color: { ink: "#1d1d1f", secondary: "#6e6e73", line: "#d2d2d7", quiet: "#f5f5f7", blue: "#0071e3", blueHover: "#0077ed", white: "#ffffff" },
  shadow: { header: "0 1px 0 rgba(0,0,0,.06)", button: "0 1px 2px rgba(0,0,0,.12)" },
} as const;

export const cssVars = Object.entries(design.color).map(([key, value]) => `--color-${key}: ${value};`).join(" ");
