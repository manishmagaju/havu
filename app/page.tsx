import Link from "next/link";

const issues = [
  {
    number: "01",
    title: "The signal gets drowned out by speed",
    description:
      "Teams ship faster than they can align, which creates a flood of ideas without enough clarity on what matters most.",
  },
  {
    number: "02",
    title: "The work is fragmented across teams",
    description:
      "Design, product, engineering, and operations all move in parallel, but without a shared system of evidence and trade-offs.",
  },
  {
    number: "03",
    title: "AI accelerates the wrong decisions",
    description:
      "When strategy is vague, automation only scales confusion. The result is more output, not more confidence or momentum.",
  },
];

export default function Hero() {
  return (
    <>
      <section className="min-h-[calc(100vh-70px)] bg-[#0b0b0d] px-6 text-white">
        <div className="mx-auto max-w-[1160px]">

          {/* Top Information */}
          <div className="flex items-start justify-between pt-8">
            <p className="max-w-[250px] text-[11px] font-bold uppercase tracking-[0.25em] text-white/40">
              An AI-native design and
              <br />
              product partner
            </p>

            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/40">
              Tokyo — Aoyama / Est. 2020
            </p>
          </div>

          {/* Main Heading */}
          <div className="mt-16">
            <h1 className="max-w-[1000px] text-[clamp(3.5rem,7vw,6.5rem)] font-bold leading-[0.98] tracking-[-0.05em]">
              We don't just make designs.
              <br />
              We design the systems
              <br />
              that create change.
            </h1>
          </div>

          {/* Divider */}
          <div className="mt-14 border-t border-white/15" />

          {/* Bottom Content */}
          <div className="flex items-end justify-between gap-10 pt-7">

            {/* Description */}
            <p className="max-w-[400px] text-base leading-6 text-white/80">
              Come to us before the problem is fully defined.
              Business and product design, UI/UX, AI experience
              design, engineering and validation.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="group flex items-center gap-5 rounded-full bg-[#d7d5d2] px-8 py-5 font-semibold text-black transition-all hover:bg-white"
            >
              <span>Talk to us about your project</span>

              <span className="text-xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

          {/* Pixel / Decorative Elements */}
          <div className="relative mt-[-5px] flex justify-center gap-20">

            {/* Character 1 */}
            <div className="text-4xl">♟</div>

            {/* Character 2 */}
            <div className="text-4xl">♟</div>

            {/* UI Box */}
            <div className="flex h-12 w-14 items-center justify-center border-4 border-white text-xl font-bold">
              UI
            </div>

          </div>

        </div>
      </section>
      <section className="w-full bg-[#0b0b0d] text-white py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">

          {/* Top Tagline / Breadcrumb */}
          <div className="text-sm text-neutral-400 tracking-wide mb-16 flex items-center gap-3">
            <span>/</span>
            <p className="text-neutral-300">
              Connecting craft with evidence, design with engineering, people with AI — we design the way your organisation solves problems.
            </p>
            <span>/</span>
          </div>

          {/* Main Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left Column: Big Heading & Description */}
            <div>
              <div className="text-xs tracking-widest text-neutral-400 uppercase mb-6 flex items-center gap-2">
                <span>01</span>
                <span>—</span>
                <span>ISSUE</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight mb-8">
                The faster you can build, the more what and why matter
              </h2>

              <p className="text-neutral-400 text-lg leading-relaxed">
                AI has made design, writing and code far faster to produce. But speed delivers nothing while what you should be building stays vague.
              </p>
            </div>

            {/* Right Column: Numbered List Items */}
            <div className="flex flex-col">
              {issues.map((item, index) => (
                <div
                  key={index}
                  className="py-10 first:pt-0 last:pb-0 border-b border-neutral-800 last:border-b-0 flex gap-6 md:gap-8 items-start"
                >
                  {/* Large Number with muted brownish-gold accent color */}
                  <span className="text-4xl md:text-5xl font-light text-[#b89b7b] font-mono">
                    {item.number}
                  </span>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}