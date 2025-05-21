import Image from "next/image";
import { SearchForm } from "@/components/search-form"; // Assuming SearchForm is a reusable component

export default function HomeHeroSection() {
  return (
    <section className='hero-carousel min-h-screen flex items-center relative'>
      <div className='absolute inset-0 z-0'>
        <div className='relative w-full h-full grid grid-cols-4 gap-2'>
          <div className='col-span-1 h-full relative'>
            <Image
              src='/images/hero-exterior.jpg'
              alt='Luxury home exterior'
              fill
              priority
              className='object-cover'
            />
          </div>
          <div className='col-span-2 h-full relative'>
            <Image
              src='/images/hero-interior.jpg'
              alt='Modern interior'
              fill
              priority
              className='object-cover'
            />
          </div>
          <div className='col-span-1 h-full relative'>
            <Image
              src='/images/hero-pool.jpg'
              alt='Luxury pool'
              fill
              priority
              className='object-cover'
            />
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 z-10 pt-32'>
        <div className='hero-content max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
            Find a home thats perfect for you
          </h1>
          <p className='text-lg text-white/80 mb-8'>
            Search confidently with your trusted source of homes for sale or
            rent.
          </p>

          <div className='max-w-xl mx-auto'>
            {/* Assuming SearchForm is a separate component */}
            <SearchForm />
          </div>
        </div>
      </div>
    </section>
  );
}
