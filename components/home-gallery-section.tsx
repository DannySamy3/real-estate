import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

interface GalleryItem {
  image: string;
  location: string;
  address: string;
  features: string[];
}

interface HomeGallerySectionProps {
  galleryItems: GalleryItem[];
}

const HomeGallerySection: React.FC<HomeGallerySectionProps> = ({
  galleryItems,
}) => {
  return (
    <section className='py-24 bg-black'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          Our gallery
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {galleryItems.map((property, index) => (
            <div
              key={index}
              className='gallery-item rounded-lg overflow-hidden'
            >
              <div className='relative aspect-[3/4]'>
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.location}
                  fill
                  loading='lazy'
                  className='object-cover transition-transform hover:scale-110 duration-500'
                />

                <div className='gallery-item-info'>
                  <h3 className='font-bold text-xl'>{property.location}</h3>
                  <div className='flex items-center text-white/70 text-sm mt-1'>
                    <MapPin className='h-4 w-4 mr-1' />
                    {property.address}
                  </div>

                  <div className='flex mt-3 gap-2'>
                    {property.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className='w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-xs'
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
