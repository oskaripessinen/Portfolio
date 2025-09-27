import { useState, useEffect } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Menu, X } from "lucide-react";
import { Home, User, Folder, Mail } from "lucide-react"
 
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useReveal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", icon : <Home className="h-4 w-4" /> },
    { name: "About Me", href: "#about", icon : <User className="h-4 w-4" /> },
    { name: "Projects", href: "#projects", icon : <Folder className="h-4 w-4" /> },
    { name: "Contact", href: "#contact", icon : <Mail className="h-4 w-4" /> },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-4"
      }`}
    >
      <div className="animate-fade-in container mx-auto px-4 flex items-center justify-between py-0 w-[95%] md:w-full ">
        <div className="flex flex-col items-start">
          <a href="#hero" className="text-2xl font-bold text-primary">
            Oskari Pessinen
          </a>
          <span className="text-gray-300 font-semibold text-sm tracking-wide px-1 -mt-1">
            Software Engineer
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-300 hover:text-primary transition-colors flex-row flex items-center gap-2"
            >
              {link.icon}
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 shadow-lg absolute right-0 w-48 rounded-lg mr-2">
          <div className="py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-primary transition-colors flex flex-row items-center gap-2"
              >
                {link.icon}
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
