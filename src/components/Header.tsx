"use client"

import Link from "next/link"
import Image from "next/image";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetClose, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const navLinks = [
  {
    label: "Who We Are",
    isDropdown: true,
    href: "#",
    dropdownLinks: [
      { label: "About Us", href: "/about-us" },
      { label: "Strategy", href: "/strategy" },
      { label: "Our Team", href: "/our-team" },
    ],
  },
  { label: "Blog and Events", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background px-2 sm:px-8 py-4">
      <div className="flex h-14 items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo1.png"
            alt="R-Jolad Foundation logo"
            width={150}
            height={50}
            className="h-auto w-auto max-w-[110px] sm:max-w-[140px] md:max-w-[150px]"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-6 text-sm font-semibold text-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) =>
            link.isDropdown ? (
              <DropdownMenu 
                key={link.label}
                open={openDropdown === link.label}
                onOpenChange={(isOpen) => setOpenDropdown(isOpen ? link.label : null)}
              >
                <div 
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="flex items-center"
                >
                  <DropdownMenuTrigger asChild>
                    <Link href={link.href} className="flex items-center gap-1 font-semibold outline-none transition-colors hover:text-primary/80">
                      {link.label} <ChevronDown className="h-4 w-4" />
                    </Link>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.dropdownLinks?.map((dLink) => (
                      <DropdownMenuItem key={dLink.label} asChild>
                        <Link href={dLink.href} className="font-semibold cursor-pointer">{dLink.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </div>
              </DropdownMenu>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="font-semibold transition-colors hover:text-primary/80"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                 <div className="p-4">
                  <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-2">
                      <Image
                        src="/images/logo1.png"
                        alt="R-Jolad Foundation logo"
                        width={150}
                        height={50}
                        className="h-auto w-auto max-w-[110px] sm:max-w-[140px] md:max-w-[150px]"
                      />
                    </Link>
                  </SheetClose>
                </div>
                <nav className="grid gap-2 text-lg font-medium mt-2 p-4">
                  <Accordion type="single" collapsible className="w-full">
                    {navLinks.map((link) => (
                      <div key={link.label}>
                        {link.isDropdown ? (
                          <AccordionItem value={link.label} className="border-b-0">
                            <AccordionTrigger className="font-semibold hover:text-primary hover:no-underline py-3">
                              {link.label}
                            </AccordionTrigger>
                            <AccordionContent className="pb-0 pl-4">
                              <div className="grid gap-3">
                                {link.dropdownLinks?.map((dLink) => (
                                  <SheetClose asChild key={dLink.href}>
                                    <Link href={dLink.href} className="font-semibold text-foreground/80 hover:text-primary text-base">
                                      {dLink.label}
                                    </Link>
                                  </SheetClose>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ) : (
                          <SheetClose asChild>
                            <Link href={link.href} className="block font-semibold hover:text-primary py-3">
                              {link.label}
                            </Link>
                          </SheetClose>
                        )}
                      </div>
                    ))}
                  </Accordion>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
