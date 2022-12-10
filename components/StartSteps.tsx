import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} gap-[30px]`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-white/[.08] backdrop-blur-[24px]`}
    >
      <p className="font-bold text-[20px] text-white">0{number}</p>
    </div>
    <p className="flex-1 font-normal text-[#B0B0B0] leading-8">{text}</p>
  </div>
);

export default StartSteps;
