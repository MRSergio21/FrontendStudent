"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useInternshipsQuery } from "@/app/hooks/useInternships";
import { useDegreesQuery } from "@/app/hooks/useDegrees";
import type { InternshipResponseDTO } from "@/app/models/internships.model";

export default function InternshipsPage() {
  const { data: internships, isLoading, error } = useInternshipsQuery();
  const { data: degrees } = useDegreesQuery();

  const [searchTitle, setSearchTitle] = useState("");
  const [selectedDegree, setSelectedDegree] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");

  const filteredInternships = useMemo(() => {
    if (!internships) return [];

    return internships.filter((i) => {
      const matchesTitle = i.internshipTitle.toLowerCase().includes(searchTitle.toLowerCase());
      const matchesDegree = selectedDegree
        ? String(i.degree?.id) === selectedDegree
        : true;

      const internshipStart = new Date(i.startDate);
      const matchesStartDate = startDateFilter ? internshipStart >= new Date(startDateFilter) : true;
      const matchesEndDate = endDateFilter ? internshipStart <= new Date(endDateFilter) : true;

      return matchesTitle && matchesDegree && matchesStartDate && matchesEndDate;
    });
  }, [internships, searchTitle, selectedDegree, startDateFilter, endDateFilter]);

  if (isLoading) return <p className="text-center py-10">Cargando prácticas...</p>;
  if (error) return <p className="text-center text-red-500">Error cargando datos</p>;

  return (
    <div className="mx-auto p-18 py-10 bg-white">
      <h1 className="text-3xl text-gray-700 text-center mb-8">Oferta de Prácticas</h1>

      <div className="mb-8 flex flex-col sm:flex-row sm:space-x-4 items-center text-gray-700">
        <input
          type="text"
          placeholder="Buscar por título..."
          className="border p-2 rounded w-full sm:w-1/3 mb-2 sm:mb-0"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />

        <select
          className="border p-2 rounded w-full sm:w-1/4 mb-2 sm:mb-0"
          value={selectedDegree}
          onChange={(e) => setSelectedDegree(e.target.value)}
        >
          <option value="">Todos los grados</option>
          {degrees?.map((degree: { id: string | number; name: string }) => (
            <option key={degree.id} value={String(degree.id)}>
              {degree.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="border p-2 rounded w-full sm:w-1/6 mb-2 sm:mb-0"
          value={startDateFilter}
          onChange={(e) => setStartDateFilter(e.target.value)}
        />
        <input
          type="date"
          className="border p-2 rounded w-full sm:w-1/6 mb-2 sm:mb-0"
          value={endDateFilter}
          onChange={(e) => setEndDateFilter(e.target.value)}
        />
      </div>

      <div className="space-y-10">
        {filteredInternships.map((internship: InternshipResponseDTO) => (
          <div key={internship.id} className="border-b pb-6 text-gray-700">
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

            <p className="text-gray-700 mb-4 line-clamp-3">{internship.description}</p>

            <Link href={`/cemu/internships/${internship.id}`}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                LEER MÁS
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
