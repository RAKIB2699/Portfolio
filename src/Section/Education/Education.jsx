export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Science in Electrical and Electronic Engineering",
      institution: "Jatiya Kabi Kazi Nazrul Islam University",
      year: "Ongoing",
      description:
        "Pursuing an in-depth understanding of electronics, power systems, and modern engineering concepts while merging this technical foundation with software development skills. Developed a strong interest in web technologies, combining analytical problem-solving from engineering with creative UI/UX design in frontend development. Actively involved in departmental projects, workshops, and collaborative coding challenges.",
    },
  ];

  return (
    <section id="education" className="bg-gray-900 max-w-[1600px] py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
        Education
      </h2>

      <div className="w-11/12 mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-orange-500/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
            <p className="text-lg text-orange-400 font-medium">
              {edu.institution} • {edu.year}
            </p>
            <p className="text-gray-300 mt-3">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
