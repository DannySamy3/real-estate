import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  BedDouble,
  Bath,
  SquareIcon as SquareFeet,
  Calendar,
  Home,
  Car,
  Phone,
  Mail,
  ArrowLeft,
} from "lucide-react";

// Import property data from external file
import { properties } from "@/lib/propertyData";
import PropertyOverview from "@/components/property-overview";
import AgentContactCard from "@/components/agent-contact-card";
import SimilarPropertiesSection from "@/components/similar-properties-section";
import PropertyDetailsTabs from "@/components/property-details-tabs"; // Import property details tabs component

export default function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const property = properties.find((p) => p.id === params.id) || properties[0];

  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-16 items-center justify-between'>
          <div className='flex items-center gap-2'>
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
              className='h-6 w-6 text-primary'
            >
              <path d='M3 21h18' />
              <path d='M19 21v-4' />
              <path d='M19 17a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4' />
              <path d='M14 7v3' />
              <path d='M5 11V7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4' />
            </svg>
            <span className='text-xl font-bold'>PrimeEstate</span>
          </div>
          <nav className='hidden md:flex gap-6'>
            <Link
              href='/'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Home
            </Link>
            <Link
              href='/properties'
              className='text-sm font-medium transition-colors text-primary'
            >
              Properties
            </Link>
            <Link
              href='/about'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              About
            </Link>
            <Link
              href='/contact'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Contact
            </Link>
          </nav>
          <div className='hidden md:flex gap-4'>
            <Button variant='outline' size='sm'>
              Sign In
            </Button>
            <Button size='sm'>Get Started</Button>
          </div>
          <Button variant='ghost' size='icon' className='md:hidden'>
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
              className='h-6 w-6'
            >
              <line x1='4' x2='20' y1='12' y2='12' />
              <line x1='4' x2='20' y1='6' y2='6' />
              <line x1='4' x2='20' y1='18' y2='18' />
            </svg>
          </Button>
        </div>
      </header>
      <main className='flex-1'>
        <div className='container py-6'>
          <Link
            href='/properties'
            className='inline-flex items-center text-sm font-medium mb-6 hover:text-primary'
          >
            <ArrowLeft className='mr-1 h-4 w-4' />
            Back to Properties
          </Link>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2'>
              <div className='relative aspect-[4/3] overflow-hidden rounded-lg mb-6'>
                <Image
                  src={property.images[0] || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className='object-cover'
                  priority
                />
                <Badge className='absolute top-4 left-4 bg-primary'>
                  {property.propertyType}
                </Badge>
              </div>

              <div className='grid grid-cols-4 gap-2 mb-8'>
                {property.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className='relative aspect-[4/3] overflow-hidden rounded-lg'
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${property.title} - Image ${index + 2}`}
                      fill
                      className='object-cover'
                    />
                  </div>
                ))}
              </div>

              <PropertyOverview property={property} />

              <PropertyDetailsTabs property={property} />
            </div>

            <div className='lg:col-span-1'>
              <AgentContactCard agent={property.agent} />
            </div>
          </div>

          <SimilarPropertiesSection />
        </div>
      </main>
      <footer className='border-t bg-muted'>
        <div className='container py-8 md:py-12'>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <div>
              <div className='flex items-center gap-2 mb-4'>
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
                  className='h-6 w-6 text-primary'
                >
                  <path d='M3 21h18' />
                  <path d='M19 21v-4' />
                  <path d='M19 17a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4' />
                  <path d='M14 7v3' />
                  <path d='M5 11V7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4' />
                </svg>
                <span className='text-xl font-bold'>PrimeEstate</span>
              </div>
              <p className='text-muted-foreground mb-4'>
                Your trusted partner in finding the perfect property for your
                needs.
              </p>
              <div className='flex gap-4'>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
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
                    className='h-5 w-5'
                  >
                    <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                  </svg>
                </a>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
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
                    className='h-5 w-5'
                  >
                    <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
                  </svg>
                </a>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
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
                    className='h-5 w-5'
                  >
                    <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
                    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                    <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className='font-bold mb-4'>Quick Links</h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/properties'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold mb-4'>Property Types</h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/properties?type=house'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Houses
                  </Link>
                </li>
                <li>
                  <Link
                    href='/properties?type=apartment'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Apartments
                  </Link>
                </li>
                <li>
                  <Link
                    href='/properties?type=condo'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Condos
                  </Link>
                </li>
                <li>
                  <Link
                    href='/properties?type=land'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Land
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold mb-4'>Contact Us</h3>
              <ul className='space-y-2'>
                <li className='flex items-start gap-2'>
                  <MapPin className='h-5 w-5 text-muted-foreground shrink-0 mt-0.5' />
                  <span className='text-muted-foreground'>
                    123 Real Estate Blvd, Suite 100, New York, NY 10001
                  </span>
                </li>
                <li className='flex items-center gap-2'>
                  <Phone className='h-5 w-5 text-muted-foreground' />
                  <span className='text-muted-foreground'>(555) 123-4567</span>
                </li>
                <li className='flex items-center gap-2'>
                  <Mail className='h-5 w-5 text-muted-foreground' />
                  <span className='text-muted-foreground'>
                    info@primeestate.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-t mt-8 pt-8 text-center text-muted-foreground'>
            <p>
              © {new Date().getFullYear()} PrimeEstate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
