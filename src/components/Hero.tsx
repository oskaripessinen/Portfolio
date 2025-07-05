import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Me from "../assets/me.jpg";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-900 to-gray-800"
    >
      {/* Improved container with better spacing */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:items-center">
        {/* Left column with text content */}
        <div className="w-full md:w-1/2 lg:w-5/12 mb-12 md:mb-0 animate-fade-in text-center md:text-left">
          <h1 className="flex flex-col text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-primary">Oskari Pessinen</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            Full-stack software developer building modern and user-friendly web applications.
          </p>
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button size="lg" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
          </div>
          {/* Social media icons */}
          <div className="flex mt-8 space-x-4 justify-center md:justify-start">
            <Button onClick={() => window.open('https://github.com/oskaripessinen')} variant="ghost" size="icon" className="rounded-full text-gray-300 hover:text-white hover:bg-gray-800" aria-label="Github">
              <Github className="h-5 w-5" />
            </Button>
            <Button onClick={() => window.open('https://www.linkedin.com/in/oskari-pessinen-6114582a6/')} variant="ghost" size="icon" className="rounded-full text-gray-300 hover:text-white hover:bg-gray-800" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button onClick={() => window.open('mailto:oskari.pessinen@gmail.com')} variant="ghost" size="icon" className="rounded-full text-gray-300 hover:text-white hover:bg-gray-800" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Right column with image */}
        <div className="flex justify-center animate-fade-in md:mt-0 mb-8">
          <div className="relative">
            <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gray-800 rounded-full overflow-hidden shadow-xl">
              <img 
                src={Me}
                alt="Oskari Pessinen"
                className="h-full w-full object-cover rounded-full border-4 border-gray-700" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
