"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  BuildingOfficeIcon,
  GlobeAltIcon,
  DocumentCheckIcon,
  AcademicCapIcon,
  BeakerIcon,
  CogIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const CONSULTING_SERVICES = [
  {
    icon: BuildingOfficeIcon,
    titleKey: "consulting.services.business.title",
    descriptionKey: "consulting.services.business.description",
    image: "/image/Consultoria_empresarial.jpg",
    features: [
      "consulting.services.business.feature1",
      "consulting.services.business.feature2",
      "consulting.services.business.feature3",
      "consulting.services.business.feature4"
    ]
  },
  {
    icon: GlobeAltIcon,
    titleKey: "consulting.services.environmental.title",
    descriptionKey: "consulting.services.environmental.description",
    image: "/image/sustentabilidade_responsabilidade.jpg",
    features: [
      "consulting.services.environmental.feature1",
      "consulting.services.environmental.feature2",
      "consulting.services.environmental.feature3",
      "consulting.services.environmental.feature4"
    ]
  },
  {
    icon: DocumentCheckIcon,
    titleKey: "consulting.services.certification.title",
    descriptionKey: "consulting.services.certification.description",
            image: "/image/Certificacao_ISO.jpg",
    features: [
      "consulting.services.certification.feature1",
      "consulting.services.certification.feature2",
      "consulting.services.certification.feature3",
      "consulting.services.certification.feature4"
    ]
  },
  {
    icon: AcademicCapIcon,
    titleKey: "consulting.services.training.title",
    descriptionKey: "consulting.services.training.description",
    image: "/image/Treinamento_corporativos.jpg",
    features: [
      "consulting.services.training.feature1",
      "consulting.services.training.feature2",
      "consulting.services.training.feature3",
      "consulting.services.training.feature4"
    ]
  },
  {
    icon: BeakerIcon,
    titleKey: "consulting.services.technical.title",
    descriptionKey: "consulting.services.technical.description",
    image: "/image/Consultoria-Tecnica.jpg",
    features: [
      "consulting.services.technical.feature1",
      "consulting.services.technical.feature2",
      "consulting.services.technical.feature3",
      "consulting.services.technical.feature4"
    ]
  },
  {
    icon: CogIcon,
    titleKey: "consulting.services.petroleum.title",
    descriptionKey: "consulting.services.petroleum.description",
    image: "/image/Projetos_Setor_Petrolifero.jpg",
    features: [
      "consulting.services.petroleum.feature1",
      "consulting.services.petroleum.feature2",
      "consulting.services.petroleum.feature3",
      "consulting.services.petroleum.feature4"
    ]
  }
];

const PROCESS_STEPS = [
  {
    numberKey: "consulting.process.step1.number",
    titleKey: "consulting.process.step1.title",
    descriptionKey: "consulting.process.step1.description"
  },
  {
    numberKey: "consulting.process.step2.number",
    titleKey: "consulting.process.step2.title",
    descriptionKey: "consulting.process.step2.description"
  },
  {
    numberKey: "consulting.process.step3.number",
    titleKey: "consulting.process.step3.title",
    descriptionKey: "consulting.process.step3.description"
  },
  {
    numberKey: "consulting.process.step4.number",
    titleKey: "consulting.process.step4.title",
    descriptionKey: "consulting.process.step4.description"
  }
];

