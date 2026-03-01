export interface PressureValue {
  value: number;
  levels?: string;
}

export interface BloodPressure {
  systolic?: PressureValue;
  diastolic?: PressureValue;
}

export interface VitalSign {
  value: number;
  levels?: string;
}

export interface DiagnosisHistoryItem {
  month?: string;
  year?: number;
  date?: string;
  blood_pressure?: BloodPressure;
  heart_rate?: VitalSign;
  respiratory_rate?: VitalSign;
  temperature?: VitalSign;
}

export interface DiagnosticItem {
  name: string;
  description?: string;
  status?: string;
}

export interface PatientInfo {
  id?: number;
  name: string;
  gender?: string;
  age?: number;
  profile_picture?: string;
  date_of_birth?: string;
  phone_number?: string;
  emergency_contact?: string;
  insurance_type?: string;
  diagnosis_history?: DiagnosisHistoryItem[];
  diagnostic_list?: DiagnosticItem[];
  lab_results?: string[];
}

export interface BPRecord {
  year: number;
  systolic: number;
  diastolic: number;
}