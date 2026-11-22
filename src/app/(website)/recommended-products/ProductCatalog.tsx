"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import products from "./products.json";

const categories = [
  { id: "all", name: "All products" },
  { id: "gentle", name: "Gentle skin care" },
  { id: "acne", name: "Acne" },
  { id: "sun", name: "Sun protection" },
];

export default function ProductCatalog() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const searchTerm = query.trim().toLowerCase();
  const filteredProducts = products.filter((product) =>
    (category === "all" || product.category === category) &&
    (product.name + " " + product.type).toLowerCase().includes(searchTerm)
  );

  return (
    <section aria-labelledby="product-catalog-heading">
      <h2 id="product-catalog-heading" className="text-2xl font-semibold text-[#8A5536] md:text-3xl">
        Find your everyday essentials
      </h2>
      <div className="mt-5 flex flex-wrap items-center gap-4 lg:justify-between">
        <div role="group" aria-label="Filter by product category" className="flex flex-wrap gap-2">
          {categories.map(({ id, name }) => (
            <Button
              key={id}
              type="button"
              variant="outline"
              aria-pressed={category === id}
              onClick={() => setCategory(id)}
              className="border-[#A66A47] text-[#8A5536] hover:bg-[#FAF5EF] aria-pressed:bg-[#8A5536] aria-pressed:text-white"
            >
              {name}
            </Button>
          ))}
        </div>
        <Input
          type="search"
          aria-label="Search products"
          placeholder="Find a product"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full sm:max-w-xs"
        />
      </div>
      <p role="status" className="my-5 text-sm text-[#595959]">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
      </p>
      {filteredProducts.length === 0 ? (
        <div className="rounded-lg border border-[#C7925B]/30 px-5 py-10 text-center">
          <h3 className="text-lg font-semibold text-[#8A5536]">No products found</h3>
          <p className="mb-4 mt-2">Try a different name or category.</p>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setCategory("all");
              setQuery("");
            }}
          >
            Reset filters
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <article key={product.id} className="flex flex-col overflow-hidden rounded-lg border border-[#C7925B]/30 bg-white shadow-sm">
              <div className="relative flex h-56 items-center justify-center bg-[#FAF5EF] p-6">
                <Image
                  src={`/recommended-products/${product.image}`}
                  alt={product.name}
                  width={240}
                  height={176}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col items-start gap-2 p-5">
                <p className="text-sm font-medium text-[#8A5536]">{product.type}</p>
                <h3 className="text-lg font-semibold text-[#333333]">{product.name}</h3>
                <p className="mb-3 text-[#595959]">{product.description}</p>
                <Button asChild className="mt-auto bg-[#8A5536] text-white hover:bg-[#74452B]">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    aria-label={"View " + product.name + " on Amazon (opens in a new tab)"}
                  >
                    View on Amazon
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      )}
      <p className="mt-6 text-sm text-[#595959]">
        Product packaging, sizes, shades, and availability may vary. Confirm the
        product details on Amazon before purchasing.
      </p>
    </section>
  );
}
