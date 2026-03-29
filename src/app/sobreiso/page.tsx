"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DocumentCheckIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  TrophyIcon,
  StarIcon,
  CogIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  HeartIcon,
  UserIcon,
  TruckIcon,
  BoltIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

// Seções da página principal
const MAIN_SECTIONS = [
  {
    icon: DocumentCheckIcon,
    titleKey: "services.business.title",
    descriptionKey: "services.business.description",
    href: "/consultoria",
    color: "blue"
  },
  {
    icon: GlobeAltIcon,
    titleKey: "services.environmental.title",
    descriptionKey: "services.environmental.description",
    href: "/consultoria",
    color: "green"
  },
  {
    icon: DocumentCheckIcon,
    titleKey: "services.certification.title",
    descriptionKey: "services.certification.description",
    href: "/sobreiso",
    color: "purple"
  },
  {
    icon: AcademicCapIcon,
    titleKey: "services.training.title",
    descriptionKey: "services.training.description",
    href: "/consultoria",
    color: "orange"
  },
  {
    icon: CogIcon,
    titleKey: "services.technical.title",
    descriptionKey: "services.technical.description",
    href: "/consultoria",
    color: "red"
  },
  {
    icon: BuildingOfficeIcon,
    titleKey: "services.petroleum.title",
    descriptionKey: "services.petroleum.description",
    href: "/consultoria",
    color: "indigo"
  }
];

const ADDITIONAL_SERVICES = [
  {
    icon: ShieldCheckIcon,
    titleKey: "additional.services.audit.title",
    descriptionKey: "additional.services.audit.description",
    href: "/consultoria"
  },
  {
    icon: AcademicCapIcon,
    titleKey: "additional.services.training.title",
    descriptionKey: "additional.services.training.description",
    href: "/consultoria"
  },
  {
    icon: CogIcon,
    titleKey: "additional.services.optimization.title",
    descriptionKey: "additional.services.optimization.description",
    href: "/consultoria"
  }
];

const WHY_MAEA_SECTIONS = [
  {
    icon: TrophyIcon,
    titleKey: "why.maea.certification.title",
    descriptionKey: "why.maea.certification.description"
  },
  {
    icon: UserGroupIcon,
    titleKey: "why.maea.consulting.title",
    descriptionKey: "why.maea.consulting.description"
  },
  {
    icon: ShieldCheckIcon,
    titleKey: "why.maea.support.title",
    descriptionKey: "why.maea.support.description"
  },
  {
    icon: StarIcon,
    titleKey: "why.maea.results.title",
    descriptionKey: "why.maea.results.description"
  },
  {
    icon: StarIcon,
    titleKey: "why.maea.excellence.title",
    descriptionKey: "why.maea.excellence.description"
  },
  {
    icon: HeartIcon,
    titleKey: "why.maea.recognition.title",
    descriptionKey: "why.maea.recognition.description"
  }
];

// Processo de Implementação
const CERTIFICATION_PROCESS = [
  {
    step: "01",
    titleKey: "certification.process.step1.title",
    descriptionKey: "certification.process.step1.description"
  },
  {
    step: "02",
    titleKey: "certification.process.step2.title",
    descriptionKey: "certification.process.step2.description"
  },
  {
    step: "03",
    titleKey: "certification.process.step3.title",
    descriptionKey: "certification.process.step3.description"
  },
  {
    step: "04",
    titleKey: "certification.process.step4.title",
    descriptionKey: "certification.process.step4.description"
  },
  {
    step: "05",
    titleKey: "certification.process.step5.title",
    descriptionKey: "certification.process.step5.description"
  },
  {
    step: "06",
    titleKey: "certification.process.step6.title",
    descriptionKey: "certification.process.step6.description"
  },
  {
    step: "07",
    titleKey: "certification.process.step7.title",
    descriptionKey: "certification.process.step7.description"
  }
];

const SOLUTIONS = [
  {
    id: "saude",
    icon: HeartIcon,
    titleKey: "solutions.health.title",
    descriptionKey: "solutions.health.description"
  },
  {
    id: "ti",
    icon: CogIcon,
    titleKey: "solutions.tech.title",
    descriptionKey: "solutions.tech.description"
  },
  {
    id: "gestao",
    icon: CogIcon,
    titleKey: "solutions.management.title",
    descriptionKey: "solutions.management.description"
  },
  {
    id: "seguranca",
    icon: ShieldCheckIcon,
    titleKey: "solutions.security.title",
    descriptionKey: "solutions.security.description"
  },
  {
    id: "transportes",
    icon: TruckIcon,
    titleKey: "solutions.transport.title",
    descriptionKey: "solutions.transport.description"
  },
  {
    id: "energia",
    icon: BoltIcon,
    titleKey: "solutions.energy.title",
    descriptionKey: "solutions.energy.description"
  },
  {
    id: "diversidade",
    icon: UserGroupIcon,
    titleKey: "solutions.diversity.title",
    descriptionKey: "solutions.diversity.description"
  },
  {
    id: "sustentabilidade",
    icon: GlobeAltIcon,
    titleKey: "solutions.sustainability.title",
    descriptionKey: "solutions.sustainability.description"
  },
  {
    id: "alimentacao",
    icon: GlobeAltIcon,
    titleKey: "solutions.food.title",
    descriptionKey: "solutions.food.description"
  },
  {
    id: "materiais",
    icon: AcademicCapIcon,
    titleKey: "solutions.materials.title",
    descriptionKey: "solutions.materials.description"
  },
  {
    id: "construcao",
    icon: BuildingOfficeIcon,
    titleKey: "solutions.construction.title",
    descriptionKey: "solutions.construction.description"
  },
  {
    id: "engenharia",
    icon: WrenchScrewdriverIcon,
    titleKey: "solutions.engineering.title",
    descriptionKey: "solutions.engineering.description"
  }
];



