import Link from "next/link"

const propertyTypes = [
  {
    name: "Commercial",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 mb-3 text-orange-500"
      >
        <rect width="16" height="20" x="4" y="2" rx="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </svg>
    ),
    count: 6,
    href: "/properties?type=commercial",
  },
  {
    name: "Warehouse",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 mb-3 text-orange-500"
      >
        <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
        <path d="M6 18h12" />
        <path d="M6 14h12" />
        <rect width="12" height="12" x="6" y="10" />
      </svg>
    ),
    count: 6,
    href: "/properties?type=warehouse",
  },
  {
    name: "Villa",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 mb-3 text-orange-500"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    count: 6,
    href: "/properties?type=villa",
  },
  {
    name: "Apartment",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 mb-3 text-orange-500"
      >
        <path d="M2 22h20" />
        <path d="M5 8V2h14v6" />
        <path d="M17 22V8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v14" />
        <path d="M8 11h8" />
        <path d="M8 15h8" />
      </svg>
    ),
    count: 6,
    href: "/properties?type=apartment",
  },
  {
    name: "Homestay",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 mb-3 text-orange-500"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    count: 6,
    href: "/properties?type=homestay",
  },
]

export function PropertyTypes() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-orange-500 font-medium mb-2">Property By Requirement</p>
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Apartment <span className="text-orange-500">Types</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {propertyTypes.map((type) => (
            <Link
              href={type.href}
              key={type.name}
              className="flex flex-col items-center justify-center p-6 rounded-lg border border-gray-200 bg-white hover:border-orange-500 hover:shadow-lg transition-all"
            >
              {type.icon}
              <h3 className="text-gray-900 font-medium">{type.name}</h3>
              <p className="text-gray-500 text-sm">{type.count} Properties</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
