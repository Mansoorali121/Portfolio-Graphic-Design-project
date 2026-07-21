import { useState } from "react";
import { motion } from "framer-motion";
import Whatsapp from "./Whatsapp.jpeg";
import Ecommerce from "./Ecommerce.jpeg";
import SocialApp1 from "./SocialApp1.jpeg"



export default function Testimonials() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Project: Eid Promotional Poster - Beauty Salon  ",
      feedback:
        " Designed a luxury-themed promotional poster for Isra Alizy Beauty Salon  Eid campaign. The design uses a black and gold color palette to convey elegance and premium service. Layout is clean and service-focused, with a clear list of 10 services and a 50% OFF Eid Packages offer highlighted for urgency. Circular image frames were used to showcase key services like Facial, Hair Styling, Threading, and Makeup, making the post visually engaging. Contact and location details were placed prominently with a  Book Your Appointment CTA to drive conversions. ", 

      projectImages: [Whatsapp, Whatsapp, Whatsapp], // multiple screenshots
    },
    {
      title: "Project: Executive Brand Portrait Design",
      feedback:
        "Designed a premium personal branding poster for a Founder & CEO. The concept was to project leadership, trust, and vision through a warm corporate office environment with soft golden lighting. The layout highlights the individual with a confident pose, paired with a laptop displaying data analytics to reinforce the Growing With Data message Typography in elegant gold script with clean sans-serif subtext was used to maintain a luxury, executive feel. The tagline Leading With Vision Building With Strategy Growing With Data  was integrated to position the brand as strategic and data-driven.  ",
      projectImages: [Ecommerce, Ecommerce, Ecommerce],
    },
    {
      title: "Food Poster - Special Beef Burger",
      feedback:
        "Designed a bold and appetizing promotional poster for a Special Beef Burger. The design uses a high-contrast black, yellow, and grey color palette to grab attention, with a dripping cheese graphic for a fun food-related theme. Key elements like price, contact number, and location were highlighted using a starburst and icons to ensure clear CTA. The focus was on product photography, typography hierarchy, and making the burger the hero of the design to drive sales.",
      projectImages: [SocialApp1, SocialApp1, SocialApp1],
    },
  ];

  return (
    <section id="testimonials" className="px-6 md:px-20 py-20 bg-gray-50">
  {/* Section Heading */}
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
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
    >
      Creative Design Showcase
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-5 text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
    >
      Explore a collection of my professional graphic design projects,
      including <span className="font-semibold text-blue-600">Logo Design</span>,
      <span className="font-semibold text-blue-600"> Brand Identity</span>,
      <span className="font-semibold text-blue-600"> Social Media Posts</span>,
      <span className="font-semibold text-blue-600"> Promotional Posters</span>,
      <span className="font-semibold text-blue-600"> Marketing Materials</span>,
      and creative visual branding solutions. Every design is carefully
      crafted to communicate ideas, strengthen brand identity, and leave a
      lasting impression.
    </motion.p>
  </div>

  {/* Projects Grid */}
  <div className="grid md:grid-cols-3 gap-10">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
      >
        {/* Project Image */}
        <div className="w-full h-60 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={project.projectImages[0]}
            alt={project.title}
            className="h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-grow text-left">
          <h3 className="text-xl font-bold text-gray-800">
            {project.title}
          </h3>

          <p className="text-gray-600 mt-3 flex-grow">
            {project.feedback}
          </p>

          <button
            onClick={() => setSelectedProject(project)}
            className="mt-6 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View Project
          </button>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Modal remains exactly the same */}
</section>
  );
}
