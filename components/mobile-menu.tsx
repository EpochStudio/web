"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left flex items-center gap-2">
            <Image
              src="https://i.imgur.com/xyTgKVy.png"
              alt="Galaxies App"
              width={24}
              height={24}
              className="rounded-full"
              unoptimized
            />
            Galaxies App
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          <Link
            href="/#features"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/#premium"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Premium
          </Link>
          <Link
            href="/#about"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/commands"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Commands
          </Link>
          <Link
            href="/faq"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/team"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Team
          </Link>
          <Link
            href="/terms"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Privacy
          </Link>
          <Button className="mt-4" asChild>
            <Link
              href="https://discord.com/oauth2/authorize?client_id=814441758037377045&permissions=8589934591&scope=bot%20applications.commands"
              onClick={() => setOpen(false)}
            >
              Invite App
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
