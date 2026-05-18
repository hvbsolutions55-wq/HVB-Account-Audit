import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Share2, MessageCircle, Link as LinkIcon, Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="w-full border-t bg-navy-50">
      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12">
                <Image
                  src="/logo.png"
                  alt="HVB Solutions"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-lg text-navy-800">HVB</span>
                <span className="font-bold text-lg text-navy-600"> Solutions</span>
              </div>
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Global Professional Accounting, Finance & Audit Services. 5+ years of excellence in financial solutions.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-navy-800 transition-colors" aria-label="Share">
                <Share2 className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-navy-800 transition-colors" aria-label="Message">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-navy-800 transition-colors" aria-label="Web">
                <Globe className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-navy-800 transition-colors" aria-label="Link">
                <LinkIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-navy-900">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#audit" className="text-sm text-gray-600 hover:text-navy-800 transition-colors">
                  Audit & Assurance
                </Link>
              </li>
              <li>
                <Link href="/services#tax" className="text-sm text-gray-600 hover:text-navy-800 transition-colors">
                  Tax Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#financial" className="text-sm text-gray-600 hover:text-navy-800 transition-colors">
                  Financial Advisory
                </Link>
              </li>
              <li>
                <Link href="/services#business" className="text-sm text-gray-600 hover:text-navy-800 transition-colors">
                  Business Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-navy-900">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-navy-800 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-navy-800 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-navy-800 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact#faq" className="text-sm text-gray-600 hover:text-navy-800 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-navy-900">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Finance Street, London, UK</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+442071234567" className="hover:text-navy-800 transition-colors">
                  +44 (0)20 7123 4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@hvb-solutions.com" className="hover:text-navy-800 transition-colors">
                  info@hvb-solutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} HVB Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-navy-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-navy-800 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}