import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star, MapPin, Bed, Bath, Square } from "lucide-react";

export interface PropertyType {
  id: number | string;
  title: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number | string; // in case of values like "2.5"
  area: number;
  image: string;
  type: string;
  featured?: boolean;
  rating?: number; // Adding rating field
  reviews?: number; // Adding reviews field

  // Optional fields for detailed view (like PROPERTY_DETAILS)
  description?: string;
  yearBuilt?: number;
  propertyType?: string;
  lotSize?: string;
  garage?: string;
  images?: string[];
  features?: string[];
  agent?: {
    name: string;
    phone?: string;
    email?: string;
    image: string;
  };
}

interface PropertyCardProps {
  property: PropertyType;
  featured?: boolean;
}

export function PropertyCard({
  property,
  featured = false,
}: PropertyCardProps) {
  // Default values for rating and reviews if not provided
  const rating = property.rating || 4;
  const reviews = property.reviews || 0;

  // Use property.agent or create a default one if not provided
  const agent = property.agent || {
    name: "Agent",
    image: "/placeholder.svg",
  };

  return (
    <div className='bg-white rounded-lg overflow-hidden shadow-md'>
      <div className='relative'>
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          width={400}
          height={250}
          loading='lazy'
          className='w-full h-48 object-cover'
        />
        <Badge
          variant='white'
          className='absolute top-4 left-4 bg-white text-navy-900 text-xs font-medium px-2 py-1 rounded'
        >
          {property.type}
        </Badge>
        <button className='absolute top-4 right-4 bg-white/80 p-1.5 rounded-full'>
          <Heart className='h-4 w-4 text-gray-600' />
        </button>
        {agent && (
          <div className='absolute bottom-3 right-3'>
            <Image
              src={agent.image || "/placeholder.svg"}
              alt={agent.name}
              width={40}
              height={40}
              loading='lazy'
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
                  i < rating ? "fill-yellow-400" : "fill-gray-300"
                }`}
              />
            ))}
          </div>
          <span className='text-xs text-gray-500 ml-1'>({reviews})</span>
        </div>

        <h3 className='font-bold text-lg mb-1'>{property.title}</h3>

        <div className='flex items-center text-gray-500 mb-3'>
          <MapPin className='h-3 w-3 mr-1' />
          <span className='text-xs'>{property.address}</span>
        </div>

        <div className='flex justify-between items-center mb-4'>
          <div className='flex items-center text-gray-400 text-sm'>
            <Bed className='h-4 w-4 mr-1' />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className='flex items-center text-gray-400 text-sm'>
            <Bath className='h-4 w-4 mr-1' />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className='flex items-center text-gray-400 text-sm'>
            <Square className='h-4 w-4 mr-1' />
            <span>{property.area} sqft</span>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <p className='text-orange-500 font-bold'>${property.price}</p>
          <Button
            size='sm'
            className='bg-orange-500 hover:bg-orange-600 text-white'
            asChild
          >
            <Link href={`/properties/${property.id}`}>Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
