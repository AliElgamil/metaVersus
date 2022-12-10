import { useEffect, useState } from 'react';

const Loading = ({ show }) => {
  const [showLoading, setShowLoading] = useState(show);

  useEffect(() => {
    const setLoading = setTimeout(() => setShowLoading(false), 3000);

    return () => clearTimeout(setLoading);
  }, []);
  return (
    <div
      className={`fixed inset-0 grid place-items-center bg-primary-black z-50 ${
        showLoading
          ? 'opacity-100 visible'
          : 'opacity-0 invisible transition-all ease-linear duration-[.7s]'
      }
      }`}
    >
      <div>
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_GYMFmyKWkX.json"
          background="transparent"
          speed="1"
          style={{ width: '300px', height: '300px' }}
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Loading;
