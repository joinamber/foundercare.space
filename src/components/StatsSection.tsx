
const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-around text-center">
          <div className="w-1/3 mb-8">
            <div className="flex justify-center mb-4">
              <div className="h-20 w-20 bg-founder-accent/10 rounded-full flex items-center justify-center animate-pulse-subtle">
                <span className="text-4xl">😊</span>
              </div>
            </div>
            <div className="text-4xl font-bold text-founder-dark mb-3 font-display gradient-text">100+</div>
            <p className="text-founder-gray text-lg">Founders in our network</p>
          </div>
          
          <div className="w-1/3 mb-8">
            <div className="flex justify-center mb-4">
              <div className="h-20 w-20 bg-founder-red/10 rounded-full flex items-center justify-center animate-pulse-subtle">
                <span className="text-4xl">💬</span>
              </div>
            </div>
            <div className="text-4xl font-bold text-founder-dark mb-3 font-display gradient-text">20+</div>
            <p className="text-founder-gray text-lg">One-on-one conversations</p>
          </div>
          
          <div className="w-1/3 mb-8">
            <div className="flex justify-center mb-4">
              <div className="h-20 w-20 bg-founder-green/10 rounded-full flex items-center justify-center animate-pulse-subtle">
                <span className="text-4xl">❤️</span>
              </div>
            </div>
            <div className="text-4xl font-bold text-founder-dark mb-3 font-display gradient-text">100%</div>
            <p className="text-founder-gray text-lg">Made with care</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
