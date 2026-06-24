import type { Variants, Transition } from "framer-motion";

// Easing curves extracted from the original design tokens.
export const EASE_EXPO: [number, number, number, number] = [0.87, 0, 0.13, 1];
export const EASE_SMOOTH: [number, number, number, number] = [0.76, 0, 0.24, 1];
export const EASE: [number, number, number, number] = [0.84, 0, 0.16, 1];

export const smoothTransition: Transition = {
  duration: 0.8,
  ease: EASE_SMOOTH,
};

// Subtle on-load reveal used by the hero columns.
export const revealContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_SMOOTH },
  },
};

// Slide variants for the testimonial carousel.
export const slideVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
};
