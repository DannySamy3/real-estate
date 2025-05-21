import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, BedDouble, Bath, SquareIcon } from "lucide-react"
import type { PropertyType } from "@/types/property"

interface PropertyCardProps {
  property: PropertyType
  featured?: boolean
}

export function PropertyCard({ property, featured = false }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          width={500}
          height={300}
          className="object-cover h-[200px] w-full transition-transform group-hover:scale-105"
        />
        <Badge className="absolute top-2 left-2 bg-primary">{property.type}</Badge>
        {featured && <Badge className="absolute top-2 right-2 bg-secondary">Featured</Badge>}
      </div>
      <CardContent className="p-4 flex-grow">
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
            <SquareIcon className="h-4 w-4 mr-1 text-muted-foreground" />
            <span className="text-sm">{property.area} sqft</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button asChild className="w-full">
          <Link href={`/properties/${property.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
