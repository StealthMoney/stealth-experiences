"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="absolute top-5 left-1/2 -translate-x-1/2 w-full max-w-[90%] flex justify-between items-center bg-transparent py-6 px-4 z-50">
      <div className="w-auto text-white font-semibold text-lg">
        <Link href={"/"}>
          <Image
            src={"/images/StealthExperiences.svg"}
            width={150}
            height={150}
            alt="logo"
          />
        </Link>
      </div>
    </nav>
  );
}
