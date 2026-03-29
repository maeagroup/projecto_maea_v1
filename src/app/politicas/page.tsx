"use client";

import React from "react";
import Image from "next/image";
import { Navbar, Footer } from "@/components";
import { useLanguage } from "@/contexts/LanguageContext";
import { generateQRCodeDataURL, generateCompanyContactData } from "@/utils/qr-generator";
import {
  ShieldCheckIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  UserIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  CogIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  StarIcon,
  TrophyIcon,
  ExclamationTriangleIcon,
  PrinterIcon,
} from "@heroicons/react/24/solid";

const POLICIES = [
  {
    icon: ShieldCheckIcon,
    titleKey: "policies.impartiality.title",
    color: "blue",
    sections: [
      {
        subtitleKey: "policies.impartiality.objective.title",
        contentKey: "policies.impartiality.objective"
      },
      {
        subtitleKey: "policies.impartiality.commitment.title",
        contentKey: "policies.impartiality.commitment"
      },
      {
        subtitleKey: "policies.impartiality.structure.title",
        contentKey: "policies.impartiality.structure"
      },
      {
        subtitleKey: "policies.impartiality.risk.title",
        contentKey: "policies.impartiality.risk"
      },
      {
        subtitleKey: "policies.impartiality.conflict.title",
        contentKey: "policies.impartiality.conflict"
      },
      {
        subtitleKey: "policies.impartiality.monitoring.title",
        contentKey: "policies.impartiality.monitoring"
      }
    ]
  },
  {
    icon: DocumentTextIcon,
    titleKey: "policies.confidentiality.title",
    color: "green",
    sections: [
      {
        subtitleKey: "policies.confidentiality.objective.title",
        contentKey: "policies.confidentiality.objective"
      },
      {
        subtitleKey: "policies.confidentiality.principles.title",
        contentKey: "policies.confidentiality.principles"
      },
      {
        subtitleKey: "policies.confidentiality.scope.title",
        contentKey: "policies.confidentiality.scope"
      },
      {
        subtitleKey: "policies.confidentiality.agreements.title",
        contentKey: "policies.confidentiality.agreements"
      },
      {
        subtitleKey: "policies.confidentiality.management.title",
        contentKey: "policies.confidentiality.management"
      },
      {
        subtitleKey: "policies.confidentiality.exceptions.title",
        contentKey: "policies.confidentiality.exceptions"
      }
    ]
  },
  {
    icon: AcademicCapIcon,
    titleKey: "policies.competence.title",
    color: "purple",
    sections: [
      {
        subtitleKey: "policies.competence.objective.title",
        contentKey: "policies.competence.objective"
      },
      {
        subtitleKey: "policies.competence.commitment.title",
        contentKey: "policies.competence.commitment"
      },
      {
        subtitleKey: "policies.competence.scope.title",
        contentKey: "policies.competence.scope"
      },
      {
        subtitleKey: "policies.competence.recruitment.title",
        contentKey: "policies.competence.recruitment"
      },
      {
        subtitleKey: "policies.competence.training.title",
        contentKey: "policies.competence.training"
      },
      {
        subtitleKey: "policies.competence.evaluation.title",
        contentKey: "policies.competence.evaluation"
      }
    ]
  },
  {
    icon: UserIcon,
    titleKey: "policies.responsibility.title",
    color: "orange",
    sections: [
      {
        subtitleKey: "policies.responsibility.objective.title",
        contentKey: "policies.responsibility.objective"
      },
      {
        subtitleKey: "policies.responsibility.principles.title",
        contentKey: "policies.responsibility.principles"
      },
      {
        subtitleKey: "policies.responsibility.scope.title",
        contentKey: "policies.responsibility.scope"
      },
      {
        subtitleKey: "policies.responsibility.assignment.title",
        contentKey: "policies.responsibility.assignment"
      },
      {
        subtitleKey: "policies.responsibility.record.title",
        contentKey: "policies.responsibility.record"
      },
      {
        subtitleKey: "policies.responsibility.legal.title",
        contentKey: "policies.responsibility.legal"
      }
    ]
  },
  {
    icon: EyeIcon,
    titleKey: "policies.transparency.title",
    color: "teal",
    sections: [
      {
        subtitleKey: "policies.transparency.objective.title",
        contentKey: "policies.transparency.objective"
      },
      {
        subtitleKey: "policies.transparency.commitment.title",
        contentKey: "policies.transparency.commitment"
      },
      {
        subtitleKey: "policies.transparency.scope.title",
        contentKey: "policies.transparency.scope"
      },
      {
        subtitleKey: "policies.transparency.communication.title",
        contentKey: "policies.transparency.communication"
      },
      {
        subtitleKey: "policies.transparency.publication.title",
        contentKey: "policies.transparency.publication"
      },
      {
        subtitleKey: "policies.transparency.request.title",
        contentKey: "policies.transparency.request"
      }
    ]
  },
  {
    icon: ChatBubbleLeftRightIcon,
    titleKey: "policies.complaints.title",
    color: "red",
    sections: [
      {
        subtitleKey: "policies.complaints.objective.title",
        contentKey: "policies.complaints.objective"
      },
      {
        subtitleKey: "policies.complaints.definitions.title",
        contentKey: "policies.complaints.definitions"
      },
      {
        subtitleKey: "policies.complaints.commitment.title",
        contentKey: "policies.complaints.commitment"
      },
      {
        subtitleKey: "policies.complaints.reception.title",
        contentKey: "policies.complaints.reception"
      },
      {
        subtitleKey: "policies.complaints.evaluation.title",
        contentKey: "policies.complaints.evaluation"
      },
      {
        subtitleKey: "policies.complaints.decision.title",
        contentKey: "policies.complaints.decision"
      },
      {
        subtitleKey: "policies.complaints.deadline.title",
        contentKey: "policies.complaints.deadline"
      }
    ]
  },
  {
    icon: ClipboardDocumentCheckIcon,
    titleKey: "policies.audit.title",
    color: "indigo",
    sections: [
      {
        subtitleKey: "policies.audit.objective.title",
        contentKey: "policies.audit.objective"
      },
      {
        subtitleKey: "policies.audit.commitment.title",
        contentKey: "policies.audit.commitment"
      },
      {
        subtitleKey: "policies.audit.scope.title",
        contentKey: "policies.audit.scope"
      },
      {
        subtitleKey: "policies.audit.planning.title",
        contentKey: "policies.audit.planning"
      },
      {
        subtitleKey: "policies.audit.execution.title",
        contentKey: "policies.audit.execution"
      },
      {
        subtitleKey: "policies.audit.review.title",
        contentKey: "policies.audit.review"
      },
      {
        subtitleKey: "policies.audit.decision.title",
        contentKey: "policies.audit.decision"
      }
    ]
  },
  {
    icon: CogIcon,
    titleKey: "policies.management.title",
    color: "gray",
    sections: [
      {
        subtitleKey: "policies.management.objective.title",
        contentKey: "policies.management.objective"
      },
      {
        subtitleKey: "policies.management.commitment.title",
        contentKey: "policies.management.commitment"
      },
      {
        subtitleKey: "policies.management.structure.title",
        contentKey: "policies.management.structure"
      },
      {
        subtitleKey: "policies.management.responsibilities.title",
        contentKey: "policies.management.responsibilities"
      },
      {
        subtitleKey: "policies.management.monitoring.title",
        contentKey: "policies.management.monitoring"
      },
      {
        subtitleKey: "policies.management.improvement.title",
        contentKey: "policies.management.improvement"
      }
    ]
  },
  {
    icon: ExclamationTriangleIcon,
    titleKey: "policies.compliance.title",
    color: "amber",
    sections: [
      {
        subtitleKey: "policies.compliance.commitment.title",
        contentKey: "policies.compliance.commitment"
      },
      {
        subtitleKey: "policies.compliance.objective.title",
        contentKey: "policies.compliance.objective"
      },
      {
        subtitleKey: "policies.compliance.goals.title",
        contentKey: "policies.compliance.goals"
      },
      {
        subtitleKey: "policies.compliance.scope.title",
        contentKey: "policies.compliance.scope"
      },
      {
        subtitleKey: "policies.compliance.committee.title",
        contentKey: "policies.compliance.committee"
      },
      {
        subtitleKey: "policies.compliance.audit.title",
        contentKey: "policies.compliance.audit"
      },
      {
        subtitleKey: "policies.compliance.anti_discrimination.title",
        contentKey: "policies.compliance.anti_discrimination"
      },
      {
        subtitleKey: "policies.compliance.equal_opportunities.title",
        contentKey: "policies.compliance.equal_opportunities"
      },
      {
        subtitleKey: "policies.compliance.data_protection.title",
        contentKey: "policies.compliance.data_protection"
      },
      {
        subtitleKey: "policies.compliance.reporting.title",
        contentKey: "policies.compliance.reporting"
      },
      {
        subtitleKey: "policies.compliance.training.title",
        contentKey: "policies.compliance.training"
      },
      {
        subtitleKey: "policies.compliance.consequences.title",
        contentKey: "policies.compliance.consequences"
      }
    ]
  }
];

