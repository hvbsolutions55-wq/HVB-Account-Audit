import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { BrandLogo } from "@/components/brand-logo";
import { services, getServiceHref } from "@/data/services";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0f172a] text-white">
      <div className="site-shell py-12 sm:py-14">
        <div className="site-shell-inner">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
            <div className="max-w-md">
              <Link href="/" className="mb-4 inline-flex">
                <BrandLogo variant="full" />
              </Link>
              <p className="mt-3 text-sm leading-7 text-white/72 sm:text-[15px]">
                Professional fractional CFO, accounting and audit support services
                tailored to your business needs.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={CONTACT_PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/85 transition-colors hover:border-[#d4af37]/60 hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {CONTACT_PHONE}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/85 transition-colors hover:border-[#d4af37]/60 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#d4af37]">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={getServiceHref(service.slug)}
                      className="text-sm text-white/72 transition-colors hover:text-white"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#d4af37]">
                Quick Links
              </h3>
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
                  <Link href="/how-it-works" className="text-sm text-white/72 transition-colors hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-white/72 transition-colors hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-white/72 transition-colors hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-white/72 transition-colors hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#d4af37]">
                Reach Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-white/72">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a href={CONTACT_PHONE_HREF} className="transition-colors hover:text-white">
                    {CONTACT_PHONE}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-white/72">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white">
                    {CONTACT_EMAIL}
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
