
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container-section">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Oskari Pessinen</h2>
            <p className="text-gray-400">
              Full-stack software developer
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Oskari Pessinen.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a onClick={() => window.open('https://github.com/oskaripessinen')} className="cursor-pointer text-gray-400 hover:text-white transition-colors">
              Github
            </a>
            <a onClick={() => window.open('https://www.linkedin.com/in/oskari-pessinen-6114582a6/')} className="cursor-pointer text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
