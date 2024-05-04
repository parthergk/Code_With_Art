
const Blog = ({month, year, img, title, description}) => {
  return (
    <div className=" my-2">
        <div className=" font-roboto flex items-center">
            <span className=" font-semibold text-xs mr-1">{month}</span>
            <span className=" font-semibold text-xs text-gray-500 mr-3">{year}</span>
            <span className=" h-px w-full z-10 bg-white"></span>
        </div>
        <div className=" flex w-full my-3">
            <div className="flex flex-col items-center gap-2">
                <span className=" w-px h-7 bg-white"></span>
                <div className=" h-10 w-10 rounded-full bg-gray-500 text-center"><img src={img} alt="" className=" h-full w-full object-contain rounded-full " /></div>
                <span className=" w-px h-7 bg-white"></span>
            </div>
            <div className=" w-full ml-5 py-4 flex flex-col gap-2">
                <p className=" font-medium text-sm">{title}</p>
                <p className=" font-normal text-xs text-gray-500">{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Blog