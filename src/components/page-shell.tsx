import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PromoBanner } from "@/components/promo-banner";
import { WhatsAppButton } from "@/components/whatsapp-button";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <PromoBanner />
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
