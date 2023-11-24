'use client';
import { motion } from 'framer-motion';

type HeadingProps = {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
};

const Heading = ({ className, children }: HeadingProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: [0.17, 0, 0.55, 1] }}
      className={className}
    >
      {children}
    </motion.h1>
  );
};

export default Heading;
