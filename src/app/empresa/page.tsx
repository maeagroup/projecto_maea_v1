"use client";

import React from "react";
import Image from "next/image";
import { Navbar, Footer } from "@/components";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  StarIcon,
  TrophyIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  EyeIcon,
  CogIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  DocumentCheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export default function EmpresaPage() {
  const { t } = useLanguage();
  
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-[#004d4a] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px'}} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00847e]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00847e]/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#00847e]/20 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 border border-[#00847e]/30">
                <span className="flex h-2 w-2 rounded-full bg-[#00847e] animate-pulse"></span>
                {t('company.hero.badge')}
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t('company.hero.title')}
              </h1>
              <p className="text-lg text-teal-50/80 max-w-3xl mb-10 leading-relaxed">
                {t('company.hero.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/consultoria" 
                  className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#00847e] to-teal-600 px-8 py-4 text-white font-semibold shadow-lg shadow-[#00847e]/30 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
                >
                  {t('company.hero.cta.services')}
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
                <a 
                  href="/contactos" 
                  className="inline-flex items-center gap-3 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:border-[#00847e] hover:bg-[#00847e]/10 hover:scale-105 hover:-translate-y-1"
                >
                  {t('company.hero.cta.contact')}
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/image/logos/logo.png"
                alt="MAEA Logo"
                width={400}
                height={400}
                className="w-80 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MissÃ£o e VisÃ£o */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden">
              <div className="absolute top-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-[#00847e]/10 group-hover:bg-[#00847e]/20 transition-colors">
                <BuildingOfficeIcon className="h-6 w-6 text-[#00847e]" />
              </div>
              <span className="inline-flex items-center gap-2 bg-[#00847e]/10 text-[#00847e] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                {t('company.mission.badge') || 'MissÃ£o'}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {t('company.mission.title')}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('company.mission.description')}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden">
              <div className="absolute top-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-[#00847e]/10 group-hover:bg-[#00847e]/20 transition-colors">
                <GlobeAltIcon className="h-6 w-6 text-[#00847e]" />
              </div>
              <span className="inline-flex items-center gap-2 bg-[#00847e]/10 text-[#00847e] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                {t('company.vision.badge') || 'VisÃ£o'}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {t('company.vision.title')}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('company.vision.description')}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#00847e]/10 text-[#00847e] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <StarIcon className="w-4 h-4" />
              {t('company.values.badge') || 'Valores'}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              {t('company.values.title')}
            </h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              {t('company.values.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden">
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#00847e]/10 text-[#00847e] font-bold flex items-center justify-center text-lg">01</div>
              <div className="w-14 h-14 rounded-xl bg-[#00847e]/10 flex items-center justify-center mb-6 group-hover:bg-[#00847e]/20 transition-colors duration-300">
                <CheckCircleIcon className="h-7 w-7 text-[#00847e]" />
              </div>
              <h4 className="font-bold text-slate-900 text-lg mb-3">{t('company.values.excellence')}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{t('company.values.excellence.desc')}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden">
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#00847e]/10 text-[#00847e] font-bold flex items-center justify-center text-lg">02</div>
              <div className="w-14 h-14 rounded-xl bg-[#00847e]/10 flex items-center justify-center mb-6 group-hover:bg-[#00847e]/20 transition-colors duration-300">
                <UserGroupIcon className="h-7 w-7 text-[#00847e]" />
              </div>
              <h4 className="font-bold text-slate-900 text-lg mb-3">{t('company.values.team')}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{t('company.values.team.desc')}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden">
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#00847e]/10 text-[#00847e] font-bold flex items-center justify-center text-lg">03</div>
              <div className="w-14 h-14 rounded-xl bg-[#00847e]/10 flex items-center justify-center mb-6 group-hover:bg-[#00847e]/20 transition-colors duration-300">
                <GlobeAltIcon className="h-7 w-7 text-[#00847e]" />
              </div>
              <h4 className="font-bold text-slate-900 text-lg mb-3">{t('company.values.sustainability')}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{t('company.values.sustainability.desc')}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#00847e]/10 text-[#00847e] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <UserGroupIcon className="w-4 h-4" />
              {t('company.team.badge') || 'Equipa'}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              {t('company.team.title')}
            </h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              {t('company.team.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden text-center">
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#00847e]/10 text-[#00847e] font-bold flex items-center justify-center text-lg">01</div>
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-[#00847e]/10 rounded-xl group-hover:bg-[#00847e]/20 transition-colors">
                <UserIcon className="h-12 w-12 text-[#00847e]" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {t('company.team.elizabeth.name')}
              </h4>
              <p className="text-[#00847e] font-medium text-sm mb-3">
                {t('company.team.elizabeth.role')}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {t('company.team.elizabeth.description')}
              </p>
              
              <a 
                href="/portfolio-diretora-comercial" 
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#00847e] to-teal-600 px-6 py-2 text-white font-semibold text-sm shadow-lg shadow-[#00847e]/30 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                {t('company.portfolio.view')}
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden text-center">
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#00847e]/10 text-[#00847e] font-bold flex items-center justify-center text-lg">02</div>
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-[#00847e]/10 rounded-xl group-hover:bg-[#00847e]/20 transition-colors">
                <UserIcon className="h-12 w-12 text-[#00847e]" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {t('company.team.jesus.name')}
              </h4>
              <p className="text-[#00847e] font-medium text-sm mb-3">
                {t('company.team.jesus.role')}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {t('company.team.jesus.description')}
              </p>
              
              <a 
                href="/portfolio-ceo" 
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#00847e] to-teal-600 px-6 py-2 text-white font-semibold text-sm shadow-lg shadow-[#00847e]/30 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                {t('company.portfolio.view')}
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden text-center">
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#00847e]/10 text-[#00847e] font-bold flex items-center justify-center text-lg">03</div>
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-[#00847e]/10 rounded-xl group-hover:bg-[#00847e]/20 transition-colors">
                <UserIcon className="h-12 w-12 text-[#00847e]" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {t('company.team.borges.name')}
              </h4>
              <p className="text-[#00847e] font-medium text-sm mb-3">
                {t('company.team.borges.role')}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {t('company.team.borges.description')}
              </p>
              
              <a 
                href="/portfolio-borges" 
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#00847e] to-teal-600 px-6 py-2 text-white font-semibold text-sm shadow-lg shadow-[#00847e]/30 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                {t('company.portfolio.view')}
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* ExperiÃªncia e CertificaÃ§Ãµes */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#00847e]/10 text-[#00847e] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <TrophyIcon className="w-4 h-4" />
                {t('company.experience.badge') || 'ExperiÃªncia'}
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {t('company.experience.title')}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                {t('company.experience.description')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00847e] flex items-center justify-center mt-1">
                    <CheckCircleIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {t('company.experience.iso')}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00847e] flex items-center justify-center mt-1">
                    <CheckCircleIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {t('company.experience.petroleum')}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00847e] flex items-center justify-center mt-1">
                    <CheckCircleIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {t('company.experience.engineering')}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00847e] flex items-center justify-center mt-1">
                    <CheckCircleIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {t('company.experience.management')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Image
                src="/image/Certificacao_ISO.jpg"
                alt="CertificaÃ§Ã£o ISO"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
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
            {t('company.cta.badge') || 'PrÃ³ximo Passo'}
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('company.cta.title')}
          </h2>
          <p className="text-lg text-teal-50/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('company.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd0cyeGn-crDB5XFbffxfMTTu6FxeK8FhqNF4kXdc7do0WB6g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#00847e] to-teal-600 px-8 py-4 text-white font-semibold shadow-lg shadow-[#00847e]/30 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              {t('company.cta.contact')}
              <ArrowRightIcon className="w-5 h-5" />
            </a>
            <a
              href="/consultoria"
              className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:border-[#00847e] hover:bg-[#00847e]/10 hover:scale-105 hover:-translate-y-1"
            >
              {t('company.cta.services')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
