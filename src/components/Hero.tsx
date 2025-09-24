import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Me from "../assets/me.jpg";

const Hero = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-900 to-gray-800 md:pt-0 pt-10 "
    >
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 md:items-center w-full">
        {isMobile && (
          <div className="flex justify-center animate-fade-in mt-8 mb-8">
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
        )}
        <div className="w-full md:w-1/2 lg:w-5/12 md:mb-0 animate-fade-in text-center justify-center md:text-left md:w-full">
          <h1 className="flex flex-col text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-primary">Oskari Pessinen</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg md:mx-0">
            Full-stack software developer building modern and user-friendly web applications.
          </p>
          <div className="flex flex-col">
            <div className="items-center flex flex-col md:flex-row justify-center md:justify-start gap-4 w-full px-5 md:px-0">
              <Button size="lg" className="w-full md:w-auto justify-center" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" className="w-full md:w-auto justify-center" variant='outline' onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </Button>
            </div>

            <div className="inline-flex items-center gap-4 mt-4 mb-8 md:mb-0 mx-auto md:mx-0">
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
        </div>
        
        {!isMobile && (
          <div className="flex justify-center animate-fade-in md:mt-0 mb-8">
          <div className="relative">
            <div className="w-72 h-72 lg:w-80 lg:h-80 bg-gray-800 rounded-full overflow-hidden shadow-xl">
              <img 
                src={Me}
                alt="Oskari Pessinen"
                className="h-full w-full object-cover rounded-full border-4 border-gray-700" 
              />
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
