"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, BedDouble, Bath, SquareIcon as SquareFeet, Heart } from "lucide-react"
import { useState } from "react"

// Sample property data
const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    address: "123 Luxury Lane, Beverly Hills, CA",
    price: "$2,950,000",
    bedrooms: 5,
    bathrooms: 4.5,
    area: 4200,
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
    type: "House",
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    address: "456 Skyline Ave, New York, NY",
    price: "$1,850,000",
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
    type: "Condo",
  },
  {
    id: 3,
    title: "Waterfront Estate",
    address: "789 Coastal Hwy, Miami, FL",
    price: "$3,750,000",
    bedrooms: 6,
    bathrooms: 5,
    area: 5800,
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
    type: "House",
  },
  {
    id: 4,
    title: "Urban Loft Apartment",
    address: "101 Downtown St, Chicago, IL",
    price: "$875,000",
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
    type: "Apartment",
  },
]

export function FeaturedProperties() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {properties.map((property) => (
        <Card key={property.id} className="overflow-hidden group">
          <div className="relative">
            <Image
              src={property.image || "/placeholder.svg"}
              alt={property.title}
              width={500}
              height={300}
              className="object-cover h-[200px] w-full transition-transform group-hover:scale-105"
            />
            <Badge className="absolute top-2 left-2 bg-primary">{property.type}</Badge>
            <button
              onClick={() => toggleFavorite(property.id)}
              className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full"
            >
              <Heart
                className={`h-5 w-5 ${
                  favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"
                }`}
              />
            </button>
          </div>
          <CardContent className="p-4">
            <div className="space-y-2">
              <h3 className="font-bold text-lg line-clamp-1">{property.title}</h3>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                <span className="text-sm line-clamp-1">{property.address}</span>
              </div>
              <p className="text-xl font-bold text-primary">{property.price}</p>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="flex items-center">
                <BedDouble className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-sm">{property.bedrooms} Beds</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-sm">{property.bathrooms} Baths</span>
              </div>
              <div className="flex items-center">
                <SquareFeet className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-sm">{property.area} sqft</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button asChild className="w-full">
              <Link href={`/properties/${property.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
