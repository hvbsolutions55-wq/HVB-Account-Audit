import Link from "next/link";
import { ArrowRight, Award, Users, Target, Zap, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { testimonials, stats } from "@/data/testimonials";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">About HVB Solutions</h1>
              <p className="text-lg text-muted-foreground">
                Professional accounting and auditing services built on trust, expertise, and a commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-b">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gradient-to-br from-secondary/20 to-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  HVB Solutions was founded with a simple mission: to provide businesses of all sizes with the same level of financial expertise typically reserved for large corporations. Our journey began with a commitment to excellence and a passion for helping businesses achieve their financial goals.
                </p>
                <p>
                  Over the past 5+ years, we've helped businesses across various industries achieve their financial objectives. Our team of 45+ qualified professionals brings together decades of collective experience in audit, tax, financial advisory, and business consulting.
                </p>
                <p>
                  We believe that every business deserves access to world-class financial services. That's why we've developed flexible service packages tailored to startups, small businesses, and established enterprises alike.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We strive for the highest standards in every engagement, delivering quality that exceeds expectations.",
                },
                {
                  icon: Users,
                  title: "Integrity",
                  description: "Honest and transparent in all our dealings, building lasting relationships based on trust.",
                },
                {
                  icon: Target,
                  title: "Focus",
                  description: "Client-centric approach ensuring your specific needs and goals remain our priority.",
                },
                {
                  icon: Zap,
                  title: "Innovation",
                  description: "Embracing technology and modern methodologies to deliver efficient, effective solutions.",
                },
              ].map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-primary/10">
                  <CardHeader>
                    <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gradient-to-br from-secondary/20 to-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals leading our team to deliver exceptional results
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "David Harrison",
                  role: "Managing Director",
                  initials: "DH",
                  credentials: "FCA, FCCA",
                },
                {
                  name: "Sarah Mitchell",
                  role: "Audit Director",
                  initials: "SM",
                  credentials: "FCA",
                },
                {
                  name: "James Thompson",
                  role: "Tax Partner",
                  initials: "JT",
                  credentials: "CTA, ACA",
                },
                {
                  name: "Emily Chen",
                  role: "Advisory Director",
                  initials: "EC",
                  credentials: "MBA, CMA",
                },
              ].map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-primary/10">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{member.initials}</span>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{member.credentials}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-white border-t">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Professional Certifications</h2>
              <p className="text-muted-foreground">Our team holds qualifications from leading professional bodies</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {["ACCA", "ICAEW", "CIMA", "CTA", "ICAS"].map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-lg font-semibold text-primary">
                  <GraduationCap className="h-5 w-5" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Work with Us?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Let's discuss how we can help your business achieve financial success.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}