export default function PoliticasPage() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handlePrint = async () => {
    // Generate QR code data URL - temporarily disabled for build
    // const qrDataURL = await generateQRCodeDataURL(generateCompanyContactData(), 100);
    const qrDataURL = '';
    
    // Criar uma nova janela para impressão
    const printWindow = window.open('', '_blank');
    if (printWindow) {
             printWindow.document.write(`
         <!DOCTYPE html>
         <html>
         <head>
           <title>Políticas Institucionais - MAEA</title>
           <style>
             @media print {
               body { font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif; margin: 0; }
               .cover-page { 
                 height: 100vh; 
                 display: flex; 
                 flex-direction: column; 
                 justify-content: center; 
                 align-items: center; 
                 text-align: center; 
                 background: linear-gradient(135deg, #00847e 0%, #00847e 100%);
                 color: white;
                 padding: 40px;
                 page-break-after: always;
               }
               .logo-container {
                 margin-bottom: 40px;
                 padding: 30px;
                 background: rgba(255, 255, 255, 0.1);
                 border-radius: 20px;
                 backdrop-filter: blur(10px);
                 border: 2px solid rgba(255, 255, 255, 0.2);
               }
               .logo {
                 font-size: 48px;
                 font-weight: bold;
                 margin-bottom: 10px;
                 text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
               }
               .logo-subtitle {
                 font-size: 18px;
                 opacity: 0.9;
                 margin-bottom: 20px;
               }
               .cover-title {
                 font-size: 36px;
                 font-weight: bold;
                 margin-bottom: 20px;
                 text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
               }
               .cover-subtitle {
                 font-size: 20px;
                 margin-bottom: 30px;
                 opacity: 0.9;
               }
               .cover-info {
                 font-size: 16px;
                 opacity: 0.8;
                 margin-bottom: 10px;
               }
               .cover-divider {
                 width: 100px;
                 height: 4px;
                 background: white;
                 margin: 30px auto;
                 border-radius: 2px;
               }
                               .content-page {
                  margin: 20px;
                }
               .header { 
                 text-align: center; 
                 margin-bottom: 40px; 
                 border-bottom: 3px solid #00847e; 
                 padding-bottom: 20px; 
               }
               .header h1 { 
                 color: #00847e; 
                 font-size: 32px; 
                 margin-bottom: 15px; 
                 font-weight: bold;
               }
               .header p { 
                 color: #6b7280; 
                 font-size: 18px; 
                 margin-bottom: 10px;
               }
               .policy { 
                 margin-bottom: 50px; 
                 page-break-inside: avoid; 
               }
               .policy-title { 
                 color: #00847e; 
                 font-size: 22px; 
                 font-weight: bold; 
                 margin-bottom: 20px; 
                 border-left: 5px solid #00847e; 
                 padding-left: 20px; 
                 background: #f8fafc; 
                 padding: 15px 20px; 
                 border-radius: 5px; 
               }
               .section { 
                 margin-bottom: 25px; 
                 padding-left: 20px;
               }
               .section-title { 
                 font-weight: bold; 
                 color: #374151; 
                 font-size: 18px; 
                 margin-bottom: 10px; 
                 color: #00847e;
               }
               .section-content { 
                 color: #4b5563; 
                 font-size: 15px; 
                 line-height: 1.7; 
                 text-align: justify;
               }
               .footer { 
                 margin-top: 50px; 
                 text-align: center; 
                 border-top: 2px solid #d1d5db; 
                 padding-top: 30px; 
                 color: #6b7280; 
                 font-size: 14px; 
               }
               .toc {
                 margin-bottom: 40px;
                 page-break-after: always;
               }
               .toc h2 {
                 color: #00847e;
                 font-size: 24px;
                 margin-bottom: 20px;
                 text-align: center;
               }
               .toc-item {
                 margin-bottom: 10px;
                 padding: 8px 0;
                 border-bottom: 1px solid #e5e7eb;
               }
               .toc-number {
                 font-weight: bold;
                 color: #00847e;
                 margin-right: 10px;
               }
               @page { 
                 margin: 1in; 
               }
             </style>
         </head>
         <body>
           <!-- Capa Profissional -->
           <div class="cover-page">
             <div class="logo-container">
               <div class="logo">MAEA</div>
               <div class="logo-subtitle">SOLUTIONS</div>
             </div>
             
             <div class="cover-title">Políticas Institucionais</div>
             <div class="cover-subtitle">Compromisso com a Excelência e Conformidade</div>
             
             <div class="cover-divider"></div>
             
             <div class="cover-info">
               <strong>Documento Oficial</strong><br>
               Versão: 1.0<br>
               Data de Emissão: ${new Date().toLocaleDateString('pt-BR')}<br>
               Classificação: Interno
             </div>
           </div>
           
           <!-- Índice -->
           <div class="content-page">
             <div class="toc">
               <h2>Índice</h2>
               ${POLICIES.map((policy, index) => `
                 <div class="toc-item">
                   <span class="toc-number">${index + 1}.</span>
                   <span>${t(policy.titleKey)}</span>
                 </div>
               `).join('')}
             </div>
             
             <!-- Conteúdo das Políticas -->
             ${POLICIES.map((policy, index) => `
               <div class="policy">
                 <div class="policy-title">${index + 1}. ${t(policy.titleKey)}</div>
                 ${policy.sections.map(section => `
                   <div class="section">
                     <div class="section-title">${t(section.subtitleKey)}</div>
                     <div class="section-content">${t(section.contentKey)}</div>
                   </div>
                 `).join('')}
               </div>
             `).join('')}
             
                           <div class="footer">
               <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
                 <div style="flex: 1;">
                   <p><strong>MAEA</strong> | Documento Oficial</p>
                   <p>© ${new Date().getFullYear()} Todos os direitos reservados</p>
                 </div>
                 <div style="flex: 1; text-align: center;">
                   <div style="margin-bottom: 10px; font-size: 14px; color: #6b7280;">
                     <strong>Informações de Contacto</strong>
                   </div>
                   <img src="${qrDataURL}" alt="QR Code - MAEA" style="width: 100px; height: 100px; margin: 0 auto; border: 1px solid #d1d5db; border-radius: 8px;" />
                   <div style="font-size: 12px; color: #6b7280; margin-top: 5px;">
                     Escaneie para contactar
                   </div>
                 </div>
                 <div style="flex: 1; text-align: right;">
                   <p><strong>Telefone:</strong> +244 948 607 248</p>
                   <p><strong>Website:</strong> www.maea.ao</p>
                   <p><strong>Email:</strong> comercial@maea.ao</p>
                 </div>
               </div>
             </div>
           </div>
         </body>
         </html>
       `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Botão Flutuante de Impressão */}
      <div className="fixed left-6 bottom-6 z-50">
        <button
          className="flex items-center gap-2 bg-[#00847e] hover:bg-[#006d68] shadow-lg shadow-[#00847e]/30 hover:shadow-xl text-white transition-all duration-300 rounded-full p-4"
          onClick={handlePrint}
          title={t('policies.print.title')}
        >
          <PrinterIcon className="h-6 w-6" />
          <span className="hidden md:block font-semibold">{t('policies.print.button')}</span>
        </button>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-[#004d4a] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px'}} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00847e]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00847e]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-[#00847e]/20 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 border border-[#00847e]/30">
            <span className="flex h-2 w-2 rounded-full bg-[#00847e] animate-pulse"></span>
            {t('policies.hero.badge')}
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('policies.hero.title')}
          </h1>
          <p className="text-lg text-teal-50/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('policies.hero.description')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/empresa"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#00847e] to-teal-600 px-8 py-4 text-white font-semibold shadow-lg shadow-[#00847e]/30 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              {t('policies.hero.cta.company')}
            </a>
            <a
              href="/contactos"
              className="inline-flex items-center gap-3 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:border-[#00847e] hover:bg-[#00847e]/10 hover:scale-105 hover:-translate-y-1"
            >
              {t('policies.hero.cta.contact')}
            </a>
          </div>
        </div>
      </section>

      {/* Introdução com Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#00847e]/10 text-[#00847e] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <ShieldCheckIcon className="w-4 h-4" />
              {t('policies.intro.badge') || 'A Nossa Visão'}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              {t('policies.intro.title')}
            </h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              {t('policies.intro.description1')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col">
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {t('policies.intro.description2')}
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/image/Certificacao_ISO.jpg"
                alt="Certificação ISO"
                width={400}
                height={350}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden text-center">
              <div className="w-14 h-14 rounded-xl bg-[#00847e]/10 flex items-center justify-center mb-6 group-hover:bg-[#00847e]/20 transition-colors duration-300 mx-auto">
                <CheckCircleIcon className="h-7 w-7 text-[#00847e]" />
              </div>
              <h4 className="font-bold text-slate-900 text-lg mb-3">{t('policies.intro.transparency')}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{t('policies.intro.transparency.desc')}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden text-center">
              <div className="w-14 h-14 rounded-xl bg-[#00847e]/10 flex items-center justify-center mb-6 group-hover:bg-[#00847e]/20 transition-colors duration-300 mx-auto">
                <ShieldCheckIcon className="h-7 w-7 text-[#00847e]" />
              </div>
              <h4 className="font-bold text-slate-900 text-lg mb-3">{t('policies.intro.ethics')}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{t('policies.intro.ethics.desc')}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden text-center">
              <div className="w-14 h-14 rounded-xl bg-[#00847e]/10 flex items-center justify-center mb-6 group-hover:bg-[#00847e]/20 transition-colors duration-300 mx-auto">
                <TrophyIcon className="h-7 w-7 text-[#00847e]" />
              </div>
              <h4 className="font-bold text-slate-900 text-lg mb-3">{t('policies.intro.quality')}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{t('policies.intro.quality.desc')}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden text-center">
              <div className="w-14 h-14 rounded-xl bg-[#00847e]/10 flex items-center justify-center mb-6 group-hover:bg-[#00847e]/20 transition-colors duration-300 mx-auto">
                <StarIcon className="h-7 w-7 text-[#00847e]" />
              </div>
              <h4 className="font-bold text-slate-900 text-lg mb-3">{t('policies.intro.innovation')}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{t('policies.intro.innovation.desc')}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Políticas em Accordion */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#00847e]/10 text-[#00847e] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <DocumentTextIcon className="w-4 h-4" />
              {t('policies.section.badge') || 'Políticas'}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              {t('policies.section.title')}
            </h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              {t('policies.section.subtitle')}
            </p>
          </div>

          <div className="space-y-3">
            {POLICIES.map((policy, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00847e]/10 flex items-center justify-center group-hover:bg-[#00847e]/20 transition-colors">
                      <policy.icon className="h-6 w-6 text-[#00847e]" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-[#00847e] opacity-60 tracking-wide">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-semibold text-slate-900">{t(policy.titleKey)}</span>
                    </div>
                  </div>
                  <span className="text-[#00847e] text-xl transition-transform duration-300" style={{transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)'}}>
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-200">
                    <div className="space-y-6">
                      {policy.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="border-l-4 border-[#00847e]/30 pl-6">
                          <h6 className="text-[#00847e] mb-2 font-semibold text-sm uppercase tracking-wide">
                            {t(section.subtitleKey)}
                          </h6>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {t(section.contentKey)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-[#004d4a] to-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00847e]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00847e]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-[#00847e]/20 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 border border-[#00847e]/30">
            <span className="flex h-2 w-2 rounded-full bg-[#00847e] animate-pulse"></span>
            {t('policies.commitment.badge') || 'Compromisso'}
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('policies.commitment.title')}
          </h2>
          <p className="text-lg text-teal-50/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('policies.commitment.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contactos"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#00847e] to-teal-600 px-8 py-4 text-white font-semibold shadow-lg shadow-[#00847e]/30 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              {t('policies.commitment.cta') || 'Contacte-nos'}
            </a>
            <a
              href="/empresa"
              className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:border-[#00847e] hover:bg-[#00847e]/10 hover:scale-105 hover:-translate-y-1"
            >
              {t('policies.commitment.learn') || 'Saiba Mais'}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 