export default function ConsultoriaPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Typography variant="h1" color="white" className="mb-6">
              {t('consulting.hero.title')}
            </Typography>
            <Typography variant="lead" color="white" className="mb-8 max-w-4xl mx-auto opacity-90">
              {t('consulting.hero.description')}
            </Typography>
            <Button 
              color="white" 
              variant="filled" 
              className="bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              <a href="/contactos" className="text-slate-900">{t('consulting.hero.cta')}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços de Consultoria */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#00847e]/10 text-[#00847e] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <BuildingOfficeIcon className="w-4 h-4" />
              {t('consulting.services.badge')}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight whitespace-pre-line">
              {t('consulting.services.title')}
            </h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              {t('consulting.services.subtitle')}
            </p>
          </div>

          {/* Grid de Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONSULTING_SERVICES.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                  <Image
                    src={service.image}
                    alt={t(service.titleKey)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay número */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#00847e] text-white font-bold flex items-center justify-center text-lg shadow-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title with Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00847e]/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-5 w-5 text-[#00847e]" />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      {t(service.titleKey)}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {t(service.descriptionKey)}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#00847e] rounded-full flex-shrink-0 mt-1.5" />
                        <span className="text-slate-600 text-xs leading-relaxed">
                          {t(feature)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <a
                    href="/contactos"
                    className="inline-flex items-center gap-2 text-[#00847e] font-semibold text-sm mt-5 group/link hover:gap-3 transition-all duration-300"
                  >
                    {t('consulting.services.learn_more')}
                    <ArrowRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Consultoria */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              {t('consulting.process.title')}
            </Typography>
            <Typography variant="lead" className="text-gray-600 max-w-3xl mx-auto">
              {t('consulting.process.subtitle')}
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <Card key={index} className="shadow-lg text-center">
                <CardBody className="p-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Typography variant="h4" color="white" className="font-bold">
                      {t(step.numberKey)}
                    </Typography>
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-4">
                    {t(step.titleKey)}
                  </Typography>
                  <Typography variant="paragraph" className="text-gray-600">
                    {t(step.descriptionKey)}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#00847e]/10 text-[#00847e] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <ChartBarIcon className="w-4 h-4" />
              {t('consulting.benefits.badge')}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight whitespace-pre-line">
              {t('consulting.benefits.title')}
            </h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              {t('consulting.benefits.subtitle')}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: ChartBarIcon,
                titleKey: 'consulting.benefits.results.title',
                descriptionKey: 'consulting.benefits.results.description'
              },
              {
                icon: UserGroupIcon,
                titleKey: 'consulting.benefits.team.title',
                descriptionKey: 'consulting.benefits.team.description'
              },
              {
                icon: GlobeAltIcon,
                titleKey: 'consulting.benefits.sustainable.title',
                descriptionKey: 'consulting.benefits.sustainable.description'
              },
              {
                icon: DocumentCheckIcon,
                titleKey: 'consulting.benefits.support.title',
                descriptionKey: 'consulting.benefits.support.description'
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8"
                >
                  {/* Numbered Badge */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#00847e]/10 text-[#00847e] font-bold flex items-center justify-center text-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#00847e]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00847e]/20 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-[#00847e]" />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-lg leading-snug pt-2">
                      {t(benefit.titleKey)}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t(benefit.descriptionKey)}
                  </p>

                  {/* Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>

          {/* Image Section */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/image/nossos.jpg"
              alt="Consultoria MAEA"
              width={1200}
              height={400}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-[#004d4a] to-slate-900 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00847e]/10 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00847e]/10 rounded-full blur-3xl -z-0"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#00847e]/20 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 border border-[#00847e]/30">
            <span className="flex h-2 w-2 rounded-full bg-[#00847e] animate-pulse"></span>
            {t('consulting.cta.badge')}
          </span>

          {/* Title */}
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('consulting.cta.title')}
          </h2>

          {/* Description */}
          <p className="text-lg text-teal-50/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('consulting.cta.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/contactos">
              <button className="relative inline-flex items-center gap-3 rounded-xl border-0 bg-gradient-to-r from-[#00847e] to-teal-600 px-8 py-4 text-white font-semibold shadow-lg shadow-[#00847e]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#00847e]/40 hover:scale-105 hover:-translate-y-1">
                <span className="relative">
                  {t('consulting.cta.consulting')}
                </span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>

            <Link href="/contactos?subject=expert">
              <button className="inline-flex items-center gap-3 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:border-[#00847e] hover:bg-[#00847e]/10 hover:scale-105 hover:-translate-y-1">
                {t('consulting.cta.expert')}
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-[#00847e] mb-2">24h</div>
              <p className="text-sm text-teal-50/60">Resposta Garantida</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-[#00847e] mb-2">Sem Custos</div>
              <p className="text-sm text-teal-50/60">Diagnóstico Inicial</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-[#00847e] mb-2">Especialistas</div>
              <p className="text-sm text-teal-50/60">Equipa Certificada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed left-6 bottom-6 z-50 group">
        <div className="relative">
          <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-[#00847e]/30 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSd0cyeGn-crDB5XFbffxfMTTu6FxeK8FhqNF4kXdc7do0WB6g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar diagnóstico"
            className="relative inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-r from-[#00766f] to-[#00847e] px-5 py-3 text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#00847e]/30"
          >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25">
              <DocumentCheckIcon className="h-5 w-5" />
              </span>
              <div className="text-left leading-tight">
                <div className="text-[13px] font-semibold tracking-tight">
                  Solicite o seu diagnóstico
                </div>
                <div className="text-[11px] text-white/80 mt-0.5">
                  Resposta em até 24 horas
                </div>
              </div>
              <span className="ml-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </a>

          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
            <div className="text-center">
              <div className="font-medium">Diagnóstico Gratuito</div>
              <div className="text-xs text-slate-300">Abrir formulário</div>
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}