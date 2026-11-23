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
      <h2 id="product-catalog-heading" className="text-3xl font-normal text-primary-hover md:text-4xl">
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
              className="text-primary hover:bg-accent aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-white"
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
      <p role="status" className="my-5 text-sm text-muted-foreground">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
      </p>
      {filteredProducts.length === 0 ? (
        <div className="rounded-lg border px-5 py-10 text-center">
          <h3 className="text-lg font-semibold text-primary">No products found</h3>
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
            <article key={product.id} className="flex flex-col overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-md">
              <div className="relative flex h-56 items-center justify-center bg-muted p-6">
                <Image
                  src={`/recommended-products/${product.image}`}
                  alt={product.name}
                  width={240}
                  height={176}
                  className="h-full w-full object-contain mix-blend-multiply"
                />
              </div>
              <div className="flex flex-1 flex-col items-start gap-2 p-5">
                <p className="text-sm font-semibold text-copper-text">{product.type}</p>
                <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                <p className="mb-3 text-muted-foreground">{product.description}</p>
                <Button asChild variant="outline" className="mt-auto text-primary">
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
      <p className="mt-6 text-sm text-muted-foreground">
        Product packaging, sizes, shades, and availability may vary. Confirm the
        product details on Amazon before purchasing.
      </p>
    </section>
  );
}
