import { getWorks } from '@/lib/contentful';
import Slider from '@/components/slider/Slider';

async function Instruction() {
  const works = await getWorks();

  return (
    <div>
      <Slider works={works}/>
    </div>
  );
}

export default Instruction;
