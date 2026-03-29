import React from "react";
import Image from "next/image";
import {
  XMarkIcon,
  Bars3Icon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { useLanguage } from "@/contexts/LanguageContext";

const NAV_MENU = [
  { name: "nav.company", href: "/empresa" },
  { name: "nav.consulting", href: "/consultoria" },
  { name: "nav.certification", href: "/sobreiso" },
  { name: "nav.plans", href: "/planos" },
  { name: "nav.projects", href: "/projectos" },
  { name: "nav.policies", href: "/politicas" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  function handleLanguageChange(newLanguage: 'pt' | 'en') {
    setLanguage(newLanguage);
    setShowLanguageMenu(false);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (showLanguageMenu && !target.closest('.language-menu-container')) {
        setShowLanguageMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLanguageMenu]);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e] via-teal-400 to-[#00847e]" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo - Left Side */}
          <a href="/" className="hover:opacity-80 transition-opacity duration-300 flex-shrink-0">
            <Image
              src="/logos/logo.png"
              alt="MAEA"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Menu - Center */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_MENU.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="text-gray-600 hover:text-[#00847e] font-medium text-sm transition-colors duration-300"
                >
                  {t(name)}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side - Contact CTA and Language */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a 
              href="/contactos" 
              className="bg-[#00847e] hover:bg-[#006d68] text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-md"
            >
              {t('nav.contact')}
            </a>
            <div className="relative language-menu-container">
              <button
                className="flex items-center gap-2 text-gray-700 hover:text-[#00847e] p-2 rounded-lg transition-colors duration-300 text-sm font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowLanguageMenu(!showLanguageMenu);
                }}
              >
                <GlobeAltIcon className="h-4 w-4" />
                <span>{language === "pt" ? "PT" : "EN"}</span>
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[140px] overflow-hidden">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleLanguageChange("pt");
                    }}
                    className={`w-full px-4 py-2.5 text-left hover:bg-[#00847e]/10 transition-colors duration-200 flex items-center gap-3 text-sm font-medium ${
                      language === "pt" ? "bg-[#00847e]/10 text-[#00847e]" : "text-gray-700"
                    }`}
                  >
                    <span>🇵🇹</span>
                    Português
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleLanguageChange("en");
                    }}
                    className={`w-full px-4 py-2.5 text-left hover:bg-[#00847e]/10 transition-colors duration-200 flex items-center gap-3 text-sm font-medium ${
                      language === "en" ? "bg-[#00847e]/10 text-[#00847e]" : "text-gray-700"
                    }`}
                  >
                    <span>🇬🇧</span>
                    English
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleOpen}
            className="lg:hidden p-2 z-10 hover:bg-gray-100 rounded-lg transition-colors duration-300"
          >
            {open ? (
              <XMarkIcon className="h-6 w-6 text-gray-900" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-2 mb-4">
              {NAV_MENU.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="flex items-center gap-3 font-medium text-gray-600 hover:text-[#00847e] hover:bg-gray-50 px-4 py-3 rounded-lg transition-all duration-300"
                    onClick={() => setOpen(false)}
                  >
                    {t(name)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
              <a 
                href="/contactos" 
                className="bg-[#00847e] hover:bg-[#006d68] text-white font-semibold px-4 py-3 rounded-lg transition-all duration-300 text-center w-full" 
                onClick={() => setOpen(false)}
              >
                {t('nav.contact')}
              </a>
              <div className="relative language-menu-container">
                <button
                  className="w-full flex items-center justify-between text-gray-700 hover:text-[#00847e] hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowLanguageMenu(!showLanguageMenu);
                  }}
                >
                  <span className="flex items-center gap-2">
                    <GlobeAltIcon className="h-5 w-5" />
                    {language === "pt" ? "Português" : "English"}
                  </span>
                  <span className={`text-xs transition-transform duration-300 ${showLanguageMenu ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {showLanguageMenu && (
                  <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleLanguageChange("pt");
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left hover:bg-[#00847e]/10 transition-colors duration-200 flex items-center gap-3 text-sm font-medium ${
                        language === "pt" ? "bg-[#00847e]/10 text-[#00847e]" : "text-gray-700"
                      }`}
                    >
                      <span>🇵🇹</span>
                      Português
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleLanguageChange("en");
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left hover:bg-[#00847e]/10 transition-colors duration-200 flex items-center gap-3 text-sm font-medium ${
                        language === "en" ? "bg-[#00847e]/10 text-[#00847e]" : "text-gray-700"
                      }`}
                    >
                      <span>🇬🇧</span>
                      English
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
