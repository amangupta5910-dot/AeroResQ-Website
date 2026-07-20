import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section
  id="products"
  className="py-24 bg-[#050816]"
>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">

        <ProductCard
          title="Scout"
          subtitle="Compact. Agile. Intelligent."
          badge="Best Seller"
          image="/images/products/scout.png"
          price="₹2,49,999"
          href="/products/scout"
        />

        <ProductCard
          title="Guardian"
          subtitle="Powerful. Reliable."
          badge="Premium"
          image="/images/products/guardian.png"
          price="₹8,99,999"
          href="/products/guardian"
        />

        <ProductCard
          title="Command Center"
          subtitle="Mission Control"
          badge="Enterprise"
          image="/images/products/command-center.png"
          price="₹4,99,999"
          href="/products/command-center"
        />

        <ProductCard
          title="Mobile App"
          subtitle="Field Operations"
          badge="Essential"
          image="/images/products/mobile-app.png"
          price="₹49,999"
          href="/products/mobile"
        />

        <ProductCard
          title="Fleet AI"
          subtitle="Swarm Intelligence"
          badge="Advanced"
          image="/images/products/fleet-ai.png"
          price="₹14,99,999"
          href="/products/fleet-ai"
        />

      </div>

    </section>
  );
}