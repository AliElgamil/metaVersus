'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion';
import styles from '../styles';
import { scrollTo } from '../utils/scrollTo';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[.5] lg:max-w-[370px] flex flex-col justify-end gradient-05 sm:p-8 p-4 rounded-[32px] border border-[#6a6a6a] relative "
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="lg:text-[32px] text-[26px] lg:leading-[40px] leading-[36px] text-white -tracking-[.02em] font-bold">
            Samantha
          </h4>
          <p className="mt-[8px] font-normal lg:text-[18px] text-[12px] lg:leading-[32px] leading-[26px] text-white">
            Founder Metaverus
          </p>
        </div>
        <p className="mt-[24px] font-normal lg:text-[24px] text-[18px] lg:leading-[46px] leading-[40px] text-white">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-1 relative justify-center items-center flex"
      >
        <img
          src="/planet-09.png"
          alt="planet"
          className="w-full lg:h-[610px] h-auto min-h-[21px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute left-0 top-[10%] pointer-events-none"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            onClick={scrollTo.bind(this)}
            data-scroll="#explore"
            className="w-[155px] h-[155px] object-contain -translate-x-1/2 pointer-events-auto cursor-pointer"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
