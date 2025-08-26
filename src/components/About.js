import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react"; // icons for buttons
import Mansoor from "./Mansoor.jpg"
export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center gap-12 md:gap-20 px-6 md:px-20 py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50"
    >
      {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 flex justify-center"
      >
        <div className="relative">
          {/* Decorative Blur Circle */}
          <div className="absolute -top-8 -left-8 w-64 h-64 md:w-80 md:h-80 bg-blue-200/40 rounded-full blur-3xl -z-10"></div>

          <img
            src={Mansoor}
            alt="About Me"
            className="w-64 md:w-[360px] lg:w-[400px] rounded-2xl shadow-xl border-4 border-white object-cover m-8"
          />
        </div>
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 text-center md:text-left"
      >
        {/* Small Heading */}
        <p className="text-blue-600 font-semibold tracking-wide uppercase mb-2 text-sm md:text-base">
          About
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
          About Me
        </h1>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4 font-[Inter]">
          I am a Motivated individual who loves learning new
          skills. With a strong interest in Wesbite Development and  and Artificial Intelligence, I enjoy
          solving problems, working independently, and always strive to grow
          both personally and professionally.
        </p>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-[Inter]">
          I enjoy exploring new ideas and turning them into practical solutions.
          My goal is to keep improving myself and make a positive impact through
        Web App Development.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
          {/* Download CV Button */}
          <a
            href="/Ubaida_gul_Cv.pdf" // <- apna CV file yahan dalna (public folder ma)
            download
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-transform transform hover:scale-105 font-medium text-sm sm:text-base"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-transform transform hover:scale-105 font-medium text-sm sm:text-base"
          >
            <Mail className="w-5 h-5" />
            Let’s Connect
          </a>
        </div>
      </motion.div>
    </section>
  );
}
