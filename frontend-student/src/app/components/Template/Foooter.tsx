import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-600 text-white p-4">
      <div className="max-w-6xl mx-auto px-16 flex justify-between">
        <p className="font-medium">
          © 2024 Universidad Europea del Atlántico. Todos los derechos reservados.
        </p>
        <a href="#" className="hover:text-yellow-300 font-medium">
          Política de Privacidad
        </a>
      </div>
    </footer>
  );
};

export default Footer;