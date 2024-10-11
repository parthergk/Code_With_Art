import ProjectImage1 from "../assets/Project1.png";
import ProjectImage2 from "../assets/Project2.png";
import ProjectImage3 from "../assets/Project3.png"
export const projectData = [
    {
      img: `${ProjectImage1}`,
      name: "Teacher Review System",
      link : "https://vgc-trs.vercel.app/",
      description:
        "The Teacher Review System is a comprehensive platform designed to facilitate transparent and constructive feedback between students and educators. Through this system, students can provide detailed evaluations of their teachers based on various criteria such as teaching effectiveness, communication skills, and responsiveness...",
      tags: ["Node.js","MongoDb","React","Redux","Tailwind CSS"],
    },
    {
      img: `${ProjectImage2}`,
      name: "GoAssignr",
      link : "https://goassignr.vercel.app/",
      description:
        "GoAssignr is a dynamic web app that offers users the ability to generate Assignments and Easys easily on a given topic by utilizing the OpenAI API...",
      tags: ["OpenAi API","React", "Tailwind CSS"],
    },
    {
      img: `${ProjectImage3}`,
      name: "ChatTerRoom",
      link : "https://chatterroom.vercel.app/",
      description:
        "This project is a real-time chat application built with React, Socket.IO, and Redux for managing state across the app. The app allows users to join chat rooms and exchange messages in real-time.",
      tags: ["Socket.IO"," React", "Redux", "Tailwind CSS"],
    },
  ];
