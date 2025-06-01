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
    <article className={`w-[433px] bg-[linear-gradient(0deg,#277C30_0%,#277C30_100%)] ${shadowClass} flex flex-col max-md:w-[350px] max-sm:w-[300px]`}>
      <div className="flex flex-col h-full p-[30px] max-md:p-[25px] max-sm:p-5">
        <header className="text-white text-center text-[40px] font-semibold mb-5 max-md:text-[32px] max-sm:text-[28px]">
          {planName}
        </header>
        
        <div className="text-white text-center text-5xl font-semibold mb-2.5 max-md:text-[40px] max-sm:text-[32px]">
          {price}
        </div>
        
        <div className="text-white text-center text-xl font-semibold mb-5 max-md:text-lg max-sm:text-base">
          {period}
        </div>
        
        <hr className="w-full h-px bg-white mb-5 border-0" />
        
        <div className="text-white text-center text-sm font-bold leading-[21px] flex-1 mb-5 max-md:text-[13px] max-md:leading-[19px] max-sm:text-xs max-sm:leading-[18px]">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <span>{feature}</span>
              {index < features.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
        
        <hr className="w-full h-px bg-white mb-5 border-0" />
        
        <button 
          onClick={handleGetPlan}
          className="text-[#277C30] text-center text-2xl font-semibold w-[171px] h-[53px] bg-white mx-auto max-md:text-xl max-md:w-[150px] max-sm:text-lg max-sm:w-full max-sm:h-[45px] hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label={`Obter plano ${planName}`}
        >
          Obter
        </button>
      </div>
    </article>
  );
};
