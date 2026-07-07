
import JoinButton from "./JoinButton";
import { Sprout, Star, Heart, SpeechBubble, Blob, Arcs } from "./Doodles";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-founder-cream overflow-hidden">
      <Blob className="absolute top-10 -right-24 w-[360px] h-[360px] text-founder-plum-soft/50 motion-safe:animate-float-soft" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Illustrated growth panel replacing the old stock photo */}
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-square max-w-md mx-auto rounded-blob bg-gradient-to-br from-founder-sage-soft via-white to-founder-coral-soft/70 shadow-soft border border-white/60">
              <Sprout className="absolute inset-0 m-auto w-40 h-40 text-founder-sage motion-safe:animate-sway origin-bottom" />
              <Star className="absolute top-10 right-12 w-9 h-9 text-founder-gold motion-safe:animate-float" />
              <Heart className="absolute bottom-14 left-10 w-9 h-9 text-founder-coral motion-safe:animate-float-soft" />
              <SpeechBubble className="absolute top-16 left-8 w-14 h-14 text-founder-plum motion-safe:animate-float" />
              <Arcs className="absolute bottom-10 right-12 w-12 h-12 text-founder-terracotta motion-safe:animate-sparkle-pop" />
            </div>
          </div>

          <div>
            <span className="eyebrow mb-4">
              <Sprout className="h-5 w-5 text-founder-sage" />
              Who we are
            </span>
            <h2 className="mb-6 text-founder-ink">
              For the founders carrying it all
            </h2>
            <p className="text-lg text-founder-muted leading-relaxed">
              Building a company asks everything of you — your focus, your energy, your whole
              identity. It&rsquo;s exhilarating, and it can be quietly lonely. FounderCare gives
              you a small circle of people who understand exactly what that feels like: peers to
              think out loud with, celebrate the wins with, and lean on when the week gets heavy.
              No one should navigate the hard parts alone.
            </p>
            <div className="mt-9">
              <JoinButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
