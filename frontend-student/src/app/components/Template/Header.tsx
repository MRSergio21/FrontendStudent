'use client';

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
  faBlogger,
} from '@fortawesome/free-brands-svg-icons';

const Header: React.FC = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center mx-auto px-16">
      <div>
        <a href="https://uneatlantico.es" target="_blank" className="text-sm">
          Volver a uneatlantico.es
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2 text-xl">
          <a href="https://www.facebook.com/UniversidadEuropeadelAtlantico/?locale=es_ES" className="hover:text-blue-200 transition-colors">
            <FontAwesomeIcon icon={faFacebook} width={16} />
          </a>
          <a href="https://x.com/uneatlantico?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="hover:text-blue-200 transition-colors">
            <FontAwesomeIcon icon={faTwitter} width={18} />
          </a>
          <a href="https://www.youtube.com/@UneatlanticoEs" className="hover:text-blue-200 transition-colors">
            <FontAwesomeIcon icon={faYoutube} width={20} />
          </a>
          <a href="https://www.linkedin.com/school/universidad-europea-del-atlántico/posts/?feedView=all" className="hover:text-blue-200 transition-colors">
            <FontAwesomeIcon icon={faLinkedin} width={15} />
          </a>
          <a href="https://blogs.uneatlantico.es/" className="hover:text-blue-200 transition-colors">
            <FontAwesomeIcon icon={faBlogger} width={15} />
          </a>
        </div>

        <div className="relative ml-2">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-1 text-sm focus:outline-none"
            type="button"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            <img
              src={language === 'es' ? 'https://flagcdn.com/w20/es.png' : 'https://flagcdn.com/w20/us.png'}
              alt={language === 'es' ? 'Español' : 'English'}
              width="20"
              height="15"
            />
            <span>{language === 'es' ? 'Español' : 'English'}</span>
          </button>

          {isOpen && (
            <ul className="absolute right-0 mt-2 w-32 bg-white text-black rounded-md shadow-lg z-10">
              <li
                onClick={() => selectLanguage('es')}
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer"
              >
                <img src="https://flagcdn.com/w20/es.png" alt="Español" width="20" height="15" />
                <span>Español</span>
              </li>
              <li
                onClick={() => selectLanguage('en')}
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer"
              >
                <img src="https://flagcdn.com/w20/us.png" alt="English" width="20" height="15" />
                <span>English</span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;