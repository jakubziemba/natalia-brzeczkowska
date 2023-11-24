import MaskedShape from './_components/masked-shape';
import StarIcon from './_components/star';
import Heading from './_components/heading';

type MaskedImageProps = {
  className?: string;
};

const shapeSize = {
  width: 700,
  height: 1000,
};

export default function Home() {
  return (
    <main className='relative bg-lightred min-h-screen max-h-screen h-full overflow-hidden'>
      <div>
        <span className='absolute top-[30%] left-[4%] min-[1490px]:top-[38%]'>
          <StarIcon />
        </span>
        <Heading className='text-8xl lg:text-9xl xl:text-[150px] text-red px-32 absolute z-20 top-[40%] -translate-y-1/2 leading-[1] text-left tracking-[-0.02em] font-serif'>
          Natalia Brzęczkowska
        </Heading>
      </div>
      <div className='absolute right-[20%] top-[10%]'>
        <MaskedShape width={shapeSize.width} image={'/DariaIrena.jpeg'} />
      </div>
    </main>
  );
}
