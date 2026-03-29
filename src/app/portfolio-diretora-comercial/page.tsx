"use client";

import React from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  StarIcon,
  TrophyIcon,
  UserIcon,
  ArrowLeftIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UsersIcon,
  GlobeAltIcon,
  DocumentCheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export default function PortfolioDiretoraComercialPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
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
                      ELIZABETH NARCISO
                    </Typography>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto lg:mx-0"></div>
                  </div>
                  
                  <Typography variant="h2" color="white" className="font-light opacity-95 text-2xl lg:text-3xl">
                    Diretora Comercial
                  </Typography>
                  
                  {/* Professional Badges */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-6">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                      ✨ 5+ Anos de Experiência
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                      🎯 Gestão Comercial
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                      📈 Desenvolvimento de Negócios
                    </span>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 py-6">
                  <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-purple-300">5+</div>
                    <div className="text-sm text-white/80">Anos Experiência</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-purple-300">3</div>
                    <div className="text-sm text-white/80">Áreas de Especialização</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 lg:col-span-1 col-span-2">
                    <div className="text-2xl font-bold text-purple-300">100%</div>
                    <div className="text-sm text-white/80">Compromisso</div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Profile Image */}
              <div className="flex-shrink-0 mt-8 lg:mt-0">
                <div className="relative group">
                  {/* Main Profile Container */}
                  <div className="w-64 h-80 rounded-2xl border-4 border-white/40 shadow-2xl overflow-hidden bg-gradient-to-br from-purple-200 via-pink-200 to-indigo-200 transform group-hover:scale-105 transition-all duration-500">
                    <div className="w-full h-full flex items-center justify-center text-purple-600 relative">
                      <UserIcon className="w-40 h-40 group-hover:scale-110 transition-transform duration-500" />
                      
                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-6 left-6 w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-1000"></div>
                      <div className="absolute top-1/2 left-4 w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-500"></div>
                    </div>
                  </div>
                  
                  {/* Decorative Ring */}
                  <div className="absolute -inset-4 border-2 border-purple-400/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
            
            {/* Professional Message */}
            <div className="mt-12 p-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
              <div className="text-center space-y-6">
                {/* Quote Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                <Typography variant="h3" color="white" className="font-light italic text-2xl lg:text-3xl leading-relaxed">
                  "Buscando novas oportunidades para contribuir ativamente"
                </Typography>
                
                <Typography variant="paragraph" color="white" className="text-lg leading-relaxed opacity-90 max-w-4xl mx-auto">
                  Diretora Comercial com mais de cinco anos de experiência em áreas diversas, incluindo serviços de rádio, atendimento ao público e gestão comercial. 
                  Possui bases sólidas em Informática, Web Jornalismo e Marketing Digital, acumulando um vasto leque de habilidades e conhecimentos. 
                  Atualmente, lidera a estratégia comercial da MAEA, focando no desenvolvimento de negócios e expansão de mercado.
                </Typography>
                
                {/* Decorative Dots */}
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-indigo-400 rounded-full animate-pulse delay-300"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse delay-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
              <Typography variant="h2" color="blue-gray" className="mb-4 font-bold tracking-wider text-3xl lg:text-4xl">
                H A B I L I D A D E S T É C N I C A S
              </Typography>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full mx-auto"></div>
            </div>
            <Typography variant="lead" className="text-gray-600 max-w-2xl mx-auto text-lg">
              Conjunto abrangente de competências técnicas e soft skills para liderança comercial eficaz
            </Typography>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Gestão Comercial */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="blue-gray" className="font-bold text-xl mb-2">
                        Gestão Comercial
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Skills List */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'Estratégia de Vendas',
                        'Desenvolvimento de Negócios',
                        'Gestão de Clientes',
                        'Análise de Mercado',
                        'Marketing Digital'
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-purple-500 group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {skill}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Core Competency
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Habilidades Pessoais */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="blue-gray" className="font-bold text-xl mb-2">
                        Habilidades Pessoais
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Skills List */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'Liderança',
                        'Comunicação',
                        'Negociação',
                        'Gestão de Equipas'
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-pink-500 group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {skill}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Soft Skills
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Ferramentas e Software */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="blue-gray" className="font-bold text-xl mb-2">
                        Ferramentas e Software
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Skills List */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'Office 365',
                        'CRM',
                        'Primavera',
                        'Biogest',
                        'Zappy Software'
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-indigo-500 group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {skill}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Tech Stack
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Competências Adicionais */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="blue-gray" className="font-bold text-xl mb-2">
                        Competências Adicionais
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Skills List */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'Planeamento Estratégico',
                        'Análise de Dados',
                        'Gestão de Projetos',
                        'Relações Públicas'
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
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Advanced Skills
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
            
            {/* Skills Summary */}
            <div className="mt-16 text-center">
              <div className="inline-block p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl border border-purple-100 shadow-lg">
                <Typography variant="h4" color="blue-gray" className="mb-4 font-semibold">
                  Perfil de Competências Integrado
                </Typography>
                <Typography variant="paragraph" className="text-gray-600 max-w-3xl mx-auto mb-6">
                  Combinação equilibrada de habilidades técnicas, soft skills e ferramentas para liderança comercial eficaz e desenvolvimento de negócios sustentáveis.
                </Typography>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">5+ Anos Experiência</span>
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">4 Áreas de Especialização</span>
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">15+ Habilidades Técnicas</span>
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">100% Compromisso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-4"></div>
              <Typography variant="h2" color="blue-gray" className="mb-4 font-bold tracking-wider text-3xl lg:text-4xl">
                I D I O M A S
              </Typography>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
            </div>
            <Typography variant="lead" className="text-gray-600 max-w-2xl mx-auto text-lg">
              Competências linguísticas para comunicação global e expansão de negócios internacionais
            </Typography>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Português */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col items-center text-center">
                    {/* Language Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    
                    {/* Language Info */}
                    <Typography variant="h4" color="blue-gray" className="font-bold text-2xl mb-3">
                      Português
                    </Typography>
                    
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-[#00847e]/20 text-[#00847e] text-sm font-semibold rounded-full">
                        Nativo
                      </span>
                    </div>
                    
                    {/* Proficiency Details */}
                    <div className="space-y-3 text-left w-full">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Compreensão</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Fala</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Escrita</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100 w-full">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Língua Materna
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Inglês */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col items-center text-center">
                    {/* Language Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    
                    {/* Language Info */}
                    <Typography variant="h4" color="blue-gray" className="font-bold text-2xl mb-3">
                      Inglês
                    </Typography>
                    
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-[#00847e]/20 text-[#00847e] text-sm font-semibold rounded-full">
                        Nível B1
                      </span>
                    </div>
                    
                    {/* Proficiency Details */}
                    <div className="space-y-3 text-left w-full">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Compreensão</span>
                        <div className="flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                          ))}
                          {[...Array(2)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-gray-300 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Fala</span>
                        <div className="flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                          ))}
                          {[...Array(2)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-gray-300 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Escrita</span>
                        <div className="flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                          ))}
                          {[...Array(2)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-gray-300 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100 w-full">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Intermediário
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
            
            {/* Language Summary */}
            <div className="mt-16 text-center">
              <div className="inline-block p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 shadow-lg">
                <Typography variant="h4" color="blue-gray" className="mb-4 font-semibold">
                  Competências Linguísticas
                </Typography>
                <Typography variant="paragraph" className="text-gray-600 max-w-3xl mx-auto mb-6">
                  Capacidade de comunicação em português nativo e inglês intermediário, permitindo interação eficaz em contextos nacionais e internacionais.
                </Typography>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">Português Nativo</span>
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">Inglês B1</span>
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">Comunicação Eficaz</span>
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">Contexto Internacional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
              <Typography variant="h2" color="blue-gray" className="mb-4 font-bold tracking-wider text-3xl lg:text-4xl">
                P R I N C I P A I S C O N Q U I S T A S
              </Typography>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-emerald-500 rounded-full mx-auto"></div>
            </div>
            <Typography variant="lead" className="text-gray-600 max-w-2xl mx-auto text-lg">
              Marcos significativos na carreira profissional que demonstram competência e liderança
            </Typography>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Liderança Comercial */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col text-center">
                    {/* Achievement Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <ChartBarIcon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Achievement Title */}
                    <Typography variant="h4" color="blue-gray" className="font-bold text-xl mb-4">
                      Liderança Comercial
                    </Typography>
                    
                    {/* Achievement Description */}
                    <Typography variant="paragraph" className="text-gray-600 mb-6 flex-1 leading-relaxed">
                      Diretora Comercial na MAEA com foco em estratégia de negócios e desenvolvimento de mercado, liderando equipas e implementando estratégias de crescimento.
                    </Typography>
                    
                    {/* Achievement Metrics */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <span className="text-sm text-purple-700 font-medium">Posição</span>
                        <span className="text-sm text-purple-700 font-semibold">Diretora</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <span className="text-sm text-purple-700 font-medium">Empresa</span>
                        <span className="text-sm text-purple-700 font-semibold">MAEA</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <span className="text-sm text-purple-700 font-medium">Foco</span>
                        <span className="text-sm text-purple-700 font-semibold">Estratégia</span>
                      </div>
                    </div>
                    
                    {/* Footer Badge */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Liderança Executiva
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Experiência Multidisciplinar */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col text-center">
                    {/* Achievement Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <UsersIcon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Achievement Title */}
                    <Typography variant="h4" color="blue-gray" className="font-bold text-xl mb-4">
                      Experiência Multidisciplinar
                    </Typography>
                    
                    {/* Achievement Description */}
                    <Typography variant="paragraph" className="text-gray-600 mb-6 flex-1 leading-relaxed">
                      Mais de 5 anos de experiência em áreas diversas incluindo rádio, atendimento ao público, secretariado e gestão comercial, demonstrando versatilidade e adaptabilidade.
                    </Typography>
                    
                    {/* Achievement Metrics */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                        <span className="text-sm text-pink-700 font-medium">Experiência</span>
                        <span className="text-sm text-pink-700 font-semibold">5+ Anos</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                        <span className="text-sm text-pink-700 font-medium">Áreas</span>
                        <span className="text-sm text-pink-700 font-semibold">4 Setores</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                        <span className="text-sm text-pink-700 font-medium">Versatilidade</span>
                        <span className="text-sm text-pink-700 font-semibold">Alta</span>
                      </div>
                    </div>
                    
                    {/* Footer Badge */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Versatilidade
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Competências Técnicas */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col text-center">
                    {/* Achievement Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <TrophyIcon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Achievement Title */}
                    <Typography variant="h4" color="blue-gray" className="font-bold text-xl mb-4">
                      Competências Técnicas
                    </Typography>
                    
                    {/* Achievement Description */}
                    <Typography variant="paragraph" className="text-gray-600 mb-6 flex-1 leading-relaxed">
                      Domínio avançado de ferramentas como Office 365, Biogest, Primavera, Zappy Software e CRM, combinado com habilidades de gestão e análise de dados.
                    </Typography>
                    
                    {/* Achievement Metrics */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                        <span className="text-sm text-emerald-700 font-medium">Ferramentas</span>
                        <span className="text-sm text-emerald-700 font-semibold">5+ Apps</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                        <span className="text-sm text-emerald-700 font-medium">Nível</span>
                        <span className="text-sm text-emerald-700 font-semibold">Avançado</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                        <span className="text-sm text-emerald-700 font-medium">Aplicação</span>
                        <span className="text-sm text-emerald-700 font-semibold">Gestão</span>
                      </div>
                    </div>
                    
                    {/* Footer Badge */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Excelência Técnica
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
            
            {/* Achievements Summary */}
            <div className="mt-16 text-center">
              <div className="inline-block p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl border border-purple-100 shadow-lg">
                <Typography variant="h4" color="blue-gray" className="mb-4 font-semibold">
                  Perfil de Conquistas Profissionais
                </Typography>
                <Typography variant="paragraph" className="text-gray-600 max-w-3xl mx-auto mb-6">
                  Trajetória marcada por liderança, versatilidade e excelência técnica, demonstrando capacidade de adaptação e crescimento profissional contínuo.
                </Typography>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">Liderança Executiva</span>
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">Versatilidade</span>
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">Excelência Técnica</span>
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">Crescimento Contínuo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Typography variant="h2" color="white" className="mb-4">
              Interessado em Colaborar?
            </Typography>
            <Typography variant="lead" color="white" className="opacity-90 mb-8 max-w-3xl mx-auto">
              Entre em contacto para discutir oportunidades de parceria, consultoria ou projetos colaborativos.
            </Typography>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                color="white" 
                variant="filled" 
                className="bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                <a href="/contactos" className="text-slate-900">Contactar</a>
              </Button>
              <Button color="white" variant="outlined">
                <a href="/empresa" className="text-white">Voltar à Empresa</a>
              </Button>
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
