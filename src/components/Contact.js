import React, { useState } from 'react';

const Contact = () => {
  // Estados para os campos do formulário
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(''); // Novo estado para o assunto
  const [message, setMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false); // Estado para controlar a exibição do modal de confirmação
  const [confirmationMessage, setConfirmationMessage] = useState(''); // Mensagem do modal

  // --- Configure seu número de WhatsApp aqui ---
  // Formato: Código do país + DDD + Número (sem +, 00, parênteses ou traços)
  // Exemplo para Brasil (DDD 15, número 99138-4930): '5515991384930'
  const YOUR_WHATSAPP_NUMBER = '5515991384930';
  // ---------------------------------------------

  // Função para lidar com o envio da mensagem via WhatsApp
  const handleSendWhatsApp = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Validação básica dos campos obrigatórios
    if (!name.trim() || !subject.trim() || !message.trim()) { // Adicionado 'subject' à validação
      setConfirmationMessage('Por favor, preencha seu nome, selecione um assunto e digite a mensagem.');
      setShowConfirmation(true);
      return;
    }

    let prefilledText = 'Olá Rancho Kentucky! Gostaria de entrar em contato.';

    if (name.trim()) {
      prefilledText += `\nMeu nome é: ${name.trim()}`;
    }
    if (phone.trim()) {
      prefilledText += `\nMeu telefone é: ${phone.trim()}`;
    }
    if (subject.trim()) { // Adiciona o assunto à mensagem pré-preenchida
      prefilledText += `\nAssunto: ${subject.trim()}`;
    }
    if (message.trim()) {
      prefilledText += `\n\n${message.trim()}`;
    }

    // Codifica a mensagem para ser usada na URL
    const encodedMessage = encodeURIComponent(prefilledText);

    // Constrói a URL do WhatsApp
    const whatsappUrl = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Abre o link do WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');

    // Opcional: Limpar os campos após o clique
    setName('');
    setPhone('');
    setSubject(''); // Limpa o campo de assunto
    setMessage('');

    setConfirmationMessage('Você será redirecionado para o WhatsApp para enviar sua mensagem.');
    setShowConfirmation(true);
  };

  // Função para fechar o modal de confirmação
  const closeConfirmationModal = () => {
    setShowConfirmation(false);
    setConfirmationMessage('');
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Estamos à disposição para responder suas dúvidas e agendar sua visita ao Rancho Kentucky</p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie uma Mensagem via WhatsApp</h3>
            <form onSubmit={handleSendWhatsApp} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Telefone (Opcional)</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {/* Campo de Assunto adicionado novamente */}
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Assunto</label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Aulas de Equitação">Aulas de Equitação</option>
                  <option value="Hospedagem para Cavalos">Hospedagem para Cavalos</option>
                  <option value="Agendar Visita">Agendar Visita</option>
                  <option value="Outro Assunto">Outro Assunto</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-y"
                  placeholder="Digite sua mensagem aqui..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition duration-300 w-full flex items-center justify-center gap-2"
              >
                {/* Ícone do WhatsApp em SVG inline */}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
<path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path><path fill="#fff" fill-rule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"></path>
</svg>
                Enviar Mensagem via WhatsApp
              </button>
            </form>
          </div>

          <div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Endereço</h4>
                    <p className="text-gray-600">R. Felipe Moisés Betti Filho, 361 - Jardim Novo Eldorado</p>
                    <p className="text-gray-600">Sorocaba-SP</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Telefone / WhatsApp</h4>
                    <a href={`https://wa.me/${YOUR_WHATSAPP_NUMBER}`} className="text-green-600 hover:underline">(15) 99138-4930</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">E-mail</h4>
                    <p className="text-gray-600">contato@ranchokentucky.com.br</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 20h</p>
                    <p className="text-gray-600">Sábados e Domingos: 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/rancho.kentucky/" className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                  </svg>
                </a>
                {/* Adicione o link do YouTube aqui, se necessário */}
                <a href="#" className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Confirmação */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Mensagem Enviada!</h3>
            <p className="text-gray-600 mb-6">{confirmationMessage}</p>
            <button
              onClick={closeConfirmationModal}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition duration-300"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
