import { motion, useScroll } from 'framer-motion';
import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';

const Page = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-primary-black overflow-hidden">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-[5px] w-full bg-[#a509ff] fixed top-0 left-0 origin-left z-50"
      />
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
