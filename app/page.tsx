import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import WhyAeroResQ from "../components/home/WhyAeroResQ";
import Technology from "../components/home/Technology";
import Trusted from "../components/home/Trusted By";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";
import Products from "../components/home/Products";
import Industries from "../components/home/Industries";
import Timeline from "../components/home/Timeline";
import CommandCenter from "../components/home/CommandCenter";
import AIPipeline from "../components/home/AIPipeline";
import DashboardPreview from "../components/home/DashboardPreview";
import MapPreview from "../components/home/MapPreview";
import Research from "../components/home/Research";
import Ecosystem from "../components/home/Ecosystem";
import FAQ from "../components/home/FAQ";
import LatestNews from "../components/home/LatestNews";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <WhyAeroResQ />
      <Technology/>
      <Products/>
      <Industries/>
      <Timeline/>
      <CommandCenter/>
      <AIPipeline/>
      <DashboardPreview/>
      <MapPreview/>
      <Research/>
      <Ecosystem/>
      <FAQ/>
      <LatestNews/>
      <Trusted/>
      <CTA/>
      <Footer/>
    </>
  );
}