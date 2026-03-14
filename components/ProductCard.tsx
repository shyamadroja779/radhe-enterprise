import Link from "next/link";
import { ArrowRight, Package, Tag } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Get first model's key spec if available
  const firstSpec = Object.values(product.specifications)[0] as Record<string, string | number | null | undefined> | undefined;
  const capacity =
    firstSpec && typeof firstSpec === "object" && !Array.isArray(firstSpec)
      ? (firstSpec as Record<string, string | number | null | undefined>).max_load_capacity_kg ||
        (firstSpec as Record<string, string | number | null | undefined>).load_capacity_kg ||
        (firstSpec as Record<string, string | number | null | undefined>).lifting_weight_kg ||
        (firstSpec as Record<string, string | number | null | undefined>).capacity_kg
      : null;

  const liftHeight =
    firstSpec && typeof firstSpec === "object" && !Array.isArray(firstSpec)
      ? (firstSpec as Record<string, string | number | null | undefined>).max_lifting_height_mm ||
        (firstSpec as Record<string, string | number | null | undefined>).lift_height_m
      : null;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative bg-[#1a1f2e] hover:bg-[#1e2533] border border-white/5 hover:border-[#f6780a]/30 rounded-sm overflow-hidden transition-all duration-300 flex flex-col"
    >
      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-[#1e2330] to-[#0f1117] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-[#f6780a]/10 border border-[#f6780a]/20 flex items-center justify-center group-hover:bg-[#f6780a]/20 transition-colors">
            <Package size={28} className="text-[#f6780a]" />
          </div>
          <span className="text-[10px] text-[#697892] tracking-widest uppercase font-mono">
            {product.models[0]}
          </span>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#0f1117]/80 backdrop-blur-sm border border-white/10 px-2 py-1 rounded-sm">
          <Tag size={9} className="text-[#f6780a]" />
          <span className="text-[9px] text-[#8896ac] tracking-wider uppercase">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-700 text-white text-lg leading-tight mb-2 group-hover:text-[#f6780a] transition-colors">
          {product.name}
        </h3>
        <p className="text-[#697892] text-xs leading-relaxed mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Quick specs */}
        <div className="flex gap-3 mb-4">
          {capacity && (
            <div className="flex-1 bg-[#0f1117] rounded-sm px-3 py-2">
              <div className="text-[9px] text-[#697892] tracking-wider uppercase mb-0.5">Capacity</div>
              <div className="text-xs font-semibold text-white font-mono">{capacity} kg</div>
            </div>
          )}
          {liftHeight && (
            <div className="flex-1 bg-[#0f1117] rounded-sm px-3 py-2">
              <div className="text-[9px] text-[#697892] tracking-wider uppercase mb-0.5">Lift Height</div>
              <div className="text-xs font-semibold text-white font-mono">{liftHeight} mm</div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[10px] text-[#697892]">
            {product.models.length} model{product.models.length !== 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-1 text-xs text-[#f6780a] font-medium group-hover:gap-2 transition-all">
            View Details
            <ArrowRight size={13} />
          </span>
        </div>
      </div>

      {/* Hover border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f6780a] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
  );
}
