"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchFormProps {
  className?: string
  placeholder?: string
  dark?: boolean
}

export function SearchForm({
  className = "",
  placeholder = "Search for a home, area or location",
  dark = false,
}: SearchFormProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/properties?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center w-full overflow-hidden rounded-md ${dark ? "bg-black border border-white/20" : "bg-white"} ${className}`}
    >
      <div className="flex-1 relative">
        <Search
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${dark ? "text-white/50" : "text-gray-400"}`}
        />
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className={`w-full pl-10 pr-3 py-3 border-0 ${dark ? "bg-black text-white placeholder:text-white/50" : "bg-white text-black"} focus-visible:ring-0 focus-visible:ring-offset-0`}
        />
      </div>
      <Button type="submit" className={dark ? "rounded-none" : ""}>
        Find a home
      </Button>
    </form>
  )
}
