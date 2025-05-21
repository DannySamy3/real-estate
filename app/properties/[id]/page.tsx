import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

// Sample property data
const properties = [
  {
    id: "1",
    title: "Luxury Villa with Pool",
    address: "45 Mikocheni St, Dar es Salaam, TZ",
    price: "TZS 950,000,000",
    description:
      "Stunning villa with private pool and tropical garden in the heart of Mikocheni.",
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    yearBuilt: 2020,
    propertyType: "Villa",
    lotSize: "0.5 acres",
    garage: "3-car attached",
    images: [
      "/images/property-1.jpg",
      "/images/property-2.jpg",
      "/images/property-3.jpg",
      "/images/property-4.jpg",
    ],
    features: [
      "Infinity Pool",
      "Smart Home System",
      "Home Theater",
      "Wine Cellar",
      "Gourmet Kitchen",
      "Outdoor Kitchen",
      "Fireplace",
      "Walk-in Closets",
      "High Ceilings",
      "Mountain Views",
    ],
    agent: {
      name: "Asha Mwinyi",
      phone: "+255 765 123 456",
      email: "asha.mwinyi@skylinerealty.co.tz",
      image: "/images/agent-jane.jpg",
    },
  },
  {
    id: "2",
    title: "Modern Apartment in Masaki",
    address: "12 Chole Rd, Masaki, Dar es Salaam, TZ",
    price: "TZS 680,000,000",
    description:
      "Spacious apartment with ocean views and modern amenities in Masaki.",
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    yearBuilt: 2022,
    propertyType: "Apartment",
    lotSize: "0.2 acres",
    garage: "1-car assigned",
    images: [
      "/images/property-2.jpg",
      "/images/property-3.jpg",
      "/images/property-5.jpg",
    ],
    features: [
      "Ocean Views",
      "Modern Kitchen",
      "Balcony",
      "Shared Pool",
      "Gym Access",
    ],
    agent: {
      name: "Juma Mwakalinga",
      phone: "+255 678 789 012",
      email: "juma.mwakalinga@skylinerealty.co.tz",
      image: "/images/agent-john.jpg",
    },
  },
  {
    id: "3",
    title: "Family Home in Arusha",
    address: "88 Sokoine Rd, Arusha, TZ",
    price: "TZS 350,000,000",
    description:
      "Comfortable family home with a large garden and mountain views in Arusha.",
    bedrooms: 4,
    bathrooms: 3,
    area: 2000,
    yearBuilt: 2018,
    propertyType: "House",
    lotSize: "0.7 acres",
    garage: "2-car attached",
    images: [
      "/images/property-3.jpg",
      "/images/property-6.jpg",
      "/images/property-1.jpg",
    ],
    features: [
      "Large Garden",
      "Mountain Views",
      "Fireplace",
      "Quiet Neighborhood",
    ],
    agent: {
      name: "Neema Mushi",
      phone: "+255 787 456 789",
      email: "neema.mushi@skylinerealty.co.tz",
      image: "/images/agent-maria.jpg",
    },
  },
  {
    id: "4",
    title: "Beachfront Cottage",
    address: "23 Nungwi Beach, Zanzibar, TZ",
    price: "TZS 750,000,000",
    description:
      "Charming cottage with direct beach access and stunning ocean views in Zanzibar.",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    yearBuilt: 2015,
    propertyType: "Cottage",
    lotSize: "0.3 acres",
    garage: "1-car detached",
    images: [
      "/images/property-4.jpg",
      "/images/property-1.jpg",
      "/images/property-6.jpg",
    ],
    features: [
      "Beach Access",
      "Ocean Views",
      "Private Patio",
      "Tropical Garden",
    ],
    agent: {
      name: "Baraka Mtemi",
      phone: "+255 754 987 654",
      email: "baraka.mtemi@skylinerealty.co.tz",
      image: "/images/agent-robert.jpg",
    },
  },
  {
    id: "5",
    title: "Downtown Loft",
    address: "5 Samora Ave, City Centre, Dar es Salaam, TZ",
    price: "TZS 480,000,000",
    description:
      "Contemporary loft in the heart of Dar es Salaam with city views.",
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    yearBuilt: 2021,
    propertyType: "Loft",
    lotSize: "0.1 acres",
    garage: "Parking Available",
    images: [
      "/images/property-5.jpg",
      "/images/property-2.jpg",
      "/images/property-4.jpg",
    ],
    features: [
      "City Views",
      "Modern Design",
      "Close to Amenities",
      "High Ceilings",
    ],
    agent: {
      name: "Fatma Nyerere",
      phone: "+255 713 234 567",
      email: "fatma.nyerere@skylinerealty.co.tz",
      image: "/images/agent-sarah.jpg",
    },
  },
  {
    id: "6",
    title: "Lake View Bungalow",
    address: "77 Capri Point, Mwanza, TZ",
    price: "TZS 550,000,000",
    description:
      "Beautiful bungalow with panoramic views of Lake Victoria in Mwanza.",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    yearBuilt: 2019,
    propertyType: "Bungalow",
    lotSize: "0.6 acres",
    garage: "2-car detached",
    images: [
      "/images/property-6.jpg",
      "/images/property-3.jpg",
      "/images/property-5.jpg",
    ],
    features: [
      "Lake Views",
      "Spacious Yard",
      "Quiet Location",
      "Modern Interior",
    ],
    agent: {
      name: "Salim Kweka",
      phone: "+255 784 567 890",
      email: "salim.kweka@skylinerealty.co.tz",
      image: "/images/agent-david.jpg",
    },
  },
];

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
                    <p className='text-3xl font-bold text-primary'>
                      {property.price}
                    </p>
                  </div>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-muted rounded-lg mb-6'>
                  <div className='flex flex-col items-center p-2 text-center'>
                    <BedDouble className='h-6 w-6 mb-1 text-primary' />
                    <span className='text-sm text-muted-foreground'>
                      Bedrooms
                    </span>
                    <span className='font-bold'>{property.bedrooms}</span>
                  </div>
                  <div className='flex flex-col items-center p-2 text-center'>
                    <Bath className='h-6 w-6 mb-1 text-primary' />
                    <span className='text-sm text-muted-foreground'>
                      Bathrooms
                    </span>
                    <span className='font-bold'>{property.bathrooms}</span>
                  </div>
                  <div className='flex flex-col items-center p-2 text-center'>
                    <SquareFeet className='h-6 w-6 mb-1 text-primary' />
                    <span className='text-sm text-muted-foreground'>
                      Square Feet
                    </span>
                    <span className='font-bold'>{property.area}</span>
                  </div>
                  <div className='flex flex-col items-center p-2 text-center'>
                    <Calendar className='h-6 w-6 mb-1 text-primary' />
                    <span className='text-sm text-muted-foreground'>
                      Year Built
                    </span>
                    <span className='font-bold'>{property.yearBuilt}</span>
                  </div>
                </div>

                <Tabs defaultValue='description'>
                  <TabsList className='grid w-full grid-cols-3'>
                    <TabsTrigger value='description'>Description</TabsTrigger>
                    <TabsTrigger value='details'>Details</TabsTrigger>
                    <TabsTrigger value='features'>Features</TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value='description'
                    className='p-4 border rounded-lg mt-2'
                  >
                    <p className='text-muted-foreground'>
                      {property.description}
                    </p>
                  </TabsContent>
                  <TabsContent
                    value='details'
                    className='p-4 border rounded-lg mt-2'
                  >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div className='flex items-center'>
                        <Home className='h-5 w-5 mr-2 text-primary' />
                        <div>
                          <p className='text-sm text-muted-foreground'>
                            Property Type
                          </p>
                          <p className='font-medium'>{property.propertyType}</p>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <SquareFeet className='h-5 w-5 mr-2 text-primary' />
                        <div>
                          <p className='text-sm text-muted-foreground'>
                            Lot Size
                          </p>
                          <p className='font-medium'>{property.lotSize}</p>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <Car className='h-5 w-5 mr-2 text-primary' />
                        <div>
                          <p className='text-sm text-muted-foreground'>
                            Garage
                          </p>
                          <p className='font-medium'>{property.garage}</p>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <Calendar className='h-5 w-5 mr-2 text-primary' />
                        <div>
                          <p className='text-sm text-muted-foreground'>
                            Year Built
                          </p>
                          <p className='font-medium'>{property.yearBuilt}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent
                    value='features'
                    className='p-4 border rounded-lg mt-2'
                  >
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
                </Tabs>
              </div>

              <div className='mb-8'>
                <h2 className='text-2xl font-bold mb-4'>Location</h2>
                <div className='aspect-[16/9] bg-muted rounded-lg overflow-hidden'>
                  <Image
                    src='/images/contact-map.jpg'
                    alt='Office location map'
                    width={800}
                    height={450}
                    className='object-cover'
                  />
                </div>
              </div>
            </div>

            <div>
              <Card className='sticky top-24'>
                <CardContent className='p-6'>
                  <div className='flex items-center gap-4 mb-6'>
                    <div className='relative h-16 w-16 rounded-full overflow-hidden'>
                      <Image
                        src={property.agent.image || "/placeholder.svg"}
                        alt={property.agent.name}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div>
                      <h3 className='font-bold'>{property.agent.name}</h3>
                      <p className='text-sm text-muted-foreground'>
                        Listing Agent
                      </p>
                    </div>
                  </div>

                  <div className='space-y-4 mb-6'>
                    <div className='flex items-center'>
                      <Phone className='h-5 w-5 mr-2 text-primary' />
                      <span>{property.agent.phone}</span>
                    </div>
                    <div className='flex items-center'>
                      <Mail className='h-5 w-5 mr-2 text-primary' />
                      <span>{property.agent.email}</span>
                    </div>
                  </div>

                  <div className='space-y-4'>
                    <div className='grid grid-cols-1 gap-4'>
                      <div className='space-y-2'>
                        <label className='text-sm font-medium'>Your Name</label>
                        <input
                          type='text'
                          placeholder='Enter your name'
                          className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                        />
                      </div>
                      <div className='space-y-2'>
                        <label className='text-sm font-medium'>Email</label>
                        <input
                          type='email'
                          placeholder='Enter your email'
                          className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                        />
                      </div>
                      <div className='space-y-2'>
                        <label className='text-sm font-medium'>Phone</label>
                        <input
                          type='tel'
                          placeholder='Enter your phone number'
                          className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                        />
                      </div>
                      <div className='space-y-2'>
                        <label className='text-sm font-medium'>Message</label>
                        <textarea
                          placeholder="I'm interested in this property..."
                          className='flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                        />
                      </div>
                    </div>
                    <Button className='w-full'>Contact Agent</Button>
                    <Button variant='outline' className='w-full'>
                      Schedule Viewing
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <section className='mt-12 mb-8'>
            <h2 className='text-2xl font-bold mb-6'>Similar Properties</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {[
                {
                  image: "/images/property-1.jpg",
                  title: "Luxury Family Home",
                  address: "45 Mikocheni St, Dar es Salaam, TZ",
                  price: "TZS 950,000,000",
                  beds: 4,
                  baths: 3,
                  area: 2000,
                },
                {
                  image: "/images/property-2.jpg",
                  title: "Modern Apartment in Masaki",
                  address: "12 Chole Rd, Masaki, Dar es Salaam, TZ",
                  price: "TZS 680,000,000",
                  beds: 3,
                  baths: 2,
                  area: 1500,
                },
                {
                  image: "/images/property-3.jpg",
                  title: "Family Home in Arusha",
                  address: "88 Sokoine Rd, Arusha, TZ",
                  price: "TZS 350,000,000",
                  beds: 4,
                  baths: 3,
                  area: 2000,
                },
              ].map((property, i) => (
                <Card key={i} className='overflow-hidden'>
                  <div className='relative'>
                    <Image
                      src={property.image}
                      alt={property.title}
                      width={500}
                      height={300}
                      className='object-cover h-[200px] w-full'
                    />
                    <Badge className='absolute top-2 left-2 bg-primary'>
                      House
                    </Badge>
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
