"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Phone, Home, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import {
  PRIMARY_CTA_HREF,
  PRIMARY_CTA_LABEL,
  SECONDARY_CTA_HREF,
} from "@/lib/cta";
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
  { href: "/blog", label: "Blog", icon: null },
  { href: "/contact", label: "Contact", icon: null },
  { href: "/privacy", label: "Privacy", icon: null },
  { href: "/terms", label: "Terms", icon: null },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Close dropdown when clicking outside on desktop
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigateToService = (href: string) => {
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    setIsOpen(false);

    const [targetPath, hash] = href.split("#");

    if (targetPath === "/services" && hash && pathname === "/services") {
      const target = document.getElementById(hash);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", href);
        return;
      }
    }

    router.push(href);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/10 shadow-[0_10px_28px_rgba(15,23,42,0.18)] backdrop-blur"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="site-shell">
        <div className="site-shell-inner flex h-16 items-center justify-between gap-6 sm:h-20">
          <Link href="/" className="flex h-full items-center">
            <BrandLogo className="block h-11 w-auto object-contain sm:h-14" priority />
          </Link>

          <nav className="hidden items-center gap-7 lg:gap-9 md:flex">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative"
                ref={link.dropdown ? servicesMenuRef : undefined}
              >
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-[#D4AF37]"
                      style={{ color: "#F8FAFC" }}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute left-0 top-full z-50 mt-3 w-60 rounded-2xl border border-[#e2e8f0] bg-white p-2 shadow-[0_22px_50px_rgba(15,23,42,0.16)]">
                        {link.dropdown.map((item, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => navigateToService(item.href)}
                            className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-navy-50 hover:text-navy-800"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-[15px] font-medium transition-colors hover:text-[#D4AF37]"
                    style={{ color: "#F8FAFC" }}
                  >
                    {link.icon && <link.icon className="h-4 w-4" />}
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={SECONDARY_CTA_HREF}
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#D4AF37] lg:text-[15px]"
              style={{ color: "#F8FAFC" }}
            >
              <Phone className="h-4 w-4" />
              <span>+44 (0)20 7123 4567</span>
            </a>
            <Link href={PRIMARY_CTA_HREF}>
              <Button
                className="h-11 rounded-xl px-5 text-sm font-semibold hover:opacity-90 lg:px-6 lg:text-[15px]"
                style={{ backgroundColor: "#D4AF37", color: "#0F172A" }}
              >
                {PRIMARY_CTA_LABEL}
              </Button>
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-2 hover:bg-white/10 md:hidden"
                  style={{ color: "#F8FAFC" }}
                />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] max-w-[85vw] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle className="flex items-center">
                  <BrandLogo className="h-12 w-auto object-contain sm:h-14" />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-2 sm:mt-8 sm:gap-3">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    {link.dropdown ? (
                      <>
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="flex w-full items-center justify-between rounded-lg p-3 text-base font-medium text-gray-700 transition-colors hover:bg-navy-50 hover:text-navy-800 sm:text-lg"
                        >
                          {link.label}
                          <ChevronDown className="h-4 w-4" />
                        </button>
                        {isMobileServicesOpen && (
                          <div className="ml-4 mt-2 space-y-1">
                            {link.dropdown.map((item, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => navigateToService(item.href)}
                                className="block w-full rounded-lg px-3 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-navy-50 hover:text-navy-800"
                              >
                                {item.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 rounded-lg p-3 text-base font-medium text-gray-700 transition-colors hover:bg-navy-50 hover:text-navy-800 sm:text-lg"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="mt-3 border-t pt-3 sm:mt-4 sm:pt-4">
                  <a
                    href={SECONDARY_CTA_HREF}
                    className="flex items-center gap-3 rounded-lg p-3 text-gray-700 transition-colors hover:text-navy-800"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="text-sm">+44 (0)20 7123 4567</span>
                  </a>
                  <Link href={PRIMARY_CTA_HREF} onClick={() => setIsOpen(false)}>
                    <Button
                      className="mt-3 h-12 w-full rounded-xl text-sm font-semibold hover:opacity-90 sm:mt-4 sm:text-base"
                      style={{ backgroundColor: "#D4AF37", color: "#0F172A" }}
                    >
                      {PRIMARY_CTA_LABEL}
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
