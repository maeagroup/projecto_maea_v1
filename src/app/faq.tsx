"use client";
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDownIcon, PhoneIcon, StarIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const FAQ_ITEMS = [
  { question: "faq.time.title",      answer: "faq.time.description" },
  { question: "faq.benefits.title",  answer: "faq.benefits.description" },
  { question: "faq.support.title",   answer: "faq.support.description" },
  { question: "faq.difference.title",answer: "faq.difference.description" },
  { question: "faq.mandatory.title", answer: "faq.mandatory.description" },
  { question: "faq.audit.title",     answer: "faq.audit.description" },
  { question: "faq.companies.title", answer: "faq.companies.description" },
  { question: "faq.costs.title",     answer: "faq.costs.description" },
];

export default function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#00847e 1px, transparent 1px), linear-gradient(to right, #00847e 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#00847e]/10 text-[#00847e] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <QuestionMarkCircleIcon className="w-4 h-4" />
            {t('faq.section.badge')}
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight whitespace-pre-line">
            {t('faq.section.title')}
          </h2>

          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            {t('faq.section.subtitle')}
          </p>
        </div>

        {/* ── Accordion ── */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#00847e]/40 bg-[#00847e]/[0.03] shadow-md"
                    : "border-slate-200 bg-white hover:border-[#00847e]/30 hover:shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left flex items-center gap-5 px-6 py-5"
                >
                  {/* Number badge */}
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#00847e] text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`flex-1 font-semibold text-base leading-snug transition-colors duration-300 ${
                      isOpen ? "text-[#00847e]" : "text-slate-800"
                    }`}
                  >
                    {t(item.question)}
                  </span>

                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[#00847e] text-white rotate-180"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 ml-13">
                    {/* left accent line */}
                    <div className="flex gap-4">
                      <div className="w-0.5 bg-[#00847e]/30 rounded-full flex-shrink-0 ml-[15px]" />
                      <p className="text-slate-600 text-sm leading-relaxed pl-4">
                        {t(item.answer)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center mt-16">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#00847e] via-[#006d68] to-[#004d4a] rounded-3xl p-12 shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20 shadow-lg">
                <QuestionMarkCircleIcon className="h-10 w-10 text-white" />
              </div>

              <h3 className="text-4xl font-bold text-white mb-4">
                {t('faq.cta.title')}
              </h3>
              <p className="text-white/75 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
                {t('faq.cta.description')}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
                {(['faq.cta.badge1', 'faq.cta.badge2', 'faq.cta.badge3'] as const).map((key) => (
                  <div key={key} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                    <span className="text-white/90 text-sm font-medium">{t(key)}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contactos"
                  className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-[#00847e] font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[220px] justify-center"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span className="text-base">{t('faq.cta.button')}</span>
                </a>
                <a
                  href="/planos"
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 min-w-[220px] justify-center"
                >
                  <StarIcon className="h-5 w-5" />
                  <span className="text-base">{t('faq.cta.plans')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
