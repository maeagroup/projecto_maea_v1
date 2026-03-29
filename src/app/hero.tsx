"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: "10+", label: t("home.hero.stat1") || "Clientes" },
    { value: "4+",  label: t("home.hero.stat2") || "Anos de Experiência" },
  ];

  return (
    <section className="relative bg-slate-950 py-16 lg:py-24 overflow-hidden">
      {/* Subtle glow accent */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* Badge */}
        <div className="flex justify-center lg:justify-start mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            {t("home.hero.badge")} · Angola 🇦🇴
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {t("home.hero.title")}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                {t("home.hero.highlight")}
              </span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              {t("home.hero.description")}
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-2">
              {stats.map((s) => (
                <div key={s.value}>
                  <p className="text-3xl font-bold text-white">{s.value}</p>
                  <p className="text-sm text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/consultoria"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-7 py-3.5 font-semibold text-white transition-colors duration-200"
              >
                {t("home.hero.cta.services")}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="/contactos"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-7 py-3.5 font-semibold text-white transition-colors duration-200"
              >
                <ChatBubbleLeftRightIcon className="h-4 w-4" />
                {t("home.hero.cta.contact")}
              </a>
            </div>
          </div>

          {/* Right — logo */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/image/logos/logo.png"
              alt="MAEA Logo"
              width={380}
              height={380}
              className="w-full max-w-sm drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
