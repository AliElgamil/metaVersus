'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10 hidden lg:block`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title="Track friends around you and invite them to play together in the same world"
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain"
        />

        <motion.div
          variants={zoomIn(1, 0.5)}
          initial="hidden"
          whileInView="show"
          className="absolute bottom-[25%] right-[10%] w-[70px] h-[70px] rounded-full bg-[#5d6680] shadow-[0_0_60px_#f6623e] p-[6px] people_shadow backdrop-blur-[6px]"
        >
          <img
            src="/people-01.png"
            alt="people"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={zoomIn(1, 0.5)}
          initial="hidden"
          whileInView="show"
          className="absolute top-[10%] left-[10%] w-[70px] h-[70px] rounded-full bg-[#5d6680] shadow-[0_0_60px_#F29DB0] p-[6px] people_shadow backdrop-blur-[6px]"
        >
          <img
            src="/people-02.png"
            alt="people"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={zoomIn(1, 0.5)}
          initial="hidden"
          whileInView="show"
          className="absolute top-[40%] left-[47%] w-[70px] h-[70px] rounded-full bg-[#5d6680] shadow-[0_0_60px_#ADB6D7] p-[6px] people_shadow backdrop-blur-[6px]"
        >
          <img
            src="/people-03.png"
            alt="people"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={zoomIn(1, 0.5)}
          initial="hidden"
          whileInView="show"
          className="absolute top-[10%] left-[63%] w-[220px] h-[150px] rounded-[32px] bg-[#5d6680] shadow-[0_0_60px_#437BDAa3] p-[6px]  backdrop-blur-[10px]"
        >
          <img
            src="/world-01.png"
            alt="people"
            className="w-full h-full object-cover rounded-[32px]"
          />
          <div className="flex flex-col gap-3 absolute bottom-0 left-0 pb-5 pl-4">
            <div className="flex items-center">
              <img
                src="/people-04.png"
                alt="people"
                className="w-[24px] h-[24px] z-[3]"
              />
              <img
                src="/people-05.png"
                alt="people"
                className="w-[24px] h-[24px] -ml-[12px] z-[2]"
              />
              <img
                src="/people-06.png"
                alt="people"
                className="w-[24px] h-[24px] -ml-[12px] z-[1]"
              />

              <p className="text-[12px] text-white leading-[15px] ml-2">
                + 264 has joined
              </p>
            </div>
            <h4 className="text-[18px] leading-[23px] font-bold capitalize text-white">
              Hawkins Labs
            </h4>
          </div>
        </motion.div>

        <motion.div
          variants={zoomIn(1, 0.5)}
          initial="hidden"
          whileInView="show"
          className="absolute top-[40%] left-[20%] w-[220px] h-[150px] rounded-[32px] bg-[#5d6680] shadow-[0_0_60px_#437BDAa3] p-[6px]  backdrop-blur-[10px]"
        >
          <img
            src="/world-02.png"
            alt="people"
            className="w-full h-full object-cover rounded-[32px]"
          />
          <div className="flex flex-col gap-3 absolute bottom-0 left-0 pb-5 pl-4">
            <div className="flex items-center">
              <img
                src="/people-04.png"
                alt="people"
                className="w-[24px] h-[24px] z-[3]"
              />
              <img
                src="/people-05.png"
                alt="people"
                className="w-[24px] h-[24px] -ml-[12px] z-[2]"
              />
              <img
                src="/people-06.png"
                alt="people"
                className="w-[24px] h-[24px] -ml-[12px] z-[1]"
              />

              <p className="text-[12px] text-white leading-[15px] ml-2">
                + 264 has joined
              </p>
            </div>
            <h4 className="text-[18px] leading-[23px] font-bold capitalize text-white">
              Hawkins Labs
            </h4>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
