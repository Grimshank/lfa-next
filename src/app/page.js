import {Button} from "@/components/ui/button";
import { getWorks } from '../lib/contentful';

export default async function Home() {
  const works = await getWorks();

  return (
    <main className="container mx-auto py-6">
      {
        works.map(work => (
          <div key={work.id}>
              {work.title}
          </div>
        ))
      }
      <Button>Our Cool Button</Button>
    </main>
  );
}
