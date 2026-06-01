export type ProcessStep = {
  id: number;
  title: string;
  description: string;
};

export const processIntro =
  "We seamlessly integrate into your team, providing financial support with the flexibility and collaboration of an in-house partner.";

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Consult",
    description:
      "We start with a complimentary consultation to understand your business, identify opportunities, and address your challenges with tailored financial solutions.",
  },
  {
    id: 2,
    title: "Match",
    description:
      "We pair you with a CFO, Controller, or staff Accountant whose expertise aligns perfectly with your needs, ensuring the right fit for your business.",
  },
  {
    id: 3,
    title: "Engage",
    description:
      "You set the terms and timeline of your engagement with full transparency, track progress and stay informed 24/7—so you're always in control.",
  },
];
