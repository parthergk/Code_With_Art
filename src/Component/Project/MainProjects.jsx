import { motion } from 'framer-motion'
import React from 'react';
import { projectData } from '../../utils/projectData';
import Project from './Project'

// const {projectData} = React.lazy(()=> import ('../utils/projectData'));
export const MainProjects = () => {
  return (
    <motion.div
    initial={{ opacity: 0, transform: "translateY(60%)" }}
    animate={{ opacity: 1, transform: "translateY(0%)" }}
    transition={{ ease: [0.08, 0.65, 0.53, 0.96], duration: 1, delay: 1.2 }}
    className="w-full mt-6 text-start grid grid-cols-1 sm:grid-cols-2 gap-3">
      {projectData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </motion.div>
  )
}

export default MainProjects