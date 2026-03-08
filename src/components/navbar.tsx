import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  XMarkIcon,
  Bars3Icon,
  GlobeAltIcon,
  StarIcon,
  ClipboardDocumentListIcon,
  CogIcon,
} from "@heroicons/react/24/solid";
import { useLanguage } from "@/contexts/LanguageContext";

const NAV_MENU = [
  {
    name: "nav.company",
    icon: BuildingOfficeIcon,
    href: "/empresa",
  },
  {
    name: "nav.consulting",
    icon: UserGroupIcon,
    href: "/consultoria",
  },
  {
    name: "nav.certification",
    icon: GlobeAltIcon,
    href: "/sobreiso",
  },
  {
    name: "nav.plans",
    icon: StarIcon,
    href: "/planos",
  },
  {
    name: "nav.projects",
    icon: DocumentCheckIcon,
    href: "/projectos",
  },
  {
    name: "nav.policies",
    icon: ClipboardDocumentListIcon,
    href: "/politicas",
  },
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
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-xl border-b border-gray-100/50 shadow-sm">
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
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="group flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100/60 font-medium text-sm transition-all duration-300 relative"
                >
                  <Icon className="h-4 w-4" />
                  {t(name)}
                  <span className="absolute bottom-0 left-0 h-0.5 bg-blue-500 w-0 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side - Contact and Language Selector */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a 
              href="/contactos" 
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100/60 font-medium text-sm px-4 py-2 rounded-lg transition-all duration-300"
            >
              {t('nav.contact')}
            </a>
            <div className="relative language-menu-container">
              <button
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100/60 p-2 rounded-lg transition-all duration-300 text-sm font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowLanguageMenu(!showLanguageMenu);
                }}
              >
                <GlobeAltIcon className="h-4 w-4" />
                <span className="font-semibold">{language === "pt" ? "PT" : "EN"}</span>
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 top-full mt-2 bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-lg z-50 min-w-[140px] overflow-hidden animate-slideInRight">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleLanguageChange("pt");
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-blue-50/50 transition-all duration-200 flex items-center gap-3 text-sm font-medium ${
                      language === "pt" ? "bg-blue-50 text-blue-700" : "text-gray-700"
                    }`}
                  >
                    <span className="text-base">🇵🇹</span>
                    Português
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleLanguageChange("en");
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-blue-50/50 transition-all duration-200 flex items-center gap-3 text-sm font-medium ${
                      language === "en" ? "bg-blue-50 text-blue-700" : "text-gray-700"
                    }`}
                  >
                    <span className="text-base">🇬🇧</span>
                    English
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleOpen}
            className="lg:hidden p-2 z-10 hover:bg-gray-100/60 rounded-lg transition-all duration-300"
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
        <div className="lg:hidden border-t border-gray-100/50 bg-white/95 backdrop-blur-sm animate-slideInLeft">
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-2 mb-4">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="flex items-center gap-3 font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100/60 px-4 py-3 rounded-lg transition-all duration-300"
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    {t(name)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
              <a href="/contactos" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100/60 font-medium px-4 py-3 rounded-lg transition-all duration-300" onClick={() => setOpen(false)}>
                {t('nav.contact')}
              </a>
              <div className="relative language-menu-container">
                <button
                  className="w-full flex items-center justify-between text-gray-700 hover:text-gray-900 hover:bg-gray-100/60 p-3 rounded-lg transition-all duration-300 font-medium"
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
                  <span className="text-xs">▼</span>
                </button>
                {showLanguageMenu && (
                  <div className="mt-2 bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-lg shadow-lg z-50 overflow-hidden animate-slideInLeft">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleLanguageChange("pt");
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-blue-50/50 transition-all duration-200 flex items-center gap-3 text-sm font-medium ${
                        language === "pt" ? "bg-blue-50 text-blue-700" : "text-gray-700"
                      }`}
                    >
                      <span className="text-base">🇵🇹</span>
                      Português
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleLanguageChange("en");
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-blue-50/50 transition-all duration-200 flex items-center gap-3 text-sm font-medium ${
                        language === "en" ? "bg-blue-50 text-blue-700" : "text-gray-700"
                      }`}
                    >
                      <span className="text-base">🇬🇧</span>
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
