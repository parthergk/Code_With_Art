import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import navicon from "../../assets/navbar.svg";
import { isVisible } from "../../redux/navSlice";
import DesMenu from "./DesMenu"

const Menu = lazy(() => import("./Menu"));

export const Head = () => {
  const dispatch = useDispatch();

  const menuHandler = () => {
    dispatch(isVisible());
  };

  return (
    <nav className="w-full flex justify-between items-center bg-primary text-white h-16 px-5">
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-90%)" }}
        animate={{ opacity: 1, transform: "translateX(0%)" }}
        transition={{ ease: [0.08, 0.65, 0.53, 0.96], duration: 1.3 }}
      >
        <h1 className="text-xl font-roboto">CodeWithArt</h1>
      </motion.div>
      <div className="block sm:hidden">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(80%)" }}
          animate={{ opacity: 1, transform: "translateX(0%)" }}
          transition={{ ease: [0.08, 0.65, 0.53, 0.96], duration: 1.3 }}
          onClick={menuHandler}
          className="w-8"
        >
          <img src={navicon} alt="" />
        </motion.div>
        <Suspense>
          <Menu />
        </Suspense>
      </div>
      <div className="hidden sm:block w-1/2 px-5 text-center">
          <DesMenu />
      </div>
    </nav>
  );
};

export default Head;
