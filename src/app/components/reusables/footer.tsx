"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import * as Icons from "@radix-ui/react-icons";
import CtaSection from "../homepage/cta";

export default function FooterSection() {
  return (
    <>
      <CtaSection />
      <footer className="bg-[#1a1a1a] border-t border-[#343434] py-8">
        <div className="max-w-[90%] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center gap-4"
          >
            <p className="text-[#c7c7c7] text-sm">
              {new Date().getFullYear()} © Stealth Experiences by Stealth Money
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#343434] flex items-center justify-center hover:bg-[#4a4a4a] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Icons.TwitterLogoIcon className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#343434] flex items-center justify-center hover:bg-[#4a4a4a] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Icons.LinkedInLogoIcon className="w-5 h-5 text-white" />
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
