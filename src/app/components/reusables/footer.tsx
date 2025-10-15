"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import * as Icons from "@radix-ui/react-icons";
import CtaSection from "../homepage/cta";
import Image from "next/image";

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
            <p className="text-[#c7c7c7] md:text-[16px] text-[12px]">
              {new Date().getFullYear()} © Stealth Experiences by Stealth Money
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://x.com/stealthmoney_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFFFFF33] flex items-center justify-center hover:bg-[#4a4a4a] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Image src={"/images/x.svg"} width={20} height={20} alt="" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/stealthmoney"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFFFFF33] flex items-center justify-center hover:bg-[#4a4a4a] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Icons.LinkedInLogoIcon className="w-5 h-5 text-white" />
              </Link>

              <Link
                href="https://facebook.com/stealthmoney"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFFFFF33] flex items-center justify-center hover:bg-[#4a4a4a] transition-colors duration-300"
                aria-label="facebook"
              >
                <Image
                  src={"/images/facebook.svg"}
                  width={20}
                  height={20}
                  alt=""
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
