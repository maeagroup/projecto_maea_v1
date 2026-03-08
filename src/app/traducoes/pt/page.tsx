"use client";

import React from 'react';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { ArrowLeftIcon, DocumentTextIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const PORTUGUESE_TRANSLATIONS = {
  // Navegação
  'nav.company': 'Empresa',
  'nav.consulting': 'Soluções de Consultoria',
  'nav.certification': 'Sobre ISO',
  'nav.plans': 'Plano',
  'nav.policies': 'Políticas',
  'nav.contact': 'Contacto',

  // Comum
  'common.learn_more': 'Saber Mais',
  'common.certification': 'Certificação',

  // Formulário
  'form.subjects.services': 'Serviços',
  'form.subjects.consultant': 'Consultor',
  'form.subjects.quote': 'Orçamento',
  'form.subjects.partnership': 'Parceria',
  'form.subjects.other': 'Outro',

  'form.services.business': 'Consultoria Empresarial',
  'form.services.environmental': 'Consultoria Ambiental',
  'form.services.iso': 'Certificação ISO',
  'form.services.training': 'Treinamento Corporativo',
  'form.services.petroleum': 'Setor Petrolífero',
  'form.services.technical': 'Consultoria Técnica',
  'form.services.sustainability': 'Sustentabilidade',

  // Contacto
  'contact.form.subject': 'Assunto',
  'contact.form.subject.placeholder': 'Selecione um assunto',
  'contact.form.service': 'Serviço',
  'contact.form.service.placeholder': 'Selecione um serviço',

  // Página Inicial
  'home.hero.title': 'MAEA',
  'home.hero.description': 'Especialistas em gestão da qualidade e certificação ISO para o setor petrolífero. Oferecemos soluções integradas de consultoria empresarial, certificação ISO e treinamento corporativo para impulsionar o sucesso da sua empresa.',
  'home.hero.cta': 'Saber Mais',
  'home.hero.badge': 'Especialistas em Gestão da Qualidade',
  'home.hero.highlight': 'Seu Sucesso',
  'home.hero.stat1': 'Clientes',
  'home.hero.stat2': 'Anos de Experiência',

  // Serviços
  'services.section.title': 'Nossos Serviços',
  'services.section.subtitle': 'Soluções especializadas para o setor petrolífero e outros setores industriais. Oferecemos consultoria empresarial, certificação ISO e treinamento corporativo com metodologias comprovadas e resultados garantidos.',
  'services.integrated.title': 'Soluções Integradas',
  'services.integrated.company': 'Consultoria Empresarial',
  'services.integrated.description': 'Apoio na gestão empresarial e otimização de processos organizacionais. Desenvolvemos estratégias personalizadas para melhorar a eficiência operacional, reduzir custos e aumentar a competitividade da sua empresa no mercado.',
  'services.integrated.cta': 'Saber Mais',

  // Empresa
  'company.hero.title': 'Sobre a MAEA',
  'company.hero.description': 'Especialistas em consultoria empresarial e certificação ISO para o setor petrolífero. Com mais de 3 anos de experiência, somos líderes em soluções de qualidade e gestão empresarial em Angola e na região.',
  'company.hero.cta.services': 'Nossos Serviços',
  'company.hero.cta.contact': 'Contactar',

  // Equipa
  'company.team.title': 'Nossa Equipe',
  'company.team.subtitle': 'Profissionais experientes e certificados com vasta experiência no setor petrolífero e industrial',
  'company.team.elizabeth.name': 'Elizabeth Narciso',
  'company.team.elizabeth.role': 'Directora Comercial',
  'company.team.elizabeth.description': 'Responsável pela estratégia comercial e desenvolvimento de negócios da MAEA.',
  'company.team.jesus.name': 'Jesus Afonso',
  'company.team.jesus.role': 'CEO',
  'company.team.jesus.description': 'Líder executivo responsável pela visão estratégica e direção geral da empresa.',
  'company.team.borges.name': 'Borges Lubaki',
  'company.team.borges.role': 'Gestor de Projecto & Auditor',
  'company.team.borges.description': 'Especialista em gestão de projetos de certificação e auditorias de sistemas de gestão.',

  // Experiência
  'company.experience.title': 'Nossa Experiência',
  'company.experience.description': 'Mais de 3 anos de experiência em diversos setores',
  'company.experience.iso': 'Certificação ISO',
  'company.experience.petroleum': 'Setor Petrolífero',
  'company.experience.engineering': 'Engenharia',
  'company.experience.management': 'Gestão Empresarial',

  // Sobre ISO
  'sobreiso.hero.title': 'Sobre as Normas ISO',
  'sobreiso.hero.description': 'Conheça as normas internacionais que garantem qualidade, segurança e sustentabilidade para o seu negócio. Especialistas em certificação ISO para o setor petrolífero e industrial.',
  'sobreiso.hero.cta.certification': 'Ver Certificações',
  'sobreiso.hero.cta.contact': 'Contactar',

  // Soluções
  'sobreiso.solutions.title': 'Soluções para os seus desafios',
  'sobreiso.solutions.subtitle': 'Descubra quais padrões a comunidade ISO desenvolveu para atender às necessidades do seu setor!',
  'sobreiso.solutions.what_is.title': 'O que é um padrão?',
  'sobreiso.solutions.what_is.description': 'Padrões ISO são especificações técnicas acordadas internacionalmente que garantem que produtos, serviços e processos sejam seguros, confiáveis e de boa qualidade.',

  // Políticas
  'policies.hero.title': 'Políticas da MAEA',
  'policies.hero.description': 'Nossos compromissos e princípios que guiam todas as nossas ações. Acreditamos na transparência e na responsabilidade social como pilares fundamentais do nosso sucesso empresarial.',
  'policies.hero.cta.company': 'Conhecer a Empresa',
  'policies.hero.cta.contact': 'Contactar',
  'policies.print.title': 'Imprimir Políticas',
  'policies.print.button': 'Imprimir Políticas',

  // Planos
  'plans.hero.title': 'Nossos Planos',
  'plans.hero.description': 'Soluções personalizadas para diferentes necessidades empresariais. Escolha o plano que melhor se adapta aos seus objetivos.',
  'plans.hero.cta.contact': 'Contactar',

  // Contacto
  'contact.hero.title': 'Contactos',
  'contact.hero.description': 'Entre em contacto connosco para obter mais informações sobre os nossos serviços. Estamos disponíveis para responder às suas questões e fornecer soluções personalizadas para as suas necessidades empresariais.',
  'contact.form.title': 'Envie-nos uma Mensagem',
  'contact.form.subtitle': 'Preencha o formulário abaixo e entraremos em contacto consigo o mais rapidamente possível',
  'contact.form.name': 'Nome',
  'contact.form.email': 'Email',
  'contact.form.phone': 'Telefone',
  'contact.form.company': 'Empresa',
  'contact.form.city': 'Cidade',
  'contact.form.province': 'Província',
  'contact.form.message': 'Mensagem',
  'contact.form.message.placeholder': 'Descreva as suas necessidades...',
  'contact.form.sending': 'A enviar...',
  'contact.form.submit': 'Enviar Mensagem',
  'contact.success.title': 'Mensagem Enviada!',
  'contact.success.message': 'Obrigado pela sua mensagem. Entraremos em contacto consigo o mais rapidamente possível',
  'contact.success.close': 'Fechar',

  // Footer
  'footer.copyright': 'Todos os direitos reservados.',
  'footer.privacy': 'Política de Privacidade',
  'footer.terms': 'Termos de Serviço',
  'footer.cookies': 'Política de Cookies',
};

export default function PortugueseTranslationsPage() {
  // Convert translations to array to avoid Object.entries() during build
  const translationsArray = [
    { key: 'nav.company', value: 'Empresa' },
    { key: 'nav.projects', value: 'Projectos' },
    { key: 'nav.consulting', value: 'Soluções de Consultoria' },
    { key: 'nav.certification', value: 'Sobre ISO' },
    { key: 'nav.plans', value: 'Plano' },
    { key: 'nav.policies', value: 'Políticas' },
    { key: 'nav.contact', value: 'Contacto' },
    { key: 'common.learn_more', value: 'Saber Mais' },
    { key: 'common.certification', value: 'Certificação' },
    { key: 'home.hero.title', value: 'MAEA' },
    { key: 'home.hero.description', value: 'Líderes em gestão da qualidade e certificação ISO para o setor Privado & Público. Desenvolvemos soluções estratégicas de consultoria empresarial, implementação de sistemas ISO e capacitação corporativa, garantindo excelência operacional e competitividade sustentável para o seu negócio.' },
    { key: 'home.hero.cta', value: 'Saber Mais' },
    { key: 'home.hero.cta.services', value: 'Nossos Serviços' },
    { key: 'home.hero.cta.contact', value: 'Contactar' },
    { key: 'services.section.title', value: 'Nossos Serviços' },
    { key: 'services.section.subtitle', value: 'Soluções especializadas para o setor petrolífero e outros setores industriais. Oferecemos consultoria empresarial, certificação ISO e treinamento corporativo com metodologias comprovadas e resultados garantidos.' },
    { key: 'services.integrated.title', value: 'Soluções Integradas' },
    { key: 'services.integrated.company', value: 'Consultoria Empresarial' },
    { key: 'services.integrated.description', value: 'Apoio na gestão empresarial e otimização de processos organizacionais. Desenvolvemos estratégias personalizadas para melhorar a eficiência operacional, reduzir custos e aumentar a competitividade da sua empresa no mercado.' },
    { key: 'services.integrated.cta', value: 'Saber Mais' },
    { key: 'company.hero.title', value: 'Sobre a MAEA' },
    { key: 'company.hero.description', value: 'Especialistas em consultoria empresarial e certificação ISO para o sector Privado & Publico. Com mais de 3 anos de experiência, somos líderes em soluções de qualidade e gestão empresarial em Angola e na região.' },
    { key: 'company.hero.cta.contact', value: 'Contactar' },
    { key: 'company.hero.cta.services', value: 'Nossos Serviços' },
    { key: 'company.experience.title', value: 'Experiência Comprovada' },
    { key: 'company.experience.description', value: 'Mais de 3 anos de experiência em certificação ISO com empresas de diversos setores.' },
    { key: 'company.mission.title', value: 'Nossa Missão' },
    { key: 'company.mission.description', value: 'Fornecer soluções de consultoria e certificação ISO de excelência, contribuindo para o desenvolvimento sustentável e competitivo das empresas angolanas, especialmente no setor petrolífero.' },
    { key: 'company.vision.title', value: 'Nossa Visão' },
    { key: 'company.vision.description', value: 'Ser a empresa de referência em consultoria empresarial e certificação ISO em Angola, reconhecida pela qualidade dos serviços e impacto positivo no desenvolvimento empresarial.' },
    { key: 'company.values.title', value: 'Nossos Valores' },
    { key: 'company.values.excellence', value: 'Excelência' },
    { key: 'company.values.integrity', value: 'Integridade' },
    { key: 'company.values.innovation', value: 'Inovação' },
    { key: 'company.values.commitment', value: 'Compromisso' },
    { key: 'company.team.title', value: 'Nossa Equipa' },
    { key: 'company.team.subtitle', value: 'Profissionais experientes e qualificados para atender às suas necessidades.' },
    { key: 'company.team.ceo.title', value: 'CEO & Fundador' },
    { key: 'company.team.ceo.name', value: 'Eng. João Borges' },
    { key: 'company.team.ceo.description', value: 'Especialista em gestão da qualidade e certificação ISO com mais de 3 anos de experiência no setor petrolífero.' },
    { key: 'company.team.commercial.title', value: 'Diretora Comercial' },
    { key: 'company.team.commercial.name', value: 'Dra. Elizabeth Silva' },
    { key: 'company.team.commercial.description', value: 'Responsável pela estratégia comercial e desenvolvimento de negócios da MAEA.' },
    { key: 'company.team.technical.title', value: 'Consultor Técnico' },
    { key: 'company.team.technical.name', value: 'Eng. Carlos Mendes' },
    { key: 'company.team.technical.description', value: 'Especialista em implementação de sistemas de gestão e auditorias ISO.' },
    { key: 'sobreiso.hero.title', value: 'Sobre ISO' },
    { key: 'sobreiso.hero.description', value: 'Conheça as normas internacionais que garantem qualidade, segurança e sustentabilidade para o seu negócio. Especialistas em certificação ISO para o setor petrolífero e industrial.' },
    { key: 'sobreiso.hero.cta.contact', value: 'Contactar' },
    { key: 'sobreiso.solutions.title', value: 'Soluções para os seus desafios' },
    { key: 'sobreiso.solutions.subtitle', value: 'Descubra quais padrões a comunidade ISO desenvolveu para atender às necessidades do seu setor!' },
    { key: 'sobreiso.solutions.what_is.title', value: 'O que é um padrão?' },
    { key: 'sobreiso.solutions.what_is.description', value: 'Padrões ISO são especificações técnicas acordadas internacionalmente que garantem que produtos, serviços e processos sejam seguros, confiáveis e de boa qualidade.' },
    { key: 'policies.hero.title', value: 'Políticas da MAEA' },
    { key: 'policies.hero.description', value: 'Nossos compromissos e princípios que guiam todas as nossas ações. Acreditamos na transparência e na responsabilidade social como pilares fundamentais do nosso sucesso empresarial.' },
    { key: 'policies.hero.cta.company', value: 'Conhecer a Empresa' },
    { key: 'policies.hero.cta.contact', value: 'Contactar' },
    { key: 'policies.print.title', value: 'Imprimir Políticas' },
    { key: 'policies.print.button', value: 'Imprimir Políticas' },
    { key: 'plans.hero.title', value: 'Nossos Planos' },
    { key: 'plans.hero.description', value: 'Soluções personalizadas para diferentes necessidades empresariais. Escolha o plano que melhor se adapta aos seus objetivos.' },
    { key: 'plans.hero.cta.contact', value: 'Contactar' },
    { key: 'contact.hero.title', value: 'Contactos' },
    { key: 'contact.hero.description', value: 'Entre em contacto connosco para obter mais informações sobre os nossos serviços. Estamos disponíveis para responder às suas questões e fornecer soluções personalizadas para as suas necessidades empresariais.' },
    { key: 'contact.form.title', value: 'Envie-nos uma Mensagem' },
    { key: 'contact.form.subtitle', value: 'Preencha o formulário abaixo e entraremos em contacto consigo o mais rapidamente possível' },
    { key: 'contact.form.name', value: 'Nome' },
    { key: 'contact.form.email', value: 'Email' },
    { key: 'contact.form.phone', value: 'Telefone' },
    { key: 'contact.form.company', value: 'Empresa' },
    { key: 'contact.form.city', value: 'Cidade' },
    { key: 'contact.form.province', value: 'Província' },
    { key: 'contact.form.message', value: 'Mensagem' },
    { key: 'contact.form.message.placeholder', value: 'Descreva as suas necessidades...' },
    { key: 'contact.form.sending', value: 'A enviar...' },
    { key: 'contact.form.submit', value: 'Enviar Mensagem' },
    { key: 'contact.success.title', value: 'Mensagem Enviada!' },
    { key: 'contact.success.message', value: 'Obrigado pela sua mensagem. Entraremos em contacto consigo o mais rapidamente possível' },
    { key: 'contact.success.close', value: 'Fechar' },
    { key: 'footer.copyright', value: 'Todos os direitos reservados.' },
    { key: 'footer.privacy', value: 'Política de Privacidade' },
    { key: 'footer.terms', value: 'Termos de Serviço' },
    { key: 'footer.cookies', value: 'Política de Cookies' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[#00847e] hover:text-[#00847e]/80 mb-4">
            <ArrowLeftIcon className="h-5 w-5" />
            Voltar ao Início
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <GlobeAltIcon className="h-12 w-12 text-[#00847e] mx-auto mb-4" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Traduções em Português</h1>
              <p className="text-gray-600">Todas as traduções utilizadas no projeto em português</p>
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
            Resumo das Traduções
          </Typography>
          <Typography variant="paragraph" className="text-gray-700">
            Total de traduções em português: <strong>{translationsArray.length}</strong>
          </Typography>
          <Typography variant="small" className="text-gray-600 mt-2">
            Estas traduções são utilizadas em todo o projeto para garantir consistência na comunicação em português.
          </Typography>
        </div>
      </div>
    </div>
  );
} 