export default function SobreIsoPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
                     <div className="grid grid-cols-1 gap-12 items-center">
                         <div className="text-center max-w-4xl mx-auto">
              <Typography variant="h1" color="white" className="mb-6">
                {t('sobreiso.hero.title')}
              </Typography>
              <Typography variant="lead" color="white" className="mb-8 opacity-90">
                {t('sobreiso.hero.description')}
              </Typography>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  color="gray" 
                  variant="outlined" 
                  className="bg-gradient-to-r from-[#00847e]/10 to-[#00847e]/20 hover:from-[#00847e]/20 hover:to-[#00847e]/30 text-[#00847e] border-[#00847e] hover:text-[#00847e] font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <a href="/contactos" className="text-inherit">{t('sobreiso.hero.cta.contact')}</a>
                </Button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* O que é ISO */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              {t('sobreiso.what.title')}
            </Typography>
            <Typography variant="lead" className="text-gray-600 max-w-3xl mx-auto">
              {t('sobreiso.what.subtitle')}
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardBody className="p-6 text-center">
                <GlobeAltIcon className="h-12 w-12 text-[#00847e] mx-auto mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-3">
                  {t('sobreiso.what.international.title')}
                </Typography>
                <Typography variant="paragraph" className="text-gray-600">
                  {t('sobreiso.what.international.description')}
                </Typography>
              </CardBody>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardBody className="p-6 text-center">
                <CheckCircleIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-3">
                  {t('sobreiso.what.quality.title')}
                </Typography>
                <Typography variant="paragraph" className="text-gray-600">
                  {t('sobreiso.what.quality.description')}
                </Typography>
              </CardBody>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardBody className="p-6 text-center">
                <ShieldCheckIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-3">
                  {t('sobreiso.what.standards.title')}
                </Typography>
                <Typography variant="paragraph" className="text-gray-600">
                  {t('sobreiso.what.standards.description')}
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Soluções para os seus desafios */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              {t('sobreiso.solutions.title')}
            </Typography>
            <Typography variant="lead" className="text-gray-600 max-w-3xl mx-auto">
              {t('sobreiso.solutions.subtitle')}
            </Typography>
          </div>
          
          <div className="text-center mb-12">
            <Typography variant="h4" color="blue-gray" className="mb-4">
              {t('sobreiso.solutions.what_is.title')}
            </Typography>
            <Typography variant="paragraph" className="text-gray-600 max-w-2xl mx-auto">
              {t('sobreiso.solutions.what_is.description')}
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((solution, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardBody className="p-6 text-center">
                  <solution.icon className="h-12 w-12 text-[#00847e] mx-auto mb-4" />
                  <Typography variant="h5" color="blue-gray" className="mb-3">
                    {t(solution.titleKey)}
                  </Typography>
                  <Typography variant="paragraph" className="text-gray-600 mb-4">
                    {t(solution.descriptionKey)}
                  </Typography>
                  <Button 
                  variant="outlined" 
                  color="gray" 
                  size="sm" 
                  className="bg-gradient-to-r from-[#00847e]/10 to-[#00847e]/20 hover:from-[#00847e]/20 hover:to-[#00847e]/30 text-[#00847e] border-[#00847e] hover:text-[#00847e] font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                    <a href={`/solucoes#${solution.id}`}>{t('common.learn_more')}</a>
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher MAEA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              {t('sobreiso.why.title')}
            </Typography>
            <Typography variant="lead" className="text-gray-600 max-w-3xl mx-auto">
              {t('sobreiso.why.subtitle')}
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 w-full">
            {WHY_MAEA_SECTIONS.map((section, index) => (
              <div key={index} className="group bg-white/95 backdrop-blur-sm rounded-3xl p-10 border border-slate-100/80 shadow-xl hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-[1.02]">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-sky-500/30 transition-all duration-500">
                    <section.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-slate-900 font-bold text-xl">{t(section.titleKey)}</h4>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t(section.descriptionKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Implementação */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              {t('certification.process.title')}
            </Typography>
            <Typography variant="lead" className="text-gray-600 max-w-3xl mx-auto">
              {t('certification.process.subtitle')}
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATION_PROCESS.map((step, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardBody className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00847e] to-[#006d68] rounded-2xl flex items-center justify-center shadow-xl mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {step.step}
                    </span>
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-3">
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