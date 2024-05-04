import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { isVisible } from "../../redux/navSlice";

const Menu = () => {
  const isVisibleMenu = useSelector(state => state.nav.menu);
  const dispatch = useDispatch();

  const menuHandler = () => {
    dispatch(isVisible());
  };

  const menuVariants = {
    hidden: { opacity: 0, transform: "translateY(-60%) scaleY(0.5)" },
    visible: { opacity: 1, transform: "translateY(0%) scaleY(1)" }
  };

  const menuLinks = [
    { to: "/", text: "Home" },
    { to: "/project", text: "Project" },
    { to: "/blog", text: "Blog" },
    { to: "/about", text: "About" }
  ];

  return (
    <>
      {isVisibleMenu && (
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={menuVariants}
          transition={{ ease: [0.08, 0.65, 0.53, 0.96], duration: 0.5 }}
          className="z-10 transform transition-transform duration-300 ml-3 p-5 rounded-md w-11/12 absolute left-0 top-16 flex flex-col items-center justify-center bg-primary-2 font-roboto"
        >
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className={`w-full py-4 text-gray-200 ${index !== 0 ? 'border-t-1 border-cyan-50/50' : ''} ${index === menuLinks.length - 1 ? 'border-y-1 border-cyan-50/50' : ''}`}
              onClick={menuHandler}
            >
              <li>{link.text}</li>
            </Link>
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default Menu;
