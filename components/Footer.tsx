'use client';

import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';
import styles from '../styles';
import { socials } from '../constants';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative z-[1]`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex justify-between items-center flex-wrap gap-5">
        <h2 className="font-bold lg:text-[64px] text-[44px] text-white">
          Enter the Metaverse
        </h2>
        <button
          type="button"
          className="flex items-center h-fit py-6 px-4 rounded-[32px] gap-3 bg-[#25618b]"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="uppercase text-white text-[16px]">
            ENTER METAVERSE
          </span>
        </button>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-4 border-t-2 border-t-[rgba(255,255,255,.1)] pt-[50px]">
        <h3 className="uppercase font-extrabold text-[24px] text-white">
          METAVERUS
        </h3>
        <p className="text-[14px] text-white/[.7]">
          Copyright © 2021 - 2022 Metaversus. All rights reserved.
        </p>
        <ul className="flex gap-4 items-center">
          {socials.map((social, index) => (
            <li key={index} className="cursor-pointer">
              <img src={social.url} alt={social.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
