import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Zap,
  Award,
  HeadphonesIcon,
  Phone,
  MessageCircle,
  ChevronRight,
  Package,
  Truck,
  Factory,
} from "lucide-react";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radhe Enterprise | Material Handling Equipment Supplier — Morbi, Gujarat",
  description:
    "Radhe Enterprise is a leading supplier of manual stackers, electric stackers, pallet trucks, forklifts and warehouse lifting equipment in Morbi, Gujarat, India.",
};

const categoryIcons: Record<string, React.ReactNode> = {
  "Manual Stackers": <Package size={22} className="text-[#f6780a]" />,
  "Semi Electric Stackers": <Zap size={22} className="text-[#f6780a]" />,
  "Electric Stackers": <Zap size={22} className="text-[#f6780a]" />,
  "Manual Pallet Trucks": <Truck size={22} className="text-[#f6780a]" />,
  "Electric Pallet Trucks": <Truck size={22} className="text-[#f6780a]" />,
  "Drum Handling Equipment": <Factory size={22} className="text-[#f6780a]" />,
  "Forklifts": <Factory size={22} className="text-[#f6780a]" />,
  "Lift Tables": <ArrowRight size={22} className="text-[#f6780a]" />,
  "Tail Lifts": <Truck size={22} className="text-[#f6780a]" />,
  "Aerial Work Platforms": <Factory size={22} className="text-[#f6780a]" />,
};

const whyUs = [
  {
    icon: <Shield size={24} />,
    title: "Industrial Grade",
    desc: "All equipment manufactured to international industrial standards for demanding work environments.",
  },
  {
    icon: <Award size={24} />,
    title: "High Quality",
    desc: "High-strength steel, precision engineering and rigorous quality control on every unit.",
  },
  {
    icon: <Zap size={24} />,
    title: "Reliable Performance",
    desc: "Proven reliability across warehouses, factories and logistics operations across India.",
  },
  {
    icon: <HeadphonesIcon size={24} />,
    title: "Customer Support",
    desc: "Dedicated support from selection to after-sales. We're always just a call or WhatsApp away.",
  },
];

const featuredProducts = products.slice(0, 6);

