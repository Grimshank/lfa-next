import {Button} from "@/components/ui/button";
import { getWorks } from '../lib/contentful';
import Image from "next/image";

export default async function Home() {
  const works = await getWorks();

  return (
    <main className="container mx-auto py-6">
      {
        works.map(work => {
          console.log(`WORK: ${JSON.stringify(work.image)}`);
          return (
            <div key={work.id}>
              {work.title}
              <Image src={work.image.fields.file.url} alt={work.title} />
            </div>
          )
        })
      }
      <Button>Our Cool Button</Button>
    </main>
  );
}
