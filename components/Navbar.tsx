"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MenuIcon, XIcon, ArrowUpRightIcon } from "./Icons";

interface NavbarProps {
  availableForHire?: boolean;
}

export function Navbar({ availableForHire = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Principles", href: "#principles" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="#"
            className="group flex items-center gap-2.5 font-bold tracking-tight text-slate-900 text-lg"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white font-mono text-xs transition-transform duration-200 group-hover:scale-105">
              IA
            </span>
            <span className="font-semibold text-base sm:text-lg">
              Imran <span className="text-slate-400 font-normal">/ Dev</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/70 border border-slate-200/80 rounded-full px-4 py-1.5 shadow-xs backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-950 transition-colors rounded-full hover:bg-slate-100/80"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action & Availability */}
          <div className="hidden sm:flex items-center gap-4">
            {/* {availableForHire && (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-medium text-emerald-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for hire</span>
              </div>
            )} */}

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-blue-600 transition-colors shadow-xs"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button with suppressHydrationWarning */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 shadow-xl space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            {availableForHire && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span>Available for new projects</span>
              </div>
            )}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs font-semibold px-4 py-2.5 rounded-full bg-slate-900 text-white hover:bg-blue-600 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
