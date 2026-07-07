
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import JoinButton from "./JoinButton";

const NAV_LINKS = [
  { href: "#services", label: "How it works" },
  { href: "#about", label: "Who we are" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-founder-cream/90 backdrop-blur-md shadow-soft-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="flex items-center gap-3 font-display font-semibold text-2xl text-founder-ink"
          >
            <img
              src="/lovable-uploads/c1ddf76c-4b02-44af-9bbf-eb13f2fdbc72.png"
              alt=""
              className="h-9 w-9 rounded-full object-cover"
            />
            <span>
              Founder<span className="text-founder-coral">Care</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-founder-ink/80 hover:text-founder-coral font-medium text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-founder-coral after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.label}
              </a>
            ))}
            <JoinButton className="px-5 py-2.5 text-sm" />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-founder-ink hover:text-founder-coral"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-founder-cream shadow-soft animate-fade-in">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-founder-ink hover:text-founder-coral font-medium text-lg py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <JoinButton
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
