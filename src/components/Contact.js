import { motion } from "framer-motion";
import { Send, Linkedin, Github, Twitter, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-20 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Got a project idea, collaboration request, or just want to say hello? 
          Fill out the form below and I’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Form Section */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-12 max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-100"
      >
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-700"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-700"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-700 resize-none"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-transform transform hover:scale-105 font-medium"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </div>
      </motion.form>

      {/* Footer Section */}
      <footer className="mt-16 border-t border-gray-200 pt-8 text-center">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-md border hover:scale-110 hover:text-blue-600 transition-transform"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-md border hover:scale-110 hover:text-gray-800 transition-transform"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-md border hover:scale-110 hover:text-blue-400 transition-transform"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="p-3 rounded-full bg-white shadow-md border hover:scale-110 hover:text-red-500 transition-transform"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Developed by  {" "}
          <span className="font-semibold text-gray-700">Ubaida Gul </span>. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
