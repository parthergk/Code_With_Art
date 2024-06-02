const MainAbout = () => {
    return (
      <div className="w-full my-6 border-1 border-gray-600 p-4 relative">
        <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 "></span>
              <span className="absolute w-px -left-px h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 "></span>
              <span className="absolute w-px -right-px top-px h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 "></span>
              <span className="absolute w-[20%] -top-px left-10 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 "></span>
        <div className=" font-medium text-xs font-roboto">Who Am i? / README <span className=" text-gray-500">.me</span></div>
        <h1 className=" my-2 font-semibold text-3xl font-roboto">Hello!</h1>
        <div className=" my-3 h-px w-full mt-1 bg-gradient-to-r from-gray-300/10 via-gray-500/100 to-gray-300/10"></div>
        <p className=" w-full ">I am Gaurav Kumar. I am a dedicated and innovative Frontend Developer with a passion for crafting engaging and user-friendly web experiences. With a strong background in HTML, CSS, Bootstrap, JavaScript, Tailwind CSS, React.js, and Redux, I specialize in developing dynamic dashboards, interactive applications, and visually appealing interfaces.

Achievements:

Successfully deployed a chat application using React.js and Node.js with Socket.IO on Vercel.

Developed a video chat app enabling real-time interaction for up to four participants with integrated quiz features.

Created a portfolio showcasing projects developed with React.js, Tailwind CSS, Framer Motion, and Redux.

Completed a Bachelor of Computer Applications (BCA) and applied for internships in the algorithmic domain and website design revamp.
I am committed to leveraging my skills to create seamless, intuitive, and aesthetically pleasing digital solutions that enhance user engagement and satisfaction.</p>
      </div>
    )
  }
  
  export default MainAbout
