
import Homepage from "./(website)/homepage/page";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/");

export default function Home() {
  return (
    <main role="main">
      <Homepage />
     
  </main>
  );
}
