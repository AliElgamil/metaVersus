import { motion, useScroll } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Footer, Navbar, Loading } from '../components';
// import {
//   About,
//   Explore,
//   Feedback,
//   GetStarted,
//   Hero,
//   Insights,
//   WhatsNew,
//   World,
// } from '../sections';

const About = dynamic(() => import('../sections/About'), {
  suspense: true,
});
const Explore = dynamic(() => import('../sections/Explore'), {
  suspense: true,
});
const Feedback = dynamic(() => import('../sections/Feedback'), {
  suspense: true,
});
const GetStarted = dynamic(() => import('../sections/GetStarted'), {
  suspense: true,
});
const Hero = dynamic(() => import('../sections/Hero'), {
  suspense: true,
});
const Insights = dynamic(() => import('../sections/Insights'), {
  suspense: true,
});
const WhatsNew = dynamic(() => import('../sections/WhatsNew'), {
  suspense: true,
});
const World = dynamic(() => import('../sections/World'), {
  suspense: true,
});

const Page = () => {
  const { scrollYProgress } = useScroll();
  return (
    <Suspense fallback={<Loading />}>
      <>
        <Loading show />
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
      </>
    </Suspense>
  );
};

export default Page;
