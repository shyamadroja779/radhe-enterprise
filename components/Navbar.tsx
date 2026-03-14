"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { categories } from "@/data/products";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f1117]/95 backdrop-blur-md border-b border-white/5 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#f6780a] flex items-center justify-center rounded-sm relative overflow-hidden">
              <span className="font-display font-900 text-white text-lg tracking-tight leading-none z-10">R</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-700 text-white text-lg tracking-wide uppercase">
                Radhe Enterprise
              </span>
              <span className="text-[10px] text-[#8896ac] tracking-widest uppercase font-body">
                Material Handling Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.href === "/products" ? (
                <div key={link.href} className="relative group">
                  <Link
                    href="/products"
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-sm ${
                      pathname.startsWith("/products")
                        ? "text-[#f6780a]"
                        : "text-[#b1baca] hover:text-white"
                    }`}
                  >
                    Products
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                  </Link>
                  <div className="absolute top-full left-0 w-56 mt-1 bg-[#1e2330] border border-white/10 rounded-sm shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="p-2">
                      <Link href="/products" className="block px-3 py-2 text-sm text-[#f6780a] font-medium hover:bg-white/5 rounded-sm">
                        All Products
                      </Link>
                      {categories.map((cat) => (
                        <Link
                          key={cat}
                          href={`/products?category=${encodeURIComponent(cat)}`}
                          className="block px-3 py-2 text-xs text-[#8896ac] hover:text-white hover:bg-white/5 rounded-sm transition-colors"
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-sm ${
                    pathname === link.href
                      ? "text-[#f6780a]"
                      : "text-[#b1baca] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919624681003"
              className="flex items-center gap-2 text-sm text-[#b1baca] hover:text-white transition-colors"
            >
              <Phone size={14} className="text-[#f6780a]" />
              +91 96246 81003
            </a>
            <a
              href="https://wa.me/919624681003"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#f6780a] hover:bg-[#bf4307] text-white text-sm font-semibold tracking-wide transition-colors rounded-sm"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#8896ac] hover:text-white transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#1e2330] border-t border-white/10 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-medium border-b border-white/5 ${
                  pathname === link.href
                    ? "text-[#f6780a]"
                    : "text-[#b1baca]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4 flex flex-col gap-3">
              <a
                href="tel:+919624681003"
                className="flex items-center gap-2 text-sm text-[#b1baca]"
              >
                <Phone size={14} className="text-[#f6780a]" />
                +91 96246 81003
              </a>
              <a
                href="https://wa.me/919624681003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-3 bg-[#f6780a] text-white text-sm font-semibold rounded-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
