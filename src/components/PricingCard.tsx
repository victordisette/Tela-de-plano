
import React from 'react';

interface PricingCardProps {
  planName: string;
  price: string;
  period: string;
  features: string[];
  isHighlighted?: boolean;
  onGetPlan?: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  planName,
  price,
  period,
  features,
  isHighlighted = false,
  onGetPlan
}) => {
  const shadowClass = isHighlighted 
    ? "shadow-[7px_7px_7px_0px_rgba(0,0,0,0.25)]" 
    : "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]";

  const handleGetPlan = () => {
    if (onGetPlan) {
      onGetPlan();
    } else {
      // Default action - could be replaced with actual form submission or navigation
      alert(`Selecionado plano: ${planName}`);
    }
  };

  return (
    <article className={`w-[320px] bg-[linear-gradient(0deg,#277C30_0%,#277C30_100%)] ${shadowClass} flex flex-col flex-shrink-0 max-md:w-[280px] max-sm:w-[250px]`}>
      <div className="flex flex-col h-full p-[25px] max-md:p-[20px] max-sm:p-4">
        <header className="text-white text-center text-[32px] font-semibold mb-4 max-md:text-[28px] max-sm:text-[24px]">
          {planName}
        </header>
        
        <div className="text-white text-center text-4xl font-semibold mb-2 max-md:text-[32px] max-sm:text-[28px]">
          {price}
        </div>
        
        <div className="text-white text-center text-lg font-semibold mb-4 max-md:text-base max-sm:text-sm">
          {period}
        </div>
        
        <hr className="w-full h-px bg-white mb-4 border-0" />
        
        <div className="text-white text-center text-xs font-bold leading-[18px] flex-1 mb-4 max-md:text-[11px] max-md:leading-[16px] max-sm:text-[10px] max-sm:leading-[15px]">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <span>{feature}</span>
              {index < features.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
        
        <hr className="w-full h-px bg-white mb-4 border-0" />
        
        <button 
          onClick={handleGetPlan}
          className="text-[#277C30] text-center text-xl font-semibold w-full h-[45px] bg-white mx-auto max-md:text-lg max-sm:text-base max-sm:h-[40px] hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label={`Obter plano ${planName}`}
        >
          Obter
        </button>
      </div>
    </article>
  );
};
