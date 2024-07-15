import {Button} from "@/components/ui/button";
import { getWorks } from '../lib/contentful';
import Image from "next/image";

export default async function Home() {
  const works = await getWorks();

  return (
    <main className="bg-[#03040B] flex flex-col items-center justify-center p-10 min-h-screen">
      {
        works.map(work => {
          console.log(`WORK: ${JSON.stringify(work.image)}`);
          return (
            <div key={work.id}>
              {work.title}
              <Image src={`https:${work.image.fields.file.url}`} alt={work.title} />
            </div>
          )
        })
      }
      <Button>Our Cool Button</Button>

      <div>
        <h2>Join the waitlist for my</h2>
        <h1>Newsletter</h1>
      </div>
    </main>
  );
}
