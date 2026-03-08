import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsOfServiceModal from "./TermsOfServiceModal";
import CookiePolicyModal from "./CookiePolicyModal";
import Image from "next/image";

const LEGAL_LINKS = ["footer.privacy", "footer.terms", "footer.cookies"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const { t } = useLanguage();
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white border-t border-slate-800/50">
      {/* Main Footer Content */}
      <div className="mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Image
                  src="/logos/logo.png"
                  alt="MAEA Logo"
                  width={120}
                  height={60}
                  className="h-16 w-auto"
                />
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              {t('footer.company.tagline')}
              {t('footer.company.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/maea1_oficial/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/maea-lda/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00847e] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.746 1.188c-.313-.466-.595-.88-.727-1.338-.232-.867-.232-1.8-.232-1.8s-.232-.867-.232-1.8c0-4.909 3.98-8.889 8.889-8.889s8.889 3.98 8.889 8.889c0 4.909-3.98 8.889-8.889 8.889z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-lg font-semibold text-white border-b border-gray-600 pb-3">
              {t('footer.services.title')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="/consultoria" className="text-gray-300 hover:text-[#00847e] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#00847e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                  {t('footer.services.business')}
                </a>
              </li>
              <li>
                <a href="/sobreiso" className="text-gray-300 hover:text-[#00847e] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#00847e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                  {t('footer.services.certification')}
                </a>
              </li>
              <li>
                <a href="/solucoes" className="text-gray-300 hover:text-[#00847e] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#00847e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                  {t('footer.services.training')}
                </a>
              </li>
              <li>
                <a href="/solucoes" className="text-gray-300 hover:text-[#00847e] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#00847e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                  {t('footer.services.petroleum')}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-8">
            <h4 className="text-lg font-semibold text-white border-b border-gray-600 pb-3">
              {t('footer.company.title')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="/empresa" className="text-gray-300 hover:text-[#00847e] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#00847e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                  {t('footer.company.about')}
                </a>
              </li>
              <li>
                <a href="/planos" className="text-gray-300 hover:text-[#00847e] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#00847e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                  {t('footer.company.plans')}
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-300 hover:text-[#00847e] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#00847e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                  {t('footer.company.faq')}
                </a>
              </li>
              <li>
                <a href="/politicas" className="text-gray-300 hover:text-[#00847e] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#00847e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                  {t('footer.company.policies')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-lg font-semibold text-white border-b border-gray-600 pb-3">
              {t('footer.contact.title')}
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#00847e] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="text-gray-300 text-sm">{t('footer.contact.location')}</p>
                  <p className="text-gray-400 text-xs">{t('footer.contact.location.subtitle')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#00847e] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <div>
                  <p className="text-gray-300 text-sm">{t('footer.contact.email')}</p>
                  <p className="text-gray-400 text-xs">{t('footer.contact.email.subtitle')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#00847e] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <div>
                  <p className="text-gray-300 text-sm">{t('footer.contact.phone')}</p>
                  <p className="text-gray-400 text-xs">{t('footer.contact.phone.subtitle')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <p className="text-sm text-gray-300">
            &copy; {CURRENT_YEAR} {t('footer.copyright')}
          </p>
              <span className="text-gray-500">|</span>
                              <p className="text-sm text-gray-400">
                  {t('footer.bottom.tagline')}
                </p>
            </div>

            <ul className="flex items-center space-x-6">
              <li>
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="text-sm font-medium text-gray-400 transition-colors hover:text-[#00847e] hover:underline"
                >
                  {t('footer.privacy')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsTermsModalOpen(true)}
                  className="text-sm font-medium text-gray-400 transition-colors hover:text-[#00847e] hover:underline"
                >
                  {t('footer.terms')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsCookieModalOpen(true)}
                  className="text-sm font-medium text-gray-400 transition-colors hover:text-[#00847e] hover:underline"
                >
                  {t('footer.cookies')}
                </button>
              </li>
          </ul>
          </div>
        </div>
      </div>

      {/* Modals */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      <TermsOfServiceModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
      <CookiePolicyModal 
        isOpen={isCookieModalOpen} 
        onClose={() => setIsCookieModalOpen(false)} 
      />
    </footer>
  );
}

export default Footer;
