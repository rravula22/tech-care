import { PatientInfo } from "@/app/dashboard/Dashboard.types";

const DEFAULT_API = process.env.API_URL || "";

export async function getPatientInfo(): Promise<PatientInfo[]> {
    if (!DEFAULT_API) throw new Error("API_URL not configured");

    const url = `${DEFAULT_API.replace(/\/$/, "")}`;
    const fetchOptions: RequestInit = {};
    const username = process.env.USERNAME || "";
    const password = process.env.PASS || "";
    
    if (username && password) {
        const credentials = btoa(`${username}:${password}`);
        fetchOptions.headers = { Authorization: `Basic ${credentials}` };
    }

    try {
        const res = await fetch(url, fetchOptions);

        if (!res.ok) {
            // Handle unauthorized gracefully during prerender/build so the whole build doesn't fail
            if (res.status === 401) {
                // Helpful message for local/dev and CI — don't expose secrets here
                console.warn('getPatientInfo: 401 Unauthorized. Check API_USERNAME/API_PASSWORD or API_KEY configuration.');
                return [] as PatientInfo[];
            }

            // For other client/server errors, surface them so callers can decide
            throw new Error(`Failed to fetch patients info data: ${res.status}`);
        }

        const apiData = await res.json();
        if (!Array.isArray(apiData)) return [];
        return apiData;
    } catch (err) {
        // Network or other unexpected errors — log and return empty array to avoid breaking prerender
        console.error('getPatientInfo: error fetching patients data', err);
        return [] as PatientInfo[];
    }
}
