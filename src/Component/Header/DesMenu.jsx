import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DesMenu = () => {
    const menuItems = [
      { text: "Home", address: "/" },
      { text: "Project", address: "/project" },
      { text: "Blog", address: "/blog" },
      { text: "About", address: "/about" }
    ];
  
    return (
      <ul className="rounded-md flex items-center justify-between font-roboto">
        {menuItems.map((item, index) => (
          <Link to={item.address} key={index}>
            <motion.li
              initial={{ opacity: 0, transform: "translateX(50%) scaleY(0)" }}
              animate={{ opacity: 1, transform: "translateX(0%) scaleY(1)" }}
              transition={{ ease: [0.08, 0.65, 0.53, 0.96], duration: 1.3 }}
              className="text-gray-200 cursor-pointer relative w-20 hover:text-teal-500"
            >
              {item.text}
              <span className="absolute -mb-2 w-20 left-0 right-0 bottom-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0"></span>
            </motion.li>
          </Link>
        ))}
      </ul>
    );
};

export default DesMenu;
