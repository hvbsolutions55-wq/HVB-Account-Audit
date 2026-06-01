import type { LucideIcon } from "lucide-react";
import { MessageSquare, UserCheck, Handshake } from "lucide-react";

export type ProcessStep = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processIntro =
  "We integrate seamlessly with your team, delivering flexible financial expertise with the collaboration and responsiveness of an in-house partner.";

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery & Consultation",
    description:
      "We begin with a complimentary consultation to gain a deep understanding of your business, identify key opportunities, and uncover challenges. This allows us to design tailored financial solutions aligned with your goals.",
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "Expert Matching",
    description:
      "We carefully pair you with a CFO, Controller, or Staff Accountant whose expertise best fits your business needs, ensuring the right strategic and operational support from the start.",
    icon: UserCheck,
  },
  {
    id: 3,
    title: "Seamless Engagement",
    description:
      "You define the scope, terms, and timeline of engagement. We maintain full transparency throughout the process, providing ongoing updates and insights so you remain informed and in control at all times.",
    icon: Handshake,
  },
];
