'use client';

import StarIcon from './star-icon';
import { motion } from 'framer-motion';

type StarAnimatedProps = {
  className?: string;
};

export default function StarAnimated({ className }: StarAnimatedProps) {
  return (
    <motion.span
      animate={{
        rotate: '360deg',
        transition: {
          type: 'spring',
          bounce: 0,
          duration: 3.05,
          repeat: Infinity,
        },
      }}
      className={`${className}`}
    >
      <StarIcon />
    </motion.span>
  );
}
