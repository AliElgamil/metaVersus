'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col uppercase`}
    >
      <h1 className="flex flex-col justify-center items-center relative z-10">
        <motion.span variants={textVariant(1.1)} className={styles.heroHeading}>
          metaVerse
        </motion.span>
        <motion.span
          variants={textVariant(1.2)}
          className="flex justify-center items-center"
        >
          <span className={styles.heroHeading}>ma</span>
          <span className={styles.heroDText} />
          <span className={styles.heroHeading}>ness</span>
        </motion.span>
      </h1>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt=[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/cover.png"
          alt="cover"
          className="w-full sm:h=[500px] h-[350px] rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore" className="pointer-events-none">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain pointer-events-auto"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
