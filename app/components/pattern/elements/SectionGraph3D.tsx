import Image from 'next/image';

interface SectionGraph3DProps {
  src: string;
  alt: string;
}

export default function SectionGraph3D({ src, alt }: SectionGraph3DProps) {
  return (
    <div className='flex justify-center my-8'>
      <div className='bg-white p-4 rounded-lg shadow-md'>
        <Image src={src} alt={alt} width={400} height={400} priority />
      </div>
    </div>
  );
}
