import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
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
              className='text-sm font-medium transition-colors hover:text-primary'
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
              className='text-sm font-medium transition-colors text-primary'
            >
              Contact
            </Link>
          </nav>
          <div className='hidden md:flex'>
            <Button size='sm' asChild>
              <Link href='/properties'>Get Started</Link>
            </Button>
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
        <section className='bg-muted py-12 md:py-16 lg:py-20 relative'>
          <div className='absolute inset-0 z-0 opacity-20'>
            <Image
              src='/images/contact-hero.jpg'
              alt='Contact us'
              fill
              className='object-cover'
            />
          </div>
          <div className='container relative z-10'>
            <div className='text-center max-w-3xl mx-auto mb-12'>
              <h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
                Contact Us
              </h1>
              <p className='mt-4 text-muted-foreground md:text-lg'>
                We're here to help you find your dream property. Reach out to
                our team of experts today.
              </p>
            </div>
          </div>
        </section>

        <section className='py-12 md:py-16 lg:py-20'>
          <div className='container'>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <Card>
                <CardContent className='p-6 flex flex-col items-center text-center'>
                  <div className='rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4'>
                    <MapPin className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Our Office</h3>
                  <p className='text-muted-foreground'>
                    123 Real Estate Blvd, Suite 100
                    <br />
                    New York, NY 10001
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='p-6 flex flex-col items-center text-center'>
                  <div className='rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4'>
                    <Phone className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Phone</h3>
                  <p className='text-muted-foreground'>
                    Main: (555) 123-4567
                    <br />
                    Support: (555) 987-6543
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='p-6 flex flex-col items-center text-center'>
                  <div className='rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4'>
                    <Mail className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Email</h3>
                  <p className='text-muted-foreground'>
                    info@primeestate.com
                    <br />
                    support@primeestate.com
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className='py-12 md:py-16 lg:py-20 bg-muted'>
          <div className='container'>
            <div className='grid gap-8 lg:grid-cols-2'>
              <div>
                <h2 className='text-3xl font-bold tracking-tight mb-6'>
                  Get in Touch
                </h2>
                <p className='text-muted-foreground mb-8 md:text-lg'>
                  Fill out the form below and one of our agents will get back to
                  you as soon as possible.
                </p>
                <form className='space-y-6'>
                  <div className='grid gap-4 sm:grid-cols-2'>
                    <div className='space-y-2'>
                      <label
                        htmlFor='first-name'
                        className='text-sm font-medium'
                      >
                        First Name
                      </label>
                      <Input
                        id='first-name'
                        placeholder='Enter your first name'
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <label
                        htmlFor='last-name'
                        className='text-sm font-medium'
                      >
                        Last Name
                      </label>
                      <Input
                        id='last-name'
                        placeholder='Enter your last name'
                        required
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='email' className='text-sm font-medium'>
                      Email
                    </label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='Enter your email'
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='phone' className='text-sm font-medium'>
                      Phone
                    </label>
                    <Input
                      id='phone'
                      type='tel'
                      placeholder='Enter your phone number'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='subject' className='text-sm font-medium'>
                      Subject
                    </label>
                    <Input id='subject' placeholder='Enter subject' required />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='message' className='text-sm font-medium'>
                      Message
                    </label>
                    <Textarea
                      id='message'
                      placeholder='Enter your message'
                      className='min-h-[120px]'
                      required
                    />
                  </div>
                  <Button type='submit' className='w-full sm:w-auto'>
                    Send Message
                  </Button>
                </form>
              </div>
              <div className='flex flex-col'>
                <div className='aspect-[4/3] w-full bg-muted rounded-lg overflow-hidden mb-6'>
                  <Image
                    src='/images/contact-map.jpg'
                    alt='Office location map'
                    width={800}
                    height={600}
                    className='object-cover h-full w-full'
                  />
                </div>
                <div className='bg-background rounded-lg p-6 border'>
                  <h3 className='text-xl font-bold mb-4'>Office Hours</h3>
                  <div className='space-y-3'>
                    <div className='flex justify-between'>
                      <div className='flex items-center'>
                        <Clock className='h-4 w-4 mr-2 text-primary' />
                        <span>Monday - Friday</span>
                      </div>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className='flex justify-between'>
                      <div className='flex items-center'>
                        <Clock className='h-4 w-4 mr-2 text-primary' />
                        <span>Saturday</span>
                      </div>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className='flex justify-between'>
                      <div className='flex items-center'>
                        <Clock className='h-4 w-4 mr-2 text-primary' />
                        <span>Sunday</span>
                      </div>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-12 md:py-16 lg:py-20'>
          <div className='container'>
            <div className='text-center max-w-3xl mx-auto mb-12'>
              <h2 className='text-3xl font-bold tracking-tight'>
                Frequently Asked Questions
              </h2>
              <p className='mt-4 text-muted-foreground md:text-lg'>
                Find answers to common questions about our services and
                processes.
              </p>
            </div>
            <div className='grid gap-6 md:grid-cols-2 lg:gap-12'>
              <div className='space-y-4'>
                <div>
                  <h3 className='text-xl font-bold mb-2'>
                    How do I schedule a property viewing?
                  </h3>
                  <p className='text-muted-foreground'>
                    You can schedule a property viewing by contacting us
                    directly through our website, calling our office, or
                    reaching out to the listing agent for the specific property
                    you're interested in.
                  </p>
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-2'>
                    What documents do I need when buying a property?
                  </h3>
                  <p className='text-muted-foreground'>
                    When buying a property, you'll typically need proof of
                    identity, proof of income, bank statements, tax returns, and
                    information about your assets and liabilities. Our agents
                    can provide a detailed checklist based on your specific
                    situation.
                  </p>
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-2'>
                    How long does the buying process take?
                  </h3>
                  <p className='text-muted-foreground'>
                    The buying process typically takes 30-60 days from offer
                    acceptance to closing, but this can vary based on financing,
                    inspections, and other factors. Our team will guide you
                    through each step and keep you informed of the timeline.
                  </p>
                </div>
              </div>
              <div className='space-y-4'>
                <div>
                  <h3 className='text-xl font-bold mb-2'>
                    What services do you offer to sellers?
                  </h3>
                  <p className='text-muted-foreground'>
                    We offer comprehensive services for sellers including
                    property valuation, professional photography, marketing,
                    staging advice, showing coordination, negotiation support,
                    and guidance through the closing process.
                  </p>
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-2'>
                    Do you handle rental properties?
                  </h3>
                  <p className='text-muted-foreground'>
                    Yes, we handle both residential and commercial rental
                    properties. Our services include tenant screening, lease
                    preparation, property management, and maintenance
                    coordination.
                  </p>
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-2'>
                    What areas do you serve?
                  </h3>
                  <p className='text-muted-foreground'>
                    We primarily serve the greater New York metropolitan area,
                    including all five boroughs, Long Island, Westchester, and
                    parts of New Jersey and Connecticut. Contact us for specific
                    information about your area of interest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
