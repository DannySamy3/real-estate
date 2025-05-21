import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { SearchForm } from "@/components/search-form";
import { Play, Award, Building2, Clock, MapPin } from "lucide-react";

// Import new component
import HomeHeroSection from "@/components/home-hero-section";
import HomeAboutSection from "@/components/home-about-section";
import HomeStatsSection from "@/components/home-stats-section";
import HomeGallerySection from "@/components/home-gallery-section";
import HomeFooter from "@/components/home-footer";

export default function Home() {
  // Define the gallery data here
  const galleryItems = [
    {
      image: "/images/gallery-arizona.jpg",
      location: "Arizona, Cococino C",
      address: "3221 S Glenview Dr",
      features: ["3", "2", "1"],
    },
    {
      image: "/images/gallery-miami.jpg",
      location: "Miami, Coral Gables",
      address: "2904 NE Riverwater St, Fl",
      features: ["4", "3", "2"],
    },
    {
      image: "/images/gallery-miami2.jpg",
      location: "Miami, Coral Gables",
      address: "2904 NE Riverwater St, Fl",
      features: ["4", "3", "2"],
    },
  ];

  return (
    <div className='min-h-screen flex flex-col'>
      <SiteHeader />

      {/* Use the new HomeHeroSection component */}
      <HomeHeroSection />

      {/* Use the new HomeAboutSection component */}
      <HomeAboutSection />

      {/* Use the new HomeStatsSection component */}
      <HomeStatsSection />

      {/* Use the new HomeGallerySection component and pass data */}
      <HomeGallerySection galleryItems={galleryItems} />

      {/* Use the new HomeFooter component */}
      <HomeFooter />
    </div>
  );
}
