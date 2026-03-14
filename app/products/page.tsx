"use client";

import { useState, useMemo } from "react";
import { Search, Filter, X } from "lucide-react";
import { products, categories, searchProducts, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    let result = products;

    if (searchQuery.trim()) {
      result = searchProducts(searchQuery);
    }

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#0f1117] pt-20">
      {/* Header */}
      <div className="bg-[#0a0d12] border-b border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-[#f6780a] text-xs tracking-widest uppercase mb-3 font-medium">
            Our Range
          </div>
          <h1 className="font-display font-800 text-4xl md:text-6xl text-white leading-none mb-4">
            ALL PRODUCTS
          </h1>
          <p className="text-[#697892] max-w-xl">
            Explore our full range of material handling equipment — from manual stackers and pallet trucks to electric forklifts and aerial work platforms.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#697892]" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1a1f2e] border border-white/10 focus:border-[#f6780a] text-white placeholder-[#697892] pl-10 pr-4 py-3 text-sm rounded-sm outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#697892] hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category select */}
          <div className="relative">
            <Filter size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#697892]" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-[#1a1f2e] border border-white/10 focus:border-[#f6780a] text-white pl-10 pr-10 py-3 text-sm rounded-sm outline-none transition-colors cursor-pointer min-w-[200px]"
            >
              <option value="All">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-1.5 text-xs rounded-sm border transition-colors ${
              selectedCategory === "All"
                ? "bg-[#f6780a] border-[#f6780a] text-white"
                : "border-white/10 text-[#697892] hover:border-[#f6780a]/30 hover:text-white"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-xs rounded-sm border transition-colors ${
                selectedCategory === cat
                  ? "bg-[#f6780a] border-[#f6780a] text-white"
                  : "border-white/10 text-[#697892] hover:border-[#f6780a]/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="text-[#697892] text-sm mb-6">
          Showing{" "}
          <span className="text-white font-medium">{filteredProducts.length}</span>{" "}
          product{filteredProducts.length !== 1 ? "s" : ""}
          {selectedCategory !== "All" && (
            <> in <span className="text-[#f6780a]">{selectedCategory}</span></>
          )}
        </div>

        {/* Products grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-[#697892] text-6xl mb-4">🔍</div>
            <h3 className="font-display font-700 text-white text-2xl mb-2">
              No products found
            </h3>
            <p className="text-[#697892] text-sm mb-6">
              Try a different search or category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-5 py-2.5 bg-[#f6780a] text-white text-sm font-semibold rounded-sm"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
