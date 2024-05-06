import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import React, { Suspense } from "react";
import img from "../assets/gaurav.png";
import SocialMedia from "./SocialMedia";
import Education from "./Education";
import SubNav from "./SubNav";
import Contact from "./Contact";
import MainProjects from "./Project/MainProjects";
import MainBlogs from "./Blog/MainBlogs";
import MainAbout from "./MainAbout";

const Skills = React.lazy(() => import("./Skill/Skills"));

const Main = () => {
  const transitionProps = {
    ease: [0.08, 0.65, 0.53, 0.96],
    duration: 1,
    delay: 1
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = "/cv.pdf";
    link.download = 'GauravKumar_cv.pdf';
    link.click();
  };
  
  const activeSection = useSelector((store) => store.subNav.activeSection);

  return (
    <main className="px-5">
      <div className="flex flex-col justify-center items-start max-w-xl mx-auto md:ml-60 py-4">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(-60%)" }}
          animate={{ opacity: 1, transform: "translateY(0%)" }}
          transition={{ duration: 1 }}
          className="flex w-full gap-4 items-center mb-8"
        >
          <div className="h-20 w-20 rounded-full bg-cool-gray-500">
            <img src={img} alt="Profile" loading="lazy" className=" h-full w-full rounded-full"/>
          </div>
          <div className="flex flex-col gap-2 font-semibold text-2xl font-roboto">
            <span>Hello,</span>
            <span className="ml-5">I'm <span className="text-teal-500">Gaurav Kumar</span></span>
          </div>
        </motion.div>
        
        <SocialMedia />
        
        <motion.div
          initial={{ opacity: 0, transform: "translateY(100%)" }}
          animate={{ opacity: 1, transform: "translateY(0%)" }}
          transition={transitionProps}
          className="my-6 flex justify-center items-center w-full"
        >
          <Link
            className="text-center bg-primary-2 w-full border-1 border-zinc-600 relative py-1"
            onClick={downloadCV}
          >
            <span>DOWNLOAD CV</span>
            <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 "></span>
            <span className="absolute w-px -left-px h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 "></span>
            <span className="absolute w-px -right-px top-px h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 "></span>
            <span className="absolute w-[20%] -top-px left-10 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 "></span>
          </Link>
        </motion.div>
        
        <motion.span
          initial={{ opacity: 0, transform: "scaleX(0)" }}
          animate={{ opacity: 1, transform: "scaleX(1)" }}
          transition={transitionProps}
          className="h-px w-full mt-1 bg-gradient-to-r from-gray-300/10 via-gray-500/100 to-gray-300/10"
        ></motion.span>
        
        <Education />
        <SubNav />
        
        <motion.span
          initial={{ opacity: 0, transform: "scaleX(0)" }}
          animate={{ opacity: 1, transform: "scaleX(1)" }}
          transition={transitionProps}
          className="h-px w-full bg-gray-500 mb-4"
        ></motion.span>
  
        <Suspense fallback={null}>
          {activeSection === "projects" && <div className=" text-center"><MainProjects /><Link to="/project" className=" cursor-pointer font-roboto font-medium text-sm text-center">See More Projects...</Link> </div>}
          {activeSection === "skills" && <Skills />}
        </Suspense>
          {activeSection === "about" && <MainAbout />}

          <MainBlogs/>
          <Contact/>
      </div>
    </main>
  );
};

export default Main;
