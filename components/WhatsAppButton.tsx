"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919624681003?text=Hello%20Radhe%20Enterprise%2C%20I%20am%20interested%20in%20your%20material%20handling%20equipment."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 transition-all hover:scale-110 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={26} className="text-white" fill="white" />
      <span className="absolute right-full mr-3 whitespace-nowrap bg-[#1e2330] text-white text-xs px-3 py-1.5 rounded-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
