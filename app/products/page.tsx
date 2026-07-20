import ProductsHero from "@/components/products/ProductsHero";
import ProductGrid from "@/components/products/ProductGrid";
import ProductDetails from "@/components/products/ProductDetails";
import UseCases from "@/components/products/UseCases";
import ProductComparison from "@/components/products/ProductComparison";
import ProductsCTA from "@/components/products/ProductsCTA";

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductGrid />
      <ProductDetails />
      <UseCases />
      <ProductComparison />
      <ProductsCTA />
    </>
  );
}