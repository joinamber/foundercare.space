
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-founder-red font-display font-bold text-2xl flex items-center">
              <img 
                src="/lovable-uploads/c1ddf76c-4b02-44af-9bbf-eb13f2fdbc72.png" 
                alt="FounderCare Logo" 
                className="h-10 mr-3"
              />
              <span className="gradient-text">FOUNDERCARE</span>
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-founder-dark hover:text-founder-red font-medium text-base transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-founder-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Services</a>
            <a href="#about" className="text-founder-dark hover:text-founder-red font-medium text-base transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-founder-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</a>
            <a href="#contact" className="text-founder-dark hover:text-founder-red font-medium text-base transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-founder-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact</a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-founder-dark hover:text-founder-red transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-6">
              <a href="#services" className="text-founder-dark hover:text-founder-red transition-colors font-medium text-lg py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="text-founder-dark hover:text-founder-red transition-colors font-medium text-lg py-2" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="text-founder-dark hover:text-founder-red transition-colors font-medium text-lg py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
