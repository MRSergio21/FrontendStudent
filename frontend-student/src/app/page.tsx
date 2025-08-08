import React from "react";
import Head from "next/head";
import Image from "next/image";

const App: React.FC = () => {
  return (
    <>
      <Head>
        <title>CEMU - Centro Empresa Universidad</title>
        <meta name="description" content="Página informativa sobre el CEMU de UNEATLANTICO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center mx-auto px-16">
        <div>
          <a href="https://uneatlantico.es" target="_blank" className="text-sm max-w-6xl">Volver a uneatlantico.es</a>
        </div>
        <div className="flex space-x-2">
          <a href="#" className="text-xl"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-xl"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-xl"><i className="fab fa-youtube"></i></a>
          <a href="#" className="text-xl"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="text-xl"><i className="fab fa-blogger"></i></a>
          <a href="#" className="text-xl"><i className="fas fa-university"></i></a>
          <a href="#" className="text-xl"><i className="fas fa-search"></i></a>
          <select className="ml-2 bg-transparent text-white border-none outline-none">
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="bg-white p-4 flex justify-between items-center mx-auto px-16">
        <div className="flex items-center space-x-4">
          <Image src="../../public/img/Group.svg" alt="UEA Logo" className="h-8 w-auto" width={500}
          height={300} />
        </div>
        <div className="space-x-4">
          <a href="#about" className="text-lg hover:text-yellow-300">¿QUÉ ES CEMU?</a>
          <a href="#practices" className="text-lg hover:text-yellow-300">OFERTA DE PRÁCTICAS</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="mx-auto">
          <img src="https://placehold.co/1920x400" alt="CEMU Building" className="w-full h-auto" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">¿Qué es CEMU?</h2>
          <p className="text-lg text-justify mb-8 text-gray-700">
            El Centro Empresa Universidad (CEMU) de UNEATLANTICO tiene como objetivos facilitar a los alumnos la búsqueda de prácticas profesionales, fomentar su inserción en el mundo laboral, así como orientarles en la creación de su propia empresa. Para conseguir estos fines se ha creado una gran red de colaboración con empresas e instituciones que trabajan coordinadamente con la Universidad en materia de innovación, orientación profesional y emprendimiento.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Servicios que ofrece el CEMU</h2>

          {/* Formación Práctica */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">FORMACIÓN PRÁCTICA EN EMPRESAS E INSTITUCIONES</h3>
            <hr className="border-t-2 border-yellow-200 mb-4 w-20 h-2.7"/>
            <ul className="list-disc pl-5 text-lg text-justify text-gray-700">
              <li>Programa de Iniciación a la Empresa. Los alumnos de primer y segundo curso disfrutan de su primer contacto con el mundo laboral.</li>
              <li>Practicum. Los estudiantes de todos los grados de UNEATLANTICO participan en este programa obligatorio durante los últimos años de carrera.</li>
              <li>Programa Fin de Grado en Empresas. Dirigido a realizar el Trabajo Fin de Grado (TFG) en un entorno laboral real.</li>
              <li>Prácticas académicas externas. Formación voluntaria en empresas, reconocida en el Suplemento Europeo al Título.</li>
            </ul>
          </div>

          {/* Itinerarios de Inserción Profesional */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">ITINERARIOS DE INSERCIÓN PROFESIONAL</h3>
            <hr className="border-t-2 border-yellow-200 mb-4 w-20 h-2.7"/>
            <p className="text-lg text-justify mb-4 text-gray-700">
              Acciones encaminadas a descubrir el mercado laboral y las técnicas de búsqueda de empleo.
            </p>
            <ul className="list-disc pl-5 text-lg text-justify text-gray-700">
              <li>Visitas a centros de trabajo.</li>
              <li>Programa Empresa en el Aula. Directivos, técnicos, propietarios y/o emprendedores se acercan al aula para compartir con los estudiantes su experiencia profesional.</li>
              <li>Programa Empléate. Talleres orientados a la búsqueda de empleo: redacción de currículums, preparación de entrevistas, posicionamiento en redes sociales, dinámicas de grupo, etc.</li>
              <li>Ofertas de empleo. Presentación de las oportunidades de empleo público y privado.</li>
            </ul>
          </div>

          {/* Formación para Emprendedores */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">FORMACIÓN PARA EMPRENDEDORES</h3>
            <hr className="border-t-2 border-yellow-200 mb-4 w-20 h-2.7"/>
            <p className="text-lg text-justify text-gray-700">
              Todos los planes de estudio de los grados que oferta UNEATLANTICO incluyen una asignatura sobre economía de la empresa y emprendedores, orientada a la adquisición de conocimientos para desarrollar nuevas ideas de negocio.
            </p>
          </div>

          {/* Asesoramiento Empresarial y Profesional */}
          <div>
            <h3 className="text-xl font-bold text-indigo-600 mb-2">ASESORAMIENTO EMPRESARIAL Y PROFESIONAL</h3>
            <hr className="border-t-2 border-yellow-200 mb-4 w-20 h-2.7"/>
            <p className="text-lg text-justify text-gray-700">
              UNEATLANTICO cuenta con un Consejo Empresarial y Profesional (CEP) compuesto por empresas, instituciones y profesionales que conocen y evalúan periódicamente las actividades que se realizan en la Universidad.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-600 text-white p-4">
        <div className="max-w-6xl mx-auto px-16 flex justify-between">
          <p>© 2024 Universidad Europea del Atlántico. Todos los derechos reservados.</p>
          <a href="#" className="hover:text-yellow-300">Política de Privacidad</a>
        </div>
      </footer>
    </>
  );
};

export default App;