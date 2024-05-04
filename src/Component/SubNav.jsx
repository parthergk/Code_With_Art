import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import ProjectLogo from "../assets/project.png";
import SkillsLogo from "../assets/skills.png";
import AboutLogo from "../assets/about.png";
import { changeSection } from "../redux/subNavSlice";

const SubNav = () => {

  const dispatch = useDispatch();
  const handleSectionClick = (section) => {
    dispatch(changeSection(section)); 
  };

  const items = [
    { logo: ProjectLogo, text: "Projects", section: "projects" },
    { logo: SkillsLogo, text: "Skills", section: "skills" },
    { logo: AboutLogo, text: "About", section: "about" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, translateY: "50%" }}
      animate={{ opacity: 1, translateY: "0%" }}
      transition={{ ease: [0.08, 0.65, 0.53, 0.96], duration: 1.3, delay: 1.5 }}
      className="w-full flex justify-evenly items-center py-3"
    >
      {items.map((item, index) => (
        <div key={index} onClick={() => handleSectionClick(item.section)} className="flex items-center font-roboto text-sm font-medium gap-3 cursor-pointer">
          <img src={item.logo} alt="Logo" loading="lazy" />
          <span>{item.text}</span>
        </div>
      ))}
    </motion.div>
  );
}

export default SubNav;
