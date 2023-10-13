import Image from 'next/image';
import DariaIrena from '../public/DariaIrena.jpeg';

type MaskedImageProps = {
  className?: string;
};

function MaskedImage({ className = '' }: MaskedImageProps) {
  return (
    <div
      className={`absolute -rotate-[8.92deg] overflow-hidden w-[485px] h-[673px] z-10 flex md:left-[calc(55%-128px)] lg:left-[calc(65%-128px)] xl:left-[calc(70%-128px)] top-[48%] -translate-y-[50%] [mask-image:url(./hero-image-svg.svg)] [mask-size:485px]`}
    >
      <Image
        src={DariaIrena}
        fill
        alt='Daria Irena photoshoot'
        className={`object-cover object-left-top`}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className='relative bg-lightred min-h-screen h-full overflow-hidden'>
      <h1 className='text-8xl lg:text-9xl xl:text-[150px] text-red px-32 absolute z-20 top-[45%] -translate-y-1/2 leading-[1] text-left tracking-tight font-serif'>
        Natalia Brzęczkowska
      </h1>
      <div>
        <MaskedImage className='' />
      </div>
    </main>
  );
}
