"use client";

import { useState, useRef, useEffect } from "react";
import {
  ArrowUpRightIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  XIcon,
  CheckIcon,
  SparklesIcon,
} from "./Icons";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  highlights: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    number: "01",
    title: "Website Development",
    description:
      "High-performance marketing platforms, custom web apps, and headless e-commerce storefronts. Built with Next.js, React 19, and Tailwind CSS for blistering speed, top-tier SEO, and seamless CMS editing.",
    highlights: ["Next.js App Router", "Sanity Headless CMS", "Core Web Vitals 95+", "Responsive Architecture"],
  },
  {
    id: "custom-software",
    number: "02",
    title: "Custom Software Development",
    description:
      "Bespoke SaaS platforms, internal business tools, and resilient web applications architected to eliminate manual bottlenecks. Powered by clean TypeScript, scalable data models, and secure authentication.",
    highlights: ["Full-Stack Architecture", "Relational DBs & Prisma", "Secure Multi-Tenant Auth", "REST & GraphQL APIs"],
  },
  {
    id: "erp-implementation",
    number: "03",
    title: "ERP Implementation",
    description:
      "Modern cloud ERP systems, double-entry financial ledgers, inventory tracking, and billing automation. We modernize legacy accounting workflows into zero-latency, desktop-density web applications.",
    highlights: ["Ledger & Accounting Logic", "Inventory & Order Sync", "Role-Based Permissions", "Audit-Ready Logs"],
  },
  {
    id: "ai-automation",
    number: "04",
    title: "AI Automation and AI Integration",
    description:
      "Embedding state-of-the-art LLMs, document extraction pipelines, intelligent search, and autonomous agentic workflows into your existing business stack to automate hours of repetitive manual tasks.",
    highlights: ["LLM API Integrations", "Intelligent Document Parsing", "RAG & Vector Search", "Task Automations"],
  },
];

export function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Quote Modal State
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$5,000 – $15,000",
    timeline: "Within 1 Month",
    details: "",
  });

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    const firstChild = scrollContainerRef.current.firstElementChild as HTMLElement;
    if (firstChild) {
      const cardWidth = firstChild.offsetWidth;
      const gap = 24; // gap-6 in Tailwind (1.5rem = 24px)
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(Math.max(0, index), servicesData.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (container) container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeQuoteModal();
    };
    if (selectedService) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const { clientWidth } = scrollContainerRef.current;
    const scrollAmount = clientWidth * 0.75;
    scrollContainerRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const children = scrollContainerRef.current.children;
    if (children[index]) {
      (children[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const openQuoteModal = (service: ServiceItem) => {
    setSelectedService(service);
    setFormSubmitted(false);
    setQuoteForm((prev) => ({
      ...prev,
      details: `Inquiry regarding ${service.title}: `,
    }));
  };

  const closeQuoteModal = () => {
    setSelectedService(null);
    setFormSubmitted(false);
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="services" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Left Content & Right Scroll Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600">
              Expertise &amp; Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
              Services &amp; Capabilities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Specialized engineering and design services engineered to deliver tangible business velocity.
              Scroll horizontally to explore all capabilities.
            </p>
          </div>

          {/* Controls: Prev & Next Arrows */}
          <div className="flex items-center gap-2 self-start sm:self-end">
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll services left"
              className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xs"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll services right"
              className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xs"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontally Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {servicesData.map((service) => (
            <article
              key={service.id}
              className="group w-[88vw] sm:w-[360px] lg:w-[calc((100%-3rem)/3)] shrink-0 snap-start p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Service Number Tag */}
                <span className="font-mono text-xs font-semibold text-slate-400">
                  {service.number}
                </span>

                {/* Service Heading */}
                <h3 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights Tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {service.highlights.map((item, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-2 py-0.5 rounded bg-slate-50 text-[10px] font-mono text-slate-600 border border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action: Get a Quote Button */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => openQuoteModal(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-blue-600 transition-colors shadow-xs"
                >
                  <span>Get a Quote</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </button>

                <span className="text-[11px] font-mono text-slate-400">
                  Custom Scope
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Horizontal Scroll Indicator Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {servicesData.map((service, idx) => (
            <button
              key={service.id}
              type="button"
              suppressHydrationWarning
              onClick={() => scrollToCard(idx)}
              aria-label={`Scroll to ${service.title}`}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600/40 ${
                activeIndex === idx
                  ? "w-7 h-2 bg-blue-600 shadow-xs"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Get a Quote Modal / Popup */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 my-8 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              suppressHydrationWarning
              onClick={closeQuoteModal}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Quote Request Dispatched!
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{quoteForm.name || "friend"}</strong>. I have received your
                  inquiry regarding <strong>{selectedService.title}</strong> and will prepare a tailored
                  roadmap and pricing estimate within 24 hours.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={closeQuoteModal}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="pr-8 mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-2">
                    <SparklesIcon className="w-3 h-3" />
                    <span>{selectedService.title}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Request a Tailored Quote
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
                    Share a few details about your project to receive an itemized proposal, timeline, and deliverables estimate.
                  </p>
                </div>

                {/* Inquiry Form */}
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        suppressHydrationWarning
                        placeholder="Alex Morgan"
                        value={quoteForm.name}
                        onChange={(e) =>
                          setQuoteForm({ ...quoteForm, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-stone-50/50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        suppressHydrationWarning
                        placeholder="alex@company.com"
                        value={quoteForm.email}
                        onChange={(e) =>
                          setQuoteForm({ ...quoteForm, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        Estimated Budget
                      </label>
                      <select
                        suppressHydrationWarning
                        value={quoteForm.budget}
                        onChange={(e) =>
                          setQuoteForm({ ...quoteForm, budget: e.target.value })
                        }
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-stone-50/50"
                      >
                        <option>&lt; $5,000</option>
                        <option>$5,000 – $15,000</option>
                        <option>$15,000 – $30,000</option>
                        <option>$30,000+</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        Target Timeline
                      </label>
                      <select
                        suppressHydrationWarning
                        value={quoteForm.timeline}
                        onChange={(e) =>
                          setQuoteForm({ ...quoteForm, timeline: e.target.value })
                        }
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-stone-50/50"
                      >
                        <option>Immediate (1–2 weeks)</option>
                        <option>Within 1 Month</option>
                        <option>1–3 Months</option>
                        <option>Flexible / Exploratory</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Project Goals &amp; Specific Requirements
                    </label>
                    <textarea
                      required
                      suppressHydrationWarning
                      rows={3}
                      placeholder="Briefly describe what you are looking to build or automate..."
                      value={quoteForm.details}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, details: e.target.value })
                      }
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-stone-50/50 resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      suppressHydrationWarning
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-blue-600 transition-all duration-200 shadow-xs hover:shadow-md"
                    >
                      <span>Submit Quote Request</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
