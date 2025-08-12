export default function AboutMe() {
  return (
    <section
      id="about"
      className="bg-gray-900 py-16 px-6 md:px-20 flex justify-center"
    >
      <div className="bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-3xl shadow-xl max-w-4xl p-10 text-gray-200">
        <h2 className="text-4xl font-bold text-center text-orange-400 mb-10">
          About Me
        </h2>

        <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            I began my programming journey driven by curiosity and a desire to create impactful digital experiences. Over the years, I have honed my skills in frontend development, specializing in building responsive and user-friendly web applications using React and modern JavaScript.
          </p>

          <p>
            I enjoy crafting pixel-perfect interfaces and optimizing performance to deliver smooth, accessible experiences. Collaborating on team projects and solving complex challenges motivates me to continuously grow and learn.
          </p>

          <p>
            Outside of coding, I love playing football, exploring digital art, and staying updated with the latest tech trends. These passions fuel my creativity and keep me inspired both personally and professionally.
          </p>

          <p>
            My goal is to build clean, maintainable code and contribute to projects that make a difference. I am always eager to take on new challenges and embrace lifelong learning in this ever-evolving field.
          </p>
        </div>
      </div>
    </section>
  );
}
