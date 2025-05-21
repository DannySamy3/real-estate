"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { SearchForm } from "@/components/search-form";
import {
  Building2,
  Filter,
  Heart,
  Bed,
  Bath,
  Square,
  MapPin,
  Star,
} from "lucide-react";

// Sample property data
const properties = [
  {
    id: "1",
    title: "Elevation Small Apartments",
    address: "7 Magnolia St. Orlando, FL",
    price: "299,000",
    image: "/images/property-1.jpg",
    rating: 5,
    reviews: 23,
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    type: "Apartment",
    description:
      "Modern apartment with stunning city views and premium amenities.",
    agent: {
      name: "John Doe",
      image: "/images/agent-john.jpg",
    },
  },
  {
    id: "2",
    title: "West Square Apartments",
    address: "8 Magnolia St. Orlando, FL",
    price: "349,000",
    image: "/images/property-2.jpg",
    rating: 4,
    reviews: 12,
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    type: "Apartment",
    description: "Cozy apartment in a prime location with excellent amenities.",
    agent: {
      name: "Jane Smith",
      image: "/images/agent-jane.jpg",
    },
  },
  {
    id: "3",
    title: "Peninsula Apartments",
    address: "9 Magnolia St. Orlando, FL",
    price: "399,000",
    image: "/images/property-3.jpg",
    rating: 5,
    reviews: 17,
    bedrooms: 4,
    bathrooms: 3,
    area: 1500,
    type: "Apartment",
    description:
      "Spacious apartment with waterfront views and luxury finishes.",
    agent: {
      name: "Robert Johnson",
      image: "/images/agent-robert.jpg",
    },
  },
  {
    id: "4",
    title: "Luxury Villa with Pool",
    address: "123 Palm Ave, Miami, FL",
    price: "1,250,000",
    image: "/images/property-4.jpg",
    rating: 5,
    reviews: 28,
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    type: "Villa",
    description: "Stunning villa with private pool and tropical garden.",
    agent: {
      name: "Maria Rodriguez",
      image: "/images/agent-maria.jpg",
    },
  },
  {
    id: "5",
    title: "Modern Downtown Loft",
    address: "456 Urban St, New York, NY",
    price: "875,000",
    image: "/images/property-5.jpg",
    rating: 4,
    reviews: 15,
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    type: "Loft",
    description:
      "Contemporary loft in the heart of downtown with industrial finishes.",
    agent: {
      name: "David Chen",
      image: "/images/agent-david.jpg",
    },
  },
  {
    id: "6",
    title: "Seaside Cottage",
    address: "789 Coastal Rd, Malibu, CA",
    price: "1,850,000",
    image: "/images/property-6.jpg",
    rating: 5,
    reviews: 32,
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    type: "House",
    description:
      "Charming cottage with direct beach access and panoramic ocean views.",
    agent: {
      name: "Sarah Williams",
      image: "/images/agent-sarah.jpg",
    },
  },
];

