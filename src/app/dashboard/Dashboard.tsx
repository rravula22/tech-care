'use client'
import { useState } from "react";
import { PatientInfo } from "./Dashboard.types";
import Header from "./Header";
import { LeftNav } from "./LeftNav";
import RightNav from "./RightNav";

interface Props {
  data: PatientInfo[];
}

export default function Dashboard({ data }: Props) {
  const [selectedPatientId, setSelectedPatientId] = useState<number>();
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div style={{ display: "flex", gap: 18, padding: 18, alignItems: "flex-start" }}>
      <LeftNav
        patients={data}
        selectedPatientId={selectedPatientId}
        onSelectPatient={setSelectedPatientId}
      />

        <main style={{ flex: 1 }}>
          <section style={{ background: "#fff", borderRadius: 12, padding: 18, boxShadow: "0 1px 2px rgba(16,24,40,0.05)" }}>
            <h2 style={{ margin: 0, marginBottom: 12 }}>Diagnosis History</h2>
            <div style={{ height: 220, borderRadius: 8, background: "linear-gradient(180deg,#f3f7fb,#fff)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9aa3ad" }}>
              Chart / Graph placeholder
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 16 }}>
              <div style={{ background: "#e6f7ff", padding: 14, borderRadius: 12 }}>Respiratory Rate<br/><strong>20 bpm</strong></div>
              <div style={{ background: "#fff0f6", padding: 14, borderRadius: 12 }}>Temperature<br/><strong>98.6°F</strong></div>
              <div style={{ background: "#fff5ed", padding: 14, borderRadius: 12 }}>Heart Rate<br/><strong>78 bpm</strong></div>
            </div>

            <section style={{ marginTop: 18 }}>
              <h3 style={{ marginBottom: 8 }}>Diagnostic List</h3>
              <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
                <thead>
                  <tr style={{ textAlign: "left", color: "#6b7280" }}>
                    <th style={{ padding: 8 }}>Problem/Diagnosis</th>
                    <th style={{ padding: 8 }}>Description</th>
                    <th style={{ padding: 8 }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: 8 }}>Hypertension</td>
                    <td style={{ padding: 8 }}>Chronic high blood pressure</td>
                    <td style={{ padding: 8 }}>Under Observation</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 8 }}>Type 2 Diabetes</td>
                    <td style={{ padding: 8 }}>Insulin resistance and elevated blood sugar</td>
                    <td style={{ padding: 8 }}>Cured</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>
        </main>
        <RightNav />
      </div>
    </div>
  );
}
