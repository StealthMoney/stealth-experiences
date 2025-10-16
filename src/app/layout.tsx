import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import FooterSection from "./components/reusables/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title:
    "Stealth Experiences | Unforgettable experiences paid for with Bitcoin.",
  description:
    "Stealth experiences is a luxury concierge platform that lets you design and pay for bespoke experiences using Bitcoin.",
  keywords: [
    "Stealth experiences",
    "Bitcoin custody",
    "Bitcoin experiences",
    "corporate treasury",
    "crypto custody",
    "Bitcoin for companies",
    "secure Bitcoin management",
    "crypto security platform",
  ],
  authors: [{ name: "Stealth" }],
  creator: "Stealth",
  metadataBase: new URL("https://www.stealthexperiences.com"),
  openGraph: {
    title:
      "Stealth Experiences | Unforgettable experiences paid for with Bitcoin.",
    description:
      "Stealth experiences design unforgettable experiences paid for with Bitcoin.",
    url: "https://www.stealthexperiences.com",
    siteName: "Stealth experiences",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Stealth experiences - Secure Bitcoin Custody",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Stealth Experiences | Unforgettable experiences paid for with Bitcoin.",
    description:
      "Stealth experiences design unforgettable experiences paid for with Bitcoin.",
    images: ["/images/hero.png"],
    creator: "@stealthmoney_",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased max-w-[1440px] m-auto !overflow-x-hidden my-scroll-container`}
      >
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
