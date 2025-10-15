"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="absolute top-5 left-1/2 -translate-x-1/2 w-full max-w-[90%] flex justify-between items-center bg-transparent py-6 px-4 z-50">
      <div className="w-auto text-white font-semibold text-lg">
        <Link href={"/"}>
          <Image
            src={"/images/StealthExperiences.svg"}
            width={100}
            height={100}
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex items-center gap-4 relative">
        <div ref={searchRef} className="flex items-center gap-2 relative">
          <button
            type="button"
            aria-label="search"
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="transition-transform duration-200 hover:scale-110"
          >
            <MagnifyingGlassIcon width="24px" height="24px" color="white" />
          </button>

          <input
            type="text"
            placeholder="Search..."
            className={`bg-transparent border-b border-white text-white outline-none placeholder:text-white/70 transition-all duration-500 ease-in-out ${
              isSearchOpen ? "w-40 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
