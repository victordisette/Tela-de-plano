import React from 'react';

export const Footer: React.FC = () => {
  const handlePrivacyPolicy = () => {
    // This could navigate to a privacy policy page or open a modal
    alert('Política de Privacidade');
  };

  const handleTermsOfUse = () => {
    // This could navigate to a terms of use page or open a modal
    alert('Termos de Uso');
  };

  return (
    <footer className="w-full bg-[#277C30] py-[50px] max-md:py-10 max-sm:py-[30px]">
      <div className="flex flex-wrap justify-between items-center max-w-[1920px] mx-auto px-5 max-md:px-[15px] max-sm:flex-col max-sm:gap-5 max-sm:px-2.5">
        <div className="flex items-center gap-2.5 max-sm:order-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce80a184e0f885c7cee5ec1abb4566ceb6ba9a7a?placeholderIfAbsent=true"
            alt="Flagr Logo"
            className="w-[23px] h-[23px]"
          />
          <div className="text-white text-[32px] font-normal max-md:text-[28px] max-sm:text-2xl">
            2025 Flagr
          </div>
        </div>
        
        <nav className="flex gap-[50px] max-md:gap-[30px] max-sm:gap-5 max-sm:order-2 max-sm:flex-col max-sm:text-center">
          <button
            onClick={handlePrivacyPolicy}
            className="text-white text-[32px] font-normal max-md:text-[28px] max-sm:text-2xl hover:text-gray-200 transition-colors duration-200 focus:outline-none focus:underline"
          >
            Política de Privacidade
          </button>
          <button
            onClick={handleTermsOfUse}
            className="text-white text-[32px] font-normal max-md:text-[28px] max-sm:text-2xl hover:text-gray-200 transition-colors duration-200 focus:outline-none focus:underline"
          >
            Termos de Uso
          </button>
        </nav>
      </div>
    </footer>
  );
};
