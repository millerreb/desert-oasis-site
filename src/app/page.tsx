
import Homepage from "./(website)/homepage/page";
import { pageMeta } from "@/lib/seo";
import JsonLd from "@/components/JsonLd/JsonLd";
import { websiteSchema, organizationSchema } from "@/lib/schema";

export const metadata = pageMeta("/");

export default function Home() {
  return (
    <main role="main">
      <JsonLd data={[websiteSchema(), organizationSchema()]} />
      <Homepage />
     
  </main>
  );
}
