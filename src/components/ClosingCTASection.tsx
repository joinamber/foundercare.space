
import JoinButton from "./JoinButton";
import { Sprout, Star, Heart, SpeechBubble, Sparkle, Blob } from "./Doodles";

const ClosingCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-founder-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-founder-coral via-founder-coral to-founder-terracotta px-6 py-16 md:py-24 text-center shadow-soft-lg">
          {/* Soft background blobs */}
          <Blob className="absolute -top-16 -left-16 w-80 h-80 text-white/10 motion-safe:animate-drift" />
          <Blob className="absolute -bottom-20 -right-12 w-80 h-80 text-founder-ink/10 motion-safe:animate-float-soft" />

          {/* Scattered doodles */}
          <Sprout className="absolute bottom-8 left-8 w-14 h-14 text-white/70 motion-safe:animate-sway origin-bottom" />
          <Star className="absolute top-10 left-16 w-8 h-8 text-white/70 motion-safe:animate-float" />
          <Heart className="absolute top-16 right-16 w-9 h-9 text-white/70 motion-safe:animate-float-soft" />
          <SpeechBubble className="absolute bottom-12 right-10 w-16 h-16 text-white/60 motion-safe:animate-float" />
          <Sparkle className="absolute top-1/2 left-10 w-8 h-8 text-white/80 motion-safe:animate-sparkle-pop" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-white text-4xl md:text-6xl">Find your people.</h2>
            <p className="mt-5 text-lg md:text-xl text-white/90">
              Your next honest conversation is one click away.
            </p>
            <div className="mt-9 flex justify-center">
              <JoinButton className="bg-white text-founder-coral-dark hover:bg-founder-cream hover:text-founder-coral-dark shadow-soft-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTASection;
