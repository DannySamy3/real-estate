import Link from "next/link"
import { Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/layout/mobile-nav"

interface NavItem {
  href: string
  label: string
  isActive?: boolean
}

interface SiteHeaderProps {
  activePath?: string
}

export function SiteHeader({ activePath = "/" }: SiteHeaderProps) {
  const navItems: NavItem[] = [
    { href: "/", label: "Home", isActive: activePath === "/" },
    { href: "/properties", label: "Properties", isActive: activePath === "/properties" },
    { href: "/about", label: "About", isActive: activePath === "/about" },
    { href: "/contact", label: "Contact", isActive: activePath === "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">GreenBlue Estates</span>
        </div>

        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                item.isActive ? "text-primary" : "hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>

        <MobileNav items={navItems} />
      </div>
    </header>
  )
}
