import MainProjects from "./MainProjects";

const Projects = () => {
  return (
   <div className=" flex justify-center flex-col mx-auto px-5 sm:text-start text-center max-w-xl">
    <h1 className=" font-roboto">All Projects</h1>
    <MainProjects/>
   </div>
  );
};

export default Projects;
