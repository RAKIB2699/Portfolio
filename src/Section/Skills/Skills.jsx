import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiJsonwebtokens, SiMongodb, SiExpress, SiReactrouter } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-300" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "JWT", icon: <SiJsonwebtokens className="text-purple-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  { name: "React Router", icon: <SiReactrouter className="text-pink-500" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 mx-w-[1600px] pt-28 py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
        Skills
      </h2>
      <div className="w-11/12 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg p-6 cursor-default
                       hover:scale-105 transition-transform duration-300"
            title={name}
          >
            <div className="text-6xl mb-4">{icon}</div>
            <span className="text-gray-200 text-lg font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