export default function PropertiesPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter properties based on search query and active filter
  useEffect(() => {
    let filtered = properties;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (property) =>
          property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          property.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply type filter
    if (activeFilter !== "all") {
      filtered = filtered.filter(
        (property) => property.type.toLowerCase() === activeFilter.toLowerCase()
      );
    }

    setFilteredProperties(filtered);
  }, [searchQuery, activeFilter]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <SiteHeader />

      <main className='flex-1 pt-20'>
        {/* Hero Section */}
        <section className='py-16 bg-black relative'>
          <div className='absolute inset-0 z-0 opacity-20'>
            <Image
              src='/images/properties-hero.jpg'
              alt='Properties background'
              fill
              className='object-cover'
            />
          </div>

          <div className='container mx-auto px-4 relative z-10'>
            <div className='max-w-3xl mx-auto'>
              <h1 className='text-3xl md:text-4xl font-bold tracking-tight mb-6 text-center'>
                Find Your Dream Property
              </h1>
              <p className='text-white/70 mb-8 text-center'>
                Browse our exclusive selection of premium properties
              </p>
              <SearchForm dark className='max-w-2xl mx-auto' />
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className='py-8 bg-black border-b border-white/10'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap gap-4 justify-between items-center'>
              <div className='flex flex-wrap gap-3'>
                <Button
                  variant={activeFilter === "all" ? "default" : "outline"}
                  className='rounded-full'
                  onClick={() => setActiveFilter("all")}
                >
                  All Properties
                </Button>
                <Button
                  variant={activeFilter === "apartment" ? "default" : "outline"}
                  className='rounded-full'
                  onClick={() => setActiveFilter("apartment")}
                >
                  Apartments
                </Button>
                <Button
                  variant={activeFilter === "house" ? "default" : "outline"}
                  className='rounded-full'
                  onClick={() => setActiveFilter("house")}
                >
                  Houses
                </Button>
                <Button
                  variant={activeFilter === "villa" ? "default" : "outline"}
                  className='rounded-full'
                  onClick={() => setActiveFilter("villa")}
                >
                  Villas
                </Button>
                <Button
                  variant={activeFilter === "loft" ? "default" : "outline"}
                  className='rounded-full'
                  onClick={() => setActiveFilter("loft")}
                >
                  Lofts
                </Button>
              </div>
              <Button
                variant='outline'
                size='sm'
                className='flex items-center gap-2'
              >
                <Filter className='h-4 w-4' />
                More Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Properties Grid Section */}
        <section className='py-16 bg-black'>
          <div className='container mx-auto px-4'>
            <div className='mb-8 flex justify-between items-center'>
              <h2 className='text-2xl font-bold'>
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : "Available Properties"}
                <span className='text-white/50 text-lg ml-2'>
                  ({filteredProperties.length})
                </span>
              </h2>
              <div className='flex gap-2'>
                <Button variant='outline' size='sm'>
                  Newest
                </Button>
                <Button variant='outline' size='sm'>
                  Price: Low to High
                </Button>
              </div>
            </div>

            {filteredProperties.length === 0 ? (
              <div className='text-center py-16'>
                <h3 className='text-xl mb-4'>No properties found</h3>
                <p className='text-white/70 mb-8'>
                  Try adjusting your search criteria
                </p>
                <Button asChild>
                  <Link href='/properties'>View All Properties</Link>
                </Button>
              </div>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredProperties.map((property) => (
                  <div
                    key={property.id}
                    className='bg-black border border-white/10 rounded-lg overflow-hidden hover:border-primary/50 transition-colors'
                  >
                    <div className='relative'>
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        width={400}
                        height={250}
                        className='w-full h-48 object-cover'
                      />
                      <div className='absolute top-4 left-4 bg-white text-black text-xs font-medium px-2 py-1 rounded'>
                        {property.type}
                      </div>
                      <button
                        className='absolute top-4 right-4 bg-white/80 p-1.5 rounded-full'
                        onClick={() => toggleFavorite(property.id)}
                      >
                        <Heart
                          className={`h-4 w-4 ${
                            favorites.includes(property.id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-600"
                          }`}
                        />
                      </button>
                      {property.agent && (
                        <div className='absolute bottom-3 right-3'>
                          <Image
                            src={property.agent.image || "/placeholder.svg"}
                            alt={property.agent.name}
                            width={40}
                            height={40}
                            className='rounded-full border-2 border-white'
                          />
                        </div>
                      )}
                    </div>

                    <div className='p-4'>
                      <div className='flex items-center mb-2'>
                        <div className='flex text-yellow-400 text-sm'>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < property.rating
                                  ? "fill-yellow-400"
                                  : "fill-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className='text-xs text-white/50 ml-1'>
                          ({property.reviews})
                        </span>
                      </div>

                      <h3 className='font-bold text-lg mb-1'>
                        {property.title}
                      </h3>

                      <div className='flex items-center text-white/50 mb-3'>
                        <MapPin className='h-3 w-3 mr-1' />
                        <span className='text-xs'>{property.address}</span>
                      </div>

                      <div className='flex justify-between items-center mb-4'>
                        <div className='flex items-center text-white/50 text-sm'>
                          <Bed className='h-4 w-4 mr-1' />
                          <span>{property.bedrooms} Beds</span>
                        </div>
                        <div className='flex items-center text-white/50 text-sm'>
                          <Bath className='h-4 w-4 mr-1' />
                          <span>{property.bathrooms} Baths</span>
                        </div>
                        <div className='flex items-center text-white/50 text-sm'>
                          <Square className='h-4 w-4 mr-1' />
                          <span>{property.area} sqft</span>
                        </div>
                      </div>

                      <div className='flex justify-between items-center'>
                        <p className='text-primary font-bold'>
                          ${property.price}
                        </p>
                        <Button size='sm' asChild>
                          <Link href={`/properties/${property.id}`}>
                            Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredProperties.length > 0 && (
              <div className='flex justify-center mt-12'>
                <Button variant='outline'>Load More</Button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='py-12 bg-black border-t border-white/10'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center gap-2 mb-4 md:mb-0'>
              <Building2 className='h-6 w-6 text-primary' />
              <span className='text-2xl font-bold tracking-tighter'>
                SKYLINE REALTY
              </span>
            </div>

            <div className='flex flex-wrap gap-8'>
              <Link href='/' className='text-sm text-white/70 hover:text-white'>
                Home
              </Link>
              <Link
                href='/properties'
                className='text-sm text-white/70 hover:text-white'
              >
                Buy
              </Link>
              <Link
                href='/sell'
                className='text-sm text-white/70 hover:text-white'
              >
                Sell
              </Link>
              <Link
                href='/news'
                className='text-sm text-white/70 hover:text-white'
              >
                News
              </Link>
              <Link
                href='/about'
                className='text-sm text-white/70 hover:text-white'
              >
                About us
              </Link>
              <Link
                href='/contact'
                className='text-sm text-white/70 hover:text-white'
              >
                Contact
              </Link>
            </div>

            <div className='mt-6 md:mt-0'>
              <p className='text-sm text-white/50'>
                © {new Date().getFullYear()} SKYLINE REALTY. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
