
import { Check } from "lucide-react";

const ProactiveCareSection = () => {
  return (
    <section id="services" className="py-20 bg-founder-beige">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-founder-dark font-display uppercase">
              IT ALL STARTS WITH <br /><span className="gradient-text">PROACTIVE CARE FOR EACH OTHER</span>
            </h2>
            
            <p className="text-founder-gray text-lg mb-8">
              Because a startup requires founders to be 100% all-in on their vision and ambitions, it takes tremendous energy to
              not miss the purpose of motivation in place in our lives. In FounderCare we:
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-center">
                <div className="bg-founder-green/10 p-2 rounded-full mr-4 flex-shrink-0">
                  <Check className="h-6 w-6 text-founder-green" />
                </div>
                <span className="text-lg">Strive to unite passionate and curious founders</span>
              </li>
              <li className="flex items-center">
                <div className="bg-founder-green/10 p-2 rounded-full mr-4 flex-shrink-0">
                  <Check className="h-6 w-6 text-founder-green" />
                </div>
                <span className="text-lg">Support 1:1 chats for remote founders to share strategic difficulties</span>
              </li>
              <li className="flex items-center">
                <div className="bg-founder-green/10 p-2 rounded-full mr-4 flex-shrink-0">
                  <Check className="h-6 w-6 text-founder-green" />
                </div>
                <span className="text-lg">Help you match built-in peer network support networks wherever they are</span>
              </li>
            </ul>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-xl shadow-md hover-lift mb-8">
              <h3 className="text-2xl font-bold mb-4 text-founder-dark font-display">EARLY FOUNDER</h3>
              <p className="text-founder-gray text-lg">We're new to this startup journey</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover-lift mb-8">
              <h3 className="text-2xl font-bold mb-4 text-founder-dark font-display">SOLO FOUNDER</h3>
              <p className="text-founder-gray text-lg">Who are building and navigating on their own</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover-lift mb-8">
              <h3 className="text-2xl font-bold mb-4 text-founder-dark font-display">ANY FOUNDER</h3>
              <p className="text-founder-gray text-lg">Who is looking for support networks</p>
            </div>
            
            <div className="mt-8 overflow-hidden rounded-xl shadow-lg hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Plant" 
                className="w-full h-auto transform transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProactiveCareSection;
