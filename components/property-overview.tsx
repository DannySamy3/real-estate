import Image from "next/image";
import {
  MapPin,
  BedDouble,
  Bath,
  SquareIcon as SquareFeet,
  Calendar,
} from "lucide-react";

interface PropertyOverviewProps {
  property: {
    title: string;
    address: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    yearBuilt: number;
  };
}

export default function PropertyOverview({ property }: PropertyOverviewProps) {
  return (
    <div className='mb-8'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
        <div>
          <h1 className='text-3xl font-bold'>{property.title}</h1>
          <div className='flex items-center mt-2 text-muted-foreground'>
            <MapPin className='h-4 w-4 mr-1' />
            <span>{property.address}</span>
          </div>
        </div>
        <div className='mt-4 md:mt-0'>
          <p className='text-3xl font-bold text-primary'>{property.price}</p>
        </div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-muted rounded-lg mb-6'>
        <div className='flex flex-col items-center p-2 text-center'>
          <BedDouble className='h-6 w-6 mb-1 text-primary' />
          <span className='text-sm text-muted-foreground'>Bedrooms</span>
          <span className='font-bold'>{property.bedrooms}</span>
        </div>
        <div className='flex flex-col items-center p-2 text-center'>
          <Bath className='h-6 w-6 mb-1 text-primary' />
          <span className='text-sm text-muted-foreground'>Bathrooms</span>
          <span className='font-bold'>{property.bathrooms}</span>
        </div>
        <div className='flex flex-col items-center p-2 text-center'>
          <SquareFeet className='h-6 w-6 mb-1 text-primary' />
          <span className='text-sm text-muted-foreground'>Square Feet</span>
          <span className='font-bold'>{property.area}</span>
        </div>
        <div className='flex flex-col items-center p-2 text-center'>
          <Calendar className='h-6 w-6 mb-1 text-primary' />
          <span className='text-sm text-muted-foreground'>Year Built</span>
          <span className='font-bold'>{property.yearBuilt}</span>
        </div>
      </div>
    </div>
  );
}
