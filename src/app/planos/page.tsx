"use client";

import React from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components";
import { useLanguage } from "@/contexts/LanguageContext";
import { generateQRCodeDataURL, generateCompanyContactData } from "@/utils/qr-generator";
import {
  CheckIcon,
  StarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  TrophyIcon,
  UserGroupIcon,
  ClockIcon,
  DocumentCheckIcon,
  PrinterIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const PLANS = [
  {
    id: "essentials",
    name: "Essentials",
    nameKey: "plans.essentials.name",
    descriptionKey: "plans.essentials.description",
    priceKey: "plans.essentials.price",
    durationKey: "plans.essentials.duration",
    features: [
      "plans.essentials.feature1",
      "plans.essentials.feature2",
      "plans.essentials.feature3",
      "plans.essentials.feature4",
      "plans.essentials.feature5",
      "plans.essentials.feature6",
      "plans.essentials.feature7",
      "plans.essentials.feature8",
    ],
    icon: DocumentCheckIcon,
    color: "blue",
    popular: false
  },
  {
    id: "standard",
    name: "Standard",
    nameKey: "plans.standard.name",
    descriptionKey: "plans.standard.description",
    priceKey: "plans.standard.price",
    durationKey: "plans.standard.duration",
    features: [
      "plans.standard.feature1",
      "plans.standard.feature2",
      "plans.standard.feature3",
      "plans.standard.feature4",
      "plans.standard.feature5",
      "plans.standard.feature6",
      "plans.standard.feature7",
      "plans.standard.feature8",
      "plans.standard.feature9",
      "plans.standard.feature10",
    ],
    icon: ShieldCheckIcon,
    color: "green",
    popular: false
  },
  {
    id: "premium",
    name: "Premium",
    nameKey: "plans.premium.name",
    descriptionKey: "plans.premium.description",
    priceKey: "plans.premium.price",
    durationKey: "plans.premium.duration",
    features: [
      "plans.premium.feature1",
      "plans.premium.feature2",
      "plans.premium.feature3",
      "plans.premium.feature4",
      "plans.premium.feature5",
      "plans.premium.feature6",
      "plans.premium.feature7",
      "plans.premium.feature8",
      "plans.premium.feature9",
      "plans.premium.feature10",
    ],
    icon: StarIcon,
    color: "purple",
    popular: true
  },
  {
    id: "ultimate",
    name: "Ultimate",
    nameKey: "plans.ultimate.name",
    descriptionKey: "plans.ultimate.description",
    priceKey: "plans.ultimate.price",
    durationKey: "plans.ultimate.duration",
    features: [
      "plans.ultimate.feature1",
      "plans.ultimate.feature2",
      "plans.ultimate.feature3",
      "plans.ultimate.feature4",
      "plans.ultimate.feature5",
      "plans.ultimate.feature6",
      "plans.ultimate.feature7",
      "plans.ultimate.feature8",
      "plans.ultimate.feature9",
      "plans.ultimate.feature10",
      "plans.ultimate.feature11",
    ],
    icon: TrophyIcon,
    color: "amber",
    popular: false
  }
];

export default function PlanosPage() {
  const { t } = useLanguage();

  const handlePrintAllPlans = async () => {
    // Generate QR code data URL - temporarily disabled for build
    // const qrDataURL = await generateQRCodeDataURL(generateCompanyContactData(), 100);
    const qrDataURL = '';
    
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Catálogo de Planos - MAEA</title>
          <style>
            @media print {
              body { 
                font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif; 
                margin: 0; 
              }
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
              .plan { 
                margin-bottom: 50px; 
                page-break-inside: avoid; 
              }
              .plan-title { 
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
              .plan-info-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                margin-bottom: 20px;
              }
              .info-card {
                background: #f8fafc;
                padding: 15px;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
              }
              .info-label {
                font-weight: bold;
                color: #00847e;
                font-size: 14px;
                margin-bottom: 5px;
                text-transform: uppercase;
              }
              .info-value {
                color: #374151;
                font-size: 16px;
                font-weight: bold;
              }
              .features-section {
                margin-bottom: 25px;
              }
              .features-title {
                font-weight: bold; 
                color: #374151; 
                font-size: 18px; 
                margin-bottom: 15px; 
                color: #00847e;
              }
              .feature-item {
                color: #4b5563; 
                font-size: 15px; 
                line-height: 1.7; 
                margin-bottom: 8px;
                padding-left: 20px;
                position: relative;
              }
              .feature-item::before {
                content: "✓";
                position: absolute;
                left: 0;
                color: #10b981;
                font-weight: bold;
              }
              .comparison-table {
                width: 100%;
                border-collapse: collapse;
                margin: 30px 0;
              }
              .comparison-table th,
              .comparison-table td {
                border: 1px solid #d1d5db;
                padding: 12px;
                text-align: left;
              }
              .comparison-table th {
                background: #00847e;
                color: white;
                font-weight: bold;
              }
              .comparison-table tr:nth-child(even) {
                background: #f8fafc;
              }
              .footer { 
                margin-top: 50px; 
                text-align: center; 
                border-top: 2px solid #d1d5db; 
                padding-top: 30px; 
                color: #6b7280; 
                font-size: 14px; 
              }
              @page { 
                margin: 1in; 
              }
            }
            
            .cover-page {
              background: linear-gradient(135deg, #00847e 0%, #00847e 50%, #00847e 100%);
              color: white;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
              position: relative;
              overflow: hidden;
            }
            
            .cover-page::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
              opacity: 0.3;
            }
            
            .cover-page::after {
              content: '';
              position: absolute;
              top: 20px;
              right: 20px;
              width: 100px;
              height: 100px;
              background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
              border-radius: 50%;
              backdrop-filter: blur(10px);
            }
            
            .cover-content {
              position: relative;
              z-index: 2;
              max-width: 80%;
            }
            
            .logo {
              width: 160px;
              height: 160px;
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 40px;
              backdrop-filter: blur(15px);
              border: 3px solid rgba(255, 255, 255, 0.4);
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
              position: relative;
              overflow: hidden;
            }
            
            .logo::before {
              content: '';
              position: absolute;
              top: -5px;
              left: -5px;
              right: -5px;
              bottom: -5px;
              background: linear-gradient(45deg, #00847e, #00847e, #00847e);
              border-radius: 50%;
              z-index: -1;
              opacity: 0.7;
            }
            
            .logo img {
              width: 80%;
              height: 80%;
              object-fit: contain;
              filter: brightness(0) invert(1);
            }
            
            .cover-title {
                              font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif;
              font-size: 4rem;
              font-weight: 800;
              margin-bottom: 20px;
              background: linear-gradient(45deg, #ffffff, #e0e7ff, #c7d2fe);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            
            .cover-subtitle {
              font-size: 1.8rem;
              margin-bottom: 30px;
              opacity: 0.95;
              font-weight: 500;
              letter-spacing: 1px;
            }
            
            .cover-description {
              font-size: 1.2rem;
              margin-bottom: 40px;
              opacity: 0.9;
              max-width: 550px;
              margin-left: auto;
              margin-right: auto;
              line-height: 1.8;
              font-weight: 400;
            }
            
            .cover-badges {
              display: flex;
              justify-content: center;
              gap: 20px;
              flex-wrap: wrap;
              margin-bottom: 50px;
            }
            
            .cover-badge {
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1));
              backdrop-filter: blur(15px);
              padding: 12px 20px;
              border-radius: 25px;
              font-size: 0.9rem;
              font-weight: 600;
              border: 1px solid rgba(255, 255, 255, 0.4);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              transition: all 0.3s ease;
            }
            
            .cover-badge:hover {
              transform: translateY(-2px);
              box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
            }
            
            .cover-stats {
              display: flex;
              justify-content: center;
              gap: 40px;
              margin-bottom: 40px;
              flex-wrap: wrap;
            }
            
            .stat-item {
              text-align: center;
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              padding: 15px 25px;
              border-radius: 15px;
              border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .stat-number {
              font-size: 2rem;
              font-weight: 700;
              display: block;
              margin-bottom: 5px;
            }
            
            .stat-label {
              font-size: 0.85rem;
              opacity: 0.8;
              font-weight: 500;
            }
            
            .cover-footer {
              position: absolute;
              bottom: 40px;
              left: 0;
              right: 0;
              text-align: center;
            }
            
            .cover-footer h3 {
                              font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif;
              font-size: 1.6rem;
              margin-bottom: 10px;
              font-weight: 600;
            }
            
            .cover-footer p {
              font-size: 1.1rem;
              opacity: 0.85;
            }
            
            .content-page {
              padding: 40px;
              background: white;
              min-height: 100%;
            }
            
            .page-header {
              text-align: center;
              margin-bottom: 40px;
              padding-bottom: 20px;
              border-bottom: 3px solid #e2e8f0;
              position: relative;
            }
            
            .page-header::after {
              content: '';
              position: absolute;
              bottom: -3px;
              left: 50%;
              transform: translateX(-50%);
              width: 100px;
              height: 3px;
              background: linear-gradient(90deg, #00847e, #00847e);
              border-radius: 2px;
            }
            
            .page-header h1 {
                              font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif;
              font-size: 2.8rem;
              font-weight: 700;
              color: #00847e;
              margin-bottom: 15px;
              background: linear-gradient(135deg, #00847e, #00847e);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            
            .page-header p {
              font-size: 1.2rem;
              color: #64748b;
              max-width: 700px;
              margin: 0 auto;
              line-height: 1.6;
            }
            
            .page-subtitle {
              text-align: center;
              margin-bottom: 30px;
              padding: 15px;
              background: linear-gradient(135deg, #f8fafc, #f1f5f9);
              border-radius: 10px;
              border: 1px solid #e2e8f0;
            }
            
            .page-subtitle h2 {
                              font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif;
              font-size: 1.3rem;
              font-weight: 600;
              color: #00847e;
              margin-bottom: 8px;
            }
            
            .page-subtitle p {
              font-size: 1rem;
              color: #64748b;
              margin: 0;
            }
            
            .plans-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 30px;
              margin-bottom: 40px;
            }
            
            .plan-card {
              background: white;
              border-radius: 15px;
              padding: 25px;
              border: 2px solid #e2e8f0;
              position: relative;
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            }
            
            .plan-card.popular {
              border-color: #00847e;
              background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
              box-shadow: 0 10px 25px rgba(139, 92, 246, 0.2);
            }
            
            .popular-badge {
              position: absolute;
              top: -15px;
              left: 50%;
              transform: translateX(-50%);
              background: linear-gradient(135deg, #00847e, #00847e);
              color: white;
              padding: 8px 16px;
              border-radius: 20px;
              font-size: 0.75rem;
              font-weight: 600;
              box-shadow: 0 4px 8px rgba(139, 92, 246, 0.3);
            }
            
            .plan-header {
              text-align: center;
              margin-bottom: 20px;
            }
            
            .plan-icon {
              width: 60px;
              height: 60px;
              margin: 0 auto 15px;
              background: linear-gradient(135deg, #00847e, #00847e);
              border-radius: 15px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 1.5rem;
            }
            
            .plan-title {
                              font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif;
              font-size: 1.5rem;
              font-weight: 700;
              color: #1e40af;
              margin-bottom: 10px;
            }
            
            .plan-description {
              color: #64748b;
              margin-bottom: 20px;
              font-size: 0.95rem;
              line-height: 1.5;
            }
            
            .plan-info {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 15px;
              margin-bottom: 20px;
              padding: 15px;
              background: #f8fafc;
              border-radius: 10px;
              border: 1px solid #e2e8f0;
            }
            
            .info-item {
              text-align: center;
              padding: 10px;
              background: white;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            }
            
            .info-label {
              font-size: 0.75rem;
              color: #64748b;
              margin-bottom: 5px;
              font-weight: 500;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            
            .info-value {
              font-size: 1rem;
              font-weight: 700;
              color: #1e40af;
            }
            
            .features {
              margin-bottom: 20px;
            }
            
            .features h3 {
                              font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif;
              font-size: 1rem;
              font-weight: 600;
              color: #1e40af;
              margin-bottom: 15px;
              text-align: center;
              position: relative;
            }
            
            .features h3::after {
              content: '';
              position: absolute;
              bottom: -5px;
              left: 50%;
              transform: translateX(-50%);
              width: 30px;
              height: 2px;
              background: linear-gradient(90deg, #3b82f6, #8b5cf6);
              border-radius: 1px;
            }
            
            .feature-item {
              display: flex;
              align-items: center;
              gap: 8px;
              padding: 6px 0;
              font-size: 0.85rem;
              color: #374151;
              border-bottom: 1px solid #f1f5f9;
            }
            
            .feature-item:last-child {
              border-bottom: none;
            }
            
            .feature-item::before {
              content: "✓";
              color: #10b981;
              font-weight: bold;
              font-size: 0.9rem;
              background: #f0fdf4;
              width: 18px;
              height: 18px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
            }
            
            .comparison-section {
              margin-top: 40px;
              padding: 25px;
              background: #f8fafc;
              border-radius: 15px;
              border: 1px solid #e2e8f0;
            }
            
            .comparison-section h2 {
              text-align: center;
              margin-bottom: 20px;
              color: #1e40af;
                              font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif;
              font-size: 1.5rem;
              font-weight: 600;
            }
            
            .comparison-table {
              width: 100%;
              border-collapse: collapse;
              font-size: 0.85rem;
            }
            
            .comparison-table th,
            .comparison-table td {
              padding: 10px;
              text-align: left;
              border-bottom: 1px solid #e2e8f0;
            }
            
            .comparison-table th {
              background: linear-gradient(135deg, #1e40af, #3b82f6);
              color: white;
              font-weight: 600;
            }
            
            .comparison-table tr:nth-child(even) {
              background: #f8fafc;
            }
            
            .contact-section {
              margin-top: 40px;
              padding: 25px;
              background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #8b5cf6 100%);
              color: white;
              border-radius: 15px;
              text-align: center;
            }
            
            .contact-section h2 {
                              font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif;
              font-size: 1.5rem;
              margin-bottom: 15px;
              font-weight: 600;
            }
            
            .contact-section p {
              font-size: 1rem;
              margin-bottom: 25px;
              opacity: 0.9;
            }
            
            .contact-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 20px;
            }
            
            .contact-card {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              border-radius: 10px;
              padding: 15px;
              border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .contact-card h4 {
              font-size: 0.9rem;
              margin-bottom: 8px;
              font-weight: 600;
            }
            
            .contact-card p {
              font-size: 0.9rem;
              opacity: 0.9;
              margin: 0 0 5px 0;
              font-weight: 500;
            }
            
            .contact-card small {
              font-size: 0.75rem;
              opacity: 0.7;
              font-style: italic;
            }
            
            @media print {
              body {
                background: white;
                margin: 0;
                padding: 0;
              }
              .page {
                box-shadow: none;
                margin: 0;
              }
              .cover-page::before {
                display: none;
              }
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
            
            <div class="cover-title">Catálogo de Planos de Serviços</div>
            <div class="cover-subtitle">Especialistas em Certificação ISO</div>
            
            <div class="cover-divider"></div>
            
            <div class="cover-info">
              <strong>Documento Oficial</strong><br>
              Versão: 1.0<br>
              Data de Emissão: ${new Date().toLocaleDateString('pt-BR')}<br>
              Classificação: Comercial
            </div>
          </div>
          
          <!-- Conteúdo dos Planos -->
          <div class="content-page">
            <div class="header">
              <h1>Planos de Serviços de Certificação ISO</h1>
              <p>Oferecemos soluções personalizadas para empresas de todos os tamanhos</p>
            </div>
              
                              <div class="plan">
                  <div class="plan-title">1. Plano Essentials</div>
                  <div class="plan-info-grid">
                                         <div class="info-card">
                       <div class="info-label">Preço</div>
                       <div class="info-value">Sob Consulta</div>
                     </div>
                    <div class="info-card">
                      <div class="info-label">Duração</div>
                      <div class="info-value">3-6 meses</div>
                    </div>
                  </div>
                  <div class="features-section">
                    <div class="features-title">Características Incluídas</div>
                    <div class="feature-item">Certificação ISO 9001 básica</div>
                    <div class="feature-item">Documentação inicial</div>
                    <div class="feature-item">Auditoria de conformidade</div>
                    <div class="feature-item">Relatório de implementação</div>
                    <div class="feature-item">Certificado ISO válido</div>
                    <div class="feature-item">1 auditoria interna</div>
                    <div class="feature-item">Suporte por email</div>
                    <div class="feature-item">Acompanhamento 1 mês</div>
                  </div>
                </div>
                
                <div class="plan">
                  <div class="plan-title">2. Plano Standard</div>
                  <div class="plan-info-grid">
                                         <div class="info-card">
                       <div class="info-label">Preço</div>
                       <div class="info-value">Sob Consulta</div>
                     </div>
                    <div class="info-card">
                      <div class="info-label">Duração</div>
                      <div class="info-value">6-12 meses</div>
                    </div>
                  </div>
                  <div class="features-section">
                    <div class="features-title">Características Incluídas</div>
                    <div class="feature-item">Certificação ISO 9001 completa</div>
                    <div class="feature-item">Consultoria personalizada</div>
                    <div class="feature-item">Documentação completa</div>
                    <div class="feature-item">Auditorias internas</div>
                    <div class="feature-item">Treinamento da equipa</div>
                    <div class="feature-item">2 auditorias internas</div>
                    <div class="feature-item">Suporte telefónico</div>
                    <div class="feature-item">Acompanhamento 2 meses</div>
                    <div class="feature-item">Relatórios mensais</div>
                    <div class="feature-item">Certificado com validade</div>
                  </div>
                </div>
                
                <div class="plan">
                  <div class="plan-title">3. Plano Premium (Mais Popular)</div>
                  <div class="plan-info-grid">
                                         <div class="info-card">
                       <div class="info-label">Preço</div>
                       <div class="info-value">Sob Consulta</div>
                     </div>
                    <div class="info-card">
                      <div class="info-label">Duração</div>
                      <div class="info-value">12-18 meses</div>
                    </div>
                  </div>
                  <div class="features-section">
                    <div class="features-title">Características Incluídas</div>
                    <div class="feature-item">Certificação ISO 9001 + 14001 + 45001</div>
                    <div class="feature-item">Consultoria estratégica</div>
                    <div class="feature-item">Documentação avançada</div>
                    <div class="feature-item">Auditorias externas</div>
                    <div class="feature-item">Treinamento especializado</div>
                    <div class="feature-item">3 auditorias internas</div>
                    <div class="feature-item">Suporte prioritário 24/7</div>
                    <div class="feature-item">Acompanhamento 2 meses</div>
                    <div class="feature-item">Relatórios semanais</div>
                    <div class="feature-item">Certificados múltiplos</div>
                  </div>
                </div>
                
                <div class="plan">
                  <div class="plan-title">4. Plano Ultimate</div>
                  <div class="plan-info-grid">
                    <div class="info-card">
                      <div class="info-label">Preço</div>
                      <div class="info-value">Sob consulta</div>
                    </div>
                    <div class="info-card">
                      <div class="info-label">Duração</div>
                      <div class="info-value">18-24 meses</div>
                    </div>
                  </div>
                  <div class="features-section">
                    <div class="features-title">Características Incluídas</div>
                    <div class="feature-item">Todas as certificações ISO disponíveis</div>
                    <div class="feature-item">Consultoria estratégica completa</div>
                    <div class="feature-item">Documentação empresarial</div>
                    <div class="feature-item">Auditorias externas completas</div>
                    <div class="feature-item">Treinamento executivo</div>
                    <div class="feature-item">Auditorias ilimitadas</div>
                    <div class="feature-item">Suporte VIP 24/7</div>
                    <div class="feature-item">Acompanhamento 4 meses</div>
                    <div class="feature-item">Relatórios personalizados</div>
                    <div class="feature-item">Certificados completos</div>
                  </div>
                </div>
              
                             <div class="comparison-section">
                 <h2>Comparação Rápida dos Planos</h2>
                 <table class="comparison-table">
                   <thead>
                     <tr>
                       <th>Característica</th>
                       <th>Essentials</th>
                       <th>Standard</th>
                       <th>Premium</th>
                       <th>Ultimate</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td><strong>Certificação ISO 9001</strong></td>
                       <td>✓ Básica</td>
                       <td>✓ Completa</td>
                       <td>✓ Completa</td>
                       <td>✓ Completa</td>
                     </tr>
                     <tr>
                       <td><strong>Múltiplas Certificações</strong></td>
                       <td>✗</td>
                       <td>✗</td>
                       <td>✓ ISO 9001 + 14001 + 45001</td>
                       <td>✓ Todas as ISOs</td>
                     </tr>
                     <tr>
                       <td><strong>Consultoria Personalizada</strong></td>
                       <td>✗</td>
                       <td>✓ Básica</td>
                       <td>✓ Avançada</td>
                       <td>✓ Estratégica</td>
                     </tr>
                     <tr>
                       <td><strong>Suporte 24/7</strong></td>
                       <td>✗</td>
                       <td>✓ Email/Telefone</td>
                       <td>✓ Prioritário</td>
                       <td>✓ VIP</td>
                     </tr>
                     <tr>
                       <td><strong>Acompanhamento</strong></td>
                       <td>4 meses</td>
                       <td>12 meses</td>
                       <td>24 meses</td>
                       <td>Vitalício</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
              
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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Typography variant="h1" color="white" className="mb-6">
              {t('plans.hero.title')}
            </Typography>
            <Typography variant="lead" color="white" className="mb-8 opacity-90">
              {t('plans.hero.description')}
            </Typography>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button color="white" variant="filled" className="bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0">
                <a href="/contactos" className="text-slate-900">{t('plans.hero.cta.contact')}</a>
              </Button>
              <Button color="white" variant="outlined" className="bg-gradient-to-r from-[#00847e]/10 to-[#00847e]/20 hover:from-[#00847e]/20 hover:to-[#00847e]/30 text-[#00847e] border-[#00847e] hover:text-[#00847e] font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <a href="/sobreiso" className="text-white">{t('plans.hero.cta.certification')}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              {t('plans.section.title')}
            </Typography>
            <Typography variant="lead" className="text-gray-600 max-w-3xl mx-auto">
              {t('plans.section.description')}
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PLANS.map((plan, index) => (
              <Card 
                key={plan.id} 
                className={`relative shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {t('plans.popular')}
                    </span>
                  </div>
                )}
                
                   <CardBody className="p-6 text-center">
                   <div className="mb-6">
                     <plan.icon className={`h-12 w-12 text-${plan.color}-600 mx-auto mb-4`} />
                     <Typography variant="h4" color="blue-gray" className="mb-2">
                       {t(plan.nameKey)}
                     </Typography>
                     <Typography variant="paragraph" className="text-gray-600 mb-4">
                       {t(plan.descriptionKey)}
                     </Typography>
                     <div className="text-center mb-4">
                       <Typography variant="h5" color="blue-gray" className="font-semibold">
                         {plan.id === 'essentials' ? '3-6 meses' : 
                           plan.id === 'standard' ? '4-6 meses' : 
                           plan.id === 'premium' ? '7-9 meses' : '10-12 meses'}
                       </Typography>
                       <Typography variant="small" className="text-gray-500">
                         Duração
                       </Typography>
                     </div>
                   </div>
                   
                                       <div className="space-y-2 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckIcon className={`h-4 w-4 text-${plan.color}-600 flex-shrink-0`} />
                          <Typography variant="small" className="text-gray-700 text-left text-xs">
                            {t(feature)}
                          </Typography>
                        </div>
                      ))}
                    </div>
                    
                    {/* Botão Sob Consulta */}
                    <div className="mt-6">
                      <Button
                        color="white"
                        variant="filled"
                        size="lg"
                        className="w-full bg-[#00847e] hover:bg-[#006d68] text-white font-semibold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 min-w-[200px]"
                      >
                        <a href="/contactos" className="flex items-center justify-center gap-3 text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="text-base">Sob Consulta</span>
                        </a>
                      </Button>
                    </div>
                 </CardBody>
              </Card>
            ))}
                     </div>
         </div>
       </section>

       {/* Comparison Section */}
       <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <Typography variant="h2" color="blue-gray" className="mb-4">
               Comparação Detalhada dos Planos
             </Typography>
             <Typography variant="lead" className="text-gray-600 max-w-3xl mx-auto">
               Analise todas as características e benefícios de cada plano para tomar a melhor decisão para o seu negócio
             </Typography>
           </div>
           
           <div className="overflow-x-auto">
             <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
               <thead>
                 <tr className="bg-blue-600 text-white">
                   <th className="px-6 py-4 text-left font-semibold">Característica</th>
                   <th className="px-6 py-4 text-center font-semibold">Essentials</th>
                   <th className="px-6 py-4 text-center font-semibold">Standard</th>
                   <th className="px-6 py-4 text-center font-semibold">Premium</th>
                   <th className="px-6 py-4 text-center font-semibold">Ultimate</th>
                 </tr>
               </thead>
               <tbody>
                 <tr className="border-b border-gray-200">
                   <td className="px-6 py-4 font-semibold text-[#00847e]">Certificação ISO 9001</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Básica</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Completa</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Completa</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Completa</td>
                 </tr>
                 <tr className="border-b border-gray-200 bg-gray-50">
                   <td className="px-6 py-4 font-semibold text-[#00847e]">Múltiplas Certificações</td>
                   <td className="px-6 py-4 text-center text-red-600 font-semibold">✗</td>
                   <td className="px-6 py-4 text-center text-red-600 font-semibold">✗</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ ISO 9001 + 14001 + 45001</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Todas as ISOs</td>
                 </tr>
                 <tr className="border-b border-gray-200">
                   <td className="px-6 py-4 font-semibold text-[#00847e]">Consultoria Personalizada</td>
                   <td className="px-6 py-4 text-center text-red-600 font-semibold">✗</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Básica</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Avançada</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Estratégica</td>
                 </tr>
                 <tr className="border-b border-gray-200 bg-gray-50">
                   <td className="px-6 py-4 font-semibold text-[#00847e]">Documentação Completa</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Inicial</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Completa</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Avançada</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Empresarial</td>
                 </tr>
                 <tr className="border-b border-gray-200">
                   <td className="px-6 py-4 font-semibold text-[#00847e]">Auditorias Internas</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">1 auditoria</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">2 auditorias</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">3 auditorias</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">Ilimitadas</td>
                 </tr>
                 <tr className="border-b border-gray-200 bg-gray-50">
                   <td className="px-6 py-4 font-semibold text-[#00847e]">Auditorias Externas</td>
                   <td className="px-6 py-4 text-center text-red-600 font-semibold">✗</td>
                   <td className="px-6 py-4 text-center text-red-600 font-semibold">✗</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Incluídas</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Completas</td>
                 </tr>
                 <tr className="border-b border-gray-200">
                   <td className="px-6 py-4 font-semibold text-[#00847e]">Treinamento da Equipa</td>
                   <td className="px-6 py-4 text-center text-red-600 font-semibold">✗</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Básico</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Especializado</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Executivo</td>
                 </tr>
                 <tr className="border-b border-gray-200 bg-gray-50">
                   <td className="px-6 py-4 font-semibold text-[#00847e]">Suporte Técnico</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">Email</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">Email/Telefone</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">Prioritário 24/7</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">VIP 24/7</td>
                 </tr>
                 <tr className="border-b border-gray-200">
                   <td className="px-6 py-4 font-semibold text-[#00847e]">Acompanhamento</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">1 mês</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">2 meses</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">3 meses</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">4 meses</td>
                 </tr>
                 <tr className="border-b border-gray-200 bg-gray-50">
                   <td className="px-6 py-4 font-semibold text-[#00847e]">Relatórios</td>
                   <td className="px-6 py-4 text-center text-red-600 font-semibold">✗</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">Mensais</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">Semanais</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">Personalizados</td>
                 </tr>
                 <tr className="border-b border-gray-200">
                   <td className="px-6 py-4 font-semibold text-[#00847e]">Certificados</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">ISO 9001</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">Com Validade</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">Múltiplos</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">Completos</td>
                 </tr>
                 <tr className="border-b border-gray-200 bg-gray-50">
                   <td className="px-6 py-4 font-semibold text-[#00847e]">Preço</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">Sob Consulta</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">Sob Consulta</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">Sob Consulta</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">Sob Consulta</td>
                 </tr>
                 <tr className="border-b border-gray-200">
                   <td className="px-6 py-4 font-semibold text-[#00847e]">Duração</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">3-6 meses</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">4-6 meses</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">7-9 meses</td>
                   <td className="px-6 py-4 text-center text-green-600 font-semibold">10-12 meses</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
       </section>

      {/* Why Choose MAEA */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#00847e]/10 text-[#00847e] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#00847e] animate-pulse"></span>
              {t('plans.why.badge')}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              {t('plans.why.title')}
            </h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              {t('plans.why.description')}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Experience Card */}
            <div className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden">
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#00847e]/10 text-[#00847e] font-bold flex items-center justify-center text-lg">
                01
              </div>
              <div className="w-14 h-14 rounded-xl bg-[#00847e]/10 flex items-center justify-center mb-6 group-hover:bg-[#00847e]/20 transition-colors duration-300">
                <UserGroupIcon className="h-7 w-7 text-[#00847e]" />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">
                {t('plans.why.experience.title')}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('plans.why.experience.description')}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Support Card */}
            <div className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden">
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#00847e]/10 text-[#00847e] font-bold flex items-center justify-center text-lg">
                02
              </div>
              <div className="w-14 h-14 rounded-xl bg-[#00847e]/10 flex items-center justify-center mb-6 group-hover:bg-[#00847e]/20 transition-colors duration-300">
                <ClockIcon className="h-7 w-7 text-[#00847e]" />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">
                {t('plans.why.support.title')}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('plans.why.support.description')}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Results Card */}
            <div className="group relative rounded-2xl border border-slate-200 hover:border-[#00847e]/40 bg-white transition-all duration-300 hover:shadow-lg p-8 overflow-hidden">
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#00847e]/10 text-[#00847e] font-bold flex items-center justify-center text-lg">
                03
              </div>
              <div className="w-14 h-14 rounded-xl bg-[#00847e]/10 flex items-center justify-center mb-6 group-hover:bg-[#00847e]/20 transition-colors duration-300">
                <RocketLaunchIcon className="h-7 w-7 text-[#00847e]" />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">
                {t('plans.why.results.title')}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('plans.why.results.description')}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00847e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Bottom Trust Bar */}
          <div className="rounded-2xl border border-[#00847e]/20 bg-gradient-to-br from-[#00847e]/5 to-transparent p-8">
            <div className="flex flex-wrap items-center justify-center gap-10">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-[#00847e] rounded-full"></div>
                <span className="text-slate-700 font-medium text-sm">Certificação Garantida</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-[#00847e] rounded-full"></div>
                <span className="text-slate-700 font-medium text-sm">Suporte Premium</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-[#00847e] rounded-full"></div>
                <span className="text-slate-700 font-medium text-sm">Resultados Comprovados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-[#004d4a] to-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00847e]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00847e]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-[#00847e]/20 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 border border-[#00847e]/30">
            <span className="flex h-2 w-2 rounded-full bg-[#00847e] animate-pulse"></span>
            {t('plans.cta.badge')}
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('plans.cta.title')}
          </h2>
          <p className="text-lg text-teal-50/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('plans.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contactos"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#00847e] to-teal-600 px-8 py-4 text-white font-semibold shadow-lg shadow-[#00847e]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#00847e]/40 hover:scale-105 hover:-translate-y-1"
            >
              {t('plans.cta.contact')}
              <ArrowRightIcon className="w-5 h-5" />
            </a>
            <a
              href="/sobreiso"
              className="inline-flex items-center gap-3 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:border-[#00847e] hover:bg-[#00847e]/10 hover:scale-105 hover:-translate-y-1"
            >
              {t('plans.cta.certification')}
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-[#00847e] mb-2">24h</div>
              <p className="text-sm text-teal-50/60">Resposta Garantida</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-[#00847e] mb-2">Sem Custos</div>
              <p className="text-sm text-teal-50/60">Diagnóstico Inicial</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-[#00847e] mb-2">100%</div>
              <p className="text-sm text-teal-50/60">Aprovação em Auditoria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Print Button */}
      <div className="fixed left-6 bottom-6 z-50 group">
        <div className="relative">
          {/* Pulse Animation Background */}
          <div className="absolute inset-0 bg-gray-500 rounded-2xl animate-ping opacity-20"></div>
          
          {/* Main Button */}
          <Button
            color="gray"
            variant="filled"
            size="lg"
            className="relative bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:from-gray-800 hover:via-gray-900 hover:to-black text-white font-semibold px-5 py-3 rounded-2xl shadow-2xl hover:shadow-gray-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-0"
            onClick={handlePrintAllPlans}
          >
            <div className="flex items-center gap-3 text-white">
              <div className="relative">
                <PrinterIcon className="h-6 w-6" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="text-left">
                <div className="font-bold text-sm leading-tight">
                  {t('plans.print.all')}
                </div>
              </div>
              <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </Button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            <div className="text-center">
              <div className="font-semibold">Imprimir Planos</div>
              <div className="text-xs text-gray-300">Clique para imprimir todos os planos</div>
            </div>
            {/* Tooltip Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>

       <Footer />
     </>
   );
} 