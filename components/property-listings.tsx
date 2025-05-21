"use client"

import { useState } from "react"
import { PropertyCard, type PropertyType } from "@/components/property-card"

const properties: PropertyType[] = [
  {
    id: "1",
    title: "Elevation Small Apartments",
    address: "7 Magnolia St. Orlando, FL",
    price: "299.00",
    image: "/placeholder.svg?height=300&width=400",
    rating: 5,
    reviews: 23,
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    type: "Apartment",
    agent: {
      name: "John Doe",
      image: "/placeholder.svg?height=50&width=50",
    },
  },
  {
    id: "2",
    title: "West Square Apartments",
    address: "8 Magnolia St. Orlando, FL",
    price: "349.00",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4,
    reviews: 12,
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    type: "Apartment",
    agent: {
      name: "Jane Smith",
      image: "/placeholder.svg?height=50&width=50",
    },
  },
  {
    id: "3",
    title: "Peninsula Apartments",
    address: "9 Magnolia St. Orlando, FL",
    price: "399.00",
    image: "/placeholder.svg?height=300&width=400",
    rating: 5,
    reviews: 17,
    bedrooms: 4,
    bathrooms: 3,
    area: 1500,
    type: "Apartment",
    agent: {
      name: "Robert Johnson",
      image: "/placeholder.svg?height=50&width=50",
    },
  },
]

export function PropertyListings() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <p className="text-gray-500 mb-1">Our Listing</p>
            <h2 className="text-2xl font-bold mb-6">
              Find Home Listing <br />
              in Your Area
            </h2>
          </div>

          <div className="flex space-x-2 mt-4 md:mt-0">
            <button
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                activeTab === "all" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Properties
            </button>
            <button
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                activeTab === "general" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("general")}
            >
              General
            </button>
            <button
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                activeTab === "villa" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("villa")}
            >
              Villa
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  )
}
