'use client';

import { useState } from "react";
import { useAlertStore } from "@/app/stores/alert.store";
import axios from "axios";

export default function CreateRequest({ internshipId }: { internshipId: number }) {
  const [openAddModal, setOpenAddModal] = useState(false);

  const [nameStudent, setNameStudent] = useState("");
  const [lastnameStudent, setLastnameStudent] = useState("");
  const [email, setEmail] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);

  const setAlert = useAlertStore((state) => state.setAlert);

  // Convierte archivo a Base64
  const fileToBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handleSaveRequest = async () => {
    if (!nameStudent.trim() || !lastnameStudent.trim() || !email.trim() || !cvFile) {
      setAlert("Todos los campos son obligatorios.", "warning");
      return;
    }

    if (cvFile.type !== "application/pdf") {
      setAlert("El archivo debe ser un PDF válido.", "warning");
      return;
    }

    try {
      const cvBase64 = await fileToBase64(cvFile);

      const payload = {
        nameStudent: nameStudent.trim(),
        lastnameStudent: lastnameStudent.trim(),
        email: email.trim(),
        cv: cvBase64,
        status: false,
        internship_id: internshipId,
      };

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      console.log("Datos que se enviarán:", payload);

      await axios.post(`${apiUrl}/requests`, payload, {
        headers: { "Content-Type": "application/json" },
      });

      setAlert("Solicitud enviada correctamente.", "success");

      setNameStudent("");
      setLastnameStudent("");
      setEmail("");
      setCvFile(null);
      setOpenAddModal(false);
    } catch (err: any) {
      console.error(err);
      setAlert("Error al enviar la solicitud.", "error");
    }
  };

  return (
    <>
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => setOpenAddModal(true)}
      >
        ENVIAR CV
      </button>

      {openAddModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50"
          onClick={() => setOpenAddModal(false)}
        >
          <div
            className="bg-white p-6 rounded-lg w-[450px]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Enviar solicitud</h2>

            <input
              type="text"
              placeholder="Nombre"
              value={nameStudent}
              onChange={(e) => setNameStudent(e.target.value)}
              className="border p-2 rounded w-full mb-3 text-black"
            />

            <input
              type="text"
              placeholder="Apellidos"
              value={lastnameStudent}
              onChange={(e) => setLastnameStudent(e.target.value)}
              className="border p-2 rounded w-full mb-3 text-black"
            />

            <input
              type="email"
              placeholder="Correo estudiantil"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded w-full mb-3 text-black"
            />

            <input
              key={cvFile ? cvFile.name : "file-input"}
              type="file"
              accept="application/pdf"
              onChange={(e) => setCvFile(e.target.files?.[0] || null)}
              className="border p-2 rounded w-full mb-4 text-black"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpenAddModal(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveRequest}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded"
              >
                Enviar solicitud
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
