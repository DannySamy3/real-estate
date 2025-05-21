import type React from "react"
import { Facebook, Twitter, Instagram } from "lucide-react"

interface SocialLink {
  href: string
  icon: React.ReactNode
  label: string
}

export function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      href: "#",
      icon: <Facebook className="h-5 w-5" />,
      label: "Facebook",
    },
    {
      href: "#",
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
    },
    {
      href: "#",
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
    },
  ]

  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.href} className="text-muted-foreground hover:text-foreground" aria-label={link.label}>
          {link.icon}
        </a>
      ))}
    </div>
  )
}
