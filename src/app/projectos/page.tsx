"use client";

import React from "react";
import Image from "next/image";
import { Navbar, Footer } from "@/components";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  BuildingOfficeIcon,
  CheckCircleIcon,
  StarIcon,
  TrophyIcon,
  DocumentCheckIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  CogIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const PROJECTS = [
  {
    name: "TLCN",
    sector: "projects.tlcn.sector",
    icon: BuildingOfficeIcon,
    descriptionKey: "projects.tlcn.description",
    focusTitleKey: "projects.tlcn.focus.title",
    focuses: ["projects.tlcn.focus1", "projects.tlcn.focus2", "projects.tlcn.focus3"],
    certifications: [
      "ISO 9001:2015 - Gestão da Qualidade",
      "ISO 14001:2015 - Gestão Ambiental",
    ],
    processTitleKey: "projects.tlcn.process.title",
    steps: ["projects.tlcn.process.step1", "projects.tlcn.process.step2", "projects.tlcn.process.step3"],
    resultsTitleKey: "projects.tlcn.results.title",
    resultsDescriptionKey: "projects.tlcn.results.description",
  },
  {
    name: "O.M.F",
    sector: "projects.omf.sector",
    icon: CogIcon,
    descriptionKey: "projects.omf.description",
    focusTitleKey: "projects.omf.focus.title",
    focuses: ["projects.omf.focus1", "projects.omf.focus2", "projects.omf.focus3"],
    certifications: [
      "ISO 9001:2015 - Gestão da Qualidade",
      "ISO 45001:2018 - Segurança e Saúde Ocupacional",
      "API Q1 - Qualidade para Setor Petrolífero",
    ],
    processTitleKey: "projects.omf.process.title",
    steps: ["projects.omf.process.step1", "projects.omf.process.step2", "projects.omf.process.step3"],
    resultsTitleKey: "projects.omf.results.title",
    resultsDescriptionKey: "projects.omf.results.description",
  },
  {
    name: "Microtech",
    sector: "projects.microtech.sector",
    icon: CogIcon,
    descriptionKey: "projects.microtech.description",
    focusTitleKey: "projects.microtech.focus.title",
    focuses: ["projects.microtech.focus1", "projects.microtech.focus2", "projects.microtech.focus3"],
    certifications: [
      "ISO 9001:2015 - Gestão da Qualidade",
      "ISO 27001:2013 - Segurança da Informação",
      "ISO 20000-1:2018 - Gestão de Serviços de TI",
    ],
    processTitleKey: "projects.microtech.process.title",
    steps: ["projects.microtech.process.step1", "projects.microtech.process.step2", "projects.microtech.process.step3"],
    resultsTitleKey: "projects.microtech.results.title",
    resultsDescriptionKey: "projects.microtech.results.description",
  },
  {
    name: "Senega",
    sector: "projects.senega.sector",
    icon: ShieldCheckIcon,
    descriptionKey: "projects.senega.description",
    focusTitleKey: "projects.senega.focus.title",
    focuses: ["projects.senega.focus1", "projects.senega.focus2", "projects.senega.focus3"],
    certifications: [
      "ISO 9001:2015 - Gestão da Qualidade",
      "ISO 22000:2018 - Segurança Alimentar",
      "HACCP - Análise de Perigos e Pontos Críticos",
    ],
    processTitleKey: "projects.senega.process.title",
    steps: ["projects.senega.process.step1", "projects.senega.process.step2", "projects.senega.process.step3"],
    resultsTitleKey: "projects.senega.results.title",
    resultsDescriptionKey: "projects.senega.results.description",
  },
  {
    name: "Sofama",
    sector: "projects.sofama.sector",
    icon: UserGroupIcon,
    descriptionKey: "projects.sofama.description",
    focusTitleKey: "projects.sofama.focus.title",
    focuses: ["projects.sofama.focus1", "projects.sofama.focus2", "projects.sofama.focus3"],
    certifications: [
      "ISO 9001:2015 - Gestão da Qualidade",
      "ISO 14001:2015 - Gestão Ambiental",
    ],
    processTitleKey: "projects.sofama.process.title",
    steps: ["projects.sofama.process.step1", "projects.sofama.process.step2", "projects.sofama.process.step3"],
    resultsTitleKey: "projects.sofama.results.title",
    resultsDescriptionKey: "projects.sofama.results.description",
  },
];

