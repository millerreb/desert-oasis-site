import { serviceMeta } from "@/lib/seo";

// Each service page's title and description (from seo.ts).
export function generateMetadata({ params }: { params: { id: string } }) {
  return serviceMeta(params.id);
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
