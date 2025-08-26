import { useState } from "react";
import { motion } from "framer-motion";
import WhatsApp from "./WhatsApp.png";
import Ecommerce from "./Ecommerce.png";
import SocialApp1 from "./SocialApp1.png"



export default function Testimonials() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Responsive Blog Section",
      feedback:
        "I created a modern and responsive hero section for a webpage using HTML and CSS. It includes a clean layout with engaging design elements to attract user attention at first glance.",
      projectImages: [WhatsApp, WhatsApp, WhatsApp], // multiple screenshots
    },
    {
      title: "Hero Section Webpage",
      feedback:
        "I designed a fully responsive blog section using HTML and CSS, ensuring it looks great on all devices. The layout is clean and user-friendly, making it easy to read and navigate through blog",
      projectImages: [Ecommerce, Ecommerce, Ecommerce],
    },
    {
      title: "Contact Section",
      feedback:
        "I developed a responsive contact section with a clean and simple form layout. It allows users to easily get in touch, and it adjusts smoothly across all screen sizes.",
      projectImages: [SocialApp1, SocialApp1, SocialApp1],
    },
  ];

  return (
    <section id="testimonials" className="px-6 md:px-20 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="text-gray-500 text-lg font-medium uppercase tracking-wide">
          Recent Work
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Projects Showcase
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Explore some of my recent mobile app designs with polished interfaces
          and professional functionality.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow flex flex-col"
          >
            {/* Project Screenshot */}
            <div className="w-full h-60 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={project.projectImages[0]}
                alt={project.title}
                className="h-full object-contain"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow text-left">
              <h3 className="text-xl font-bold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-3 flex-grow">{project.feedback}</p>

              <button
                onClick={() => setSelectedProject(project)}
                className="mt-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow hover:opacity-90 transition"
              >
                View More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for More Screenshots */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-y-auto max-h-[90vh] relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
            >
              ✕
            </button>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 mb-6">{selectedProject.feedback}</p>

              {/* Screenshots Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {selectedProject.projectImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${selectedProject.title} Screenshot ${i + 1}`}
                    className="rounded-xl shadow border object-contain w-full h-64 bg-gray-100"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
