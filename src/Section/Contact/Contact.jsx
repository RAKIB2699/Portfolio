import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation and/or API call here
    console.log("Form data submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#0d1b2a] max-w-[1600px] flex items-center justify-center p-8">
      <div className="w-11/12 mx-auto bg-gray-900 rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-4xl font-bold mb-6 text-orange-500 text-center">
          Contact Me
        </h2>

        {submitted && (
          <div className="mb-6 p-4 bg-green-600 rounded">
            Thank you for reaching out! I will get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-semibold text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-semibold text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-lg font-semibold text-white"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center text-gray-400">
          <p>
            Or reach me at:{" "}
            <br />
            <a
              href="mailto:your.email@example.com"
              className="text-orange-500 hover:underline"
            >
              rakibhasan01645172699@gmail.com
            </a>
          </p>
          <p className="mt-2">Phone: +8801645172698</p>
          <p className="mt-2">WhatsApp: +8801645172698</p>
          <p className="mt-2">Location: Mymensingh, Bangladesh</p>
        </div>
      </div>
    </section>
  );
}
