import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navigation from "../app/components/Navigation";
import Header from "../app/components/Header";
import Footer from "../app/components/Foooter";

const App: React.FC = () => {
  return (
    <>
      <Head>
        <title>CEMU - Centro Empresa Universidad</title>
        <meta name="description" content="Página informativa sobre el CEMU de UNEATLANTICO" />
        <link rel="icon" type="image/svg+xml" href="/cemu.svg" />
      </Head>

      <Header />
      <Navigation />

      <section className="relative">
        <div className="mx-auto">
          <Image src="/img/Banner.svg" alt="UEA Logo" width={1440} height={270} />
        </div>
      </section>

      <section id="about" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-16">
          <div className="text-center mb-8 relative">
            <h2 className="text-3xl font-bold text-gray-800">¿Qué es CEMU?</h2>
            <div className="relative mt-4 flex justify-center">
              <hr className="border-t border-gray-300 w-100 border-t-[1px]" />
              <div
                className="absolute left-1/2 transform -translate-x-1/2 bg-yellow-500 rounded-full h-2 w-2 top-[-2.5px]"
              ></div>
            </div>
          </div>
          <p className="text-lg text-justify text-gray-700 leading-relaxed">
            El Centro Empresa Universidad (CEMU) de UNEATLANTICO tiene como objetivos facilitar a los alumnos la búsqueda de prácticas profesionales, fomentar su inserción en el mundo laboral, así como orientarles en la creación de su propia empresa. Para conseguir estos fines se ha creado una gran red de colaboración con empresas e instituciones que trabajan coordinadamente con la Universidad en materia de innovación, orientación profesional y emprendimiento.
          </p>
        </div>
      </section>

      <section id="services" className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 tracking-tight">Servicios que ofrece el CEMU</h2>
          <div className="relative mt-4 flex justify-center">
            <hr className="border-t border-gray-300 w-100 border-t-[1px]" />
            <div
              className="absolute left-1/2 transform -translate-x-1/2 bg-yellow-500 rounded-full h-2 w-2 top-[-2.5px]"
            ></div>
          </div>
          <div className="mb-8 mt-8">
            <h3 className="text-xl font-bold text-indigo-600 mb-2 tracking-normal">FORMACIÓN PRÁCTICA EN EMPRESAS E INSTITUCIONES</h3>
            <hr className="border-t-2 border-yellow-200 mb-4 w-20 h-2.7" />
            <ul className="list-disc pl-5 text-lg text-justify text-gray-700 leading-relaxed">
              <li>Programa de Iniciación a la Empresa. Los alumnos de primer y segundo curso disfrutan de su primer contacto con el mundo laboral.</li>
              <li>Practicum. Los estudiantes de todos los grados de UNEATLANTICO participan en este programa obligatorio durante los últimos años de carrera.</li>
              <li>Programa Fin de Grado en Empresas. Dirigido a realizar el Trabajo Fin de Grado (TFG) en un entorno laboral real.</li>
              <li>Prácticas académicas externas. Formación voluntaria en empresas, reconocida en el Suplemento Europeo al Título.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-indigo-600 mb-2 tracking-normal">ITINERARIOS DE INSERCIÓN PROFESIONAL</h3>
            <hr className="border-t-2 border-yellow-200 mb-4 w-20 h-2.7" />
            <p className="text-lg text-justify mb-4 text-gray-700 leading-relaxed">
              Acciones encaminadas a descubrir el mercado laboral y las técnicas de búsqueda de empleo.
            </p>
            <ul className="list-disc pl-5 text-lg text-justify text-gray-700 leading-relaxed">
              <li>Visitas a centros de trabajo.</li>
              <li>Programa Empresa en el Aula. Directivos, técnicos, propietarios y/o emprendedores se acercan al aula para compartir con los estudiantes su experiencia profesional.</li>
              <li>Programa Empléate. Talleres orientados a la búsqueda de empleo: redacción de currículums, preparación de entrevistas, posicionamiento en redes sociales, dinámicas de grupo, etc.</li>
              <li>Ofertas de empleo. Presentación de las oportunidades de empleo público y privado.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-indigo-600 mb-2 tracking-normal">FORMACIÓN PARA EMPRENDEDORES</h3>
            <hr className="border-t-2 border-yellow-200 mb-4 w-20 h-2.7" />
            <p className="text-lg text-justify text-gray-700 leading-relaxed">
              Todos los planes de estudio de los grados que oferta UNEATLANTICO incluyen una asignatura sobre economía de la empresa y emprendedores, orientada a la adquisición de conocimientos para desarrollar nuevas ideas de negocio.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-indigo-600 mb-2 tracking-normal">ASESORAMIENTO EMPRESARIAL Y PROFESIONAL</h3>
            <hr className="border-t-2 border-yellow-200 mb-4 w-20 h-2.7" />
            <p className="text-lg text-justify text-gray-700 leading-relaxed">
              UNEATLANTICO cuenta con un Consejo Empresarial y Profesional (CEP) compuesto por empresas, instituciones y profesionales que conocen y evalúan periódicamente las actividades que se realizan en la Universidad.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;