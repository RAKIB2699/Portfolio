import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import project1Img from "../../assets/p-1.png";
import project2Img from "../../assets/p-2.png";
import project3Img from "../../assets/p-3.png";

const projects = [
  {
    id: "blood",
    name: "Blood-Donation Platform",
    image: project1Img,
    tech: ["React", "Node.js", "MongoDB", "Express"],
    description:
      "A full-stack web application built with the MERN stack to connect blood donors with recipients in need.",
    live: "blood-donation-85325.web.app/",
    github: "https://github.com/RAKIB2699/blood-donation",
    challenges: "Implementing real-time donor matching and secure user authentication.",
    future: "Add location-based donor search and automated donation reminders.",
  },
  {
    id: "foody",
    name: "Foody — Food Sharing App",
    image: project2Img,
    tech: ["React", "Firebase", "TailwindCSS"],
    description:
      "Enables users to share surplus food, reduce food waste, and request donations within their community.",
    live: "foody-hub-8a358.web.app",
    github: "https://github.com/RAKIB2699/food",
    challenges: "Handling live inventory updates and user geolocation features.",
    future: "Add AI-based food expiration detection and multilingual support.",
  },
  {
    id: "hobby",
    name: "Hobby Hub — Community Platform",
    image: project3Img,
    tech: ["React", "Express", "Socket.io"],
    description:
      "A platform where users can discover, join, and create hobby groups like book clubs, painting circles, and gaming squads.",
    live: "hobby-hub-a8bc6.web.app",
    github: "https://github.com/RAKIB2699/hoby-hub",
    challenges: "Managing real-time group chat and notifications.",
    future: "Mobile app version and event scheduling integration.",
  },
];

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const project = projects.find((p) => p.id === selectedProjectId);

  // Details View
  if (project) {
    return (
      <section className="bg-[#0d1b2a] min-h-screen max-w-[1600px] mx-auto px-20 pt-12 pb-12 rounded-lg text-white">
        <button
          onClick={() => setSelectedProjectId(null)}
          className="mb-8 px-5 py-2 bg-orange-600 rounded-lg hover:bg-orange-700 transition"
        >
          ← Back to Projects
        </button>

        <h1 className="text-4xl font-bold text-orange-500 mb-6">{project.name}</h1>

        <img
          src={project.image}
          alt={project.name}
          className="w-full max-h-[600px] object-cover rounded-lg mb-8"
        />

        <p className="mb-8 text-gray-300">{project.description}</p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="bg-gray-700 text-orange-400 px-4 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="mb-6">
          <strong>Challenges faced:</strong> {project.challenges}
        </p>

        <p className="mb-12">
          <strong>Potential Improvements & Future Plans:</strong> {project.future}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg flex items-center justify-center gap-2 text-center transition"
          >
            Live Site <FaExternalLinkAlt />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg flex items-center justify-center gap-2 text-center transition"
          >
            GitHub <FaGithub />
          </a>
        </div>
      </section>
    );
  }

  
  return (
    <section className="bg-[#0d1b2a] min-h-screen max-w-[1600px]">
      <h2 className="text-4xl font-bold text-center pt-12 text-orange-500 mb-12">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12 mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:scale-[1.03] transition-transform"
            onClick={() => setSelectedProjectId(project.id)}
          >
            <img
              src={project.image} 
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-orange-500 mb-2">{project.name}</h3>
              <p className="text-gray-300 flex-grow">{project.description}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent card click bubbling
                  setSelectedProjectId(project.id);
                }}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
