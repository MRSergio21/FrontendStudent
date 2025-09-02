"use client";

import { useInternshipsQuery } from "@/app/hooks/useInternships";
import { InternshipResponseDTO } from "@/app/models/internships.model";

export default function InternshipsPage() {
  const { data: internships, isLoading, error } = useInternshipsQuery();

  if (isLoading) return <p className="text-center py-10">Cargando prácticas...</p>;
  if (error) return <p className="text-center text-red-500">Error cargando datos</p>;

  return (
    <div className="mx-auto p-20 py-12 bg-white">
      <h1 className="text-3xl text-gray-700 text-center mb-8">Oferta de Prácticas</h1>

      <div className="mb-8 flex flex-col sm:flex-row sm:space-x-4 items-center text-gray-700">
        <input
          type="text"
          placeholder="Busque su oferta..."
          className="border p-2 rounded w-full sm:w-1/3 mb-2 sm:mb-0"
        />
        <select className="border p-2 rounded w-full sm:w-1/4 mb-2 sm:mb-0">
          <option value="">Área</option>
          <option value="value">Value</option>
        </select>
        <input type="date" className="border p-2 rounded w-full sm:w-1/6 mb-2 sm:mb-0" />
        <input type="date" className="border p-2 rounded w-full sm:w-1/6 mb-2 sm:mb-0" />
        <label className="flex items-center space-x-2 ml-2">
          <input type="checkbox" />
          <span>Oferta Activa</span>
        </label>
      </div>

      <div className="space-y-10">
        {internships?.map((internship: InternshipResponseDTO) => (
          <div key={internship.id} className="border-b pb-6 text-gray-400">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {internship.internshipTitle}
            </h2>

            <div className="text-sm text-gray-500 flex items-center mb-2">
              <span className="mr-2">📅</span>
              {new Date(internship.startDate).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Entidad Convocante:</span>{" "}
              {internship.company.name} - {internship.internshipLocation}
            </p>

            <p className="text-gray-700 mb-4 line-clamp-3">
              {internship.description}
            </p>

            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              LEER MÁS
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 space-x-2 text-gray-700">
        <button className="px-3 py-1 border rounded hover:bg-gray-100">1</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">Siguiente »</button>
      </div>
    </div>
  );
}
