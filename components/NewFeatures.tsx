import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-white/[.08] backdrop-blur-[24px]`}
    >
      <img src={imgUrl} alt={title} className="object-contain w-1/2 h-1/2" />
    </div>
    <h4 className="mt-[26px] text-[24px] font-bold leading-[30px] text-white">
      {title}
    </h4>
    <p className="flex-1 font-normal text-[#B0B0B0] leading-8 mt-[16px] text-[16px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
