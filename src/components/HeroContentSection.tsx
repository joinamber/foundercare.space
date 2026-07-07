
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const HeroContentSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg hover-lift">
          <h2 className="text-2xl md:text-4xl font-bold mb-5 text-founder-dark font-display gradient-text">
            YOU NEED A SUPPORT NETWORK WHEN THINGS GET TOUGH!
          </h2>
          <p className="text-founder-gray text-lg mb-8">
            Starting up can be a real challenge. That's why we're here to help you succeed. Join our network of
            FounderCare and create support networks access. Get the backup you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-founder-gradient-start to-founder-gradient-end hover:shadow-glow text-white font-medium text-base"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              className="bg-founder-dark hover:bg-gray-800 hover:shadow-md text-white font-medium text-base"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Our Network
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContentSection;
