import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { SearchForm } from "@/components/search-form";
import { Play, Award, Building2, Clock, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <SiteHeader />

      {/* Hero Section */}
      <section className='hero-carousel min-h-screen flex items-center relative'>
        <div className='absolute inset-0 z-0'>
          <div className='relative w-full h-full grid grid-cols-4 gap-2'>
            <div className='col-span-1 h-full relative'>
              <Image
                src='/images/hero-exterior.jpg'
                alt='Luxury home exterior'
                fill
                className='object-cover'
                priority
              />
            </div>
            <div className='col-span-2 h-full relative'>
              <Image
                src='/images/hero-interior.jpg'
                alt='Modern interior'
                fill
                className='object-cover'
                priority
              />
            </div>
            <div className='col-span-1 h-full relative'>
              <Image
                src='/images/hero-pool.jpg'
                alt='Luxury pool'
                fill
                className='object-cover'
                priority
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
              <SearchForm />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-24 bg-black'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Who are we?
              </h2>
              <p className='text-white/70 mb-6'>
                SKYLINE REALTY group has been operating for more than 20 years
                in the real estate world and has completed thousands of projects
                from around and received various awards, this can be a benchmark
                for teammates in becoming the pride of the community in the real
                estate world.
              </p>
              <p className='text-white/70 mb-8'>
                Even though it has been established for 2 decades, it doesn't
                make us big because we exist because of people's trust in their
                dream house that was handed over to us.
              </p>
              <Button variant='outline' className='flex items-center gap-2'>
                <Play className='h-4 w-4' />
                Play Video
              </Button>
            </div>
            <div className='relative'>
              <Image
                src='/images/about-property.jpg'
                alt='Luxury property'
                width={800}
                height={600}
                className='rounded-lg object-cover w-full h-auto shadow-xl'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Reputation Section */}
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
                expertise covers it all. We prioritize understanding your needs
                to deliver personalized solutions that exceed expectations.
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

      {/* Gallery Section */}
      <section className='py-24 bg-black'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            Our gallery
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                image: "/images/gallery-arizona.jpg",
                location: "Arizona, Cococino C",
                address: "3221 S Glenview Dr",
                features: ["3", "2", "1"],
              },
              {
                image: "/images/gallery-miami1.jpg",
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
            ].map((property, index) => (
              <div
                key={index}
                className='gallery-item rounded-lg overflow-hidden'
              >
                <div className='relative aspect-[3/4]'>
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.location}
                    fill
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

      {/* Footer */}
      <footer className='py-12 bg-black border-t border-white/10'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-2xl font-bold tracking-tighter mb-4 md:mb-0'>
              SKYLINE REALTY
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
