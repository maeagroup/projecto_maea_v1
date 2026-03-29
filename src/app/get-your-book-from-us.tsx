"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ShieldCheckIcon,
  AcademicCapIcon,
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    icon: ShieldCheckIcon,
    iconBg: "bg-emerald-600",
    title: "why.maea.certification.title",
    description: "why.maea.certification.description",
  },
  {
    icon: AcademicCapIcon,
    iconBg: "bg-blue-600",
    title: "why.maea.consulting.title",
    description: "why.maea.consulting.description",
  },
  {
    icon: ClockIcon,
    iconBg: "bg-amber-500",
    title: "why.maea.support.title",
    description: "why.maea.support.description",
  },
  {
    icon: CheckCircleIcon,
    iconBg: "bg-green-600",
    title: "why.maea.results.title",
    description: "why.maea.results.description",
  },
  {
    icon: StarIcon,
    iconBg: "bg-purple-600",
    title: "why.maea.excellence.title",
    description: "why.maea.excellence.description",
  },
  {
    icon: TrophyIcon,
    iconBg: "bg-orange-500",
    title: "why.maea.recognition.title",
    description: "why.maea.recognition.description",
  },
];

export function GetYourBookFromUs() {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 py-20 lg:py-28 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            MAEA
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            {t("why.maea.title")}
          </h2>
          <p className="mt-5 text-slate-500 text-base leading-relaxed">
            {t("why.maea.subtitle")}
          </p>
        </div>

        {/* Grid 2×3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, iconBg, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-8"
            >
              <div className={`w-11 h-11 ${iconBg} rounded-xl flex items-center justify-center mb-5`}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {t(title)}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t(description)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GetYourBookFromUs;
