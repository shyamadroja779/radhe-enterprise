import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Radhe Enterprise — Material Handling Equipment Supplier",
  description:
    "Learn about Radhe Enterprise, a trusted supplier of warehouse and material handling equipment in Morbi, Gujarat, India. Specializing in stackers, pallet trucks and lifting equipment.",
};

const values = [
  {
    title: "Quality First",
    desc: "Every product we supply meets strict industrial quality standards. We partner with manufacturers who share our commitment to durability and reliability.",
  },
  {
    title: "Customer Focus",
    desc: "We understand your operational requirements and help you find the right equipment. Our support doesn't end at the sale.",
  },
  {
    title: "Affordability",
    desc: "Industrial-grade equipment doesn't have to break the bank. We offer competitive pricing without compromising on quality.",
  },
  {
    title: "Technical Expertise",
    desc: "Our team has in-depth knowledge of material handling solutions to guide you through specifications and selection.",
  },
];

const categories = [
  "Manual Stackers",
  "Semi Electric Stackers",
  "Electric Stackers",
  "Manual Pallet Trucks",
  "Electric Pallet Trucks",
  "Drum Handling Equipment",
  "Forklifts",
  "Lift Tables",
  "Tail Lifts",
  "Aerial Work Platforms",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f1117] pt-20">
      {/* Hero */}
      <section className="relative bg-[#0a0d12] border-b border-white/5 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#f6780a]/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-[#f6780a] text-xs tracking-widest uppercase mb-4 font-medium">
            About Radhe Enterprise
          </div>
          <h1 className="font-display font-800 text-5xl md:text-7xl text-white leading-none mb-6">
            WHO WE ARE
          </h1>
          <p className="text-[#8896ac] text-lg max-w-2xl leading-relaxed">
            Radhe Enterprise is a supplier of warehouse and material handling equipment located in Morbi, Gujarat. We specialize in manual stackers, electric stackers, pallet trucks and warehouse lifting equipment.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#f6780a] text-xs tracking-widest uppercase mb-4 font-medium">
                Our Story
              </div>
              <h2 className="font-display font-800 text-4xl text-white leading-none mb-6">
                POWERING INDUSTRY WITH
                <br />
                <span className="text-[#f6780a]">THE RIGHT EQUIPMENT</span>
              </h2>
              <p className="text-[#8896ac] leading-relaxed mb-5">
                Radhe Enterprise was founded with a clear mission: to make high-quality material handling equipment accessible to warehouses, factories and logistics operations across India. Based in Morbi, Gujarat, we understand the industrial landscape of the region and the demanding requirements of modern operations.
              </p>
              <p className="text-[#8896ac] leading-relaxed mb-5">
                We supply a comprehensive range of equipment — from simple hand pallet trucks to sophisticated electric stackers, reach forklifts, and aerial work platforms. Every product in our catalog is carefully selected for its quality, reliability and value for money.
              </p>
              <p className="text-[#8896ac] leading-relaxed">
                Our mission is to provide durable, efficient and cost-effective equipment for warehouses, factories and logistics operations. We are not just suppliers — we are partners in your operational success.
              </p>
            </div>

            <div className="bg-[#1a1f2e] border border-white/5 rounded-sm p-8">
              <h3 className="font-display font-700 text-white text-xl mb-6 uppercase tracking-wide">
                What We Supply
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/products?category=${encodeURIComponent(cat)}`}
                    className="flex items-center gap-2 text-[#8896ac] hover:text-[#f6780a] text-sm transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#f6780a] rounded-full shrink-0 group-hover:scale-150 transition-transform" />
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0a0d12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-[#f6780a] text-xs tracking-widest uppercase mb-4 font-medium">
              Our Values
            </div>
            <h2 className="font-display font-800 text-4xl text-white leading-none">
              WHAT DRIVES US
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#1a1f2e] border border-white/5 rounded-sm p-6"
              >
                <div className="w-2 h-8 bg-[#f6780a] mb-5 rounded-sm" />
                <h3 className="font-display font-700 text-white text-lg mb-3">
                  {v.title}
                </h3>
                <p className="text-[#697892] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#f6780a] text-xs tracking-widest uppercase mb-4 font-medium">
                Reach Us
              </div>
              <h2 className="font-display font-800 text-4xl text-white leading-none mb-8">
                GET IN TOUCH
              </h2>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#f6780a]/10 border border-[#f6780a]/20 rounded-sm flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[#f6780a]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#697892] tracking-wider uppercase mb-1">Address</div>
                    <p className="text-white text-sm leading-relaxed">
                      Ground Floor, Sr No 02 P1/P1 Or 02 P2/P2, Plot No 1, Shyam Complex, Shop No 8, Uchi Mandal, Morbi, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#f6780a]/10 border border-[#f6780a]/20 rounded-sm flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[#f6780a]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#697892] tracking-wider uppercase mb-1">Phone</div>
                    <a
                      href="tel:+919624681003"
                      className="text-white text-sm hover:text-[#f6780a] transition-colors"
                    >
                      +91 96246 81003
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#f6780a]/10 border border-[#f6780a]/20 rounded-sm flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-[#f6780a]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#697892] tracking-wider uppercase mb-1">Email</div>
                    <a
                      href="mailto:radheenterprise1003@gmail.com"
                      className="text-white text-sm hover:text-[#f6780a] transition-colors"
                    >
                      radheenterprise1003@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="https://wa.me/919624681003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-sm rounded-sm transition-colors"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#f6780a] hover:bg-[#bf4307] text-white font-semibold text-sm rounded-sm transition-colors"
                >
                  Contact Form
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Map */}
            <div className="h-80 bg-[#1a1f2e] border border-white/5 rounded-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29556.38538887986!2d70.80379!3d22.81702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395857028b6aad15%3A0x31e7a1e0a44b7b28!2sMorbi%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Radhe Enterprise Location — Morbi, Gujarat"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
