"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import { serviceNavItems } from "@/data/services";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/cta";
import { SITE_NAME } from "@/lib/site";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "#",
    label: "Services",
    dropdown: serviceNavItems,
  },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
      className="w-full border-b border-white/10 shadow-[0_10px_28px_rgba(15,23,42,0.18)] backdrop-blur"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="site-shell">
        <div className="site-shell-inner flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
          <Link
            href="/"
            aria-label={`${SITE_NAME} home`}
            className="flex min-w-0 shrink-0 items-center mt-2 sm:mt-2"
            
          >
            <BrandLogo variant="full" priority />
          </Link>

          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
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
                      <div className="absolute left-0 top-full z-50 mt-3 max-h-[70vh] w-72 overflow-y-auto rounded-2xl border border-[#e2e8f0] bg-white p-2 shadow-[0_22px_50px_rgba(15,23,42,0.16)]">
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
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex">
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
                <SheetTitle className="flex flex-col items-start gap-1">
                  <BrandLogo variant="nav" />
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
                          <div className="ml-4 mt-2 max-h-64 space-y-1 overflow-y-auto">
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
                  <Link href={PRIMARY_CTA_HREF} onClick={() => setIsOpen(false)}>
                    <Button
                      className="h-12 w-full rounded-xl text-sm font-semibold hover:opacity-90 sm:text-base"
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
