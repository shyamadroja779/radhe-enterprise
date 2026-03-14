import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { categories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-[#0a0d12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-[#f6780a] flex items-center justify-center rounded-sm">
                <span className="font-display font-900 text-white text-base">R</span>
              </div>
              <span className="font-display font-700 text-white text-base tracking-wide uppercase">
                Radhe Enterprise
              </span>
            </div>
            <p className="text-[#697892] text-sm leading-relaxed mb-6">
              Trusted supplier of industrial material handling equipment — stackers, pallet trucks, forklifts and more.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919624681003"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 flex items-center justify-center rounded-sm transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
              </a>
              <a
                href="tel:+919624681003"
                className="w-9 h-9 bg-[#f6780a]/10 hover:bg-[#f6780a]/20 border border-[#f6780a]/20 flex items-center justify-center rounded-sm transition-colors"
                aria-label="Call"
              >
                <Phone size={16} className="text-[#f6780a]" />
              </a>
              <a
                href="mailto:radheenterprise1003@gmail.com"
                className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center rounded-sm transition-colors"
                aria-label="Email"
              >
                <Mail size={16} className="text-[#8896ac]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-600 text-white text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "All Products" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#697892] hover:text-[#f6780a] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display font-600 text-white text-sm tracking-widest uppercase mb-5">
              Product Categories
            </h3>
            <ul className="space-y-2">
              {categories.slice(0, 7).map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/products?category=${encodeURIComponent(cat)}`}
                    className="text-[#697892] hover:text-[#f6780a] text-sm transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-600 text-white text-sm tracking-widest uppercase mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={15} className="text-[#f6780a] shrink-0 mt-0.5" />
                <span className="text-[#697892] text-sm leading-relaxed">
                  Ground Floor, Sr No 02, Plot No 1, Shyam Complex, Shop No 8,
                  Uchi Mandal, Morbi, Gujarat, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={15} className="text-[#f6780a] shrink-0 mt-0.5" />
                <a
                  href="tel:+919624681003"
                  className="text-[#697892] hover:text-white text-sm transition-colors"
                >
                  +91 96246 81003
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={15} className="text-[#f6780a] shrink-0 mt-0.5" />
                <a
                  href="mailto:radheenterprise1003@gmail.com"
                  className="text-[#697892] hover:text-white text-sm transition-colors break-all"
                >
                  radheenterprise1003@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#697892] text-xs">
            © {new Date().getFullYear()} Radhe Enterprise. All rights reserved.
          </p>
          <p className="text-[#697892] text-xs">
            Material Handling Equipment Supplier — Morbi, Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  );
}
