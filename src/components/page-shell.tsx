import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PromoBanner } from "@/components/promo-banner";


type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-50">
        <PromoBanner />
        <Navigation />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
      
    </div>
  );
}
