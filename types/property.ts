export interface PropertyType {
  id: number
  title: string
  address: string
  price: string
  bedrooms: number
  bathrooms: number
  area: number
  image: string
  featured?: boolean
  type: string
  description?: string
  yearBuilt?: number
  propertyType?: string
  lotSize?: string
  garage?: string
  features?: string[]
  images?: string[]
  agent?: {
    name: string
    phone: string
    email: string
    image: string
  }
}
