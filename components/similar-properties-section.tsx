import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  BedDouble,
  Bath,
  SquareIcon as SquareFeet,
} from "lucide-react";

// Import similar properties data
import { similarProperties } from "@/lib/similarPropertiesData";

export default function SimilarPropertiesSection() {
  return (
    <section className='mt-12 mb-8'>
      <h2 className='text-2xl font-bold mb-6'>Similar Properties</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {similarProperties.map((property, i) => (
          <Card key={i} className='overflow-hidden'>
            <div className='relative'>
              <Image
                src={property.image}
                alt={property.title}
                width={500}
                height={300}
                loading='lazy'
                className='object-cover h-[200px] w-full'
              />
              {/* Assuming a default badge for similar properties, or you can add type to data */}
              <Badge className='absolute top-2 left-2 bg-primary'>House</Badge>
            </div>
            <CardContent className='p-4'>
              <div className='space-y-2'>
                <h3 className='font-bold text-lg line-clamp-1'>
                  {property.title}
                </h3>
                <div className='flex items-center text-muted-foreground'>
                  <MapPin className='h-4 w-4 mr-1 flex-shrink-0' />
                  <span className='text-sm line-clamp-1'>
                    {property.address}
                  </span>
                </div>
                <p className='text-xl font-bold text-primary'>
                  {property.price}
                </p>
              </div>
              <div className='grid grid-cols-3 gap-2 mt-4'>
                <div className='flex items-center'>
                  <BedDouble className='h-4 w-4 mr-1 text-muted-foreground' />
                  <span className='text-sm'>{property.beds} Beds</span>
                </div>
                <div className='flex items-center'>
                  <Bath className='h-4 w-4 mr-1 text-muted-foreground' />
                  <span className='text-sm'>{property.baths} Baths</span>
                </div>
                <div className='flex items-center'>
                  <SquareFeet className='h-4 w-4 mr-1 text-muted-foreground' />
                  <span className='text-sm'>{property.area} sqft</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
