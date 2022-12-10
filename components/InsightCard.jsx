'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt={title}
      className="object-cover md:w-[270px] w-full h-[250px] rounded-[32px] "
    />

    <div className="flex justify-between w-full items-center gap-4">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px] ">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-white opacity-[.4]">
          {subtitle}
        </p>
      </div>
      <a
        href="/"
        className="lg:w-[100px] w-[70px] lg:h-[100px] h-[70px] border-2 border-[#F5F5F5] flex justify-center items-center rounded-full"
      >
        <img src="/arrow.svg" alt="arrow" />
      </a>
    </div>
  </motion.div>
);

export default InsightCard;
