"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  // Each text sequential transition on user scroll
  const text1Color = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["#272727", "#ffffff"]
  );

  const text2Color = useTransform(
    scrollYProgress,
    [0.2, 0.45],
    ["#272727", "#ffffff"]
  );

  const text3Color = useTransform(
    scrollYProgress,
    [0.4, 0.7],
    ["#272727", "#ffffff"]
  );

  const text4Color = useTransform(
    scrollYProgress,
    [0.65, 0.95],
    ["#272727", "#ffffff"]
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#010101] py-16 md:py-24 lg:py-32 w-full flex flex-col justify-center items-center min-h-screen"
    >
      <div className="w-full flex flex-col justify-center items-center max-w-[90%]">
        <div className="md:text-[40px] text-[24px] leading-[64px]">
          <motion.span style={{ color: text1Color }}>We </motion.span>
          <motion.span style={{ color: text2Color }}>
            design unforgettable experiences paid for with Bitcoin.
          </motion.span>
        </div>

        <motion.p
          style={{ color: text3Color }}
          className="md:text-[40px] text-[24px] leading-[64px]"
        >
          From private villas on secluded islands to front-row seats at the
          world&apos;s most exclusive events, we curate bespoke luxury
          experiences tailored to your desires.
        </motion.p>

        <motion.p
          style={{ color: text4Color }}
          className="md:text-[40px] text-[24px] leading-[64px]"
        >
          No banks. No delays. Just the freedom, privacy, and global access that
          Bitcoin provides combined with white-glove service at every step of
          the way.
        </motion.p>
      </div>
    </section>
  );
}
