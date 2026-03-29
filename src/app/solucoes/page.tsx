"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  HeartIcon,
  CogIcon,
  ShieldCheckIcon,
  TruckIcon,
  BoltIcon,
  UserGroupIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  DocumentCheckIcon,
  CheckCircleIcon,
  StarIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const SOLUTIONS = [
  {
    id: "saude",
    icon: HeartIcon,
    titleKey: "solutions.health.title",
    descriptionKey: "solutions.health.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: CheckCircleIcon,
        titleKey: "certification.iso13485.title",
        descriptionKey: "certification.iso13485.description",
        color: "emerald"
      },
      {
        icon: ShieldCheckIcon,
        titleKey: "certification.iso45001.title",
        descriptionKey: "certification.iso45001.description",
        color: "amber"
      }
    ]
  },
  {
    id: "ti",
    icon: CogIcon,
    titleKey: "solutions.tech.title",
    descriptionKey: "solutions.tech.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: ShieldCheckIcon,
        titleKey: "certification.iso27001.title",
        descriptionKey: "certification.iso27001.description",
        color: "slate"
      },
      {
        icon: StarIcon,
        titleKey: "certification.iso20000.title",
        descriptionKey: "certification.iso20000.description",
        color: "sky"
      }
    ]
  },
  {
    id: "gestao",
    icon: CogIcon,
    titleKey: "solutions.management.title",
    descriptionKey: "solutions.management.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: StarIcon,
        titleKey: "certification.iso10002.title",
        descriptionKey: "certification.iso10002.description",
        color: "amber"
      },
      {
        icon: WrenchScrewdriverIcon,
        titleKey: "certification.iso10006.title",
        descriptionKey: "certification.iso10006.description",
        color: "slate"
      }
    ]
  },
  {
    id: "seguranca",
    icon: ShieldCheckIcon,
    titleKey: "solutions.security.title",
    descriptionKey: "solutions.security.description",
    certifications: [
      {
        icon: ShieldCheckIcon,
        titleKey: "certification.iso45001.title",
        descriptionKey: "certification.iso45001.description",
        color: "amber"
      },
      {
        icon: ShieldCheckIcon,
        titleKey: "certification.iso27001.title",
        descriptionKey: "certification.iso27001.description",
        color: "slate"
      },
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      }
    ]
  },
  {
    id: "transportes",
    icon: TruckIcon,
    titleKey: "solutions.transport.title",
    descriptionKey: "solutions.transport.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: TruckIcon,
        titleKey: "certification.iso39001.title",
        descriptionKey: "certification.iso39001.description",
        color: "sky"
      },
      {
        icon: ShieldCheckIcon,
        titleKey: "certification.iso45001.title",
        descriptionKey: "certification.iso45001.description",
        color: "amber"
      }
    ]
  },
  {
    id: "energia",
    icon: BoltIcon,
    titleKey: "solutions.energy.title",
    descriptionKey: "solutions.energy.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: BoltIcon,
        titleKey: "certification.iso50001.title",
        descriptionKey: "certification.iso50001.description",
        color: "amber"
      },
      {
        icon: GlobeAltIcon,
        titleKey: "certification.iso14001.title",
        descriptionKey: "certification.iso14001.description",
        color: "emerald"
      }
    ]
  },
  {
    id: "diversidade",
    icon: UserGroupIcon,
    titleKey: "solutions.diversity.title",
    descriptionKey: "solutions.diversity.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: UserGroupIcon,
        titleKey: "certification.iso26000.title",
        descriptionKey: "certification.iso26000.description",
        color: "slate"
      },
      {
        icon: StarIcon,
        titleKey: "certification.iso10002.title",
        descriptionKey: "certification.iso10002.description",
        color: "amber"
      }
    ]
  },
  {
    id: "sustentabilidade",
    icon: GlobeAltIcon,
    titleKey: "solutions.sustainability.title",
    descriptionKey: "solutions.sustainability.description",
    certifications: [
      {
        icon: GlobeAltIcon,
        titleKey: "certification.iso14001.title",
        descriptionKey: "certification.iso14001.description",
        color: "emerald"
      },
      {
        icon: GlobeAltIcon,
        titleKey: "certification.iso14064.title",
        descriptionKey: "certification.iso14064.description",
        color: "emerald"
      },
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      }
    ]
  },
  {
    id: "alimentacao",
    icon: GlobeAltIcon,
    titleKey: "solutions.food.title",
    descriptionKey: "solutions.food.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: GlobeAltIcon,
        titleKey: "certification.iso22000.title",
        descriptionKey: "certification.iso22000.description",
        color: "emerald"
      },
      {
        icon: ShieldCheckIcon,
        titleKey: "certification.iso45001.title",
        descriptionKey: "certification.iso45001.description",
        color: "amber"
      }
    ]
  },
  {
    id: "materiais",
    icon: AcademicCapIcon,
    titleKey: "solutions.materials.title",
    descriptionKey: "solutions.materials.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: AcademicCapIcon,
        titleKey: "certification.iso17025.title",
        descriptionKey: "certification.iso17025.description",
        color: "slate"
      },
      {
        icon: GlobeAltIcon,
        titleKey: "certification.iso14001.title",
        descriptionKey: "certification.iso14001.description",
        color: "emerald"
      }
    ]
  },
  {
    id: "construcao",
    icon: BuildingOfficeIcon,
    titleKey: "solutions.construction.title",
    descriptionKey: "solutions.construction.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: BuildingOfficeIcon,
        titleKey: "certification.iso14001.title",
        descriptionKey: "certification.iso14001.description",
        color: "emerald"
      },
      {
        icon: ShieldCheckIcon,
        titleKey: "certification.iso45001.title",
        descriptionKey: "certification.iso45001.description",
        color: "amber"
      }
    ]
  },
  {
    id: "engenharia",
    icon: WrenchScrewdriverIcon,
    titleKey: "solutions.engineering.title",
    descriptionKey: "solutions.engineering.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: WrenchScrewdriverIcon,
        titleKey: "certification.iso10006.title",
        descriptionKey: "certification.iso10006.description",
        color: "amber"
      },
      {
        icon: GlobeAltIcon,
        titleKey: "certification.iso14001.title",
        descriptionKey: "certification.iso14001.description",
        color: "emerald"
      }
    ]
  }
];

