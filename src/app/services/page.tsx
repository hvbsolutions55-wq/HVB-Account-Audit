"use client";

import Image from "next/image";
import {
  Briefcase,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardList,
  LineChart,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageShell } from "@/components/page-shell";
import { services } from "@/data/services";
import { SERVICES_INTRO } from "@/lib/site";
import { useState, useEffect, useRef } from "react";

const serviceIcons: Record<string, LucideIcon> = {
  LineChart,
  ClipboardList,
  Calculator,
  Building2,
  ShieldCheck,
  Briefcase,
};

export default function ServicesPage() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
            observer.disconnect();
          }
        },
        { 
          threshold: 0.15,
          rootMargin: "0px 0px -50px 0px"
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  return (
    <PageShell>
      <section className="bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)] section-space-tight">
        <div className="site-shell">
          <div className="site-shell-inner">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center rounded-full border border-[#d4af37]/35 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b88b16] animate-fade-in">
                Tailored Financial Services
              </div>
              <h1 className="mb-4 text-3xl font-bold uppercase tracking-tight text-[#0f172a] sm:text-4xl animate-fade-in" style={{ animationDelay: '100ms' }}>
                Our Services
              </h1>
              <p className="text-base leading-7 text-[#5b6678] xl:text-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
                {SERVICES_INTRO}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f8fafc]">
        <div className="site-shell">
          <div className="site-shell-inner space-y-10">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.icon] ?? Briefcase;
              const isVisible = visibleCards.includes(index);
              const imageOnRight = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="scroll-mt-28"
                  ref={(el) => { cardRefs.current[index] = el; }}
                >
                  <Card 
                    className={`surface-card overflow-hidden border-[#d9e0ea] bg-white transition-all duration-700 ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-16'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 150}ms`,
                      transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
                    }}
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-3`}>
                      {/* Content - takes 2/3 of the space */}
                      <div className={`lg:col-span-2 ${!imageOnRight ? 'lg:order-2' : ''}`}>
                        <CardHeader className="px-6 pb-4 pt-6 sm:px-8 sm:pt-8">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                            <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f172a] text-[#d4af37] transition-all duration-500 ${
                              isVisible ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'
                            }`}
                            style={{ transitionDelay: `${index * 150 + 200}ms` }}
                            >
                              <Icon className="h-7 w-7" />
                            </div>
                            <div>
                              <CardTitle className={`text-2xl uppercase tracking-wide text-[#0f172a] sm:text-3xl transition-all duration-500 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                              }`}
                              style={{ transitionDelay: `${index * 150 + 300}ms` }}
                              >
                                {service.title}
                              </CardTitle>
                              <CardDescription className={`mt-2 max-w-3xl text-base leading-7 transition-all duration-500 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                              }`}
                              style={{ transitionDelay: `${index * 150 + 400}ms` }}
                              >
                                {service.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8">
                          <ul className="grid gap-3 sm:grid-cols-2">
                            {service.details.map((detail, detailIndex) => (
                              <li
                                key={detail}
                                className={`flex items-start gap-3 text-sm leading-6 text-[#4b5563] sm:text-[15px] transition-all duration-500 ${
                                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                                }`}
                                style={{ transitionDelay: `${index * 150 + 500 + detailIndex * 50}ms` }}
                              >
                                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#d4af37] transition-transform duration-300 hover:scale-125 hover:rotate-12" />
                                <span className="hover:text-[#0f172a] transition-colors duration-300">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </div>

                      {/* Image - takes 1/3 of the space */}
                      {service.image && (
                        <div className={`relative min-h-[200px] lg:min-h-full p-4 lg:p-6 ${!imageOnRight ? 'lg:order-1' : ''}`}>
                          <div 
                            className={`relative h-full w-full overflow-hidden rounded-2xl transition-all duration-700 ${
                              isVisible 
                                ? 'opacity-100 scale-100 rotate-0' 
                                : 'opacity-0 scale-90 rotate-3'
                            }`}
                            style={{ 
                              transitionDelay: `${index * 150 + 300}ms`,
                              boxShadow: isVisible ? '0 20px 60px rgba(15,23,42,0.15)' : 'none'
                            }}
                          >
                            <Image
                              src={service.image}
                              alt={service.imageAlt || service.title}
                              fill
                               loading="eager" 
                              className="object-cover transition-all duration-700 hover:scale-110 hover:rotate-1"
                              sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
                            
                            {/* Glow effect */}
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100">
                              <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/10 via-transparent to-[#d4af37]/5" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}