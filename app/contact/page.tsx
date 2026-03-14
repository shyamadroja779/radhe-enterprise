import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Radhe Enterprise",
  description:
    "Contact Radhe Enterprise for material handling equipment inquiries. Call, WhatsApp or email us from Morbi, Gujarat, India.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0f1117] pt-20">
      {/* Header */}
      <section className="relative bg-[#0a0d12] border-b border-white/5 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#f6780a]/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-[#f6780a] text-xs tracking-widest uppercase mb-4 font-medium">
            Get In Touch
          </div>
          <h1 className="font-display font-800 text-5xl md:text-7xl text-white leading-none mb-4">
            CONTACT US
          </h1>
          <p className="text-[#8896ac] text-lg max-w-xl leading-relaxed">
            Have questions about our equipment? Need a quote? We are here to help.
            Reach out via WhatsApp, call, or fill in the form below.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-display font-700 text-white text-2xl uppercase tracking-wide mb-6">
                Contact Information
              </h2>
            </div>

            {/* Quick contact buttons */}
            <div className="space-y-3">
              <a
                href="https://wa.me/919624681003?text=Hello%20Radhe%20Enterprise%2C%20I%20have%20an%20inquiry%20about%20your%20equipment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 rounded-sm transition-colors group"
              >
                <div className="w-10 h-10 bg-[#25D366] rounded-sm flex items-center justify-center shrink-0">
                  <MessageCircle size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">WhatsApp Chat</div>
                  <div className="text-[#697892] text-xs">+91 96246 81003</div>
                </div>
                <div className="ml-auto text-[#25D366] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Chat now →
                </div>
              </a>

              <a
                href="tel:+919624681003"
                className="flex items-center gap-4 p-4 bg-[#f6780a]/10 hover:bg-[#f6780a]/20 border border-[#f6780a]/20 rounded-sm transition-colors group"
              >
                <div className="w-10 h-10 bg-[#f6780a] rounded-sm flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Call Us</div>
                  <div className="text-[#697892] text-xs">+91 96246 81003</div>
                </div>
                <div className="ml-auto text-[#f6780a] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Call now →
                </div>
              </a>

              <a
                href="mailto:radheenterprise1003@gmail.com"
                className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#8896ac]" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Email</div>
                  <div className="text-[#697892] text-xs break-all">
                    radheenterprise1003@gmail.com
                  </div>
                </div>
              </a>
            </div>

            {/* Address */}
            <div className="bg-[#1a1f2e] border border-white/5 rounded-sm p-5">
              <div className="flex gap-3 mb-4">
                <MapPin size={16} className="text-[#f6780a] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-[#697892] tracking-wider uppercase mb-2">
                    Our Address
                  </div>
                  <p className="text-white text-sm leading-relaxed">
                    Ground Floor, Sr No 02 P1/P1 Or 02 P2/P2,
                    <br />
                    Plot No 1, Shyam Complex, Shop No 8,
                    <br />
                    Uchi Mandal, Morbi,
                    <br />
                    Gujarat – India
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock size={16} className="text-[#f6780a] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-[#697892] tracking-wider uppercase mb-2">
                    Business Hours
                  </div>
                  <p className="text-white text-sm">
                    Mon – Sat: 9:00 AM – 7:00 PM
                    <br />
                    <span className="text-[#697892]">Sunday: Closed</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-56 bg-[#1a1f2e] border border-white/5 rounded-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29556.38538887986!2d70.80379!3d22.81702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395857028b6aad15%3A0x31e7a1e0a44b7b28!2sMorbi%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Radhe Enterprise — Morbi, Gujarat"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#1a1f2e] border border-white/5 rounded-sm p-6 md:p-8">
              <h2 className="font-display font-700 text-white text-2xl uppercase tracking-wide mb-2">
                Send a Message
              </h2>
              <p className="text-[#697892] text-sm mb-8">
                Fill out the form below and we'll get back to you as soon as possible. For instant response, use WhatsApp.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
