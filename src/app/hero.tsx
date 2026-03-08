"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
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
} from "@heroicons/react/24/solid";

function Hero() {
  const { t } = useLanguage();

  const features = [
    { icon: CheckCircleIcon, label: '500+ Clientes' },
    { icon: TrophyIcon, label: 'ISO Certified' },
    { icon: CogIcon, label: 'Consultoria' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-900 py-12 lg:py-20">
      {/* Premium Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/30 to-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-600/20 to-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-slate-600/5 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top Badge Section */}
          <div className="flex justify-center mb-8 animate-slideInLeft">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-400/30 rounded-full px-6 py-3 backdrop-blur-md">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-blue-300">{t('home.hero.badge') || 'Especialistas em Gestão da Qualidade'}</span>
              </span>
              <span className="hidden sm:inline text-blue-300/60">•</span>
              <span className="hidden sm:inline text-xs text-blue-300/80">Angola 🇦🇴</span>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Section */}
            <div className="space-y-8 animate-fadeIn">
              {/* Main Title with Gradient */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight">
                  <span className="block">{t('home.hero.title')}</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {t('home.hero.highlight') || 'Seu Sucesso'}
                  </span>
                </h1>
                <div className="flex gap-2">
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
                </div>
              </div>

              {/* Description with better typography */}
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
                {t('home.hero.description')}
              </p>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                <div className="group relative bg-gradient-to-br from-blue-500/10 to-emerald-500/5 backdrop-blur-md border border-blue-400/30 rounded-xl p-5 hover:from-blue-500/20 hover:to-emerald-500/10 hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{t('home.hero.stat1') || 'Clientes'}</div>
                </div>
                <div className="group relative bg-gradient-to-br from-purple-500/10 to-blue-500/5 backdrop-blur-md border border-purple-400/30 rounded-xl p-5 hover:from-purple-500/20 hover:to-blue-500/10 hover:border-purple-400/50 transition-all duration-500 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">10+</div>
                  <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Anos</div>
                </div>
                <div className="group relative bg-gradient-to-br from-amber-500/10 to-orange-500/5 backdrop-blur-md border border-amber-400/30 rounded-xl p-5 hover:from-amber-500/20 hover:to-orange-500/10 hover:border-amber-400/50 transition-all duration-500 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">ISO</div>
                  <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Certificado</div>
                </div>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 pt-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <feature.icon className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-slate-300">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons - Enhanced */}
              <div className="flex flex-wrap gap-4 pt-8">
                <a
                  href="/consultoria"
                  className="group relative inline-flex items-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1"
                >
                  <span className="absolute inset-0 top-0 h-0 w-full bg-gradient-to-b from-white/20 to-transparent transition-all duration-500 group-hover:h-full"></span>
                  <span className="relative flex items-center gap-2">
                    {t('home.hero.cta.services') || 'Iniciar Consultoria'}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                <a
                  href="/contactos"
                  className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold py-4 px-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  {t('home.hero.cta.contact') || 'Fale Conosco'}
                </a>
              </div>
            </div>

            {/* Logo Section - Enhanced */}
            <div className="relative flex justify-center items-center min-h-96 lg:min-h-full animate-slideInRight">
              {/* Floating Cards Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-72 h-72 bg-gradient-to-br from-blue-600/20 to-emerald-600/10 rounded-3xl blur-3xl opacity-40 animate-blob"></div>
                <div className="absolute w-80 h-80 bg-gradient-to-tl from-purple-600/10 to-blue-600/20 rounded-3xl blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              </div>

              {/* Main Logo with Frame */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-emerald-500/20 rounded-2xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/image/logos/logo.png"
                    alt="MAEA Logo"
                    width={400}
                    height={400}
                    className="w-full max-w-md drop-shadow-2xl animate-float"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-20 right-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-5 w-5 text-emerald-400" />
                  <span className="text-sm text-white font-semibold">ISO 9001</span>
                </div>
              </div>

              <div className="absolute bottom-20 left-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <TrophyIcon className="h-5 w-5 text-amber-400" />
                  <span className="text-sm text-white font-semibold">Award Winner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trustmark Section */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <p className="text-center text-slate-400 text-sm mb-6">Confiado por líderes de empresas em Angola</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <span className="text-slate-400 flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
                <span className="text-xs font-semibold">Certificação ISO</span>
              </span>
              <span className="text-slate-400 flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
                <span className="text-xs font-semibold">Auditoria Completa</span>
              </span>
              <span className="text-slate-400 flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
                <span className="text-xs font-semibold">Suporte 24/7</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
