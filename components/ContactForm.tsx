"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Form data:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-[#f6780a]/10 border border-[#f6780a]/20 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-[#f6780a]" />
        </div>
        <h3 className="font-display font-700 text-white text-2xl mb-2">Message Sent!</h3>
        <p className="text-[#697892] text-sm mb-6">
          We will get back to you shortly. You can also reach us on WhatsApp for faster response.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-5 py-2.5 bg-[#f6780a] hover:bg-[#bf4307] text-white text-sm font-semibold rounded-sm transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] text-[#8896ac] tracking-widest uppercase mb-2">
            Full Name *
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Your name"
            className="w-full bg-[#1a1f2e] border border-white/10 focus:border-[#f6780a] text-white placeholder-[#697892] rounded-sm px-4 py-3 text-sm outline-none transition-colors"
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-[11px] text-[#8896ac] tracking-widest uppercase mb-2">
            Phone Number *
          </label>
          <input
            {...register("phone", { required: "Phone is required" })}
            placeholder="+91 XXXXX XXXXX"
            className="w-full bg-[#1a1f2e] border border-white/10 focus:border-[#f6780a] text-white placeholder-[#697892] rounded-sm px-4 py-3 text-sm outline-none transition-colors"
          />
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-[11px] text-[#8896ac] tracking-widest uppercase mb-2">
          Email Address
        </label>
        <input
          {...register("email", {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
          type="email"
          placeholder="your@email.com"
          className="w-full bg-[#1a1f2e] border border-white/10 focus:border-[#f6780a] text-white placeholder-[#697892] rounded-sm px-4 py-3 text-sm outline-none transition-colors"
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-[11px] text-[#8896ac] tracking-widest uppercase mb-2">
          Message *
        </label>
        <textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Tell us about your requirements — product type, load capacity, quantity, etc."
          rows={5}
          className="w-full bg-[#1a1f2e] border border-white/10 focus:border-[#f6780a] text-white placeholder-[#697892] rounded-sm px-4 py-3 text-sm outline-none transition-colors resize-none"
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#f6780a] hover:bg-[#bf4307] disabled:opacity-60 text-white font-semibold tracking-wide rounded-sm transition-colors"
      >
        {isSubmitting ? (
          <span className="text-sm">Sending...</span>
        ) : (
          <>
            <Send size={15} />
            <span className="text-sm">Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
