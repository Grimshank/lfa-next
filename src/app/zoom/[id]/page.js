import ImageZoom from '@/components/ImageZoom';
import {getWork} from "@/lib/contentful";

const Zoom = async ({ params }) => {
  const { id } = params;

  const work = await getWork(id);

  return (
    <div>
      <ImageZoom src={work.src} alt={work.title} />
    </div>
  );
};

export default Zoom;
