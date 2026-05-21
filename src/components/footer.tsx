import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { BrandLogo } from "@/components/brand-logo";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0f172a] text-white">
      <div className="site-shell py-12 sm:py-14">
        <div className="site-shell-inner">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          {/* Company Info */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <BrandLogo className="h-11 w-auto object-contain sm:h-14" />
            </Link>
            <p className="text-sm leading-7 text-white/72 sm:text-[15px]">
              Global Professional Accounting, Finance & Audit Services. 5+ years of excellence in financial solutions.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="tel:+442071234567"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/85 transition-colors hover:border-[#d4af37]/60 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                +44 (0)20 7123 4567
              </a>
              <a
                href="mailto:info@hvb-solutions.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/85 transition-colors hover:border-[#d4af37]/60 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#d4af37]">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#audit" className="text-sm text-white/72 transition-colors hover:text-white">
                  Audit & Assurance
                </Link>
              </li>
              <li>
                <Link href="/services#tax" className="text-sm text-white/72 transition-colors hover:text-white">
                  Tax Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#financial" className="text-sm text-white/72 transition-colors hover:text-white">
                  Financial Advisory
                </Link>
              </li>
              <li>
                <Link href="/services#business" className="text-sm text-white/72 transition-colors hover:text-white">
                  Business Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#d4af37]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-white/72 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/72 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/72 transition-colors hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/72 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#d4af37]">Reach Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/72">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>123 Finance Street, London, UK</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/72">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+442071234567" className="transition-colors hover:text-white">
                  +44 (0)20 7123 4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/72">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@hvb-solutions.com" className="transition-colors hover:text-white">
                  info@hvb-solutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-start justify-between gap-4 text-sm text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} HVB Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
