import React from 'react';
import { PricingSection } from '@/components/PricingSection';
import { Footer } from '@/components/Footer';

const Index: React.FC = () => {
  const legalPlans = [
    {
      planName: 'Start',
      price: 'R$ 250',
      period: 'por mês',
      features: [
        'Dashboard',
        '',
        'Data Room Juridico',
        '',
        'Relatório de Due Diligence / 2x por ano',
        '',
        'Assistente virtual para Duvidas (24/7)'
      ],
      isHighlighted: false
    },
    {
      planName: 'Growth',
      price: 'R$ 400',
      period: 'por mês',
      features: [
        'Dashboard',
        'Consultoria Jurídico / 15min por Mês',
        'Data Room Juridico',
        'Relatório de Due Diligence / 3x por ano',
        'Correção de Riscos do Relatório de Due Diligence / 3x por ano',
        'Assistente virtual para Duvidas (24/7)',
        'Analise de Pitch Deck / 1x por Mês'
      ],
      isHighlighted: true
    },
    {
      planName: 'Master',
      price: 'R$ 600',
      period: 'por mês',
      features: [
        'Dashboard',
        'Consultoria Jurídico / 30min por Mês',
        'Data Room Juridico',
        'Gestão de contratos / até 4',
        'Relatório de Due Diligence / 6x por ano',
        'Correção de Riscos do Relatório de Due Diligence / 6x por ano',
        'Assistente virtual para Duvidas (24/7)',
        'Analise de Pitch Deck / 1x por Mês',
        'Divulgação de Score para Investidores'
      ],
      isHighlighted: true
    },
    {
      planName: 'Due Diligence',
      price: 'R$ 3.500',
      period: '(Único)',
      features: [
        'Dashboard',
        'Data Room Juridico',
        'Relatório de Due Diligence / 2x por ano'
      ],
      isHighlighted: true
    }
  ];

  const platformPlans = [
    {
      planName: 'Foundation',
      price: 'R$ 1.650',
      period: 'por mês',
      features: [
        'Dashboard',
        '',
        'Contratos(elaboração e revisão de projetos) / 1 crédito por mês',
        '',
        'Consultoria Jurídico / 30 por Mês',
        '',
        'Data Room Juridico',
        '',
        'Relatório de Due Diligence / 2x por ano',
        '',
        'Assistente virtual para Duvidas (24/7)'
      ],
      isHighlighted: false
    },
    {
      planName: 'Stronghold',
      price: 'R$ 2.650',
      period: 'por mês',
      features: [
        'Dashboard',
        'Contratos(elaboração e revisão de projetos) / 2 crédito por mês',
        'Consultoria Jurídico / 1h por Mês',
        'Data Room Juridico',
        'Gestão de contratos / até 2',
        'Relatório de Due Diligence / 3x por ano',
        'Correção de Riscos do Relatório de Due Diligence / 3x por ano',
        'Assistente virtual para Duvidas (24/7)',
        'Analise de Pitch Deck / 1x por Mês',
        'Divulgação de Score para Investidores'
      ],
      isHighlighted: true
    },
    {
      planName: 'Fortress',
      price: 'R$ 4.250',
      period: 'por mês',
      features: [
        'Dashboard',
        'Contratos(elaboração e revisão de projetos) / 3 crédito por mês',
        'Consultoria Jurídico / 2h por Mês',
        'Data Room Juridico',
        'Gestão de contratos / até 4',
        'Relatório de Due Diligence / 6x por ano',
        'Correção de Riscos do Relatório de Due Diligence / 6x por ano',
        'Monitoramento de uma Marca',
        'Assistente virtual para Duvidas (24/7)',
        'Analise de Pitch Deck / 1x por Mês',
        'Divulgação de Score para Investidores'
      ],
      isHighlighted: true
    },
    {
      planName: 'Titan',
      price: 'R$ 6.000',
      period: 'por mês',
      features: [
        'Dashboard',
        'Contratos(elaboração e revisão de projetos) / 6 crédito por mês',
        'Consultoria Jurídico / 3h por Mês',
        'Data Room Juridico',
        'Gestão de contratos / até 10',
        'Relatório de Due Diligence / 12x por ano',
        'Correção de Riscos do Relatório de Due Diligence / 12x por ano',
        'Monitoramento de uma Marca',
        'Assistente virtual para Duvidas (24/7)',
        'Analise de Pitch Deck / 1x por Mês',
        'Divulgação de Score para Investidores'
      ],
      isHighlighted: true
    }
  ];

  const handlePlanSelection = (planName: string) => {
    // This could integrate with a form, payment system, or navigation
    console.log(`Plan selected: ${planName}`);
    // For now, we'll show an alert, but this could be replaced with:
    // - Navigation to a checkout page
    // - Opening a contact form modal
    // - Integration with a payment processor
    alert(`Você selecionou o plano: ${planName}. Em breve você será redirecionado para finalizar sua assinatura.`);
  };

  return (
    <main className="w-full min-h-screen bg-white flex flex-col">
      <PricingSection
        title="Planos Mensais"
        subtitle="Jurídicos"
        plans={legalPlans}
        onPlanSelect={handlePlanSelection}
      />
      
      <PricingSection
        title="Planos Mensais"
        subtitle="Plataforma + Jurídico"
        plans={platformPlans}
        onPlanSelect={handlePlanSelection}
      />
      
      <Footer />
    </main>
  );
};

export default Index;
