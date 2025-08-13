import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center mx-auto px-16">
      <div>
        <a href="https://uneatlantico.es" target="_blank" className="text-sm max-w-6xl">
          Volver a uneatlantico.es
        </a>
      </div>
      <div className="flex space-x-2">
        <a href="#" className="text-xl">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-xl">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-xl">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#" className="text-xl">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-xl">
          <i className="fab fa-blogger"></i>
        </a>
        <a href="#" className="text-xl">
          <i className="fas fa-university"></i>
        </a>
        <a href="#" className="text-xl">
          <i className="fas fa-search"></i>
        </a>
        <select className="ml-2 bg-transparent text-white border-none outline-none">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
    </header>
  );
};

export default Header;