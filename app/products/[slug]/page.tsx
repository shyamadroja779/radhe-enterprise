import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  Mail,
  CheckCircle2,
  Package,
  Tag,
  ChevronRight,
} from "lucide-react";
import { getProductBySlug, products, formatSpecKey, ProductSpec } from "@/data/products";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Radhe Enterprise`,
    description: product.description.slice(0, 160),
    openGraph: {
      title: `${product.name} | Radhe Enterprise`,
      description: product.description.slice(0, 160),
    },
  };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

function SpecTable({ specs }: { specs: ProductSpec }) {
  const entries = Object.entries(specs).filter(
    ([, v]) => v !== null && v !== undefined && v !== ""
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <tbody>
          {entries.map(([key, val], i) => (
            <tr
              key={key}
              className={i % 2 === 0 ? "bg-[#1a1f2e]" : "bg-transparent"}
            >
              <td className="px-4 py-2.5 text-[#8896ac] text-xs font-medium w-1/2 border-b border-white/5">
                {formatSpecKey(key)}
              </td>
              <td className="px-4 py-2.5 text-white text-xs font-mono border-b border-white/5">
                {String(val)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const hasMultipleModels =
    Object.keys(product.specifications).length > 1 &&
    !("max_load_capacity_kg" in product.specifications) &&
    !("motor_voltage" in product.specifications) &&
    !("battery" in product.specifications) &&
    !("motor" in product.specifications);

  const specEntries = hasMultipleModels
    ? Object.entries(product.specifications as Record<string, ProductSpec>)
    : [];

  const singleSpec =
    !hasMultipleModels
      ? (product.specifications as ProductSpec)
      : null;

  const waMessage = encodeURIComponent(
    `Hello Radhe Enterprise, I am interested in the ${product.name}. Please provide more details and pricing.`
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Radhe Enterprise",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#0f1117] pt-20">
        {/* Breadcrumb */}
        <div className="bg-[#0a0d12] border-b border-white/5 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 text-xs text-[#697892]">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={12} />
              <Link href="/products" className="hover:text-white transition-colors">
                Products
              </Link>
              <ChevronRight size={12} />
              <Link
                href={`/products?category=${encodeURIComponent(product.category)}`}
                className="hover:text-[#f6780a] transition-colors"
              >
                {product.category}
              </Link>
              <ChevronRight size={12} />
              <span className="text-[#b1baca]">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[#697892] hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            {/* Product Image */}
            <div className="relative bg-gradient-to-br from-[#1e2330] to-[#0f1117] border border-white/5 rounded-sm overflow-hidden min-h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-[#f6780a]/10 border border-[#f6780a]/20 flex items-center justify-center">
                  <Package size={40} className="text-[#f6780a]" />
                </div>
                <div className="text-center">
                  <div className="text-[#697892] text-xs tracking-widest uppercase mb-2">
                    {product.models.length} Models Available
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {product.models.slice(0, 4).map((m) => (
                      <span
                        key={m}
                        className="bg-[#1a1f2e] border border-white/10 text-[#8896ac] text-xs px-3 py-1 rounded-sm font-mono"
                      >
                        {m}
                      </span>
                    ))}
                    {product.models.length > 4 && (
                      <span className="bg-[#1a1f2e] border border-white/10 text-[#8896ac] text-xs px-3 py-1 rounded-sm">
                        +{product.models.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {/* Category badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1 bg-[#0f1117]/80 border border-white/10 px-3 py-1.5 rounded-sm">
                <Tag size={10} className="text-[#f6780a]" />
                <span className="text-[10px] text-[#8896ac] tracking-wider uppercase">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="text-[#f6780a] text-xs tracking-widest uppercase mb-3 font-medium">
                {product.category}
              </div>
              <h1 className="font-display font-800 text-3xl md:text-4xl text-white leading-tight mb-5">
                {product.name}
              </h1>
              <p className="text-[#8896ac] leading-relaxed mb-8 text-sm">
                {product.description}
              </p>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-display font-600 text-white text-sm tracking-widest uppercase mb-4">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[#8896ac]">
                        <CheckCircle2 size={15} className="text-[#f6780a] shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="space-y-3">
                <h3 className="font-display font-600 text-white text-sm tracking-widest uppercase">
                  Request a Quote
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/919624681003?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-sm transition-colors"
                  >
                    <MessageCircle size={17} />
                    WhatsApp Inquiry
                  </a>
                  <a
                    href="tel:+919624681003"
                    className="flex items-center justify-center gap-2 py-3.5 bg-[#f6780a] hover:bg-[#bf4307] text-white font-semibold rounded-sm transition-colors"
                  >
                    <Phone size={17} />
                    Call Now
                  </a>
                </div>
                <a
                  href={`mailto:radheenterprise1003@gmail.com?subject=Inquiry: ${product.name}&body=Hello, I am interested in the ${product.name}. Please send pricing and availability details.`}
                  className="flex items-center justify-center gap-2 py-3 border border-white/10 hover:border-white/20 text-[#b1baca] hover:text-white text-sm font-medium rounded-sm transition-colors w-full"
                >
                  <Mail size={15} />
                  Email Inquiry
                </a>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="font-display font-700 text-white text-2xl tracking-wide uppercase mb-6 pb-3 border-b border-white/10">
              Technical Specifications
            </h2>

            {singleSpec && (
              <div className="bg-[#0a0d12] border border-white/5 rounded-sm overflow-hidden">
                <SpecTable specs={singleSpec} />
              </div>
            )}

            {hasMultipleModels && specEntries.length > 0 && (
              <div className="space-y-4">
                {specEntries.map(([model, spec]) => (
                  <div
                    key={model}
                    className="bg-[#0a0d12] border border-white/5 rounded-sm overflow-hidden"
                  >
                    <div className="bg-[#1a1f2e] px-4 py-3 border-b border-white/5">
                      <span className="font-display font-600 text-[#f6780a] text-sm tracking-wider uppercase">
                        {model}
                      </span>
                    </div>
                    <SpecTable specs={spec as ProductSpec} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
