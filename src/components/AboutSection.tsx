
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-founder-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/4">
            <div className="bg-white p-4 rounded-xl shadow-md hover-lift overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                alt="Plant growing"
                className="w-full h-auto rounded-lg transform transition-transform hover:scale-105"
              />
            </div>
          </div>
          
          <div className="md:w-3/4">
            <h2 className="text-lg uppercase tracking-wider text-founder-accent font-semibold mb-1 animate-fade-in">WHO ARE WE?</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-founder-dark gradient-text">
              Startup founders who are changing the world
            </h3>
            <div className="space-y-5 text-lg text-founder-gray">
              <p>
                Building a startup is a challenging journey. It involves discovering exceptional qualities and refining them until founders create businesses in areas of expertise and new ideas. 
              </p>
              <p>
                With our 1-on-1 support network, it's critical for any founder to have friends, a community of people you can reach out to when things get difficult & the correct impactful advice.
              </p>
              <div className="pt-6">
                <Button 
                  className="bg-gradient-to-r from-founder-gradient-start to-founder-gradient-end hover:shadow-glow text-white font-medium py-6 px-8 rounded-lg text-base"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Our Network
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
