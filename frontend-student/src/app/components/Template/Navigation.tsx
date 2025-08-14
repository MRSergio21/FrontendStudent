import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center mx-auto px-16">
      <div className="flex items-center space-x-4">
        <Image src="/img/Group.svg" alt="UEA Logo" width={208} height={65} />
      </div>
      <div className="space-x-4 text-gray-700">
        <a href="#about" className="text-lg font-medium">
          ¿QUÉ ES CEMU?
        </a>
        <Link href="/cemu/internships" className="text-lg font-medium">
          OFERTA DE PRÁCTICAS
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
