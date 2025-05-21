import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming Button is a reusable component
import { Play } from "lucide-react"; // Assuming Play icon is needed

export default function HomeAboutSection() {
  return (
    <section className='py-24 bg-black'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>Who are we?</h2>
            <p className='text-white/70 mb-6'>
              SKYLINE REALTY group has been operating for more than 20 years in
              the real estate world and has completed thousands of projects from
              around and received various awards, this can be a benchmark for
              teammates in becoming the pride of the community in the real
              estate world.
            </p>
            <p className='text-white/70 mb-8'>
              Even though it has been established for 2 decades, it doesn't make
              us big because we exist because of people's trust in their dream
              house that was handed over to us.
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
              loading='lazy'
              className='rounded-lg object-cover w-full h-auto shadow-xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
