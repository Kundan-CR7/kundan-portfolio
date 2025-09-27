import React from "react";
import {ReactTyped}  from "react-typed";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden"
    >
    <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-90"></div>
    </div>

    <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 z-20">
        <a href="https://github.com/Kundan-CR7" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 hover:text-blue-500/50 transition" />
        </a>
        <a
            href="https://www.linkedin.com/in/kundan-gupta-8a1818196/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaLinkedin className="w-6 h-6 hover:text-blue-500/50 transition" />
        </a>
        <a href="kundangupta7334@email.com">
            <FaEnvelope className="w-6 h-6 hover:text-blue-500/50 transition" />
        </a>
    </div>

      <div className="z-10">
        <p className="text-gray-400 mb-2 text-3xl">Hello, I'm</p>
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent">
          Kundan Gupta
        </h1>
        <p className="text-gray-400 text-lg my-8 max-w-2xl mx-auto">
          From React flows to AI algorithms, I merge creativity and logic to build applications that are as intelligent as they are interactive. 
        </p>
        <div className="flex justify-center mt-6 text-xl">
        <ReactTyped
            strings={[
                "AIML Enthusiast",
                "Full Stack Developer",
                "Building Innovative Solutions",
            ]}
            typeSpeed={75}
            backSpeed={50}
            backDelay={1000}
            attr="placeholder"
            loop
            >
        <input type="text" className="w-[400px] p-3 rounded text-center border border-gray-500 placeholder-gray-400"/>
        </ReactTyped>
        </div>
       

        <div className="mt-6 flex justify-center space-x-4">
            <a href='#projects' className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba( 59,130,246,0.4)]'>
                View Projects
            </a>
            <a href='#contact' className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba( 59,130,246,0.2)] hover:bg-blue-500/10'>
                Contact Me
            </a>
        </div>
      </div>
    </section>
  );
};

export default Home;