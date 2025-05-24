import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-16 md:pt-20">
      <div className="w-full h-screen min-h-[500px] bg-cover bg-center relative" 
           style={{ backgroundImage: "url('/images/1000159510.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
          <img 
            src="/images/logosemfundobranco.png" 
            alt="Rancho Kentucky Logo" 
            className="w-40 md:w-56 mb-6 animate-fade-in"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Rancho Kentucky
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-lg">
            Treinamento de equitação para iniciantes e hospedagem para cavalos em um ambiente natural e acolhedor
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#servicos" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition duration-300 text-lg"
            >
              Nossos Serviços
            </a>
            <a 
              href="#contato" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-6 py-3 rounded-md font-medium transition duration-300 text-lg"
            >
              Agendar Visita
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
