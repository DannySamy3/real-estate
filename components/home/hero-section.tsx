import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PropertySearch } from "@/components/property/property-search"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Luxury home exterior"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>
      <div className="container relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl space-y-4 text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Find Your Dream Home Today</h1>
          <p className="text-lg md:text-xl">
            Discover exceptional properties in prime locations with our expert real estate services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto">
              Browse Properties
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm">
              Contact an Agent
            </Button>
          </div>
        </div>
      </div>
      <div className="container relative z-10 -mt-8 md:-mt-16">
        <PropertySearch />
      </div>
    </section>
  )
}
