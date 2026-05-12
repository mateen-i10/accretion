"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface DarkBumpTransitionProps {
  /**
   * When true, flips the dome upside-down (used as the footer transition).
   * The original Framer site uses `transform: rotateZ(180deg)` plus a
   * smaller height range (3rem → 16rem) for the inverted variant.
   */
  inverted?: boolean;
}

/**
 * Matches the original Accretion site:
 *   <img width="100%" height="3rem"   object-fit:fill  (start)
 *   <img width="100%" height="N rem"  object-fit:fill  (end)
 *
 * Top dome:    N = 26rem
 * Footer dome: N = 16rem, rotated 180°
 */
export function DarkBumpTransition({ inverted = false }: DarkBumpTransitionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 0.85", "start start"],
  });

  const endHeight = inverted ? "16rem" : "26rem";
  const height = useTransform(scrollYProgress, [0, 1], ["3rem", endHeight]);

  return (
    <div
      ref={wrapperRef}
      className="relative z-20 pointer-events-none w-full"
      style={{
        // Pull adjacent sections flush to avoid sub-pixel seams
        marginTop: inverted ? "-2px" : 0,
        marginBottom: inverted ? 0 : "-2px",
      }}
    >
      <motion.img
        src="/images/dark-bump-transition.png"
        alt=""
        style={{
          width: "100%",
          height,
          objectFit: "fill",
          display: "block",
          transform: inverted ? "rotateZ(180deg)" : undefined,
        }}
      />
    </div>
  );
}
