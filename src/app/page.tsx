"use client";

import React from "react";
import { DocumentCheckIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import TopBookCategories from "./top-book-categories";
import CarouselFeatures from "./carousel-features";
import GetYourBookFromUs from "./get-your-book-from-us";
import Faq from "./faq";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopBookCategories />
      <CarouselFeatures />
      <GetYourBookFromUs />
      <Faq />
      
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
