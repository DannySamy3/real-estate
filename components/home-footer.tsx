import Link from "next/link";

const HomeFooter: React.FC = () => {
  return (
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
              © {new Date().getFullYear()} SKYLINE REALTY. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
