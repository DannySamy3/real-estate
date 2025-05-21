import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface PropertyImageGalleryProps {
  images: string[];
  title: string;
  propertyType: string; // Assuming propertyType is needed for the badge
}

export default function PropertyImageGallery({
  images,
  title,
  propertyType,
}: PropertyImageGalleryProps) {
  return (
    <>
      <div className='relative aspect-[4/3] overflow-hidden rounded-lg mb-6'>
        <Image
          src={images[0] || "/placeholder.svg"}
          alt={title}
          fill
          className='object-cover'
          priority
        />
        {/* Assuming Badge is part of the gallery section */}
        <Badge className='absolute top-4 left-4 bg-primary'>
          {propertyType}
        </Badge>
      </div>

      <div className='grid grid-cols-4 gap-2 mb-8'>
        {images.slice(1).map((image, index) => (
          <div
            key={index}
            className='relative aspect-[4/3] overflow-hidden rounded-lg'
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${title} - Image ${index + 2}`}
              fill
              loading='lazy'
              className='object-cover'
            />
          </div>
        ))}
      </div>
    </>
  );
}
