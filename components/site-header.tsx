import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-6 sm:px-8 md:px-10 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://i.imgur.com/xyTgKVy.png"
              alt="Galaxies App"
              width={28}
              height={28}
              className="rounded-full"
              unoptimized
            />
            <span className="text-xl font-bold">Galaxies</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/#premium" className="text-sm font-medium hover:text-primary transition-colors">
            Premium
          </Link>
          <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/commands" className="text-sm font-medium hover:text-primary transition-colors">
            Commands
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </Link>
          <ThemeToggle />
          <Button asChild>
            <Link href="https://discord.com/oauth2/authorize?client_id=814441758037377045&permissions=8589934591&scope=bot%20applications.commands">
              Invite App
            </Link>
          </Button>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
