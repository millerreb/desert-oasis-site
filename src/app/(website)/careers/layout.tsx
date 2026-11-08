import { pageMeta } from "@/lib/seo";

// The careers page is a client component, so its title and description live here.
export const metadata = pageMeta("/careers");

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