export default function SolucoesPage() {
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
            {t('solucoes.hero.badge')}
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('solucoes.hero.title')}
          </h1>
          <p className="text-lg text-teal-50/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('solucoes.hero.description')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/sobreiso"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#00847e] to-teal-600 px-8 py-4 text-white font-semibold shadow-lg shadow-[#00847e]/30 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              {t('solucoes.hero.cta.certification')}
              <ArrowRightIcon className="w-5 h-5" />
            </a>
            <a
              href="/contactos"
              className="inline-flex items-center gap-3 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:border-[#00847e] hover:bg-[#00847e]/10 hover:scale-105 hover:-translate-y-1"
            >
              {t('solucoes.hero.cta.contact')}
            </a>
          </div>
        </div>
      </section>

      {/* Floating Side Navigation */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        {/* Vertical accent line */}
        <div className="absolute left-[18px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[#00847e]/30 to-transparent pointer-events-none" />

        <div className="relative flex flex-col gap-1 py-3 max-h-[70vh] overflow-y-auto pr-1"
          style={{scrollbarWidth: 'none'}}>
          {SOLUTIONS.map((solution, idx) => {
            const IconComponent = solution.icon;
            return (
              <a
                key={solution.id}
                href={`#${solution.id}`}
                className="group flex items-center gap-3 pl-1 pr-4 py-2 rounded-full text-xs font-medium text-slate-900 hover:text-[#00847e] transition-all duration-200 whitespace-nowrap hover:bg-white/80 hover:shadow-md hover:shadow-[#00847e]/10 hover:backdrop-blur-sm"
                title={t(solution.titleKey)}
              >
                {/* Dot indicator */}
                <span className="relative flex items-center justify-center w-7 h-7 flex-shrink-0">
                  <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-[#00847e]/10 transition-colors duration-200" />
                  <IconComponent className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00847e] transition-colors duration-200 relative z-10" />
                </span>
                <span className="truncate max-w-[110px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {t(solution.titleKey)}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Solution Sections */}
      {SOLUTIONS.map((solution, sectionIndex) => {
        const SectionIcon = solution.icon;
        return (
          <section
            key={solution.id}
            id={solution.id}
            className={`py-20 scroll-mt-20 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="max-w-5xl mx-auto px-6">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mb-12">
                <div className="w-16 h-16 rounded-2xl bg-[#00847e]/10 flex items-center justify-center flex-shrink-0">
                  <SectionIcon className="h-8 w-8 text-[#00847e]" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-[#00847e]/60 uppercase tracking-widest">
                      {String(sectionIndex + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px w-8 bg-[#00847e]/30" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                    {t(solution.titleKey)}
                  </h2>
                  <p className="text-slate-500 mt-2 max-w-2xl leading-relaxed">
                    {t(solution.descriptionKey)}
                  </p>
                </div>
              </div>

              {/* Certifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {solution.certifications.map((cert, index) => {
                  const CertIcon = cert.icon;
                  return (
                    <div
                      key={index}
                      className="group rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-6 relative overflow-hidden"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#00847e]/10 flex items-center justify-center mb-5 group-hover:bg-[#00847e]/20 transition-colors duration-300">
                        <CertIcon className="h-6 w-6 text-[#00847e]" />
                      </div>
                      <h4 className="font-semibold text-slate-900 text-base leading-snug mb-3">
                        {t(cert.titleKey)}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {t(cert.descriptionKey)}
                      </p>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-[#004d4a] to-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00847e]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00847e]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-[#00847e]/20 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 border border-[#00847e]/30">
            <span className="flex h-2 w-2 rounded-full bg-[#00847e] animate-pulse"></span>
            {t('solucoes.cta.badge')}
          </span>
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            {t('solucoes.cta.title')}
          </h2>
          <p className="text-lg text-teal-50/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('solucoes.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contactos"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#00847e] to-teal-600 px-8 py-4 text-white font-semibold shadow-lg shadow-[#00847e]/30 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              {t('solucoes.cta.contact')}
              <ArrowRightIcon className="w-5 h-5" />
            </a>
            <a
              href="/sobreiso"
              className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:border-[#00847e] hover:bg-[#00847e]/10 hover:scale-105 hover:-translate-y-1"
            >
              {t('solucoes.cta.certification')}
            </a>
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
} 