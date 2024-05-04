import { motion } from "framer-motion";
import C_logo from "../assets/C_Logo.png";
import Cpp_logo from "../assets/C++_Logo.png";
import Python_logo from "../assets/Python-logo.png";
import Javascript_logo from "../assets/javascript-logo.png";

const logos = [C_logo, Cpp_logo, Python_logo, Javascript_logo];

const Education = () => {
  const transitionProps = {
    ease: [0.08, 0.65, 0.53, 0.96],
    duration: 1.3,
    delay: 1
  };

  return (
    <div className=" w-full my-6 font-roboto">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transitionProps}
        className="font-medium"
      >
        Education
      </motion.span>
      <div className=" flex p-2 mt-1 justify-between items-center">
        {logos.map((logo, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, transform: "translateX(50%) scaleX(0.5)" }}
            animate={{ opacity: 1,transform: "translateX(0%) scaleX(1)" }}
            transition={transitionProps}
            className="relative"
          >
            <img src={logo} alt="Logo" loading="lazy" className=" w-14"/>
            <span className="absolute -mb-2 left-0 right-0 bottom-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0"></span>
          </motion.span>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: "90%" }}
        animate={{ opacity: 1, translateY: "0%" }}
        transition={transitionProps}
        className="p-2 mt-2"
      >
        <span className="border-1 border-emerald-500 text-emerald-500 py-1 px-3 rounded-2xl text-xs">
          BCA
        </span>
        <span className="text-blue-500 text-sm mx-3">UG Degree</span>
      </motion.div>
      <motion.span
        initial={{ opacity: 0, translateY: "90%" }}
        animate={{ opacity: 1, translateY: "0%" }}
        transition={{ ...transitionProps, delay: 1.2 }}
        className="px-2 text-sm text-gray-500"
      >
        Vivek College Of Education
      </motion.span>
    </div>
  );
};

export default Education;
