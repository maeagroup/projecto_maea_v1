"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ShieldCheckIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const SERVICES = [
  {
    icon: ShieldCheckIcon,
    title: "services.certification.title",
    desc: "services.certification.description",
    features: [
      "services.certification.feature1",
      "services.certification.feature2",
      "services.certification.feature3",
    ],
    bar: "bg-emerald-500",
    iconBg: "bg-emerald-600",
    dot: "bg-emerald-500",
    href: "/sobreiso",
  },
  {
    icon: BuildingOfficeIcon,
    title: "services.business.title",
    desc: "services.business.description",
    features: [
      "services.business.feature1",
      "services.business.feature2",
      "services.business.feature3",
    ],
    bar: "bg-blue-500",
    iconBg: "bg-blue-600",
    dot: "bg-blue-500",
    href: "/consultoria",
  },
  {
    icon: GlobeAltIcon,
    title: "services.environmental.title",
    desc: "services.environmental.description",
    features: [
      "services.environmental.feature1",
      "services.environmental.feature2",
      "services.environmental.feature3",
    ],
    bar: "bg-amber-500",
    iconBg: "bg-amber-500",
    dot: "bg-amber-500",
    href: "/consultoria",
  },
];

export function TopBookCategories() {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            {t("services.section.title")}
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Soluções que impulsionam{" "}
            <span className="text-blue-600">o seu negócio</span>
          </h2>
          <p className="mt-5 text-slate-500 text-base leading-relaxed">
            {t("services.section.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ icon: Icon, title, desc, features, bar, iconBg, dot, href }) => (
            <div
              key={title}
              className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Colour bar */}
              <div className={`h-1 ${bar}`} />

              <div className="flex flex-col flex-1 p-8">
                {/* Icon */}
                <div className={`w-11 h-11 ${iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {t(title)}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-7">
                  {t(desc)}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 flex-1 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${dot}`} />
                      <span className="text-slate-600 text-sm">{t(f)}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors duration-200"
                >
                  {t("common.learn_more")}
                  <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopBookCategories;
