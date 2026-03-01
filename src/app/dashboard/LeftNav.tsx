'use client'

import { Search } from "lucide-react";
import { useState } from "react";
import { PatientInfo } from "./Dashboard.types";

interface LeftNavProps {
  patients: PatientInfo[];
  selectedPatientId?: number;
  onSelectPatient: (patientId: number) => void;
}

export const LeftNav: React.FC<LeftNavProps> = ({
  patients,
  selectedPatientId,
  onSelectPatient,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside
      id="patient-sidebar"
      className="fixed top-0 left-0 z-40 w-80 h-full bg-white border-r border-gray-200 transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Patient list"
    >
      <div className="h-full flex flex-col">
        {/* Header + Search */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Patients</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search patients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Patient List */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {filteredPatients.map((patient) => {
              const isSelected = patient.id === selectedPatientId;

              return (
                <li key={patient.id}>
                  <button
                    onClick={() => onSelectPatient(patient.id || 0)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all
                      ${
                        isSelected
                          ? "bg-teal-50 text-teal-900 shadow-sm ring-1 ring-teal-200"
                          : "hover:bg-gray-100 text-gray-700"
                      }
                    `}
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-sm truncate">{patient.name}</p>
                      <p className="text-xs text-gray-500">
                        {patient.gender === "Female" ? "Female" : "Male"}, {patient.age}
                      </p>
                    </div>
                    <span className="ml-auto text-gray-400">⋯</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};