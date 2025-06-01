
import React from 'react';
import { PricingHeader } from './PricingHeader';
import { PricingCard } from './PricingCard';

interface PricingPlan {
  planName: string;
  price: string;
  period: string;
  features: string[];
  isHighlighted?: boolean;
}

interface PricingSectionProps {
  title: string;
  subtitle?: string;
  plans: PricingPlan[];
  onPlanSelect?: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  title,
  subtitle,
  plans,
  onPlanSelect
}) => {
  const handlePlanSelect = (planName: string) => {
    if (onPlanSelect) {
      onPlanSelect(planName);
    }
  };

  return (
    <section className="w-full bg-[rgba(70,183,102,0.40)] py-[50px] max-md:py-10 max-sm:py-[30px]">
      <div className="flex flex-col items-center justify-center px-5">
        <PricingHeader title={title} subtitle={subtitle} />
        
        <div className="w-full max-w-[1800px] overflow-x-auto">
          <div className="flex gap-[30px] min-w-max px-5 max-md:gap-5 max-sm:gap-[15px]">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                planName={plan.planName}
                price={plan.price}
                period={plan.period}
                features={plan.features}
                isHighlighted={plan.isHighlighted}
                onGetPlan={() => handlePlanSelect(plan.planName)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
