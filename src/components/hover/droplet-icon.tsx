"use client";
import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

/** Haven72 – saját csepp ikon az Its Hover API-jával (Apache-2.0 kompatibilis minta) */
const DropletIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
  const [scope, animate] = useAnimate();
  const start = useCallback(async () => {
    animate(".drop", { y: [0, -2, 1, 0], scaleY: [1, 0.92, 1.06, 1] }, { duration: 0.6, ease: "easeInOut" });
    await animate(".ripple", { opacity: [0, 1, 0], scale: [0.6, 1.25, 1.4] }, { duration: 0.7, ease: "easeOut", delay: 0.25 });
  }, [animate]);
  const stop = useCallback(() => {
    animate(".drop", { y: 0, scaleY: 1 }, { duration: 0.2 });
    animate(".ripple", { opacity: 0, scale: 0.6 }, { duration: 0.2 });
  }, [animate]);
  useImperativeHandle(ref, () => ({ startAnimation: start, stopAnimation: stop }));
  return (
    <motion.svg ref={scope} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} onHoverStart={start} onHoverEnd={stop}>
      <motion.path className="drop" style={{ transformOrigin: "12px 20px" }} d="M12 3c3.5 4.2 6 7.4 6 10.4A6 6 0 0 1 6 13.4C6 10.4 8.5 7.2 12 3Z" />
      <motion.ellipse className="ripple" cx="12" cy="21.2" rx="5" ry="1" style={{ transformOrigin: "12px 21px", opacity: 0 }} />
    </motion.svg>
  );
});
DropletIcon.displayName = "DropletIcon";
export default DropletIcon;
