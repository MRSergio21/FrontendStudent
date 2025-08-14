import Navigation from "@/app/components/Template/Navigation";

interface Internship {
  id: number;
  title: string;
  date: string;
  entity: string;
  location?: string;
  description: string;
}

const sampleInternships: Internship[] = [
  {
    id: 1,
    title: "Título de la oferta",
    date: "XX mes, YYYY",
    entity: "Entidad Convocante - Sede",
    description:
      "Ut facilisis quis augue finibus tincidunt. Sed convallis a dui nec accumsan. Nunc cursus ac lacus id consequat. Curabitur non lectus hendrerit, euismod massa vel, tincidunt tortor.",
  },
  {
    id: 2,
    title: "Título de la oferta",
    date: "XX mes, YYYY",
    entity: "Entidad Convocante - Sede",
    description:
      "Ut facilisis quis augue finibus tincidunt. Sed convallis a dui nec accumsan. Nunc cursus ac lacus id consequat. Curabitur non lectus hendrerit, euismod massa vel, tincidunt tortor.",
  },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center mb-8 relative">
    <h2 className="text-3xl font-bold text-gray-800">{children}</h2>
    <div className="relative mt-4 flex justify-center">
      <hr className="border-t border-gray-300 w-full max-w-xs border-t-[1px]" />
      <div className="absolute left-1/2 transform -translate-x-1/2 bg-yellow-500 rounded-full h-2 w-2 top-[-2.5px]"></div>
    </div>
  </div>
);

export default function InternshipsPage () {
  return (
    <>
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-semibold text-center mb-6">Oferta de Prácticas</h1>

        <div className="mb-6 flex flex-col sm:flex-row sm:space-x-4 items-center">
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
      </div>
    </>
  );
};
