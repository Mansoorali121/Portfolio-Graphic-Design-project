import { motion } from "framer-motion";
import Mypic from "./Mypic.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-6 sm:px-10 lg:px-20 py-24"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="text-gray-500 text-lg mb-2">
            Hi, I am
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Isra Vistro
          </h1>

          <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600 leading-relaxed">
            Graphic Designer <br className="sm:hidden" />
            Professional Social Media Designer
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
            Detail-oriented Graphic Designer with experience in designing
            premium social media posts, promotional materials, branding, and
            luxury visual identities. Skilled in Canva, Adobe Photoshop,
            typography, color theory, and layout design to create impactful
            visuals that strengthen brands and engage audiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a href="#contact">
              <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300">
                Get in Touch
              </button>
            </a>

            <a href="#testimonials">
              <button className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
                View Portfolio
              </button>
            </a>
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative flex items-center justify-center">

            {/* Outer Rotating Circle */}
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px] rounded-full border-[5px] border-blue-500 border-dashed animate-spin"></div>

            {/* Middle Circle */}
            <div className="absolute w-56 h-56 sm:w-64 sm:h-64 lg:w-[370px] lg:h-[370px] rounded-full bg-blue-100 opacity-40 blur-2xl"></div>

            {/* Image */}
            <img
              src={Mypic}
              alt="Isra Vistro"
              className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-[330px] lg:h-[330px] rounded-full object-cover border-8 border-white shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}