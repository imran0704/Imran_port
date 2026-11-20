import Image from "next/image";
import { Profile } from "../lib/sanity/types";
import { ArrowRightIcon } from "./Icons";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  const portraitUrl =
    profile.avatarUrl ||
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85";

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-subtle-glow">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & Two CTA Buttons (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
              Building modern products with{" "}
              <span className="relative inline-block text-blue-600">
                architectural precision
                <svg
                  className="absolute left-0 -bottom-1 w-full h-2 text-blue-200"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,0 Q50,12 100,0 L100,4 Q50,16 0,4 Z" />
                </svg>
              </span>{" "}
              &amp; craft.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {profile.tagline || profile.bio}
            </p>

            {/* Two CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-700 font-medium text-sm border border-slate-200 hover:bg-slate-50 hover:text-slate-950 transition-all duration-200 shadow-xs"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          {/* Right Column: Photo in the Circle (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              style={{ position: "relative" }}
              className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-84 lg:h-84 rounded-full overflow-hidden border-4 border-white shadow-xl ring-1 ring-slate-200/80 bg-slate-100"
            >
              <Image
                src={portraitUrl}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 768px) 240px, (max-width: 1200px) 288px, 336px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
