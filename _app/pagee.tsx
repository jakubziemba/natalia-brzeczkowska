'use client';
import Link from 'next/link';
import MaskedShape from '../_components/masked-shape';
import Heading from '../_components/heading';
import StarAnimated from '../_components/star/star-animated';
import { motion } from 'framer-motion';

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5, ease: [0.17, 0, 0.55, 1] }}
            className='flex flex-col justify-between ite'
          >
            <StarAnimated className='origin-center mb-auto' />
            <StarAnimated className='origin-center mt-auto' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5, ease: [0.17, 0, 0.55, 1] }}
            className='flex flex-col'
          >
            <p className='leading-relaxed mb-8'>
              Natalia specializes in makeup for music videos, commercials and photo sessions.
            </p>
            <p>
              She has worked with a wide variety of artists including Monika Brodka, Karaś/Rogucki,
              Pezet and Sonar
            </p>
            <Link
              href='/about'
              className='bg-red text-lightred rounded-full px-10 mt-12 py-3 w-max  text-base border-red border hover:bg-lightred hover:text-red transition-all'
            >
              Get to know me better
            </Link>
          </motion.div>
        </div>
      </div>
      <div className='absolute right-[5%] top-[5%]'>
        <MaskedShape width={shapeSize.width} image={'/DariaIrena.jpeg'} />
      </div>
    </main>
  );
}
