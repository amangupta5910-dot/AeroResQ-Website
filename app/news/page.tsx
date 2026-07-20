import NewsHero from "@/components/news/NewsHero";
import FeaturedNews from "@/components/news/FeaturedNews";
import NewsGrid from "@/components/news/NewsGrid";
import PressReleases from "@/components/news/PressReleases";
import Events from "@/components/news/Events";
import Newsletter from "@/components/news/Newsletter";
import NewsCTA from "@/components/news/NewsCTA";

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <FeaturedNews />
      <NewsGrid />
      <PressReleases />
      <Events />
      <Newsletter />
      <NewsCTA />
    </>
  );
}