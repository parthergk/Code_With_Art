import { motion } from "framer-motion";

const Framer = () => {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="box"
      >
        Hello, Framer Motion!
      </motion.div>
    </div>
  );
};

export default Framer;
