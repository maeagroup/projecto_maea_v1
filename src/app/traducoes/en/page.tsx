"use client";

import React from 'react';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { ArrowLeftIcon, DocumentTextIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ENGLISH_TRANSLATIONS = {
  // Navigation
  'nav.company': 'Company',
  'nav.consulting': 'Consulting Solutions',
  'nav.certification': 'About ISO',
  'nav.plans': 'Plans',
  'nav.policies': 'Policies',
  'nav.contact': 'Contact',

  // Common
  'common.learn_more': 'Learn More',
  'common.certification': 'Certification',

  // Form
  'form.subjects.services': 'Services',
  'form.subjects.consultant': 'Consultant',
  'form.subjects.quote': 'Quote',
  'form.subjects.partnership': 'Partnership',
  'form.subjects.other': 'Other',

  'form.services.business': 'Business Consulting',
  'form.services.environmental': 'Environmental Consulting',
  'form.services.iso': 'ISO Certification',
  'form.services.training': 'Corporate Training',
  'form.services.petroleum': 'Petroleum Sector',
  'form.services.technical': 'Technical Consulting',
  'form.services.sustainability': 'Sustainability',

  // Contact
  'contact.form.subject': 'Subject',
  'contact.form.subject.placeholder': 'Select a subject',
  'contact.form.service': 'Service',
  'contact.form.service.placeholder': 'Select a service',

  // Home Page
  'home.hero.title': 'MAEA',
  'home.hero.description': 'Quality management and ISO certification experts for the oil and gas industry. We offer integrated business consulting, ISO certification and corporate training solutions to drive your company\'s success.',
  'home.hero.cta': 'Learn More',
  'home.hero.badge': 'Quality Management Experts',
  'home.hero.highlight': 'Your Success',
  'home.hero.stat1': 'Clients',
  'home.hero.stat2': 'Years of Experience',

  // Services
  'services.section.title': 'Our Services',
  'services.section.subtitle': 'Specialized solutions for the oil and gas industry and other industrial sectors. We offer business consulting, ISO certification and corporate training with proven methodologies and guaranteed results.',
  'services.integrated.title': 'Integrated Solutions',
  'services.integrated.company': 'Business Consulting',
  'services.integrated.description': 'Support in business management and optimization of organizational processes. We develop personalized strategies to improve operational efficiency, reduce costs and increase your company\'s competitiveness in the market.',
  'services.integrated.cta': 'Learn More',

  // Company
  'company.hero.title': 'About MAEA',
  'company.hero.description': 'Experts in business consulting and ISO certification for the oil and gas industry. With over 3 years of experience, we are leaders in quality solutions and business management in Angola and the region.',
  'company.hero.cta.services': 'Our Services',
  'company.hero.cta.contact': 'Contact',

  // Team
  'company.team.title': 'Our Team',
  'company.team.subtitle': 'Experienced and certified professionals with extensive experience in the oil and gas and industrial sector',
  'company.team.elizabeth.name': 'Elizabeth Narciso',
  'company.team.elizabeth.role': 'Commercial Director',
  'company.team.elizabeth.description': 'Responsible for commercial strategy and business development of MAEA.',
  'company.team.jesus.name': 'Jesus Afonso',
  'company.team.jesus.role': 'CEO',
  'company.team.jesus.description': 'Executive leader responsible for strategic vision and general direction of the company.',
  'company.team.borges.name': 'Borges Lubaki',
  'company.team.borges.role': 'Project Manager & Auditor',
  'company.team.borges.description': 'Specialist in certification project management and management system audits.',

  // Experience
  'company.experience.title': 'Our Experience',
  'company.experience.description': 'More than 3 years of experience in various sectors',
  'company.experience.iso': 'ISO Certification',
  'company.experience.petroleum': 'Oil and Gas Industry',
  'company.experience.engineering': 'Engineering',
  'company.experience.management': 'Business Management',

  // About ISO
  'sobreiso.hero.title': 'About ISO Standards',
  'sobreiso.hero.description': 'Learn about international standards that ensure quality, safety and sustainability for your business. ISO certification experts for the oil and gas and industrial sector.',
  'sobreiso.hero.cta.certification': 'View Certifications',
  'sobreiso.hero.cta.contact': 'Contact',

  // Solutions
  'sobreiso.solutions.title': 'Solutions for your challenges',
  'sobreiso.solutions.subtitle': 'Discover which standards the ISO community has developed to meet your sector\'s needs!',
  'sobreiso.solutions.what_is.title': 'What is a standard?',
  'sobreiso.solutions.what_is.description': 'ISO standards are internationally agreed technical specifications that ensure products, services and processes are safe, reliable and of good quality.',

  // Policies
  'policies.hero.title': 'MAEA Policies',
  'policies.hero.description': 'Our commitments and principles that guide all our actions. We believe in transparency and social responsibility as fundamental pillars of our business success.',
  'policies.hero.cta.company': 'Learn About the Company',
  'policies.hero.cta.contact': 'Contact',
  'policies.print.title': 'Print Policies',
  'policies.print.button': 'Print Policies',

  // Plans
  'plans.hero.title': 'Our Plans',
  'plans.hero.description': 'Personalized solutions for different business needs. Choose the plan that best fits your objectives.',
  'plans.hero.cta.contact': 'Contact',

  // Contact
  'contact.hero.title': 'Contact',
  'contact.hero.description': 'Contact us to get more information about our services. We are available to answer your questions and provide personalized solutions for your business needs.',
  'contact.form.title': 'Send us a Message',
  'contact.form.subtitle': 'Fill out the form below and we will contact you as soon as possible',
  'contact.form.name': 'Name',
  'contact.form.email': 'Email',
  'contact.form.phone': 'Phone',
  'contact.form.company': 'Company',
  'contact.form.city': 'City',
  'contact.form.province': 'Province',
  'contact.form.message': 'Message',
  'contact.form.message.placeholder': 'Describe your needs...',
  'contact.form.sending': 'Sending...',
  'contact.form.submit': 'Send Message',
  'contact.success.title': 'Message Sent!',
  'contact.success.message': 'Thank you for your message. We will contact you as soon as possible',
  'contact.success.close': 'Close',

  // Footer
  'footer.copyright': 'All rights reserved.',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
  'footer.cookies': 'Cookie Policy',
};

export default function EnglishTranslationsPage() {
  // Convert translations to array to avoid Object.entries() during build
  const translationsArray = [
    { key: 'nav.company', value: 'Company' },
    { key: 'nav.consulting', value: 'Consulting Solutions' },
    { key: 'nav.certification', value: 'About ISO' },
    { key: 'nav.plans', value: 'Plans' },
    { key: 'nav.policies', value: 'Policies' },
    { key: 'nav.contact', value: 'Contact' },
    { key: 'common.learn_more', value: 'Learn More' },
    { key: 'common.certification', value: 'Certification' },
    { key: 'form.subjects.services', value: 'Services' },
    { key: 'form.subjects.consultant', value: 'Consultant' },
    { key: 'form.subjects.quote', value: 'Quote' },
    { key: 'form.subjects.partnership', value: 'Partnership' },
    { key: 'form.subjects.other', value: 'Other' },
    { key: 'form.services.business', value: 'Business Consulting' },
    { key: 'form.services.environmental', value: 'Environmental Consulting' },
    { key: 'form.services.iso', value: 'ISO Certification' },
    { key: 'form.services.training', value: 'Corporate Training' },
    { key: 'form.services.petroleum', value: 'Petroleum Sector' },
    { key: 'form.services.technical', value: 'Technical Consulting' },
    { key: 'form.services.sustainability', value: 'Sustainability' },
    { key: 'contact.form.subject', value: 'Subject' },
    { key: 'contact.form.subject.placeholder', value: 'Select a subject' },
    { key: 'contact.form.service', value: 'Service' },
    { key: 'contact.form.service.placeholder', value: 'Select a service' },
    { key: 'home.hero.title', value: 'MAEA' },
    { key: 'home.hero.description', value: 'Quality management and ISO certification experts for the oil and gas industry. We offer integrated business consulting, ISO certification and corporate training solutions to drive your company\'s success.' },
    { key: 'home.hero.cta', value: 'Learn More' },
    { key: 'services.section.title', value: 'Our Services' },
    { key: 'services.section.subtitle', value: 'Specialized solutions for the oil and gas industry and other industrial sectors. We offer business consulting, ISO certification and corporate training with proven methodologies and guaranteed results.' },
    { key: 'services.integrated.title', value: 'Integrated Solutions' },
    { key: 'services.integrated.company', value: 'Business Consulting' },
    { key: 'services.integrated.description', value: 'Support in business management and optimization of organizational processes. We develop personalized strategies to improve operational efficiency, reduce costs and increase your company\'s competitiveness in the market.' },
    { key: 'services.integrated.cta', value: 'Learn More' },
    { key: 'company.hero.title', value: 'About MAEA' },
    { key: 'company.hero.description', value: 'Experts in business consulting and ISO certification for the oil and gas industry. With over 3 years of experience, we are leaders in quality solutions and business management in Angola and the region.' },
    { key: 'company.hero.cta.services', value: 'Our Services' },
    { key: 'company.hero.cta.contact', value: 'Contact' },
    { key: 'company.team.title', value: 'Our Team' },
    { key: 'company.team.subtitle', value: 'Experienced and certified professionals with extensive experience in the oil and gas and industrial sector' },
    { key: 'company.team.elizabeth.name', value: 'Elizabeth Narciso' },
    { key: 'company.team.elizabeth.role', value: 'Commercial Director' },
    { key: 'company.team.elizabeth.description', value: 'Responsible for commercial strategy and business development of MAEA.' },
    { key: 'company.team.jesus.name', value: 'Jesus Afonso' },
    { key: 'company.team.jesus.role', value: 'CEO' },
    { key: 'company.team.jesus.description', value: 'Executive leader responsible for strategic vision and general direction of the company.' },
    { key: 'company.team.borges.name', value: 'Borges Lubaki' },
    { key: 'company.team.borges.role', value: 'Project Manager & Auditor' },
    { key: 'company.team.borges.description', value: 'Specialist in certification project management and management system audits.' },
    { key: 'company.experience.title', value: 'Our Experience' },
    { key: 'company.experience.description', value: 'More than 3 years of experience in various sectors' },
    { key: 'company.experience.iso', value: 'ISO Certification' },
    { key: 'company.experience.petroleum', value: 'Oil and Gas Industry' },
    { key: 'company.experience.engineering', value: 'Engineering' },
    { key: 'company.experience.management', value: 'Business Management' },
    { key: 'sobreiso.hero.title', value: 'About ISO Standards' },
    { key: 'sobreiso.hero.description', value: 'Learn about international standards that ensure quality, safety and sustainability for your business. ISO certification experts for the oil and gas and industrial sector.' },
    { key: 'sobreiso.hero.cta.certification', value: 'View Certifications' },
    { key: 'sobreiso.hero.cta.contact', value: 'Contact' },
    { key: 'sobreiso.solutions.title', value: 'Solutions for your challenges' },
    { key: 'sobreiso.solutions.subtitle', value: 'Discover which standards the ISO community has developed to meet your sector\'s needs!' },
    { key: 'sobreiso.solutions.what_is.title', value: 'What is a standard?' },
    { key: 'sobreiso.solutions.what_is.description', value: 'ISO standards are internationally agreed technical specifications that ensure products, services and processes are safe, reliable and of good quality.' },
    { key: 'policies.hero.title', value: 'MAEA Policies' },
    { key: 'policies.hero.description', value: 'Our commitments and principles that guide all our actions. We believe in transparency and social responsibility as fundamental pillars of our business success.' },
    { key: 'policies.hero.cta.company', value: 'Learn About the Company' },
    { key: 'policies.hero.cta.contact', value: 'Contact' },
    { key: 'policies.print.title', value: 'Print Policies' },
    { key: 'policies.print.button', value: 'Print Policies' },
    { key: 'plans.hero.title', value: 'Our Plans' },
    { key: 'plans.hero.description', value: 'Personalized solutions for different business needs. Choose the plan that best fits your objectives.' },
    { key: 'plans.hero.cta.contact', value: 'Contact' },
    { key: 'contact.hero.title', value: 'Contact' },
    { key: 'contact.hero.description', value: 'Contact us to get more information about our services. We are available to answer your questions and provide personalized solutions for your business needs.' },
    { key: 'contact.form.title', value: 'Send us a Message' },
    { key: 'contact.form.subtitle', value: 'Fill out the form below and we will contact you as soon as possible' },
    { key: 'contact.form.name', value: 'Name' },
    { key: 'contact.form.email', value: 'Email' },
    { key: 'contact.form.phone', value: 'Phone' },
    { key: 'contact.form.company', value: 'Company' },
    { key: 'contact.form.city', value: 'City' },
    { key: 'contact.form.province', value: 'Province' },
    { key: 'contact.form.message', value: 'Message' },
    { key: 'contact.form.message.placeholder', value: 'Describe your needs...' },
    { key: 'contact.form.sending', value: 'Sending...' },
    { key: 'contact.form.submit', value: 'Send Message' },
    { key: 'contact.success.title', value: 'Message Sent!' },
    { key: 'contact.success.message', value: 'Thank you for your message. We will contact you as soon as possible' },
    { key: 'contact.success.close', value: 'Close' },
    { key: 'footer.copyright', value: 'All rights reserved.' },
    { key: 'footer.privacy', value: 'Privacy Policy' },
    { key: 'footer.terms', value: 'Terms of Service' },
    { key: 'footer.cookies', value: 'Cookie Policy' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[#00847e] hover:text-[#00847e]/80 mb-4">
            <ArrowLeftIcon className="h-5 w-5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <GlobeAltIcon className="h-12 w-12 text-[#00847e] mx-auto mb-4" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">English Translations</h1>
              <p className="text-gray-600">All translations used in the project in English</p>
            </div>
          </div>
        </div>

        {/* Translations Grid */}
        <div className="grid gap-6">
          {translationsArray.map(({ key, value }) => (
            <Card key={key} className="shadow-sm hover:shadow-md transition-shadow">
              <CardBody className="p-6">
                <div className="flex flex-col gap-2">
                  <Typography variant="small" color="blue-gray" className="font-mono text-xs">
                    {key}
                  </Typography>
                  <Typography variant="paragraph" className="text-gray-900">
                    {value}
                  </Typography>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <Typography variant="h6" color="blue-gray" className="mb-2">
            Translation Summary
          </Typography>
          <Typography variant="paragraph" className="text-gray-700">
            Total English translations: <strong>{translationsArray.length}</strong>
          </Typography>
          <Typography variant="small" className="text-gray-600 mt-2">
            These translations are used throughout the project to ensure consistency in English communication.
          </Typography>
        </div>
      </div>
    </div>
  );
} 