import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, TrendingUp, PieChart, Briefcase, Star, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const serviceIcons = {
  ShieldCheck,
  TrendingUp,
  PieChart,
  Briefcase,
};

const updatedStats = [
  { id: 1, label: "Years Experience", value: "5+" },
  { id: 2, label: "Projects Completed", value: "2,000+" },
  { id: 3, label: "Team Members", value: "45+" },
  { id: 4, label: "Industries Served", value: "25+" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section - Navy Blue Theme with Background Image */}
        <section className="relative min-h-screen bg-navy-900 overflow-hidden">
          {/* Background Image with Navy Blue Overlay */}
          <div className="absolute inset-0">
            {/* Professional Business Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2070&q=80')",
              }}
            ></div>
            {/* Navy Blue Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800/95 via-navy-900/90 to-slate-900/95"></div>
            <div className="absolute inset-0 bg-black/30"></div>
            {/* Decorative Gradient Overlays */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-indigo-900/10 to-transparent"></div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>

          <div className="container px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-center gap-12 py-12 lg:py-20">
              {/* Left Content */}
              <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
                {/* Logo Badge */}
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20">
                  <div className="relative h-8 w-8">
                    <Image
                      src="/logo.png"
                      alt="HVB Solutions"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-sm">HVB Solutions</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Global Professional<br />
                  <span className="text-blue-300">Accounting, Finance</span><br />
                  & Audit Services
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Fractional CFO, Audit and Accounting Support Designed to Help You Achieve Your Financial Goals
                </p>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                  <a href="tel:+442071234567" className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                    <Phone className="h-5 w-5 text-blue-300" />
                    <span className="text-white font-medium text-sm">+44 (0)20 7123 4567</span>
                  </a>
                  <a href="mailto:info@hvb-solutions.com" className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                    <Mail className="h-5 w-5 text-blue-300" />
                    <span className="text-white font-medium text-sm">info@hvb-solutions.com</span>
                  </a>
                </div>

                {/* CTA Buttons - Made more visible */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-8 pt-4">
                  <Link href="/contact">
                    <Button size="lg" className="hover:opacity-90 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-xl border-2" style={{ backgroundColor: '#D4AF37', color: '#0F172A', borderColor: '#D4AF37' }}>
                      Free Consultation
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-full">
                      Our Services
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Content - Stats Card */}
              <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full lg:w-auto">
                <Card className="bg-white/15 backdrop-blur-xl border-white/30 shadow-2xl w-full max-w-md">
                  <CardHeader className="border-b border-white/20 pb-4 sm:pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="relative h-10 w-10">
                        <Image
                          src="/logo.png"
                          alt="HVB Solutions"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl text-white">Trusted Expertise</CardTitle>
                    </div>
                    <CardDescription className="text-gray-200 text-sm sm:text-base">
                      5+ years of professional experience in global financial services
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4 sm:pt-6">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {updatedStats.map((stat) => (
                        <div key={stat.id} className="text-center p-3 sm:p-4 bg-white/10 rounded-lg backdrop-blur border border-white/20 hover:bg-white/20 transition-colors">
                          <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                          <div className="text-xs sm:text-xs text-gray-200 uppercase tracking-wide leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Mobile Stats Section */}
            <div className="lg:hidden pb-12">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {updatedStats.map((stat) => (
                  <div key={stat.id} className="text-center p-3 sm:p-4 bg-white/10 rounded-lg backdrop-blur border border-white/20">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-200 uppercase tracking-wide leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center gap-2 text-navy-800">
                  <div className="w-8 sm:w-12 h-0.5 bg-navy-800"></div>
                  <span className="font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Expertise</span>
                  <div className="w-8 sm:w-12 h-0.5 bg-navy-800"></div>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4">Comprehensive Financial Services</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                From audit and tax to strategic advisory, we provide end-to-end solutions
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((service) => {
                const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
                return (
                  <Link key={service.id} href="/services" className="group">
                    <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 bg-gradient-to-br from-white to-navy-50">
                      <CardHeader className="text-center pb-4">
                        <div className="mx-auto mb-4 h-14 sm:h-16 w-14 sm:w-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg" style={{ background: '#0F172A', color: '#FFFFFF' }}>
                          <Icon className="h-7 sm:h-8 w-7 sm:w-8" />
                        </div>
                        <CardTitle className="text-lg sm:text-xl text-navy-900 group-hover:text-navy-800 transition-colors">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm sm:text-base text-gray-600 text-center mb-4">{service.description}</p>
                        <div className="text-center">
                          <span className="inline-flex items-center text-navy-800 font-medium group-hover:translate-x-2 transition-transform">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" style={{ color: 'oklch(0.22 0.09 260)' }} />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-navy-50 to-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center gap-2 text-navy-800">
                  <div className="w-8 sm:w-12 h-0.5 bg-navy-800"></div>
                  <span className="font-semibold text-xs sm:text-sm uppercase tracking-wider">Testimonials</span>
                  <div className="w-8 sm:w-12 h-0.5 bg-navy-800"></div>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4">What Our Clients Say</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across various industries
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-white hover:shadow-xl transition-shadow border-0">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-1 mb-4" style={{ color: '#0F172A' }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4" style={{ fill: '#0F172A', color: '#0F172A' }} />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 italic line-clamp-3">{testimonial.content}</p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 sm:h-12 w-10 sm:w-12 rounded-full bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center font-semibold text-white">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-navy-900 text-sm">{testimonial.name}</div>
                        <div className="text-xs sm:text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-navy-800 via-navy-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="container px-4 sm:px-6 lg:px-8 relative z-20 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Finances?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 sm:mb-10">
              Schedule a free consultation with our experts and discover how we can help your business grow
            </p>
            <Link href="/contact">
              <Button size="lg" className="hover:opacity-90 px-6 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-xl border-2 flex items-center gap-2" style={{ backgroundColor: '#D4AF37', color: '#0F172A', borderColor: '#D4AF37' }}>
                Free Consultation <ArrowRight className="h-4 w-4" style={{ color: '#0F172A' }} />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}