import React, { useState } from "react";
import { motion } from "framer-motion";
import SkillName from "./SkillName";
import SkillItems from "./SkillItems";
import SkillLogo from "../../assets/skill.png";
import FrontendLogo from "../../assets/Front.png";
import BackendLogo from "../../assets/Back.png";
import { frontendData, backendData } from "../../utils/skillData";

const Skills = () => {
  const [isFrontend, setIsFrontend] = useState(true);

  const handleFrontendClick = () => {
    setIsFrontend(true);
  };

  const handleBackendClick = () => {
    setIsFrontend(false);
  };

  // Memoized SkillItems component to avoid re-renders on skillData change
  const MemoizedSkillItems = React.memo(SkillItems);

  return (
    <div className="w-full my-6">
      <motion.div
        initial={{ opacity: 0, transform: "translateY(-100%)" }}
        animate={{ opacity: 1, transform: "translateY(0%)" }}
        transition = {{duration: 0.8}}
        className="border rounded py-1 px-3 flex justify-between items-center"
      >
        <span className="font-medium text-sm">Skills</span>
        <img src={SkillLogo} alt="Skills" />
      </motion.div>
      <motion.div
              initial={{ opacity: 0, transform: "translateY(-10%)" }}
              animate={{ opacity: 1, transform: "translateY(0%) " }}
              transition = {{duration: 1, delay : 0.5}}
      className="flex flex-col w-full border mt-5 rounded-t-md">
        <div className="w-full flex p-4 gap-5">
          <div
            className={` cursor-pointer flex items-center gap-2 ${
              isFrontend ? "contrast-1" : "contrast-0"
            }`}
            onClick={handleFrontendClick}
          >
            <SkillName logo={FrontendLogo} text="Frontend" />
          </div>
          <div
            className={`cursor-pointer flex items-center gap-2 ${
              isFrontend ? "contrast-0" : "contrast-1"
            }`}
            onClick={handleBackendClick}
          >
            <SkillName logo={BackendLogo} text="Backend" />
          </div>
        </div>
        {/* Conditionally render the skill items */}
        {isFrontend ? (
          <MemoizedSkillItems skilldata={frontendData} />
        ) : (
          <MemoizedSkillItems skilldata={backendData} />
        )}
      </motion.div>
    </div>
  );
};

export default Skills;
