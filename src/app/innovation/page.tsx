"use client";

import ProductGrid from "@/components/common/ProductGrid";
import { products } from "@/data/products";

/**
 * Innovation Page – Techligence
 * Shows only products marked as "innovation"
 */
export default function InnovationPage() {
  // Filter innovation category products
  const innovationProducts = products.filter(
    (product) => product.category === "innovation"
  );

  return (
    <main className="max-w-frame mx-auto px-4 xl:px-0 py-12">
      {/* Breadcrumb */}
      <nav className="mb-5 text-sm text-black/60">
        <span>Home</span>
        <span className="mx-1">/</span>
        <span className="text-black font-medium">Innovation</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Innovation
        </h1>
        <p className="text-black/60 max-w-2xl leading-relaxed">
          Discover cutting-edge robotics, AI-driven systems, and experimental
          technologies engineered by Techligence to shape the future.
        </p>
      </header>

      {/* Products Section */}
      <section>
        {innovationProducts.length > 0 ? (
          <ProductGrid data={innovationProducts} />
        ) : (
          <div className="py-20 text-center text-black/60">
            No innovation products available at the moment.
          </div>
        )}
      </section>
    </main>
  );
}
