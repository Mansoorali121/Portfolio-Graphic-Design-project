// export default function Skills() {
//   const skills = [
//     {
//       title: "React Native",
//       desc: "Cross-platform mobile app development using React Native, delivering iOS & Android apps with native-like performance.",
//     },
//     {
//       title: "Mobile App Optimization",
//       desc: "Optimizing performance through code efficiency, image compression, and best practices for faster loading times.",
//     },
//     {
//       title: "Tailwind CSS",
//       desc: "Utility-first CSS framework for building sleek, responsive, and highly customizable user interfaces quickly.",
//     },
//     {
//       title: "UI/UX Enhancement",
//       desc: "Designing intuitive and user-friendly interfaces that make navigating and interacting with websites effortless.",
//     },
//     {
//       title: "React.js Development",
//       desc: "Building scalable, fast, and maintainable single-page applications using React.js and modern libraries.",
//     },
//     {
//       title: "Responsive Web Design",
//       desc: "Websites that look great and function smoothly on all devices, whether mobile, tablet, or desktop. Focused on seamless user experience across screen sizes.",
//     },
//     {
//       title: "HTML & CSS",
//       desc: "Clean, semantic, and responsive layouts using HTML5 & CSS3 with best practices for modern web development.",
//     },
//     {
//       title: "JavaScript",
//       desc: "Strong command over modern JavaScript (ES6+). Building interactive, dynamic, and scalable web solutions.",
//     },
//   ];

//   return (
//     <section id="skills" className="px-6 md:px-20 py-20 bg-white">
//      {/* Section Heading */}
// <div className="text-center mb-12">
//   <p className="text-gray-500 text-base md:text-lg font-medium">
//     My Skills
//   </p>
//   <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
//     My Expertise
//   </h1>
//   {/* <p className="mt-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
//     A showcase of my technical expertise and development capabilities.
//   </p> */}
// </div>

//       {/* Cards Grid */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {skills.map((skill, i) => (
//           <div
//             key={i}
//             className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md
//                        hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer
//                        border-2 border-transparent hover:border-blue-500 hover:ring-2 hover:ring-blue-300"
//           >
//             <h2 className="text-lg md:text-xl font-semibold mb-3 text-center text-gray-900 tracking-wide">
//               {skill.title}
//             </h2>
//             <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed font-light">
//               {skill.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
   
    {
      title: "Web App Optimization",
      desc: "Optimizing performance through code efficiency, image compression, and best practices for faster loading times.",
    },
    {
      title: "Tailwind CSS",
      desc: "Utility-first CSS framework for building sleek, responsive, and highly customizable user interfaces quickly.",
    },
    {
      title: "UI/UX Enhancement",
      desc: "Designing intuitive and user-friendly interfaces that make navigating and interacting with websites effortless.",
    },
    {
      title: "React.js Development",
      desc: "Building scalable, fast, and maintainable single-page applications using React.js and modern libraries.",
    },
    {
      title: "Responsive Web Design",
      desc: "Websites that look great and function smoothly on all devices, whether mobile, tablet, or desktop. Focused on seamless user experience across screen sizes.",
    },
    {
      title: "Python",
      desc: "Proficient in Python for web apps, automation, and data-driven solutions, ensuring clean and efficient code practices.",
    },

    {
      title: "JavaScript",
      desc: "Strong command over modern JavaScript (ES6+). Building interactive, dynamic, and scalable web solutions.",
    },
     {
      title: "React Native",
      desc: "Cross-platform mobile app development using React Native, delivering iOS & Android apps with native-like performance.",
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
        <h1 className="text-3xl md:text-4xl font-extrabold mt-2 
               bg-gradient-to-r from-blue-600 to-indigo-600 
               bg-clip-text text-transparent">
  My Expertise
</h1>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md 
                       hover:shadow-xl transition-all duration-300 cursor-pointer 
                       border-2 border-transparent hover:border-blue-500 hover:ring-2 hover:ring-blue-300"
          >
            <h2 className="text-lg md:text-xl font-semibold mb-3 text-center text-gray-900 tracking-wide">
              {skill.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed font-light">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
