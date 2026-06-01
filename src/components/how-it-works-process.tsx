import { processIntro, processSteps } from "@/data/how-it-works";
import { ProcessMark } from "@/components/process-mark";

function ProcessStepBlock({
  step,
  className = "",
}: {
  step: (typeof processSteps)[number];
  className?: string;
}) {
  return (
    <article className={className}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
        Step {step.id}
      </p>
      <h3 className="mt-2 text-2xl font-bold text-[#0f172a] sm:text-[1.65rem]">{step.title}</h3>
      <p className="mt-3 max-w-md text-base leading-7 text-[#5b6678]">{step.description}</p>
    </article>
  );
}

type HowItWorksProcessProps = {
  showHeader?: boolean;
  compact?: boolean;
};

export function HowItWorksProcess({ showHeader = true, compact = false }: HowItWorksProcessProps) {
  const [step1, step2, step3] = processSteps;

  return (
    <div className={compact ? "space-y-10" : "space-y-14 lg:space-y-20"}>
      {showHeader && (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-12 xl:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
              Process
            </p>
            <h2
              className={
                compact
                  ? "mt-3 text-3xl font-bold text-[#0f172a] sm:text-4xl"
                  : "mt-3 text-3xl font-bold text-[#0f172a] sm:text-4xl lg:text-5xl"
              }
            >
              How It Works
            </h2>
          </div>
          <p className="text-base leading-7 text-[#5b6678] sm:text-lg lg:pt-8 lg:leading-8">
            {processIntro}
          </p>
        </div>
      )}

      {/* Desktop: steps around central graphic */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:grid-rows-[auto_auto_auto] lg:items-center lg:gap-x-10 xl:gap-x-16">
        <ProcessStepBlock step={step1} className="lg:col-start-1 lg:row-start-1 lg:self-end lg:pb-8" />
        <div className="lg:col-start-2 lg:row-span-3 lg:row-start-1 flex items-center justify-center px-4">
          <ProcessMark className="h-56 w-56 xl:h-72 xl:w-72" />
        </div>
        <ProcessStepBlock
          step={step2}
          className="lg:col-start-3 lg:row-start-2 lg:self-center lg:pl-4"
        />
        <ProcessStepBlock
          step={step3}
          className="lg:col-start-1 lg:row-start-3 lg:self-start lg:pt-4"
        />
      </div>

      {/* Mobile / tablet: graphic then stacked steps */}
      <div className="lg:hidden">
        <div className="mb-10 flex justify-center">
          <ProcessMark className="h-44 w-44 sm:h-52 sm:w-52" />
        </div>
        <div className="space-y-10">
          {processSteps.map((step) => (
            <ProcessStepBlock key={step.id} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
}
