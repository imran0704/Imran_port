"use client";

import { useState } from "react";
import { Profile } from "../lib/sanity/types";
import {
  MailIcon,
  CopyIcon,
  CheckIcon,
  MapPinIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "./Icons";

interface ContactProps {
  profile: Profile;
}

export function ContactSection({ profile }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "New Project Inquiry",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-linear-to-b from-stone-50 to-white border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info & Quick Copy (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-4">
                  <SparklesIcon className="w-3.5 h-3.5" />
                  <span>Start a Conversation</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                  Have an ambitious project in mind?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
                  I&apos;m currently open to select contract opportunities, full-stack architectural
                  consulting, and design system leadership.
                </p>
              </div>

              {/* Direct One-Click Email Copy Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                  Direct Inbox
                </span>
                <div className="flex items-center justify-between gap-3 bg-stone-50 p-3 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-900 font-mono text-sm truncate font-medium">
                    <MailIcon className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="truncate">{profile.email}</span>
                  </div>
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={handleCopyEmail}
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-blue-600 transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckIcon className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Availability Status */}
              <div className="space-y-2 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span>Average response time: &lt; 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-3.5 h-3.5 text-slate-400" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Message Form (7 cols) */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="p-8 sm:p-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="h-12 w-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <CheckIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name || "friend"}</strong>. I have received your
                    inquiry and will respond directly to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setFormSubmitted(false)}
                    className="inline-flex text-xs font-semibold text-emerald-900 underline underline-offset-4 mt-2"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    Send a Direct Inquiry
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        suppressHydrationWarning
                        placeholder="Ada Lovelace"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-stone-50/50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        suppressHydrationWarning
                        placeholder="ada@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Project Nature / Scope
                    </label>
                    <select
                      suppressHydrationWarning
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-stone-50/50"
                    >
                      <option>New Web App / Full-Stack Build</option>
                      <option>Sanity Headless CMS Architecture</option>
                      <option>Design System &amp; Frontend Polish</option>
                      <option>Advisory / Technical Consulting</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Message &amp; Timeline
                    </label>
                    <textarea
                      required
                      suppressHydrationWarning
                      rows={4}
                      placeholder="Briefly describe the product, goals, and any timeline constraints..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-stone-50/50 resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    suppressHydrationWarning
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-blue-600 transition-all duration-200 shadow-xs hover:shadow-md"
                  >
                    <span>Transmit Message</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
