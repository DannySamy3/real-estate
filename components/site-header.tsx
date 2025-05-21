"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              SKYLINE REALTY
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-6",
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:content-[''] after:opacity-0 hover:after:opacity-100",
              )}
            >
              Home
            </Link>
            <Link
              href="/properties"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-6",
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:content-[''] after:opacity-0 hover:after:opacity-100",
              )}
            >
              Buy
            </Link>
            <Link
              href="/sell"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-6",
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:content-[''] after:opacity-0 hover:after:opacity-100",
              )}
            >
              Sell
            </Link>
            <Link
              href="/news"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-6",
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:content-[''] after:opacity-0 hover:after:opacity-100",
              )}
            >
              News
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-6",
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:content-[''] after:opacity-0 hover:after:opacity-100",
              )}
            >
              About us
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-6",
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:content-[''] after:opacity-0 hover:after:opacity-100",
              )}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-black font-medium" asChild>
              <Link href="/properties">Find a home</Link>
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-white/10">
            <Link href="/" className="block py-2 text-sm">
              Home
            </Link>
            <Link href="/properties" className="block py-2 text-sm">
              Buy
            </Link>
            <Link href="/sell" className="block py-2 text-sm">
              Sell
            </Link>
            <Link href="/news" className="block py-2 text-sm">
              News
            </Link>
            <Link href="/about" className="block py-2 text-sm">
              About us
            </Link>
            <Link href="/contact" className="block py-2 text-sm">
              Contact
            </Link>
            <Button className="w-full bg-primary hover:bg-primary/90 text-black font-medium" asChild>
              <Link href="/properties">Find a home</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
