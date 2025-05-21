import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, CheckCircle2, Building2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <SiteHeader />

      <main className='flex-1 pt-20'>
        {/* Hero Section */}
        <section className='py-24 bg-black relative'>
          <div className='absolute inset-0 z-0 opacity-20'>
            <Image
              src='/images/about-hero.jpg'
              alt='Architectural background'
              fill
              className='object-cover'
            />
          </div>

          <div className='container mx-auto px-4 relative z-10'>
            <div className='text-center max-w-3xl mx-auto'>
              <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-6'>
                About SKYLINE REALTY
              </h1>
              <p className='text-xl text-white/70'>
                Your trusted partner in finding the perfect luxury property
                since 2003.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className='py-24 bg-black'>
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
              <div>
                <h2 className='text-3xl font-bold tracking-tight mb-8'>
                  Our Story
                </h2>
                <p className='text-white/70 mb-6'>
                  SKYLINE REALTY group has been operating for more than 20 years
                  in the real estate world and has completed thousands of
                  projects from around and received various awards, this can be
                  a benchmark for teammates in becoming the pride of the
                  community in the real estate world.
                </p>
                <p className='text-white/70 mb-6'>
                  Our founder, Michael Johnson, recognized that the real estate
                  industry often lacked transparency and personalized service.
                  He set out to create a company that would prioritize client
                  relationships, market expertise, and ethical practices above
                  all else.
                </p>
                <p className='text-white/70 mb-8'>
                  Even though it has been established for 2 decades, it doesn't
                  make us big because we exist because of people's trust in
                  their dream house that was handed over to us.
                </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Button asChild>
                    <Link href='/properties'>Browse Properties</Link>
                  </Button>
                  <Button variant='outline' asChild>
                    <Link href='/contact'>Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className='relative'>
                <div className='aspect-[4/3] rounded-lg overflow-hidden'>
                  <Image
                    src='/images/about-team.jpg'
                    alt='SKYLINE REALTY team'
                    width={800}
                    height={600}
                    className='object-cover'
                  />
                </div>
                <div className='absolute -bottom-6 -left-6 bg-black/90 p-4 rounded-lg shadow-xl border border-white/10'>
                  <div className='flex items-center gap-4'>
                    <div className='bg-primary/10 p-3 rounded-full'>
                      <Award className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <p className='font-bold'>Trusted by</p>
                      <p className='text-2xl font-bold'>10,000+ Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className='py-24 bg-black/90'>
          <div className='container mx-auto px-4'>
            <div className='text-center max-w-3xl mx-auto mb-16'>
              <h2 className='text-3xl font-bold tracking-tight mb-6'>
                Our Values
              </h2>
              <p className='text-white/70'>
                These core principles guide everything we do at SKYLINE REALTY.
              </p>
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
              {[
                {
                  icon: Users,
                  title: "Client-Centered",
                  description:
                    "We put our clients' needs first, providing personalized service and guidance throughout the entire process.",
                },
                {
                  icon: CheckCircle2,
                  title: "Integrity",
                  description:
                    "We operate with honesty and transparency in all our dealings, building trust with our clients and partners.",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description:
                    "We strive for excellence in every aspect of our business, from customer service to market knowledge.",
                },
                {
                  icon: Clock,
                  title: "Responsiveness",
                  description:
                    "We understand that timing is crucial in real estate, so we prioritize quick and effective communication.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className='bg-black p-6 rounded-lg border border-white/10 hover:border-primary/50 transition-colors'
                >
                  <div className='rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4'>
                    <value.icon className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold mb-3'>{value.title}</h3>
                  <p className='text-white/70'>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className='py-24 bg-black'>
          <div className='container mx-auto px-4'>
            <div className='text-center max-w-3xl mx-auto mb-16'>
              <h2 className='text-3xl font-bold tracking-tight mb-6'>
                Our Team
              </h2>
              <p className='text-white/70'>
                Meet the experienced professionals dedicated to helping you
                achieve your real estate goals.
              </p>
            </div>
            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
              {[
                {
                  name: "Asha Mwinyi",
                  title: "Founder & CEO",
                  image: "/images/team-michael.jpg",
                },
                {
                  name: "Juma Mwakalinga",
                  title: "Senior Real Estate Agent",
                  image: "/images/team-jessica.jpg",
                },
                {
                  name: "Neema Mushi",
                  title: "Real Estate Consultant",
                  image: "/images/team-robert.jpg",
                },
                {
                  name: "Baraka Mtemi",
                  title: "Property Specialist",
                  image: "/images/team-maria.jpg",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className='group relative overflow-hidden rounded-lg'
                >
                  <div className='aspect-square'>
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className='object-cover w-full h-full transition-transform group-hover:scale-110 duration-500'
                    />
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent'>
                    <h3 className='font-bold text-lg'>{member.name}</h3>
                    <p className='text-sm text-white/70'>{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='text-center mt-12'>
              <Button variant='outline' asChild>
                <Link href='/contact'>Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='py-24 bg-black/90'>
          <div className='container mx-auto px-4'>
            <div className='grid gap-12 lg:grid-cols-2 items-center'>
              <div className='order-2 lg:order-1'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-4'>
                    <div className='bg-black/60 rounded-lg p-6 text-center border border-white/10'>
                      <p className='text-4xl font-bold text-primary'>20+</p>
                      <p className='text-white/70'>Years of Experience</p>
                    </div>
                    <div className='bg-black/60 rounded-lg p-6 text-center border border-white/10'>
                      <p className='text-4xl font-bold text-primary'>1000+</p>
                      <p className='text-white/70'>Properties Sold</p>
                    </div>
                  </div>
                  <div className='space-y-4 mt-6'>
                    <div className='bg-black/60 rounded-lg p-6 text-center border border-white/10'>
                      <p className='text-4xl font-bold text-primary'>50+</p>
                      <p className='text-white/70'>Expert Agents</p>
                    </div>
                    <div className='bg-black/60 rounded-lg p-6 text-center border border-white/10'>
                      <p className='text-4xl font-bold text-primary'>98%</p>
                      <p className='text-white/70'>Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='order-1 lg:order-2'>
                <h2 className='text-3xl font-bold tracking-tight mb-8'>
                  Why Choose SKYLINE REALTY?
                </h2>
                <div className='space-y-6'>
                  <div className='flex gap-4'>
                    <div className='bg-primary/10 p-1 rounded-full h-6 w-6 flex items-center justify-center mt-1'>
                      <CheckCircle2 className='h-4 w-4 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-bold mb-2'>
                        Extensive Market Knowledge
                      </h3>
                      <p className='text-white/70'>
                        Our agents have in-depth knowledge of local markets,
                        trends, and property values to help you make informed
                        decisions.
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div className='bg-primary/10 p-1 rounded-full h-6 w-6 flex items-center justify-center mt-1'>
                      <CheckCircle2 className='h-4 w-4 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-bold mb-2'>Personalized Service</h3>
                      <p className='text-white/70'>
                        We take the time to understand your unique needs and
                        preferences to find the perfect property match.
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div className='bg-primary/10 p-1 rounded-full h-6 w-6 flex items-center justify-center mt-1'>
                      <CheckCircle2 className='h-4 w-4 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-bold mb-2'>Negotiation Expertise</h3>
                      <p className='text-white/70'>
                        Our skilled negotiators work tirelessly to secure the
                        best possible terms and prices for our clients.
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div className='bg-primary/10 p-1 rounded-full h-6 w-6 flex items-center justify-center mt-1'>
                      <CheckCircle2 className='h-4 w-4 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-bold mb-2'>Comprehensive Support</h3>
                      <p className='text-white/70'>
                        From initial search to closing, we provide guidance and
                        support throughout the entire real estate process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-24 bg-black relative'>
          <div className='absolute inset-0 z-0 opacity-30'>
            <Image
              src='/images/gallery-arizona.jpg'
              alt='Gallery Arizona background'
              fill
              className='object-cover'
            />
          </div>
          <div className='container mx-auto px-4 relative z-10 text-center'>
            <div className='max-w-3xl mx-auto'>
              <h2 className='text-3xl font-bold tracking-tight mb-6'>
                Ready to Find Your Dream Property?
              </h2>
              <p className='text-white/80 mb-8 text-lg'>
                Contact our team today to start your luxury real estate journey
                with SKYLINE REALTY.
              </p>
              <div className='flex flex-col sm:flex-row justify-center gap-4'>
                <Button
                  className='bg-primary text-black hover:bg-primary/90'
                  size='lg'
                  asChild
                >
                  <Link href='/properties'>Browse Properties</Link>
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
              <Link href='#' className='text-sm text-white/70 hover:text-white'>
                Buy
              </Link>
              <Link href='#' className='text-sm text-white/70 hover:text-white'>
                Sell
              </Link>
              <Link href='#' className='text-sm text-white/70 hover:text-white'>
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
