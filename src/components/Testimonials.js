import { useState } from "react";
import { motion } from "framer-motion";

import Whatsapp from "./Whatsapp.jpeg";
import Ecommerce from "./Ecommerce.jpeg";
import SocialApp1 from "./SocialApp1.jpeg";

export default function Testimonials() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Project: Eid Promotional Poster - Beauty Salon",
      feedback:
        "Designed a luxury-themed promotional poster for Isra Alizy Beauty Salon Eid campaign. The design uses a black and gold color palette to convey elegance and premium service. Layout is clean and service-focused, with a clear list of services and a strong call-to-action.",
      projectImages: [Whatsapp, Whatsapp, Whatsapp],
    },
    {
      title: "Project: Executive Brand Portrait Design",
      feedback:
        "Designed a premium personal branding poster for a Founder & CEO with elegant typography, warm office lighting, and a luxury corporate feel.",
      projectImages: [Ecommerce, Ecommerce, Ecommerce],
    },
    {
      title: "Food Poster - Special Beef Burger",
      feedback:
        "Designed a bold promotional burger poster using black, yellow, and grey colors with modern typography and a strong visual hierarchy.",
      projectImages: [SocialApp1, SocialApp1, SocialApp1],
    },
  ];

  return (
    <>
      <section
        id="testimonials"
        className="px-6 md:px-20 py-20 bg-gray-50"
      >
        {/* Heading */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg font-medium uppercase tracking-[3px]"
          >
            My Portfolio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Creative Design Showcase
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-5 text-gray-600 max-w-3xl mx-auto"
          >
            Explore a collection of my professional graphic design work,
            including posters, branding, social media posts and marketing
            materials.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={project.projectImages[0]}
                alt={project.title}
                className="w-full h-60 object-contain bg-gray-100"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {project.feedback}
                </p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
                >
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl max-w-5xl w-full p-6 relative overflow-y-auto max-h-[90vh]">

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 rounded-full text-xl"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold mb-4">
              {selectedProject.title}
            </h2>

            <p className="text-gray-700 mb-8">
              {selectedProject.feedback}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {selectedProject.projectImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="rounded-xl shadow-lg w-full object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}