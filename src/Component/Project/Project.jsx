import { Link } from "react-router-dom";
import ProjectNameImage from "../../assets/ProjectName.png";

const Project = ({img, name, link, description, tags }) => {
  return (
    <div className="rounded-lg flex flex-col overflow-hidden border-1 border-gray-500 p-2 mb-6 text-start">
      <img
        src={img}
        alt="Project_Logo"
        className="mx-auto h-40 w-full object-top"
      />
      <div className="flex flex-col">
        <div className="space-y-1">
          <div className="flex items-center gap-2 my-2">
            <img src={ProjectNameImage} alt="" />
            <Link to = {link}>
            <h3 className="font-semibold tracking-tight mt-1 text-sm text-blue-500">
              {name}
            </h3>
            </Link>
          </div>
          <div className="max-w-full text-pretty font-roboto text-xs font-normal text-gray-500">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col">
        <div className="mb-1 mt-3 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="inline-flex items-center rounded-md border font-medium font-roboto text-nowrap border-transparent bg-primary-2 px-1 py-0 text-xs"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      </div>
  );
};

export default Project