export default function ProjectosPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-[#004d4a] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px'}} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00847e]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00847e]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-[#00847e]/20 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 border border-[#00847e]/30">
            <span className="flex h-2 w-2 rounded-full bg-[#00847e] animate-pulse"></span>
            {t('projects.hero.badge')}
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('projects.hero.title')}
          </h1>
          <p className="text-lg text-teal-50/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('projects.hero.description')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/consultoria"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#00847e] to-teal-600 px-8 py-4 text-white font-semibold shadow-lg shadow-[#00847e]/30 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              {t('projects.hero.cta.services')}
              <ArrowRightIcon className="w-5 h-5" />
            </a>
            <a
              href="/contactos"
              className="inline-flex items-center gap-3 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:border-[#00847e] hover:bg-[#00847e]/10 hover:scale-105 hover:-translate-y-1"
            >
              {t('projects.hero.cta.contact')}
            </a>
          </div>
        </div>
      </section>

      {/* Projetos de Implementação ISO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#00847e]/10 text-[#00847e] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <DocumentCheckIcon className="w-4 h-4" />
              {t('projects.implementation.badge')}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              {t('projects.implementation.title')}
            </h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              {t('projects.implementation.subtitle')}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg overflow-hidden ${index === 4 ? 'lg:col-span-2' : ''}`}
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-4 p-6 border-b border-slate-100">
                    <div className="w-14 h-14 rounded-xl bg-[#00847e]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00847e]/20 transition-colors duration-300">
                      <IconComponent className="h-7 w-7 text-[#00847e]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-slate-900">{project.name}</h3>
                        <span className="text-xs font-bold text-[#00847e]/60 uppercase tracking-widest">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-[#00847e] font-medium text-sm mt-0.5">{t(project.sector)}</p>
                    </div>
                  </div>

                  <div className={`p-6 ${index === 4 ? 'grid grid-cols-1 lg:grid-cols-2 gap-8' : ''}`}>
                    <div>
                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {t(project.descriptionKey)}
                      </p>

                      {/* Focus Areas */}
                      <div className="mb-5">
                        <h4 className="font-semibold text-slate-800 text-sm mb-3">{t(project.focusTitleKey)}</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.focuses.map((f, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 bg-[#00847e]/8 text-[#00847e] text-xs font-medium px-3 py-1.5 rounded-full border border-[#00847e]/20">
                              <CheckCircleIcon className="w-3 h-3" />
                              {t(f)}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Certifications */}
                      <div className="mb-5">
                        <h4 className="font-semibold text-slate-800 text-sm mb-3">{t(project.processTitleKey.replace('process', 'certification'))}</h4>
                        <div className="space-y-2">
                          {project.certifications.map((cert, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <DocumentCheckIcon className="h-4 w-4 text-[#00847e] flex-shrink-0" />
                              <span className="text-xs text-slate-600">{cert}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      {/* Process Steps */}
                      <div className="mb-5">
                        <h4 className="font-semibold text-slate-800 text-sm mb-3">{t(project.processTitleKey)}</h4>
                        <div className="space-y-3">
                          {project.steps.map((step, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-[#00847e] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                {i + 1}
                              </div>
                              <span className="text-xs text-slate-600 leading-relaxed">{t(step)}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="rounded-xl bg-gradient-to-br from-[#00847e]/8 to-transparent border border-[#00847e]/20 p-4">
                        <h4 className="font-semibold text-[#00847e] text-sm mb-2">{t(project.resultsTitleKey)}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{t(project.resultsDescriptionKey)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#00847e]/10 text-[#00847e] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <CogIcon className="w-4 h-4" />
              {t('projects.methodology.badge')}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              {t('projects.methodology.title')}
            </h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              {t('projects.methodology.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#00847e] text-white font-bold flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {step}
                </div>
                <h3 className="font-semibold text-slate-900 text-base mb-3">
                  {t(`projects.methodology.step${step}.title`)}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {t(`projects.methodology.step${step}.description`)}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados e Benefícios */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#00847e]/10 text-[#00847e] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <TrophyIcon className="w-4 h-4" />
              {t('projects.results.badge')}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              {t('projects.results.title')}
            </h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              {t('projects.results.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: TrophyIcon, titleKey: 'projects.results.certification.title', descKey: 'projects.results.certification.description', num: '01' },
              { icon: StarIcon, titleKey: 'projects.results.quality.title', descKey: 'projects.results.quality.description', num: '02' },
              { icon: GlobeAltIcon, titleKey: 'projects.results.market.title', descKey: 'projects.results.market.description', num: '03' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden">
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#00847e]/10 text-[#00847e] font-bold flex items-center justify-center text-lg">
                    {item.num}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-[#00847e]/10 flex items-center justify-center mb-6 group-hover:bg-[#00847e]/20 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-[#00847e]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-xl mb-4">{t(item.titleKey)}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{t(item.descKey)}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-[#004d4a] to-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00847e]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00847e]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-[#00847e]/20 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 border border-[#00847e]/30">
            <span className="flex h-2 w-2 rounded-full bg-[#00847e] animate-pulse"></span>
            {t('projects.cta.badge')}
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('projects.cta.title')}
          </h2>
          <p className="text-lg text-teal-50/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('projects.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contactos"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#00847e] to-teal-600 px-8 py-4 text-white font-semibold shadow-lg shadow-[#00847e]/30 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              {t('projects.cta.contact')}
              <ArrowRightIcon className="w-5 h-5" />
            </a>
            <a
              href="/consultoria"
              className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:border-[#00847e] hover:bg-[#00847e]/10 hover:scale-105 hover:-translate-y-1"
            >
              {t('projects.cta.services')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
