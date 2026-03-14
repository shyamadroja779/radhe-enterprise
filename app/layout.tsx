import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Radhe Enterprise | Material Handling Equipment Supplier",
    template: "%s | Radhe Enterprise",
  },
  description:
    "Supplier of manual stackers, electric stackers, pallet trucks and warehouse equipment in Gujarat, India. Radhe Enterprise — trusted material handling equipment dealer in Morbi.",
  keywords: [
    "material handling equipment",
    "manual stacker supplier",
    "electric pallet truck supplier",
    "warehouse lifting equipment",
    "pallet truck supplier india",
    "electric stacker Gujarat",
    "forklift supplier Morbi",
    "drum lifter",
    "scissor lift table",
    "aerial work platform",
  ],
  authors: [{ name: "Radhe Enterprise" }],
  creator: "Radhe Enterprise",
  publisher: "Radhe Enterprise",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://radheenterprise.com",
    siteName: "Radhe Enterprise",
    title: "Radhe Enterprise | Material Handling Equipment Supplier",
    description:
      "Supplier of manual stackers, electric stackers, pallet trucks and warehouse equipment in Gujarat, India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radhe Enterprise | Material Handling Equipment Supplier",
    description:
      "Supplier of manual stackers, electric stackers, pallet trucks and warehouse equipment in Gujarat, India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
