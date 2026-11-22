import type { Metadata } from "next";
import Header from "@/components/Headers/Header";
import ProductCatalog from "./ProductCatalog";

export const metadata: Metadata = {
  title: "Recommended Products | Desert Oasis Dermatology",
  description: "Explore our recommended skin care, acne care, and sun protection products.",
};

export default function RecommendedProductsPage() {
  return (
    <main>
      <Header
        title="Recommended Products"
        subtitle="Explore everyday essentials for gentle skin care, acne care, and sun protection, selected by Desert Oasis Dermatology."
      />
      <div className="container space-y-8 py-10 md:py-16">
        <p className="rounded-lg border border-[#C7925B]/30 bg-[#FAF5EF] px-5 py-4 text-[#333333]">
          As an Amazon Associate I earn from qualifying purchases. Purchases through
          these links may support our practice at no additional cost to you.
        </p>
        <ProductCatalog />
        <p className="text-sm text-[#595959]">
          These recommendations are general information and do not replace your
          individualized treatment plan. Follow product labeling and your clinician’s instructions.
        </p>
      </div>
    </main>
  );
}
