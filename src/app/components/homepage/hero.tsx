"use client";
import Image from "next/image";
import Navigation from "../reusables/navigation";
import { ArrowRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    src: "/images/hero1.svg",
    title: "YATCHING EXPLORATIONS",
  },
  {
    id: 2,
    src: "/images/hero2.svg",
    title: "FORMULA 1 WEEKENDS",
  },
  {
    id: 3,
    src: "/images/hero3.svg",
    title: "LUXURY SAFARIS",
  },
  {
    id: 4,
    src: "/images/hero4.svg",
    title: "WELLNESS RETREATS",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const scrollAway = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full min-h-screen relative text-[var(--text-white)] overflow-hidden">
      <Navigation />

      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[active].id}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[active].src}
              alt={slides[active].title}
              fill
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="md:max-w-[60%] max-w-[80%] absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[2]">
        <h1 className="md:text-[64px] text-[40px] font-neue">
          Unforgettable experiences paid for with Bitcoin.
        </h1>
      </div>

      <div className="w-full max-w-[90%] flex lg:flex-row flex-col justify-between lg:items-center absolute lg:bottom-10 bottom-30 left-1/2 -translate-x-1/2 z-[3] lg:gap-y-0 gap-y-4">
        <div className="flex items-center gap-x-4">
          <motion.span
            key={slides[active].title}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-[600]"
          >
            {slides[active].title}
          </motion.span>
          <ArrowRightIcon />
          <span className="font-[400]">
            <span>{String(active + 1).padStart(2, "0")}</span>/
            <span className="text-[var(--text-dark1)]">
              {String(slides.length).padStart(2, "0")}
            </span>
          </span>
        </div>

        <div
          role="button"
          aria-label="scroll-to-next-section"
          onClick={scrollAway}
          className="w-[48px] h-[48px] hover:bg-[#c7c7c7]/85 lg:flex cursor-pointer absolute left-1/2 -translate-x-1/2 hidden justify-center items-center border border-white rounded-full"
        >
          <ChevronDownIcon fontSize={36} />
        </div>

        <div className="flex gap-x-6">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => setActive(index)}
              className={`md:w-[100px] w-[87px] h-[72px] cursor-pointer transition-all duration-300 ${
                active === index
                  ? "border-2 border-white scale-105"
                  : "border-2 border-transparent hover:opacity-100"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.title}
                width={100}
                height={100}
                className="w-full object-cover h-full"
              />
            </div>
          ))}
        </div>

        <motion.div
          whileTap={{ backgroundColor: "rgba(199, 199, 199, 0.85)" }}
          role="button"
          aria-label="scroll-to-next-section"
          onClick={scrollAway}
          className="w-[48px] h-[48px] lg:-bottom-[60%] -bottom-[80%] flex absolute left-1/2 -translate-x-1/2 lg:hidden justify-center items-center border border-white rounded-full z-20!"
        >
          <ChevronDownIcon fontSize={36} />
        </motion.div>
      </div>
    </header>
  );
}
