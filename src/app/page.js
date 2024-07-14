import {Button} from "@/components/ui/button";
import { getWorks } from '../lib/contentful';

export default async function Home() {
  const works = await getWorks();

  return (
    <main className="container mx-auto py-6">
      <Button>Our Cool Button</Button>
    </main>
  );
}
