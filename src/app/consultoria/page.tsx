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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              {t('consulting.services.title')}
            </Typography>
            <Typography variant="lead" className="text-gray-600 max-w-3xl mx-auto">
              {t('consulting.services.subtitle')}
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {CONSULTING_SERVICES.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={t(service.titleKey)}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardBody className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <service.icon className="h-10 w-10 text-[#00847e]" />
                    <Typography variant="h4" color="blue-gray">
                      {t(service.titleKey)}
                    </Typography>
                  </div>
                  <Typography variant="paragraph" className="text-gray-600 mb-6">
                    {t(service.descriptionKey)}
                  </Typography>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <Typography variant="small" className="text-gray-700">
                          {t(feature)}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Typography variant="h2" color="blue-gray" className="mb-6">
                {t('consulting.benefits.title')}
              </Typography>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <ChartBarIcon className="h-8 w-8 text-[#00847e] mt-1" />
                  <div>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {t('consulting.benefits.results.title')}
                    </Typography>
                    <Typography variant="paragraph" className="text-gray-600">
                      {t('consulting.benefits.results.description')}
                    </Typography>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <UserGroupIcon className="h-8 w-8 text-[#00847e] mt-1" />
                  <div>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {t('consulting.benefits.team.title')}
                    </Typography>
                    <Typography variant="paragraph" className="text-gray-600">
                      {t('consulting.benefits.team.description')}
                    </Typography>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <GlobeAltIcon className="h-8 w-8 text-[#00847e] mt-1" />
                  <div>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {t('consulting.benefits.sustainable.title')}
                    </Typography>
                    <Typography variant="paragraph" className="text-gray-600">
                      {t('consulting.benefits.sustainable.description')}
                    </Typography>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <DocumentCheckIcon className="h-8 w-8 text-[#00847e] mt-1" />
                  <div>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {t('consulting.benefits.support.title')}
                    </Typography>
                    <Typography variant="paragraph" className="text-gray-600">
                      {t('consulting.benefits.support.description')}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Image
                src="/image/nossos.jpg"
                alt="Consultoria MAEA"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <Typography variant="h2" color="white" className="mb-6">
            {t('consulting.cta.title')}
          </Typography>
          <Typography variant="lead" color="white" className="mb-8 opacity-90 max-w-3xl mx-auto">
            {t('consulting.cta.description')}
          </Typography>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contactos">
              <Button 
                color="gray" 
                variant="filled" 
                className="bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                {t('consulting.cta.consulting')}
              </Button>
            </Link>
            <Link href="/contactos?subject=expert">
              <Button color="white" variant="outlined">
                {t('consulting.cta.expert')}
              </Button>
            </Link>
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