import Dashboard from "./dashboard/Dashboard";
import { getPatientInfo } from "./lib/dashboard/fetchDashboard";

export default async function Page() {
	const data = await getPatientInfo();
	return (
		<main>
			<Dashboard  data={data}/>
		</main>
	);
}
