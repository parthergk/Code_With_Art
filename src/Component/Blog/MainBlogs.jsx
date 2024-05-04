import Blog from "./Blog";
import { Link } from "react-router-dom";
import { blogs } from "../../utils/Blogs";
const MainBlogs = () => {
  return (
    <div className="w-full my-10 flex flex-col">
      <span className="font-normal font-roboto text-base mb-4">Recent Blogs</span>
      {blogs.map((blogData, index) => (
        <Blog key={index} {...blogData} />
      ))}
      <Link to={"/blog"}><div className=" w-full border border-gray-500 rounded-md text-blue-500 font-semibold text-xs text-center py-2">Show all Blogs</div></Link>
    </div>
  );
}

export default MainBlogs;
