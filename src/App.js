
// import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />

      <Testimonials/>
      <Contact/>
      
      {/* Add other sections here */}
    </div>
  );
}

export default App;
