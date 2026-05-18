"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Home, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  {
    href: "#",
    label: "Services",
    icon: null,
    dropdown: [
      { href: "/services", label: "All Services" },
      { href: "/services#audit", label: "Audit & Assurance" },
      { href: "/services#tax", label: "Tax Consulting" },
      { href: "/services#financial", label: "Financial Advisory" },
      { href: "/services#business", label: "Business Advisory" },
    ],
  },
  { href: "/about", label: "About", icon: null },
  { href: "/contact", label: "Contact", icon: null },
  { href: "/privacy", label: "Privacy", icon: null },
  { href: "/terms", label: "Terms", icon: null },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Close dropdown when clicking outside on desktop
  useEffect(() => {
    const handleClickOutside = () => setIsServicesOpen(false);
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b" style={{ backgroundColor: '#0F172A' }}>
      <div className="container flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32">
            <Image
              src="/logo.png"
              alt="HVB Solutions"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 128px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#D4AF37]"
                    style={{ color: '#F8FAFC' }}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-navy-50 hover:text-navy-800 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#D4AF37]"
                  style={{ color: '#F8FAFC' }}
                >
                  {link.icon && <link.icon className="h-4 w-4" />}
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Phone and CTA - Desktop */}
        <div className="hidden md:flex items-center gap-3 sm:gap-4">
          <a href="tel:+442071234567" className="flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors hover:text-[#D4AF37]" style={{ color: '#F8FAFC' }}>
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">+44 (0)20 7123 4567</span>
            <span className="sm:hidden">+44 7123 4567</span>
          </a>
          <Link href="/contact">
            <Button className="hover:opacity-90 text-xs sm:text-sm" style={{ backgroundColor: '#D4AF37', color: '#0F172A' }}>
              Free Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="md:hidden p-2 hover:bg-white/10" style={{ color: '#F8FAFC' }} />}
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px] max-w-[85vw]">
            <SheetHeader>
              <SheetTitle className="flex items-center text-navy-800 text-base sm:text-lg">
                <div className="relative h-20 w-20">
                  <Image
                    src="/logo.png"
                    alt="HVB Solutions"
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-4 sm:mt-8 flex flex-col gap-2 sm:gap-3">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="w-full flex items-center justify-between rounded-lg p-3 text-base sm:text-lg font-medium text-gray-700 hover:bg-navy-50 hover:text-navy-800 transition-colors"
                      >
                        {link.label}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {isMobileServicesOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {link.dropdown.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => {
                                setIsMobileServicesOpen(false);
                                setIsOpen(false);
                              }}
                              className="block px-3 py-2 text-sm text-gray-700 hover:text-navy-800 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 rounded-lg p-3 text-base sm:text-lg font-medium text-gray-700 hover:bg-navy-50 hover:text-navy-800 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="border-t pt-3 sm:pt-4 mt-3 sm:mt-4">
                <a href="tel:+442071234567" className="flex items-center gap-3 rounded-lg p-3 text-gray-700 hover:text-navy-800 transition-colors">
                  <Phone className="h-5 w-5" />
                  <span className="text-sm">+44 (0)20 7123 4567</span>
                </a>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="mt-3 sm:mt-4 w-full hover:opacity-90 py-5 sm:py-6 text-sm sm:text-base" style={{ backgroundColor: '#D4AF37', color: '#0F172A' }}>
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}