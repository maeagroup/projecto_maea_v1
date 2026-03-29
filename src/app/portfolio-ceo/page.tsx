"use client";

import React from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  StarIcon,
  TrophyIcon,
  UserIcon,
  ArrowLeftIcon,
  DocumentCheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export default function PortfolioCEOPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-slate-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Navigation Button */}
            <div className="mb-8">
              <Button 
                color="white" 
                variant="outlined" 
                size="sm"
                className="backdrop-blur-sm border-white/30 text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <a href="/empresa" className="flex items-center gap-2 text-white">
                  <ArrowLeftIcon className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
                  Voltar à Empresa
                </a>
              </Button>
            </div>
            
            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
              {/* Left Side - Text Content */}
              <div className="flex-1 text-center lg:text-left space-y-8">
                {/* Name and Title */}
                <div className="space-y-4">
                  <div className="inline-block">
                    <Typography variant="h1" color="white" className="mb-2 font-bold tracking-tight">
                      JESUS AFONSO
                    </Typography>
                    <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-blue-400 rounded-full mx-auto lg:mx-0"></div>
                  </div>
                  
                  <Typography variant="h2" color="white" className="font-light opacity-95 text-2xl lg:text-3xl">
                    CEO
                  </Typography>
                  
                  {/* Professional Badges */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-6">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                      ✨ Liderança Executiva
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                      🎯 Gestão Estratégica
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                      📈 Inovação Tecnológica
                    </span>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 py-6">
                  <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-slate-300">10+</div>
                    <div className="text-sm text-white/80">Anos Experiência</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-slate-300">15+</div>
                    <div className="text-sm text-white/80">Certificações</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 lg:col-span-1 col-span-2">
                    <div className="text-2xl font-bold text-slate-300">100%</div>
                    <div className="text-sm text-white/80">Compromisso</div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Profile Image */}
              <div className="flex-shrink-0 mt-8 lg:mt-0">
                <div className="relative group">
                  {/* Main Profile Container */}
                  <div className="w-64 h-80 rounded-2xl border-4 border-white/40 shadow-2xl overflow-hidden bg-gradient-to-br from-slate-200 via-blue-200 to-emerald-200 transform group-hover:scale-105 transition-all duration-500">
                    <div className="w-full h-full flex items-center justify-center text-[#00847e] relative">
                      <UserIcon className="w-40 h-40 group-hover:scale-110 transition-transform duration-500" />
                      
                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-slate-500 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
                      <div className="absolute top-1/2 left-4 w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-500"></div>
                    </div>
                  </div>
                  
                  {/* Decorative Ring */}
                  <div className="absolute -inset-4 border-2 border-slate-400/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
            
            {/* Professional Message */}
            <div className="mt-12 p-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
              <div className="text-center space-y-6">
                {/* Quote Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-slate-500 to-blue-500 rounded-full">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                <Typography variant="h3" color="white" className="font-light italic text-2xl lg:text-3xl leading-relaxed">
                  "Liderança é a arte de inspirar outros a alcançar o que parecia impossível"
                </Typography>
                
                <Typography variant="paragraph" color="white" className="text-lg leading-relaxed opacity-90 max-w-4xl mx-auto">
                  Como CEO da MAEA, comprometo-me a conduzir a empresa com visão estratégica, 
                  inovação constante e compromisso com a excelência. Nossa missão é transformar 
                  desafios em oportunidades, construindo um futuro sustentável e próspero para 
                  todos os nossos stakeholders.
                </Typography>
                
                {/* Decorative Dots */}
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full animate-pulse delay-300"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-slate-400 rounded-full animate-pulse delay-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
        </div>
        
        <div className="mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-slate-500 to-blue-500 rounded-full mx-auto mb-4"></div>
              <Typography variant="h2" color="slate-900" className="mb-4 font-bold tracking-wider text-3xl lg:text-4xl">
                H A B I L I D A D E S
              </Typography>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto"></div>
            </div>
            <Typography variant="lead" className="text-gray-600 max-w-2xl mx-auto text-lg">
              Conjunto abrangente de competências técnicas e certificações para liderança executiva eficaz
            </Typography>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Certificações ISO */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="slate-900" className="font-bold text-xl mb-2">
                        Certificações ISO
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Skills List */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'ISO 9001:2015 – Sistema de Gestão de Qualidade',
                        'ISO 20000 - Principles of IT Service Management System (ITSM)',
                        'ISO/IEC 17021-3:2017 – Conformity Assessment'
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-emerald-500 group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {skill}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                        Quality Standards
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Gestão de Projetos */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="slate-900" className="font-bold text-xl mb-2">
                        Gestão de Projetos
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Skills List */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'PMP – Project Management Professional',
                        'Program Management Professional PMIPgMP®',
                        'Google Project Management',
                        'Project Management in Construction',
                        'Microsoft 365 Project Management'
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-sky-500 group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {skill}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-xs font-semibold rounded-full">
                        Project Excellence
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Tecnologia SAP */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="slate-900" className="font-bold text-xl mb-2">
                        Tecnologia SAP
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Skills List */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'SAP Technology Consultant',
                        'Software Development on SAP HANA',
                        'Migrating SAP Workloads to AWS'
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-amber-500 group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {skill}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                        SAP Expert
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Microsoft & Cloud */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="slate-900" className="font-bold text-xl mb-2">
                        Microsoft & Cloud
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Skills List */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'Windows Server Management and Security',
                        'System Administration and IT Infrastructure',
                        'Microsoft IT Support Specialist',
                        'Microsoft IT Support',
                        'Administração de Sistemas Microsoft'
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-slate-500 group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {skill}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                        Microsoft Certified
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
            
            {/* Skills Summary */}
            <div className="mt-16 text-center">
              <div className="inline-block p-8 bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl border border-slate-100 shadow-lg">
                <Typography variant="h4" color="slate-900" className="mb-4 font-semibold">
                  Perfil de Competências Executivas
                </Typography>
                <Typography variant="paragraph" className="text-gray-600 max-w-3xl mx-auto mb-6">
                  Combinação equilibrada de certificações ISO, gestão de projetos, tecnologias SAP e Microsoft para liderança executiva eficaz e desenvolvimento empresarial sustentável.
                </Typography>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">3 Certificações ISO</span>
                  <span className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">5 Gestão de Projetos</span>
                  <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">3 Tecnologias SAP</span>
                  <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">5 Microsoft & Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto mb-4"></div>
              <Typography variant="h2" color="slate-900" className="mb-4 font-bold tracking-wider text-3xl lg:text-4xl">
                E X P E R I Ê N C I A P R O F I S S I O N A L
              </Typography>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full mx-auto"></div>
            </div>
            <Typography variant="lead" className="text-gray-600 max-w-2xl mx-auto text-lg">
              Trajetória profissional marcada por liderança, inovação e crescimento contínuo
            </Typography>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-sky-500 to-amber-500"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* MAEA - 2023-Present (Mais recente) */}
                <div className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-l-4 border-emerald-500 border-0 bg-white/90 backdrop-blur-sm">
                      <CardBody className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <BriefcaseIcon className="h-10 w-10 text-emerald-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Typography variant="h4" color="slate-900" className="font-bold">
                                Maea, lda
                              </Typography>
                              <span className="px-4 py-2 text-sm text-emerald-700 bg-emerald-50 rounded-full font-semibold border border-emerald-200">
                                NOV 2023 - PRESENT
                              </span>
                            </div>
                            <Typography variant="h5" color="emerald-700" className="mb-4 font-semibold">
                              CEO
                            </Typography>
                            <Typography variant="paragraph" className="text-slate-600 mb-4 leading-relaxed">
                              Liderança executiva, gestão estratégica da empresa, tomada de decisões corporativas, desenvolvimento de políticas empresariais e representação institucional.
                            </Typography>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">Liderança Executiva</span>
                              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">Gestão Estratégica</span>
                              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">Tomada de Decisões</span>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </div>

                {/* MATI CLINIC ANGOLA - 2022 */}
                <div className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-l-4 border-amber-500 border-0 bg-white/90 backdrop-blur-sm">
                      <CardBody className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="w-20 h-20 bg-gradient-to-r from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <BriefcaseIcon className="h-10 w-10 text-amber-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Typography variant="h4" color="slate-900" className="font-bold">
                                MATI CLINIC ANGOLA
                              </Typography>
                              <span className="px-4 py-2 text-sm text-amber-700 bg-amber-50 rounded-full font-semibold border border-amber-200">
                                2022
                              </span>
                            </div>
                            <Typography variant="h5" color="amber-700" className="mb-4 font-semibold">
                              Administrator de Sistema / Analista de Dados
                            </Typography>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                              <div>
                                <Typography variant="h6" color="slate-700" className="mb-2 font-semibold text-sm">
                                  Administração de Sistema:
                                </Typography>
                                <ul className="space-y-1 text-sm text-slate-600">
                                  <li>• Gerenciamento de Infraestrutura</li>
                                  <li>• Active Directory (AD) e Segurança</li>
                                  <li>• Backup e Recuperação</li>
                                </ul>
                              </div>
                              <div>
                                <Typography variant="h6" color="slate-700" className="mb-2 font-semibold text-sm">
                                  Analista de Dados:
                                </Typography>
                                <ul className="space-y-1 text-sm text-slate-600">
                                  <li>• Coleta e Limpeza de Dados</li>
                                  <li>• Análise e Visualização</li>
                                  <li>• Automação e Otimização</li>
                                </ul>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">Infraestrutura</span>
                              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">Análise de Dados</span>
                              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">Segurança</span>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </div>

                {/* UPLOAD-AO - 2017-2019 */}
                <div className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-slate-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-l-4 border-slate-500 border-0 bg-white/90 backdrop-blur-sm">
                      <CardBody className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="w-20 h-20 bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <BriefcaseIcon className="h-10 w-10 text-slate-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Typography variant="h4" color="slate-900" className="font-bold">
                                UPLOAD-AO, LDA
                              </Typography>
                              <span className="px-4 py-2 text-sm text-slate-600 bg-slate-50 rounded-full font-semibold border border-slate-200">
                                JAN 2017 - DEZ 2019
                              </span>
                            </div>
                            <Typography variant="h5" color="slate-700" className="mb-4 font-semibold">
                              Auditor Líder
                            </Typography>
                            <Typography variant="paragraph" className="text-slate-600 mb-4 leading-relaxed">
                              Liderança de equipas de auditoria, planeamento e execução de auditorias de sistemas de gestão, avaliação de conformidade com padrões ISO, elaboração de relatórios de auditoria e recomendações de melhoria.
                            </Typography>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Auditoria Líder</span>
                              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Sistemas de Gestão</span>
                              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">Conformidade ISO</span>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Formation */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto mb-4"></div>
              <Typography variant="h2" color="slate-900" className="mb-4 font-bold tracking-wider text-3xl lg:text-4xl">
                F O R M A Ç Ã O A C A D É M I C A
              </Typography>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full mx-auto"></div>
            </div>
            <Typography variant="lead" className="text-gray-600 max-w-2xl mx-auto text-lg">
              Base educacional sólida em engenharia informática e tecnologias avançadas
            </Typography>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              <Card className="relative shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <CardBody className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-sky-100 to-sky-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <AcademicCapIcon className="h-10 w-10 text-sky-600" />
                    </div>
                    <div className="flex-1">
                      <Typography variant="h4" color="slate-900" className="mb-3 font-bold">
                        Universidade Óscar Ribas
                      </Typography>
                      <div className="mb-4">
                        <span className="px-4 py-2 text-sm text-sky-700 bg-sky-50 rounded-full font-semibold border border-sky-200">
                          2017 - 2021
                        </span>
                      </div>
                      <Typography variant="h5" color="sky-700" className="mb-3 font-semibold">
                        Engenharia Informática e Comunicações
                      </Typography>
                      <Typography variant="paragraph" className="text-slate-600 leading-relaxed">
                        Formação completa em engenharia informática com foco em comunicações, sistemas distribuídos e tecnologias emergentes.
                      </Typography>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-medium rounded-full">Engenharia</span>
                        <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-medium rounded-full">Informática</span>
                        <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-medium rounded-full">Comunicações</span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              <Card className="relative shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <CardBody className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <AcademicCapIcon className="h-10 w-10 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <Typography variant="h4" color="slate-900" className="mb-3 font-bold">
                        Instituto Médio Politécnico Alda Lara
                      </Typography>
                      <div className="mb-4">
                        <span className="px-4 py-2 text-sm text-emerald-700 bg-emerald-50 rounded-full font-semibold border border-emerald-200">
                          2013 - 2015
                        </span>
                      </div>
                      <Typography variant="h5" color="emerald-700" className="mb-3 font-semibold">
                        Informática
                      </Typography>
                      <Typography variant="paragraph" className="text-slate-600 leading-relaxed">
                        Formação técnica em informática fornecendo base sólida em programação, sistemas e tecnologias da informação.
                      </Typography>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">Técnico</span>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">Informática</span>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">Programação</span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Experience */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-amber-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full mx-auto mb-4"></div>
              <Typography variant="h2" color="slate-900" className="mb-4 font-bold tracking-wider text-3xl lg:text-4xl">
                E X P E R I Ê N C I A D E E N S I N O
              </Typography>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-sky-500 rounded-full mx-auto"></div>
            </div>
            <Typography variant="lead" className="text-gray-600 max-w-2xl mx-auto text-lg">
              Compromisso com a partilha de conhecimento e desenvolvimento de competências
            </Typography>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              <Card className="relative shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <CardBody className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-sky-100 to-sky-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <AcademicCapIcon className="h-10 w-10 text-sky-600" />
                    </div>
                    <div className="flex-1">
                      <Typography variant="h4" color="slate-900" className="mb-3 font-bold">
                        VANTAGEM + Consultoria e Formação
                      </Typography>
                      <div className="mb-4">
                        <span className="px-4 py-2 text-sm text-sky-700 bg-sky-50 rounded-full font-semibold border border-sky-200">
                          2022
                        </span>
                      </div>
                      <Typography variant="h5" color="sky-700" className="mb-3 font-semibold">
                        Formador de Excel Avançado
                      </Typography>
                      <Typography variant="paragraph" className="text-slate-600 leading-relaxed">
                        Formação especializada em Excel avançado para profissionais que necessitam de competências avançadas em análise de dados e automação.
                      </Typography>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-medium rounded-full">Excel Avançado</span>
                        <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-medium rounded-full">Formação</span>
                        <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-medium rounded-full">Análise de Dados</span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              <Card className="relative shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <CardBody className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <AcademicCapIcon className="h-10 w-10 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <Typography variant="h4" color="slate-900" className="mb-3 font-bold">
                        Instituto Médio Politécnico Privado Devir
                      </Typography>
                      <div className="mb-4">
                        <span className="px-4 py-2 text-sm text-emerald-700 bg-emerald-50 rounded-full font-semibold border border-emerald-200">
                          2023 - 2024
                        </span>
                      </div>
                      <Typography variant="h5" color="emerald-700" className="mb-3 font-semibold">
                        Professor de Disciplinas Técnicas
                      </Typography>
                      <Typography variant="paragraph" className="text-slate-600 leading-relaxed mb-4">
                        Docência em disciplinas fundamentais da área de informática, incluindo programação, bases de dados e lógica computacional.
                      </Typography>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="text-sm text-slate-600">
                          <div className="font-semibold text-emerald-700">Disciplinas:</div>
                          <ul className="mt-1 space-y-1">
                            <li>• Base de Dados</li>
                            <li>• Programação I e II</li>
                            <li>• Lógica de Programação</li>
                          </ul>
                        </div>
                        <div className="text-sm text-slate-600">
                          <div className="font-semibold text-emerald-700">Aplicações:</div>
                          <ul className="mt-1 space-y-1">
                            <li>• Informática Aplicada</li>
                            <li>• Contabilidade</li>
                            <li>• Siac</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">Docência</span>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">Programação</span>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">Bases de Dados</span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              <Card className="relative shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <CardBody className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <AcademicCapIcon className="h-10 w-10 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <Typography variant="h4" color="slate-900" className="mb-3 font-bold">
                        Centro de Formação CENGEST
                      </Typography>
                      <div className="mb-4">
                        <span className="px-4 py-2 text-sm text-amber-700 bg-amber-50 rounded-full font-semibold border border-amber-200">
                          2019 – 2021
                        </span>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Typography variant="h5" color="amber-700" className="mb-2 font-semibold">
                            1. Formação Office Avançado
                          </Typography>
                          <Typography variant="paragraph" className="text-slate-600 leading-relaxed">
                            Formação especializada em Excel, Word e PowerPoint avançado para profissionais que necessitam de competências avançadas em produtividade.
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="h5" color="amber-700" className="mb-2 font-semibold">
                            2. Formação de Programação
                          </Typography>
                          <Typography variant="paragraph" className="text-slate-600 leading-relaxed">
                            Formação em linguagens de programação C e C# para desenvolvimento de aplicações e sistemas.
                          </Typography>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">Office Avançado</span>
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">Programação C/C#</span>
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">Formação Técnica</span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <Typography variant="h2" color="white" className="mb-6 font-bold text-3xl lg:text-4xl">
              Interessado em Colaborar?
            </Typography>
            <Typography variant="lead" color="white" className="opacity-90 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
              Entre em contacto para discutir oportunidades de parceria, consultoria ou projetos colaborativos. 
              Vamos transformar ideias em realidade através da inovação e excelência técnica.
            </Typography>
            
            <div className="flex flex-wrap gap-6 justify-center">
              {/* Botão Principal - Contactar */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-0 min-w-[200px]"
                >
                  <a href="/contactos" className="flex items-center gap-3 text-white">
                    <div className="relative">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-emerald-500 animate-pulse"></div>
                    </div>
                    <span className="text-lg">Contactar</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </Button>
              </div>

              {/* Botão Secundário - Voltar à Empresa */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-slate-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-0 min-w-[200px]"
                >
                  <a href="/empresa" className="flex items-center gap-3 text-white">
                    <div className="relative">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-slate-500 animate-pulse"></div>
                    </div>
                    <span className="text-lg">Voltar à Empresa</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="mt-12 flex items-center justify-center gap-3">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-slate-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to-emerald-400 rounded-full animate-pulse delay-600"></div>
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
