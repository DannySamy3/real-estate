import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award, Building2, Clock } from "lucide-react"; // Assuming these icons are used in the stats cards

export default function HomeStatsSection() {
  return (
    <section className='py-24 bg-black'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 items-center'>
          <div className='lg:col-span-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='relative h-60 md:h-72 overflow-hidden rounded-lg'>
                <Image
                  src='https://images.unsplash.com/photo-1724638197367-1bab34842f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDE4fHxwcm9qZWN0c3xlbnwwfHwwfHx8MA%3D%3D'
                  alt='Interior design'
                  fill
                  loading='lazy'
                  className='object-cover'
                />
                <div className='absolute bottom-0 left-0 p-4 stats-card'>
                  <div className='flex items-center gap-3'>
                    <Building2 className='h-8 w-8 text-primary' />
                    <div>
                      <p className='font-bold text-xl'>1000+ Project</p>
                      <p className='text-sm text-white/70'>Built & sold</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative h-60 md:h-72 overflow-hidden rounded-lg'>
                <Image
                  src='https://images.unsplash.com/photo-1628584824791-30d512161601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJvcHklMjBhd2FyZHxlbnwwfHwwfHx8MA%3D%3D'
                  alt='Real estate award trophy'
                  fill
                  loading='lazy'
                  className='object-cover'
                />
                <div className='absolute bottom-0 left-0 p-4 stats-card'>
                  <div className='flex items-center gap-3'>
                    <Award className='h-8 w-8 text-primary' />
                    <div>
                      <p className='font-bold text-xl'>3 Awward</p>
                      <p className='text-sm text-white/70'>Received</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hidden md:block relative h-60 md:h-72 overflow-hidden rounded-lg'>
                <Image
                  src='https://images.unsplash.com/photo-1619346270223-c137f4052523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU2fHxleHBlcmllbmNlJTIwaW4lMjB0aW1lfGVufDB8fDB8fHww'
                  alt='Luxury estate'
                  fill
                  loading='lazy'
                  className='object-cover'
                />
                <div className='absolute bottom-0 left-0 p-4 stats-card'>
                  <div className='flex items-center gap-3'>
                    <Clock className='h-8 w-8 text-primary' />
                    <div>
                      <p className='font-bold text-xl'>25+ Years</p>
                      <p className='text-sm text-white/70'>Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:col-span-3'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Our reputation is what vital.
            </h2>
            <p className='text-white/70 mb-6'>
              At Skyline Realty Solutions, we offer a comprehensive range of
              real estate services tailored to meet your needs. From property
              search and negotiation to financing and closing deals, our
              expertise covers it all. We prioritize understanding your needs to
              deliver personalized solutions that exceed expectations.
            </p>
            <Link href='/about'>
              <Button variant='outline' className='flex items-center gap-2'>
                About us
                <svg
                  width='18'
                  height='12'
                  viewBox='0 0 18 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 6H17M17 6L12 1M17 6L12 11'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
