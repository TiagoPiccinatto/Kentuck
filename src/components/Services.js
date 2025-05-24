import React from 'react';

const Services = () => {
  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Oferecemos serviços especializados para cavaleiros iniciantes e hospedagem de qualidade para seu cavalo</p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Serviço de Treinamento */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/WhatsApp Image 2025-03-31 at 10.45.12 AM.jpeg" 
                alt="Treinamento de equitação" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Treinamento de Equitação</h3>
              <p className="text-gray-600 mb-4">
                Aulas personalizadas para iniciantes que desejam aprender a arte da equitação em um ambiente 
                seguro e acolhedor, com instrutores experientes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Aulas individuais ou em grupo</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Técnicas básicas de montaria</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Cuidados básicos com o animal</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Equipamentos de segurança inclusos</span>
                </li>
              </ul>
              <a 
                href="#contato" 
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition duration-300"
              >
                Agendar Aula
              </a>
            </div>
          </div>
          
          {/* Serviço de Hospedagem */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/WhatsApp Image 2025-03-31 at 10.15.02 AM.jpeg" 
                alt="Hospedagem para cavalos" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Hospedagem para Cavalos</h3>
              <p className="text-gray-600 mb-4">
                Oferecemos hospedagem de qualidade para seu cavalo, com instalações confortáveis, alimentação 
                balanceada e cuidados veterinários regulares.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Baias espaçosas e confortáveis</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Alimentação balanceada</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Acompanhamento veterinário</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Áreas de pastagem e exercício</span>
                </li>
              </ul>
              <a 
                href="#contato" 
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition duration-300"
              >
                Solicitar Informações
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
