
const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-founder-red font-display font-bold text-2xl flex items-center">
              <img 
                src="/lovable-uploads/c1ddf76c-4b02-44af-9bbf-eb13f2fdbc72.png" 
                alt="FounderCare Logo" 
                className="h-8 mr-3"
              />
              <span className="gradient-text">FOUNDERCARE</span>
            </a>
          </div>
          
          <div className="text-founder-gray font-medium">
            &copy; {new Date().getFullYear()} FounderCare. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
