"use client";

import {
  ShieldCheckIcon,
  CogIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { useLanguage } from "@/contexts/LanguageContext";

const PILLARS = [
  {
    icon: CogIcon,
    bar: "bg-blue-500",
    iconBg: "bg-blue-600",
    checkColor: "text-blue-500",
    title: "services.integrated.compliance.title",
    items: [
      {
        title: "services.integrated.compliance.local.title",
        desc:   "services.integrated.compliance.local.description",
      },
      {
        title: "services.integrated.compliance.audit.title",
        desc:   "services.integrated.compliance.audit.description",
      },
      {
        title: "services.integrated.compliance.esg.title",
        desc:   "services.integrated.compliance.esg.description",
      },
    ],
  },
  {
    icon: ShieldCheckIcon,
    bar: "bg-emerald-500",
    iconBg: "bg-emerald-600",
    checkColor: "text-emerald-500",
    title: "services.integrated.certifications.title",
    items: [
      {
        title: "services.integrated.certifications.iso.title",
        desc:   "services.integrated.certifications.iso.description",
      },
      {
        title: "services.integrated.certifications.security.title",
        desc:   "services.integrated.certifications.security.description",
      },
      {
        title: "services.integrated.certifications.api.title",
        desc:   "services.integrated.certifications.api.description",
      },
    ],
  },
  {
    icon: ExclamationTriangleIcon,
    bar: "bg-amber-500",
    iconBg: "bg-amber-500",
    checkColor: "text-amber-500",
    title: "services.integrated.risk.title",
    items: [
      {
        title: "services.integrated.risk.hazop.title",
        desc:   "services.integrated.risk.hazop.description",
      },
      {
        title: "services.integrated.risk.hazid.title",
        desc:   "services.integrated.risk.hazid.description",
      },
      {
        title: "services.integrated.risk.prevention.title",
        desc:   "services.integrated.risk.prevention.description",
      },
    ],
  },
];

export function CarouselFeatures() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            {t("services.integrated.title")}
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Abordagem integrada{" "}
            <span className="text-blue-600">em cada projeto</span>
          </h2>
          <p className="mt-5 text-slate-500 text-base leading-relaxed">
            {t("services.integrated.description")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PILLARS.map(({ icon: Icon, bar, iconBg, checkColor, title, items }) => (
            <div
              key={title}
              className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Colour bar */}
              <div className={`h-1 ${bar}`} />

              <div className="p-8 flex flex-col gap-6">
                {/* Icon + Title */}
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {t(title)}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-5">
                  {items.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <CheckCircleIcon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${checkColor}`} />
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {t(item.title)}
                        </p>
                        <p className="text-sm text-slate-500 leading-relaxed mt-0.5">
                          {t(item.desc)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarouselFeatures;
