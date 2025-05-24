import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sobre o Rancho Kentucky</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Um espaço dedicado aos amantes de cavalos</h3>
            <p className="text-gray-600 mb-4">
              O Rancho Kentucky é um haras especializado em treinamento de equitação para iniciantes e hospedagem para cavalos, 
              localizado em um ambiente natural e tranquilo, ideal para o desenvolvimento da conexão entre cavaleiros e seus animais.
            </p>
            <p className="text-gray-600 mb-4">
              Nossa missão é proporcionar um ambiente seguro e acolhedor onde pessoas de todas as idades possam aprender a arte da 
              equitação, enquanto oferecemos aos cavalos um espaço confortável e bem cuidado para sua estadia.
            </p>
            <p className="text-gray-600 mb-6">
              Com uma equipe experiente e apaixonada, garantimos que tanto os cavaleiros quanto os cavalos recebam atenção 
              personalizada e cuidados de alta qualidade.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="font-medium">Instrutores Qualificados</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="font-medium">Ambiente Natural</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="font-medium">Cuidados Personalizados</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <img src="/images/WhatsApp Image 2025-03-31 at 10.28.10 AM.jpeg" alt="Cavalo no Rancho Kentucky" className="rounded-lg shadow-lg w-full h-64 object-cover" />
            <img src="/images/WhatsApp Image 2025-03-31 at 10.15.03 AM.jpeg" alt="Cavalo branco no Rancho Kentucky" className="rounded-lg shadow-lg w-full h-64 object-cover mt-8" />
            <img src="/images/WhatsApp Image 2025-03-31 at 10.15.00 AM.jpeg" alt="Cavalo no estábulo do Rancho Kentucky" className="rounded-lg shadow-lg w-full h-64 object-cover" />
            <img src="/images/WhatsApp Image 2025-03-31 at 10.14.58 AM.jpeg" alt="Cavalo pastando no Rancho Kentucky" className="rounded-lg shadow-lg w-full h-64 object-cover mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
