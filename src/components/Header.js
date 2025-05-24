import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/logosemfundopreto.png" alt="Rancho Kentucky Logo" className="h-16" />
        </div>
        
        {/* Menu para desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-800 hover:text-orange-500 font-medium transition duration-300">Início</Link>
          <Link to="/sobre" className="text-gray-800 hover:text-orange-500 font-medium transition duration-300">Sobre</Link>
          <Link to="/servicos" className="text-gray-800 hover:text-orange-500 font-medium transition duration-300">Serviços</Link>
          <Link to="/galeria" className="text-gray-800 hover:text-orange-500 font-medium transition duration-300">Galeria</Link>
          <Link to="/contato" className="text-gray-800 hover:text-orange-500 font-medium transition duration-300">Contato</Link>
        </nav>
        
        {/* Botão de contato para desktop */}
        <div className="hidden md:block">
          <Link to="/contato" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition duration-300">
            Agendar Visita
          </Link>
        </div>
        
        {/* Botão do menu hambúrguer para mobile */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 hover:text-orange-500 font-medium transition duration-300" onClick={toggleMenu}>Início</Link>
            <Link to="/sobre" className="text-gray-800 hover:text-orange-500 font-medium transition duration-300" onClick={toggleMenu}>Sobre</Link>
            <Link to="/servicos" className="text-gray-800 hover:text-orange-500 font-medium transition duration-300" onClick={toggleMenu}>Serviços</Link>
            <Link to="/galeria" className="text-gray-800 hover:text-orange-500 font-medium transition duration-300" onClick={toggleMenu}>Galeria</Link>
            <Link to="/contato" className="text-gray-800 hover:text-orange-500 font-medium transition duration-300" onClick={toggleMenu}>Contato</Link>
            <Link to="/contato" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition duration-300 text-center" onClick={toggleMenu}>
              Agendar Visita
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
