import { notFound } from "next/navigation";
import { InternshipResponseDTO } from "@/app/models/internships.model";
import CreateRequest from "@/app/components/Modal/Request/CreateRequest";

async function getInternship(id: string): Promise<InternshipResponseDTO | null> {
  try {
    const res = await fetch(`${process.env.API_URL}/internships/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching internship:", error);
    return null;
  }
}

export default async function InternshipDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const internshipId = Number(id);

  const internship = await getInternship(id);

  if (!internship) return notFound();

  return (
    <div className="p-18 py-10 grid grid-cols-3 gap-6 bg-white">
      <div className="col-span-2">
        <h1 className="text-2xl font-bold mb-2 text-gray-700">
          {internship.internshipTitle}
        </h1>
        <p className="text-blue-600 font-medium mb-4">
          {internship.company?.name}
        </p>

        <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
          <ul className="flex flex-row gap-6 list-none p-0 m-0">
            <li>
              <span className="font-semibold text-gray-500 mr-1">Ubicación:</span>
              {internship.internshipLocation}
            </li>
            <li>
              <span className="font-semibold text-gray-500 mr-1">Salario:</span>
              {internship.salary ? `${internship.salary} €` : "No disponible"}
            </li>
            <li>
              <span className="font-semibold text-gray-500 mr-1">Jornada:</span>
              {internship.workday === "TiempoCompleto" ? "Completa" : "Medio tiempo"}
            </li>
            <li>
              <span className="font-semibold text-gray-500 mr-1">Modalidad:</span>
              {internship.modality}
            </li>
            <li>
              <span className="font-semibold text-gray-500 mr-1">Tipo:</span>
              {internship.internshipType}
            </li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-700">Requisitos</h2>
        <ul className="list-disc ml-5 text-gray-700 space-y-1">
          <li>Estudios mínimos: {internship.minimumStudies}</li>
          <li>Experiencia mínima: {internship.minimumExperience}</li>
          <li>Idiomas: {internship.languages}</li>
          <li>Conocimientos adicionales: {internship.backgroundKnowledge}</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-700">Descripción</h2>
        <p className="text-gray-700 whitespace-pre-line">{internship.description}</p>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-700">Detalles</h2>
        <p className="text-gray-600">
          <strong>Fecha de inicio:</strong>{" "}
          {new Date(internship.startDate).toLocaleDateString()}
        </p>
        <p className="text-gray-600">
          <strong>Duración:</strong> {internship.internshipPeriod}
        </p>
        <p className="text-gray-600">
          <strong>Grado asociado:</strong> {internship.degree?.name}
        </p>
      </div>

      <div className="col-span-1 bg-blue-500 text-white p-6 rounded-lg shadow-md w-[400px] h-[180px]">
        <p className="mb-4">
          ¿Te interesa esta práctica profesional?, envia tu CV estaremos atentos a tu solicitud para su debido proceso.
        </p>
        <CreateRequest internshipId={internshipId} />
      </div>
    </div>
  );
}
