import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { services } from "@/data/services";

const serviceIcons: Record<string, any> = {
  ShieldCheck: require("lucide-react").ShieldCheck,
  TrendingUp: require("lucide-react").TrendingUp,
  PieChart: require("lucide-react").PieChart,
  Briefcase: require("lucide-react").Briefcase,
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section id="services-header" className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Our Services</h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive financial services designed to help your business thrive. From audit and tax consulting to strategic advisory, we provide expert guidance tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, index) => {
                const Icon = serviceIcons[service.icon];
                const sectionId = index === 0 ? "audit" : index === 1 ? "tax" : index === 2 ? "financial" : "business";
                return (
                  <div key={service.id} id={sectionId} className="scroll-mt-24">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30 overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full"></div>
                      <CardHeader>
                        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <ul className="space-y-3">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4 border-t">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs text-muted-foreground uppercase tracking-wide">Starting from</div>
                              <div className="text-2xl font-bold text-primary">{service.price}</div>
                            </div>
                            <Link href="/contact">
                              <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                Get Quote <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-secondary/30 to-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <Card className="bg-primary text-primary-foreground border-primary">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                  We can tailor our services to meet your specific business requirements. Contact us to discuss your unique needs.
                </p>
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}