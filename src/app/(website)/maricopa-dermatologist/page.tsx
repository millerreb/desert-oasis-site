import LocationPage from "@/components/Location/LocationPage";
import { getOffice } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/maricopa-dermatologist");

export default function Page() {
  return <LocationPage office={getOffice("maricopa")} />;
}
