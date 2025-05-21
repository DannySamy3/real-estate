"use client"

import { useState } from "react"
import { PropertyCard } from "@/components/property/property-card"
import { FEATURED_PROPERTIES } from "@/data/properties"

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
      {FEATURED_PROPERTIES.map((property) => (
        <PropertyCard key={property.id} property={property} featured={property.featured} />
      ))}
    </div>
  )
}
