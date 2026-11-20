import { CheckIcon } from "./Icons";

export function WorkPrinciples() {
  const principles = [
    {
      number: "01",
      title: "Architectural Simplicity",
      description:
        "Writing modular, maintainable, and readable code. I prioritize battle-tested fundamentals and minimal dependencies over transient hype.",
    },
    {
      number: "02",
      title: "Performance by Default",
      description:
        "Fast server-side rendering, sub-second TTFB, small bundle footprints, and smooth 60fps animations that never lag or stutter.",
    },
    {
      number: "03",
      title: "Intuitive & Accessible UI/UX",
      description:
        "Interfaces designed with clear visual hierarchy, disciplined white space, high contrast, and full keyboard and screen-reader accessibility.",
    },
    {
      number: "04",
      title: "Headless Content Systems",
      description:
        "Tailored Sanity CMS schemas and intuitive editing workflows that empower non-technical teams to update content seamlessly without code changes.",
    },
    {
      number: "05",
      title: "Obsessive Attention to Detail",
      description:
        "Mathematical spacing scales, consistent typography, robust responsive layouts, and meticulous handling of loading and edge states.",
    },
    {
      number: "06",
      title: "Reliable Ownership & Delivery",
      description:
        "Clear technical communication, fast turnarounds, structured Git workflows, and proactive collaboration from early concept to production.",
    },
  ];

  return (
    <section id="principles" className="relative py-24 bg-white border-y border-slate-200">
      <span id="about" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600">
            Work Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            Qualities &amp; Principles I Follow
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Every digital product I architect is shaped by engineering discipline, structural clarity,
            and a deep respect for the end user&apos;s experience.
          </p>
        </div>

        {/* 6 Principles in a Clean Responsive Grid (3 in a row on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item) => (
            <div
              key={item.number}
              className="group p-8 rounded-2xl bg-stone-50 border border-slate-200/90 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-blue-600 tracking-wider">
                  {item.number}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs text-slate-400 font-medium">
                <CheckIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>Core standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
