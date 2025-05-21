import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  BedDouble,
  Bath,
  SquareIcon as SquareFeet,
  Calendar,
} from "lucide-react";

interface PropertyDetailsTabsProps {
  property: {
    description: string;
    features: string[];
    // Assuming map image is always '/images/contact-map.jpg' for now,
    // but could be made dynamic if needed.
  };
}

export default function PropertyDetailsTabs({
  property,
}: PropertyDetailsTabsProps) {
  return (
    <div className='mb-8'>
      <Tabs defaultValue='description'>
        <TabsList className='grid w-full grid-cols-3'>
          <TabsTrigger value='description'>Description</TabsTrigger>
          <TabsTrigger value='features'>Features</TabsTrigger>
          <TabsTrigger value='location'>Location</TabsTrigger>
        </TabsList>
        <TabsContent value='description' className='p-4 border rounded-lg mt-2'>
          <p className='text-muted-foreground'>{property.description}</p>
        </TabsContent>
        <TabsContent value='features' className='p-4 border rounded-lg mt-2'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
            {property.features.map((feature, index) => (
              <div key={index} className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-5 w-5 mr-2 text-primary'
                >
                  <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
                  <polyline points='22 4 12 14.01 9 11.01' />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value='location' className='p-4 border rounded-lg mt-2'>
          <div className='aspect-[16/9] bg-muted rounded-lg overflow-hidden'>
            <Image
              src='/images/contact-map.jpg'
              alt='Office location map'
              width={800}
              height={450}
              loading='lazy'
              className='object-cover'
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
