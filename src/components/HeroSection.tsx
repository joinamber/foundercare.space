
const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Hero Background Image with Overlay Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/cdb8cf67-dc46-4d05-80c5-55a96ecd8a7e.png"
          alt="Person with watermelon smile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 md:px-8 pt-16">
          <div className="max-w-2xl mx-auto mt-24 md:mt-0">
            {/* Empty hero section - content moved to HeroContentSection */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
