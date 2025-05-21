import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";

export default function SellPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <SiteHeader />

      <main className='flex-1 pt-20'>
        {/* Hero Section */}
        <section className='py-24 bg-black relative'>
          <div className='absolute inset-0 z-0 opacity-20'>
            <Image
              src='/images/sell-hero.jpg'
              alt='Luxury property'
              fill
              className='object-cover'
            />
          </div>

          <div className='container mx-auto px-4 relative z-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-6'>
                  Sell Your Property With Confidence
                </h1>
                <p className='text-xl text-white/70 mb-8'>
                  Partner with SKYLINE REALTY for a seamless selling experience
                  and maximize your property's value.
                </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Button asChild>
                    <a href='#sell-form'>List Your Property</a>
                  </Button>
                  <Button variant='outline' asChild>
                    <Link href='/contact'>Contact an Agent</Link>
                  </Button>
                </div>
              </div>
              <div
                className='bg-black/80 border border-white/10 p-8 rounded-lg shadow-xl'
                id='sell-form'
              >
                <h2 className='text-2xl font-bold mb-6'>
                  Get a Free Property Valuation
                </h2>
                <form className='space-y-4'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <label
                        htmlFor='first-name'
                        className='block text-sm mb-2'
                      >
                        First Name
                      </label>
                      <Input
                        id='first-name'
                        placeholder='Enter your first name'
                      />
                    </div>
                    <div>
                      <label htmlFor='last-name' className='block text-sm mb-2'>
                        Last Name
                      </label>
                      <Input
                        id='last-name'
                        placeholder='Enter your last name'
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor='email' className='block text-sm mb-2'>
                      Email
                    </label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='Enter your email'
                    />
                  </div>
                  <div>
                    <label htmlFor='phone' className='block text-sm mb-2'>
                      Phone
                    </label>
                    <Input
                      id='phone'
                      type='tel'
                      placeholder='Enter your phone number'
                    />
                  </div>
                  <div>
                    <label htmlFor='address' className='block text-sm mb-2'>
                      Property Address
                    </label>
                    <Input
                      id='address'
                      placeholder='Enter your property address'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='property-type'
                      className='block text-sm mb-2'
                    >
                      Property Type
                    </label>
                    <select
                      id='property-type'
                      className='flex h-10 w-full rounded-md border border-white/20 bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    >
                      <option value=''>Select property type</option>
                      <option value='house'>House</option>
                      <option value='apartment'>Apartment</option>
                      <option value='condo'>Condo</option>
                      <option value='land'>Land</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor='message' className='block text-sm mb-2'>
                      Additional Information
                    </label>
                    <Textarea
                      id='message'
                      placeholder='Tell us more about your property'
                      className='min-h-[100px] bg-black border-white/20'
                    />
                  </div>
                  <Button type='submit' className='w-full'>
                    Get Free Valuation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Why Sell With Us Section */}
        <section className='py-24 bg-black'>
          <div className='container mx-auto px-4'>
            <div className='text-center max-w-3xl mx-auto mb-16'>
              <h2 className='text-3xl font-bold tracking-tight mb-6'>
                Why Sell With SKYLINE REALTY?
              </h2>
              <p className='text-white/70'>
                We combine industry expertise, innovative marketing strategies,
                and personalized service to sell your property faster and at the
                best possible price.
              </p>
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {[
                {
                  title: "Maximum Exposure",
                  description:
                    "We leverage cutting-edge digital marketing, professional photography, and our extensive network to showcase your property to qualified buyers.",
                },
                {
                  title: "Expert Pricing Strategy",
                  description:
                    "Our market analysis ensures your property is priced competitively to attract serious buyers while maximizing your return.",
                },
                {
                  title: "Negotiation Excellence",
                  description:
                    "Our skilled agents negotiate on your behalf to secure the best possible terms and price for your property.",
                },
                {
                  title: "Streamlined Process",
                  description:
                    "We handle all the details, from listing to closing, making the selling process smooth and stress-free.",
                },
                {
                  title: "Global Network",
                  description:
                    "Access to our international network of buyers and investors looking for premium properties.",
                },
                {
                  title: "Dedicated Support",
                  description:
                    "A dedicated agent will guide you through every step of the selling process with personalized attention.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className='bg-black p-6 rounded-lg border border-white/10 hover:border-primary/50 transition-colors'
                >
                  <div className='rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4'>
                    <CheckCircle2 className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold mb-3'>{benefit.title}</h3>
                  <p className='text-white/70'>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selling Process Section */}
        <section className='py-24 bg-black/90'>
          <div className='container mx-auto px-4'>
            <div className='text-center max-w-3xl mx-auto mb-16'>
              <h2 className='text-3xl font-bold tracking-tight mb-6'>
                Our Selling Process
              </h2>
              <p className='text-white/70'>
                We've streamlined the selling process to make it as efficient
                and stress-free as possible.
              </p>
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
              {[
                {
                  step: "1",
                  title: "Consultation & Valuation",
                  description:
                    "We'll meet to discuss your goals and provide a comprehensive market analysis and valuation of your property.",
                },
                {
                  step: "2",
                  title: "Preparation & Marketing",
                  description:
                    "We'll prepare your property for sale with professional photography and create a customized marketing strategy.",
                },
                {
                  step: "3",
                  title: "Showings & Offers",
                  description:
                    "We'll coordinate showings with qualified buyers and help you evaluate and negotiate offers.",
                },
                {
                  step: "4",
                  title: "Closing & Beyond",
                  description:
                    "We'll guide you through the closing process and ensure a smooth transition to the new owners.",
                },
              ].map((process, index) => (
                <div key={index} className='relative'>
                  <div className='bg-black p-6 rounded-lg border border-white/10 h-full'>
                    <div className='absolute -top-5 -left-5 bg-primary text-black w-10 h-10 rounded-full flex items-center justify-center font-bold'>
                      {process.step}
                    </div>
                    <h3 className='text-xl font-bold mb-3 mt-4'>
                      {process.title}
                    </h3>
                    <p className='text-white/70'>{process.description}</p>
                  </div>
                  {index < 3 && (
                    <div className='hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10'>
                      <ArrowRight className='h-8 w-8 text-primary' />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='py-24 bg-black'>
          <div className='container mx-auto px-4'>
            <div className='text-center max-w-3xl mx-auto mb-16'>
              <h2 className='text-3xl font-bold tracking-tight mb-6'>
                What Our Sellers Say
              </h2>
              <p className='text-white/70'>
                Don't just take our word for it. Hear from clients who've
                successfully sold their properties with us.
              </p>
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {[
                {
                  quote:
                    "SKYLINE REALTY sold my property for 15% above asking price in just two weeks. Their marketing strategy and negotiation skills are unmatched.",
                  name: "Amina Hassan",
                  location: "Masaki, Dar es Salaam",
                  image: "/images/sell-testimonial-1.jpg",
                },
                {
                  quote:
                    "The team at SKYLINE REALTY made selling my home stress-free. Their attention to detail and constant communication kept me informed every step of the way.",
                  name: "Rajabu Said",
                  location: "Oysterbay, Dar es Salaam",
                  image: "/images/sell-testimonial-2.jpg",
                },
                {
                  quote:
                    "I was impressed by the professional photography and virtual tour they created for my property. It attracted serious buyers immediately.",
                  name: "Sophia Juma",
                  location: "Arusha",
                  image: "/images/sell-testimonial-3.jpg",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className='bg-black p-6 rounded-lg border border-white/10'
                >
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='relative w-12 h-12 rounded-full overflow-hidden'>
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div>
                      <h4 className='font-bold'>{testimonial.name}</h4>
                      <p className='text-sm text-white/70'>
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <p className='text-white/80 italic'>"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-24 bg-black relative'>
          <div className='absolute inset-0 z-0 opacity-30'>
            <Image
              src='/images/sell-process.jpg'
              alt='Selling process background'
              fill
              className='object-cover'
            />
          </div>
          <div className='container mx-auto px-4 relative z-10'>
            <div className='max-w-3xl mx-auto text-center'>
              <h2 className='text-3xl font-bold tracking-tight mb-6'>
                Ready to Sell Your Property?
              </h2>
              <p className='text-white/80 mb-8 text-lg'>
                Contact our team today for a free property valuation and
                consultation.
              </p>
              <div className='flex flex-col sm:flex-row justify-center gap-4'>
                <Button
                  className='bg-primary text-black hover:bg-primary/90'
                  size='lg'
                  asChild
                >
                  <a href='#sell-form'>List Your Property</a>
                </Button>
                <Button variant='outline' size='lg' asChild>
                  <Link href='/contact'>Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='py-12 bg-black border-t border-white/10'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center gap-2 mb-4 md:mb-0'>
              <Building2 className='h-6 w-6 text-primary' />
              <span className='text-2xl font-bold tracking-tighter'>
                SKYLINE REALTY
              </span>
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
