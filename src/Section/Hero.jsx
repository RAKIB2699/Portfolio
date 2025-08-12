import profilePhoto from "../assets/profile-removebg-preview.png"; 
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col px-6 md:px-20">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-6">
        <h1 className="font-bold text-lg">Rakib Hasan</h1>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="hover:text-orange-400">Home</a></li>
          <li><a href="/about" className="hover:text-orange-400">About</a></li>
          <li><a href="#projects" className="hover:text-orange-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-orange-400">Contacts</a></li>
        </ul>
      </nav>

      {/* Hero content */}
      <div className="flex flex-col md:flex-row items-center justify-between flex-grow">
        {/* Left text */}
        <div className="space-y-6 max-w-xl mt-10 md:mt-0">
          <h2 className="text-4xl font-bold flex items-center gap-2">
            Hello <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
          </h2>
          <p className="text-xl font-semibold">I’m Rakib Hasan</p>

          {/* Gradient text with underline hover */}
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent cursor-default relative group">
            Frontend Developer
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-orange-500 rounded-md scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </h1>

          <p className="text-gray-300 mt-4 max-w-md leading-relaxed">
            Passionate about crafting modern, responsive user interfaces and bringing designs to life with clean, efficient code. Dedicated to continuous learning and creating seamless digital experiences.
          </p>
          
          {/* Buttons and social links */}
          <div className="flex items-center gap-4 mt-4">
            <button className="border border-orange-500 px-6 py-2 rounded-lg text-lg hover:bg-orange-500 hover:text-white transition">
              My resume
            </button>

            {/* Social icons */}
            <div className="flex gap-4 text-orange-400 text-2xl">
              <a
                href="https://github.com/RAKIB2699" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rakib-hasan-dev/"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourtwitter"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-white transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Right image with halo */}
        <div className="relative mt-12 md:mt-0">
          <div className="absolute inset-0 rounded-full bg-orange-600 opacity-30 blur-3xl"></div>
          <img
            src={profilePhoto}
            alt="Profile"
            className="relative rounded-full w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
