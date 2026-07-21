



import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      title: "Logo Design",
      desc: "Creating unique, memorable, and modern logos that establish strong brand identities with creativity, simplicity, and professionalism.",
    },
    {
      title: "Brand Identity Design",
      desc: "Designing complete brand identities including logos, color palettes, typography, business cards, and brand guidelines.",
    },
    {
      title: "Adobe Photoshop & Illustrator",
      desc: "Professional experience in Adobe Photoshop and Illustrator for creating logos, banners, posters, social media graphics, vector artwork, and print-ready designs.",
    },
    {
      title: "Social Media Design",
      desc: "Designing eye-catching social media posts, advertisements, flyers, brochures, banners, and marketing materials that boost brand engagement.",
    },
    {
      title: "UI/UX Design",
      desc: "Creating modern, user-friendly, and visually appealing website and mobile app interfaces with a focus on user experience.",
    },
    {
      title: "React.js Development",
      desc: "Building fast, scalable, and responsive web applications using React.js and modern frontend technologies.",
    },
   
    {
      title: "Tailwind CSS",
      desc: "Building beautiful, responsive, and highly customizable user interfaces using the utility-first Tailwind CSS framework.",
    },
  ];

  return (
    <section id="skills" className="px-6 md:px-20 py-20 bg-white">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-gray-500 text-base md:text-lg font-medium tracking-wide uppercase">
          My Skills
        </p>

        <h1
          className="text-3xl md:text-4xl font-extrabold mt-2
          bg-gradient-to-r from-blue-600 to-indigo-600
          bg-clip-text text-transparent"
        >
          My Expertise
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          I specialize in Graphic Design while also building modern web and
          mobile applications using the latest frontend technologies.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}


            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-center text-gray-900 mb-4">
              {skill.title}
            </h2>

            <p className="text-gray-600 text-center leading-7">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
