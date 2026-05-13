"use client";;
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

const CHECK_VARIANTS = {
  normal: {
    pathLength: 1,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      pathLength: { duration: 0.3, ease: "easeInOut" },
      opacity: { duration: 0.3, ease: "easeInOut" },
    },
  },
};

const ClipboardCheckIcon = forwardRef(({ onClick, className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  useImperativeHandle(ref, () => {
    isControlledRef.current = true;

    return {
      startAnimation: () => controls.start("animate"),
      stopAnimation: () => controls.start("normal"),
    };
  });

  return (
    <div
      className={cn(className)}
      onClick={(e) => {
        controls.start("animate");
        onClick(e)
      }}
      {...props}>
      <svg
        fill="none"
        height={size}
        stroke="rgba(255, 255, 255, 0.8)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg">
        <rect height="4" rx="1" ry="1" width="8" x="8" y="2" />
        <path
          d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <motion.path
          animate={controls}
          d="m9 14 2 2 4-4"
          initial="normal"
          stroke="oklch(0.7329 0.1935 150.81)"
          style={{ transformOrigin: "center", color: "oklch(0.7329 0.1935 150.81)" }}
          variants={CHECK_VARIANTS} />
      </svg>
    </div>
  );
});

ClipboardCheckIcon.displayName = "ClipboardCheckIcon";

export { ClipboardCheckIcon };
