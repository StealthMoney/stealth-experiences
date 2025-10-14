"use client";
import { motion } from "framer-motion";
import Button from "../reusables/buttons";

export default function CtaSection() {
  return (
    <section className="bg-[var(--footer-bg1)] py-24 md:py-32 lg:py-40 w-full">
      <div className="w-full max-w-[90%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-[24px] md:text-[64px] text-white leading-tight">
            Enjoy unforgettable experiences paid for with Bitcoin.
          </h2>
          <p className="text-[#c7c7c7] text-[16px] md:text-[18px]">
            Stealth Experiences is your private concierge for life-long
            memories.
          </p>
          <Button
            type="button"
            text="Join Waitlist"
            className="w-full px-8 py-5 border text-[20px] border-[var(--section2-bg2)] text-white hover:text-white/85 cursor-pointer transition-colors duration-300 text-sm md:text-base font-light mt-4"
          />
        </motion.div>
      </div>
    </section>
  );
}
