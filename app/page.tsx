import MaskedShape from './_components/masked-shape';
import Heading from './_components/heading';
import StarAnimated from './_components/star/star-animated';

const shapeSize = {
  width: 700,
  height: 1000,
};

export default function Home() {
  return (
    <main className='relative bg-lightred min-h-screen max-h-screen h-full overflow-hidden'>
      <div className='relative top-[40%] h-screen w-full flex flex-col px-32'>
        <Heading
          level='h1'
          className='flex gap-4 flex-row text-8xl lg:text-9xl xl:text-[150px] text-red absolute z-20 top-[40%] -translate-y-1/2 leading-[1] text-left tracking-[-0.02em] font-serif'
        >
          <StarAnimated className='origin-center mb-auto' />
          Natalia Brzęczkowska
        </Heading>
        <div className='relative top-[60%] left-[30%] max-w-[320px] text-gray text-lg font-light flex gap-4'>
          <StarAnimated className='origin-center mb-auto' />
          <div>
            <p className='leading-relaxed mb-8'>
              Natalia specializes in makeup for music videos, commercials and photo sessions.
            </p>
            <p>
              She has worked with a wide variety of artists including Monika Brodka, Karaś/Rogucki,
              Pezet and Sonar
            </p>
          </div>
        </div>
      </div>
      <div className='absolute right-[5%] top-[5%]'>
        <MaskedShape width={shapeSize.width} image={'/DariaIrena.jpeg'} />
      </div>
    </main>
  );
}
