export type Accent = "spark" | "volt" | "glow";
export type AnimationPreset = "identity" | "scroll" | "micro" | "editorial" | "data" | "generative";

export interface Kit {
  slug: string;
  name: string;
  category: string;
  director: string;
  year: number;
  presets: number;
  formats: string[];
  accent: Accent;
  display: string;
  animationPreset: AnimationPreset;
  duration: number;
  description: string;
}

export const kits: Kit[] = [
  {
    slug: "identity-motion",
    name: "Identity Motion",
    category: "Brand · Identity",
    director: "Lucas Verne",
    year: 2023,
    presets: 12,
    formats: ["React", "CSS", "Lottie"],
    accent: "spark",
    display: "→",
    animationPreset: "identity",
    duration: 0.6,
    description:
      "Logo reveals, wordmark entrances and brand transition systems. For the precise moment a brand speaks for the first time.",
  },
  {
    slug: "scroll-reveal",
    name: "Scroll Reveal",
    category: "Web · Interaction",
    director: "Maya Kosta",
    year: 2023,
    presets: 18,
    formats: ["React", "CSS", "GSAP"],
    accent: "volt",
    display: "↓",
    animationPreset: "scroll",
    duration: 0.5,
    description:
      "Viewport-triggered entrances, parallax layers and stagger choreography for scroll-driven narratives.",
  },
  {
    slug: "ui-micro",
    name: "UI Micro",
    category: "Interface · States",
    director: "Lucas Verne",
    year: 2024,
    presets: 24,
    formats: ["React", "CSS", "Figma"],
    accent: "glow",
    display: "○",
    animationPreset: "micro",
    duration: 0.3,
    description:
      "Button states, menu choreography and feedback loops. The micro-interactions that make interfaces feel alive.",
  },
  {
    slug: "editorial",
    name: "Editorial",
    category: "Content · Typography",
    director: "Maya Kosta",
    year: 2024,
    presets: 14,
    formats: ["React", "CSS", "Lottie"],
    accent: "spark",
    display: "//",
    animationPreset: "editorial",
    duration: 0.8,
    description:
      "Text reveals, image transitions and layout choreography. For content that deserves an entrance.",
  },
  {
    slug: "data-viz",
    name: "Data Viz",
    category: "Charts · Data",
    director: "Ren Moto",
    year: 2024,
    presets: 10,
    formats: ["React", "D3", "SVG"],
    accent: "volt",
    display: "%",
    animationPreset: "data",
    duration: 1.2,
    description:
      "Animated counters, chart reveals, progress arcs and data storytelling for dashboards and reports.",
  },
  {
    slug: "generative",
    name: "Generative",
    category: "Creative · Code",
    director: "Ren Moto",
    year: 2023,
    presets: 8,
    formats: ["React", "Canvas", "Three.js"],
    accent: "glow",
    display: "~",
    animationPreset: "generative",
    duration: 2.0,
    description:
      "Procedural motion, noise-based animation and creative code aesthetics. Motion as material.",
  },
];

export function getKit(slug: string): Kit | undefined {
  return kits.find((k) => k.slug === slug);
}
