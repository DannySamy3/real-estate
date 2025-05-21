import Image from "next/image"
import { PropertySearch } from "@/components/property-search"

export function HeroSection() {
  return (
    <div className="relative h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Modern luxury home"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Let's Find Your
            <br />
            Dream House.
          </h1>

          {/* Video button */}
          <div className="absolute right-10 top-10 md:right-20 md:top-20 flex items-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-orange-500"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
              <div className="absolute -inset-4 border border-white/30 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <PropertySearch />
      </div>
    </div>
  )
}
