import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import xlogo from "../assets/X.png";
import usericon from "../assets/user.png";
export const SocialMedia = () => {
  return (
    <div>
       <motion.div 
        initial={{ opacity: 0, transform: "translateX(-90%)" }}
        animate={{ opacity: 1, transform: "translateX(0%)" }}
        transition={{ ease: [0.08, 0.65, 0.53, 0.96], duration: 1 }}
      >
        <Link to={"https://x.com/Code_With_Art?t=dT6ZGI7Sosh03xiXz0MBSg&s=08"} className=" flex justify-start items-center gap-2 mb-2 cursor-pointer">
        <span>
          <img src={xlogo} alt="X" />
        </span>
        <span className=" text-sm font-normal">@Code_With_Art</span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, transform: "translateX(-90%) scaleX(0.5)" }}
        animate={{ opacity: 1, transform: "translateX(0%) scaleX(1)" }}
        transition={{ ease: [0.08, 0.65, 0.53, 0.96], duration: 1.3, delay: 0.6 }}
        className=" flex justify-start items-center gap-1 text-sm"
      >
        <span>
          <img src={usericon} alt="user" className=" inline mr-1" />3 <span className=" inline text-gray-400"> Follower</span>
        </span>
        <span>29 <span className=" text-gray-400"> Following</span></span>
      </motion.div>
    </div>
  );
};

export default SocialMedia;
