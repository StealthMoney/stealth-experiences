"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../reusables/buttons";

const services = [
  {
    title: "Digital Concierge",
    description:
      "Enjoy memories, organised with a few clicks. Stealth Experiences combines personal assistant expertise with digital access.",
    image: "/images/mural1.webp",
  },
  {
    title: "Exclusive Luxury",
    description:
      "Live with effortless elegance. We deliver  quality & absolute discretion, transforming luxury into a personal, seamless experience.",
    image: "/images/mural2.webp",
  },
  {
    title: "Unparalleled Service",
    description:
      "Enjoy a dedicated support structure that handles your every request with precision, speed, and genuine dedication.",
    image: "/images/mural3.webp",
  },
  {
    title: "Pay with Bitcoin",
    description:
      "Bitcoin is money that grows over the long term, with Stealth Experiences you can pay for once in a lifetime experiences with Bitcoin.",
    image: "/images/mural4.webp",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="w-full max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-x-8 gap-y-4 md:mb-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[24px] md:text-[40px] font-[400] text-[var(--text-dark)] leading-tight font-neue">
              Luxury bespoke moments curated for you and your loved ones.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-end"
          >
            <p className="text-[var(--text-dark)] text-[16px] md:text-[18px] leading-[32px] font-[400]">
              With tailored luxury travel, VIP access, and bespoke
              once-in-a-lifetime moments, we handle every detail behind the
              scenes so you simply arrive, experience, and remember.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-[16px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-[var(--text-dark)]">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-[var(--text-dark)] mb-2 font-neue">
                {service.title}
              </h3>
              <p className="text-[var(--text-dark1)] text-[14px] leading-[24px] font-[400]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 lg:mt-16 flex justify-center w-full"
        >
          <Button
            type="button"
            text="Join Waitlist"
            className="w-full md:max-w-[60%] max-w-[90%] px-8 py-5 border border-[var(--text-dark)] text-[var(--text-dark)] hover:text-[#090909]/85 cursor-pointer transition-colors duration-300 text-sm md:text-base font-light"
          />
        </motion.div>
      </div>
    </section>
  );
}
