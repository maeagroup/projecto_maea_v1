"use client";

import Image from "next/image";
import { 
  ShieldCheckIcon, 
  CogIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { useLanguage } from "@/contexts/LanguageContext";

export function CarouselFeatures() {
  const { t } = useLanguage();
  return (
    <div className="px-8 py-24 bg-gradient-to-br from-white via-blue-50/10 to-slate-50/20">
      <section className="mx-auto relative overflow-hidden">
        <div className="relative z-10 py-12 px-4">
          <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-2 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-blue-700">Soluciones Integradas</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {t('services.integrated.title')}
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {t('services.integrated.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
              <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg mb-6">
                  <CogIcon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-slate-900 font-bold text-xl mb-6">{t('services.integrated.compliance.title')}</h4>
                
                <div className="space-y-5">
                  <div>
                    <h5 className="text-slate-800 font-semibold text-sm mb-2 flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-sky-500" />
                      {t('services.integrated.compliance.local.title')}
                    </h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.compliance.local.description')}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-slate-800 font-semibold text-sm mb-2 flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-sky-500" />
                      {t('services.integrated.compliance.audit.title')}
                    </h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.compliance.audit.description')}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-slate-800 font-semibold text-sm mb-2 flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-sky-500" />
                      {t('services.integrated.compliance.esg.title')}
                    </h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.compliance.esg.description')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg mb-6">
                  <ShieldCheckIcon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-slate-900 font-bold text-xl mb-6">{t('services.integrated.certifications.title')}</h4>
                
                <div className="space-y-5">
                  <div>
                    <h5 className="text-slate-800 font-semibold text-sm mb-2 flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
                      {t('services.integrated.certifications.iso.title')}
                    </h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.certifications.iso.description')}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-slate-800 font-semibold text-sm mb-2 flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
                      {t('services.integrated.certifications.security.title')}
                    </h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.certifications.security.description')}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-slate-800 font-semibold text-sm mb-2 flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
                      {t('services.integrated.certifications.api.title')}
                    </h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.certifications.api.description')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg mb-6">
                  <ExclamationTriangleIcon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-slate-900 font-bold text-xl mb-6">{t('services.integrated.risk.title')}</h4>
                
                <div className="space-y-5">
                  <div>
                    <h5 className="text-slate-800 font-semibold text-sm mb-2 flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-amber-500" />
                      {t('services.integrated.risk.hazop.title')}
                    </h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.risk.hazop.description')}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-slate-800 font-semibold text-sm mb-2 flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-amber-500" />
                      {t('services.integrated.risk.hazid.title')}
                    </h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.risk.hazid.description')}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-slate-800 font-semibold text-sm mb-2 flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-amber-500" />
                      {t('services.integrated.risk.prevention.title')}
                    </h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.risk.prevention.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CarouselFeatures;
