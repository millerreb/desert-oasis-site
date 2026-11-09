import { serviceMeta } from "@/lib/seo";

// The service details page is a client component, so each service's title and
// description are set here instead.
export function generateMetadata({ params }: { params: { id: string } }) {
  return serviceMeta(params.id);
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
