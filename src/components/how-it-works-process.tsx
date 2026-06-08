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
    <article
      className={`rounded-2xl border border-[#e2e8f0] bg-white/90 p-4 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur sm:p-5 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${className}`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b88b16] sm:text-xs">
        Step {step.id}
      </p>
      <h3 className="mt-2 text-lg font-bold text-[#0f172a] sm:text-xl lg:text-xl xl:text-2xl">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[#5b6678] sm:mt-3 sm:text-base sm:leading-7 lg:text-[0.9375rem] lg:leading-6 xl:text-base xl:leading-7">
        {step.description}
      </p>
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
    <div className={compact ? "space-y-8 sm:space-y-10" : "space-y-10 sm:space-y-12 lg:space-y-16"}>
      {showHeader && (
        <div className="mx-auto max-w-3xl px-1 text-center sm:px-0">
          <div className="mb-3 inline-flex items-center rounded-full border border-[#d4af37]/35 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b88b16] sm:mb-4 sm:px-4 sm:py-1.5 sm:text-[11px]">
            Process
          </div>
          <h2
            className={
              compact
                ? "text-2xl font-bold text-[#0f172a] sm:text-3xl md:text-4xl"
                : "text-2xl font-bold text-[#0f172a] sm:text-3xl md:text-4xl lg:text-5xl"
            }
          >
            How HVB Solutions Work
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#5b6678] sm:mt-4 sm:text-base sm:leading-7 md:mt-5 md:text-lg md:leading-8">
            {processIntro}
          </p>
        </div>
      )}

      <div className="rounded-[20px] border border-[#e2e8f0] bg-white/70 p-4 shadow-[0_20px_55px_rgba(15,23,42,0.08)] sm:rounded-[24px] sm:p-6 md:p-8 lg:rounded-[28px] lg:p-10 xl:p-12">
        {/* Mobile */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:hidden">
          <div className="flex items-center justify-center rounded-full bg-[radial-gradient(circle,_rgba(212,175,55,0.18)_0%,_transparent_68%)] p-4 sm:p-5">
            <ProcessMark className="h-44 w-auto sm:h-52 md:h-60" />
          </div>
          <ProcessStepBlock step={step1} />
          <ProcessStepBlock step={step2} className="text-center" />
          <ProcessStepBlock step={step3} className="text-center" />
        </div>

        {/*
          Desktop triangle — matches work-arrow.png:
            Step 1 (top arrow)
          Step 3 ← LOGO → Step 2
        */}
        <div
          className="hidden lg:-mt-2 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:grid-rows-[auto_auto_auto] lg:items-start lg:gap-x-10 xl:gap-x-16 lg:gap-y-4 xl:gap-y-5 xl:-mt-3"
          data-process-diagram
        >
          <div className="col-start-2 row-start-1 mb-3 w-full max-w-[19rem] justify-self-center text-center xl:mb-4 xl:max-w-[21rem]">
            <ProcessStepBlock step={step1} />
          </div>

          <div
            className="col-start-2 row-start-2 justify-self-center"
            data-process-logo
          >
            <div className="flex items-center justify-center rounded-full bg-[radial-gradient(circle,_rgba(212,175,55,0.18)_0%,_transparent_68%)] p-5 xl:p-7">
              <ProcessMark className="h-52 w-auto xl:h-60" />
            </div>
          </div>

          <div className="col-start-1 row-start-3 -mt-4 w-full max-w-[18rem] translate-x-5 justify-self-end pr-1 text-center xl:-mt-5 xl:max-w-[20rem] xl:translate-x-6 xl:pr-3">
            <ProcessStepBlock step={step3} />
          </div>

          <div className="col-start-3 row-start-3 mt-3 w-full max-w-[18rem] justify-self-start pl-1 text-center xl:mt-4 xl:max-w-[20rem] xl:pl-3">
            <ProcessStepBlock step={step2} />
          </div>
        </div>
      </div>
    </div>
  );
}
