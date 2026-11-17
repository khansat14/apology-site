"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Menu, X, Sparkles, ArrowRight, BookHeart } from "lucide-react";

const navLinks = [
  { label: "The Apology", href: "#apology" },
  { label: "How To Fix It", href: "#fix-it" },
  { label: "Things Not To Do", href: "#survival-guide" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=1920&q=80"
          alt="Warm aesthetic flowers background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950/70 via-rose-900/60 to-pink-950/80" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-white transition-transform hover:scale-105"
        >
          <Heart className="h-7 w-7 fill-pink-400 text-pink-400 animate-float" />
          <span className="text-lg font-bold tracking-tight">
            For Akzeinep
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-pink-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="relative z-20 mx-4 rounded-2xl border border-white/10 bg-rose-950/90 p-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-pink-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-center px-6 text-center">
        {/* Floating Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-pink-300/30 bg-white/10 px-5 py-2 text-sm text-pink-200 backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-pink-300" />
          <span>A sincere message from Ali</span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          How To Not Lose{" "}
          <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-red-300 bg-clip-text text-transparent">
            Your Girlfriend
          </span>
          <br />
          <span className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            The Ultimate Guide
          </span>
        </h1>

        {/* Subtext / Apology */}
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
          Dear Akzeinep, I know I messed up. And honestly? I&apos;m pretty sure
          Google doesn&apos;t have a &quot;How to un-do being an idiot&quot;
          tutorial — so I built this entire website instead. Because if
          I&apos;m going to apologize, I&apos;m going to do it{" "}
          <span className="font-semibold text-pink-300">properly</span>.
          Please scroll down. I promise it gets better. 💕
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#apology"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition-all hover:scale-105 hover:shadow-pink-500/50 animate-pulse-glow"
          >
            <BookHeart className="h-5 w-5" />
            Read the Apology
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#survival-guide"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-pink-300 hover:bg-white/10 hover:scale-105"
          >
            <Heart className="h-5 w-5" />
            Survival Guide
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest">
            Scroll down
          </span>
          <div className="h-10 w-[2px] animate-pulse rounded-full bg-gradient-to-b from-pink-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}
