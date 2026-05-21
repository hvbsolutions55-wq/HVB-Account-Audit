import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="min-h-screen bg-[#f8fafc] px-4 py-12">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-[#d9e0ea] bg-white p-8 shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
          <h1 className="text-3xl font-bold text-[#0f172a]">
            Sanity Studio requires configuration
          </h1>
          <p className="mt-4 text-base leading-7 text-[#5b6678]">
            Add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
            <code>NEXT_PUBLIC_SANITY_DATASET</code> to your environment
            variables, then reload this route to access the content studio.
          </p>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
