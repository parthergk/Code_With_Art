import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  // State variables for form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mx-auto p-6 bg-gray-400 shadow-lg"
    >
      <h2 className="text-base font-semibold text-gray-800 mb-3">Want to hire me to develop your Website? Let's discuss.</h2>
      <h3 className="text-gray-800 text-sm font-normal mb-4">Let's have a conversation and discuss about your project.</h3>
  
      <a
        href="https://api.whatsapp.com/send?phone=7351500283&text=Hello%21%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20discussing%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className=" w-full font-semibold text-xs text-gray-800 text-center border border-gray-500 py-2 rounded-md inline-block cursor-pointer"
      >
        Conversation on WhatsApp
      </a>
      <div className="h-px w-full bg-gray-600 my-4"></div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <p className="text-gray-800 font-normal text-sm my-3">Drop your massage in massage box and email Id.</p>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-100 text-gray-800 px-4 py-1 focus:outline-none"
          />
        </div>
        <div>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="w-full bg-gray-100 text-gray-800 px-4 py-2 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="border border-gray-500 text-gray-800 font-medium text-sm py-1 px-4 rounded"
        >
          Send
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