export default function HomePage() {
  const productCount = products.length;
  const categoryCount = categories.length;

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f1117]">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

        {/* Gradient blobs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#f6780a]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#f6780a]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Diagonal accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#f6780a]/5 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#f6780a]/10 border border-[#f6780a]/20 px-4 py-2 rounded-sm mb-8">
              <span className="w-1.5 h-1.5 bg-[#f6780a] rounded-full animate-pulse" />
              <span className="text-[#f6780a] text-xs tracking-widest uppercase font-medium font-body">
                Morbi, Gujarat — Industrial Equipment Supplier
              </span>
            </div>

            <h1 className="font-display font-800 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-6">
              INDUSTRIAL
              <br />
              <span className="text-[#f6780a]">MATERIAL</span>
              <br />
              HANDLING
            </h1>

            <p className="text-[#8896ac] text-lg leading-relaxed mb-10 max-w-xl font-body">
              Manual Stackers, Electric Stackers, Pallet Trucks &amp; Warehouse Equipment — built for efficiency, engineered for safety.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#f6780a] hover:bg-[#bf4307] text-white font-semibold tracking-wide transition-colors rounded-sm"
              >
                View Products
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white font-semibold tracking-wide transition-colors rounded-sm"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/5">
              {[
                { value: `${productCount}+`, label: "Products" },
                { value: `${categoryCount}`, label: "Categories" },
                { value: "100%", label: "Industrial Grade" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-800 text-3xl text-white">
                    {stat.value}
                  </div>
                  <div className="text-[#697892] text-xs tracking-wider uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f1117] to-transparent" />
      </section>

      {/* ─── ABOUT PREVIEW ────────────────────────────────── */}
      <section className="py-20 bg-[#0f1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#f6780a] text-xs tracking-widest uppercase mb-4 font-medium">
                About Radhe Enterprise
              </div>
              <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-none mb-6">
                YOUR TRUSTED
                <br />
                <span className="text-[#f6780a]">EQUIPMENT</span> PARTNER
              </h2>
              <p className="text-[#8896ac] leading-relaxed mb-6">
                Radhe Enterprise supplies high quality warehouse equipment including stackers, pallet trucks and lifting solutions designed for efficiency and safety. Based in Morbi, Gujarat, we serve warehouses, factories and logistics operations across India.
              </p>
              <p className="text-[#8896ac] leading-relaxed mb-8">
                Our range covers everything from basic hand pallet trucks to fully electric forklifts and aerial work platforms — sourced from trusted manufacturers with proven industrial performance.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#f6780a] font-medium hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Package size={20} />, label: "Stackers", count: "10+" },
                { icon: <Truck size={20} />, label: "Pallet Trucks", count: "15+" },
                { icon: <Factory size={20} />, label: "Forklifts", count: "9" },
                { icon: <Zap size={20} />, label: "Electric Units", count: "20+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#1a1f2e] border border-white/5 rounded-sm p-6"
                >
                  <div className="text-[#f6780a] mb-3">{item.icon}</div>
                  <div className="font-display font-700 text-2xl text-white">
                    {item.count}
                  </div>
                  <div className="text-[#697892] text-xs tracking-wide mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES GRID ──────────────────────────────── */}
      <section className="py-20 bg-[#0a0d12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-[#f6780a] text-xs tracking-widest uppercase mb-4 font-medium">
              Product Range
            </div>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-none">
              EQUIPMENT CATEGORIES
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/products?category=${encodeURIComponent(cat)}`}
                className="group bg-[#1a1f2e] hover:bg-[#1e2533] border border-white/5 hover:border-[#f6780a]/30 rounded-sm p-5 transition-all"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform">
                  {categoryIcons[cat] || <Package size={22} className="text-[#f6780a]" />}
                </div>
                <div className="font-display font-600 text-white text-sm leading-tight group-hover:text-[#f6780a] transition-colors">
                  {cat}
                </div>
                <div className="mt-2 flex items-center gap-1 text-[#697892] text-xs">
                  <ChevronRight size={11} />
                  <span>View all</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ────────────────────────────── */}
      <section className="py-20 bg-[#0f1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-[#f6780a] text-xs tracking-widest uppercase mb-4 font-medium">
                Product Showcase
              </div>
              <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-none">
                FEATURED PRODUCTS
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:flex items-center gap-2 text-[#f6780a] font-medium text-sm hover:gap-3 transition-all"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#f6780a]/30 text-[#f6780a] font-medium rounded-sm"
            >
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────── */}
      <section className="py-20 bg-[#0a0d12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-[#f6780a] text-xs tracking-widest uppercase mb-4 font-medium">
              Why Radhe Enterprise
            </div>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-none">
              BUILT FOR INDUSTRY,
              <br />
              <span className="text-[#f6780a]">TRUSTED BY BUSINESS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-[#1a1f2e] border border-white/5 rounded-sm p-6 group hover:border-[#f6780a]/20 transition-all"
              >
                <div className="w-12 h-12 bg-[#f6780a]/10 border border-[#f6780a]/20 rounded-sm flex items-center justify-center text-[#f6780a] mb-5 group-hover:bg-[#f6780a]/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-display font-700 text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-[#697892] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#f6780a] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-900 text-4xl md:text-6xl text-white leading-none mb-4">
            NEED WAREHOUSE LIFTING
            <br />
            EQUIPMENT?
          </h2>
          <p className="text-white/80 mb-10 text-lg max-w-xl mx-auto">
            Get in touch with us on WhatsApp or call directly. We will help you find the right equipment for your needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919624681003?text=Hello%20Radhe%20Enterprise%2C%20I%20need%20help%20with%20warehouse%20equipment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f6780a] font-bold tracking-wide rounded-sm hover:bg-white/90 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <a
              href="tel:+919624681003"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold tracking-wide rounded-sm hover:bg-white/10 transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
