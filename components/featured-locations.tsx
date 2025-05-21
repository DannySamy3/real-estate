import Image from "next/image"
import Link from "next/link"

interface LocationProps {
  name: string
  count: number
  image: string
  href: string
}

const locations: LocationProps[] = [
  {
    name: "California",
    count: 7,
    image: "/placeholder.svg?height=400&width=600",
    href: "/properties?location=california",
  },
  {
    name: "New York",
    count: 5,
    image: "/placeholder.svg?height=400&width=600",
    href: "/properties?location=new-york",
  },
  {
    name: "Miami",
    count: 3,
    image: "/placeholder.svg?height=400&width=600",
    href: "/properties?location=miami",
  },
  {
    name: "Chicago",
    count: 4,
    image: "/placeholder.svg?height=400&width=600",
    href: "/properties?location=chicago",
  },
]

export function FeaturedLocations() {
  return (
    <div className="py-16 bg-navy-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Our Top Location For You Property</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((location) => (
            <Link href={location.href} key={location.name} className="group relative overflow-hidden rounded-lg">
              <Image
                src={location.image || "/placeholder.svg"}
                alt={location.name}
                width={300}
                height={200}
                className="w-full h-60 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-xl">{location.name}</h3>
                <p className="text-gray-300 text-sm">{location.count} Properties With Commercial</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
