
import JoinButton from "./JoinButton";
import { Sprout, Sparkle, Star, SpeechBubble, Heart, Blob, Squiggle } from "./Doodles";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-founder-cream pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Soft organic background blobs, gently drifting. */}
      <Blob className="absolute -top-24 -left-24 w-[420px] h-[420px] text-founder-coral-soft/70 motion-safe:animate-drift" />
      <Blob className="absolute top-40 -right-28 w-[380px] h-[380px] text-founder-sage-soft/70 motion-safe:animate-float-soft" />
      <Blob className="absolute -bottom-32 left-1/4 w-[300px] h-[300px] text-founder-gold-soft/60 motion-safe:animate-drift" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
          {/* Left: headline + CTA above the fold */}
          <div className="relative z-10 max-w-xl">
            <span className="eyebrow mb-5">
              <Sprout className="h-5 w-5 text-founder-sage" />
              A calm garden for the founder&rsquo;s mind
            </span>

            <h1 className="text-founder-ink">
              You&rsquo;re building something{" "}
              <span className="relative inline-block">
                <span className="text-founder-coral">wild.</span>
                <Squiggle className="absolute -bottom-2 left-0 w-full text-founder-gold" />
              </span>{" "}
              Don&rsquo;t build it alone.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-founder-muted leading-relaxed">
              FounderCare pairs you with peers who actually get the founder life — honest
              1:1 chats, a network that has your back, and a little more calm on the hard
              days.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <JoinButton />
              <JoinButton
                variant="ghost"
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See how it works
              </JoinButton>
            </div>
          </div>

          {/* Right: hand-drawn hero art with a balanced floating support-network card */}
          <div className="relative z-10 h-[360px] sm:h-[420px] lg:h-[460px]">
            {/* Big organic garden panel */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-founder-coral-soft via-white to-founder-sage-soft/60 shadow-soft border border-white/60" />

            {/* Drifting doodles scattered across the panel */}
            <Sprout className="absolute bottom-8 left-8 w-16 h-16 text-founder-sage motion-safe:animate-sway origin-bottom" />
            <Sprout className="absolute bottom-6 left-24 w-10 h-10 text-founder-terracotta motion-safe:animate-sway origin-bottom [animation-delay:1.5s]" />
            <Star className="absolute top-10 left-10 w-8 h-8 text-founder-gold motion-safe:animate-float" />
            <Sparkle className="absolute top-16 right-16 w-10 h-10 text-founder-coral motion-safe:animate-sparkle-pop" />
            <Heart className="absolute top-24 left-1/2 w-9 h-9 text-founder-plum motion-safe:animate-float-soft" />
            <SpeechBubble className="absolute top-8 right-8 w-20 h-20 text-founder-sage motion-safe:animate-float" />

            {/* Balanced floating "support network" card */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 lg:-left-10 w-[16rem] founder-card p-5 motion-safe:animate-float-soft">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    "bg-founder-coral",
                    "bg-founder-sage",
                    "bg-founder-gold",
                    "bg-founder-plum",
                  ].map((c, i) => (
                    <span
                      key={i}
                      className={`h-9 w-9 rounded-full border-2 border-white ${c}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-founder-ink leading-tight">
                  Your circle,
                  <br />
                  in your corner
                </span>
              </div>
              <p className="mt-3 text-sm text-founder-muted">
                Peers who get it — a message away.
              </p>
            </div>

            {/* A second small accent card for balance on the opposite side */}
            <div className="absolute -top-4 right-2 lg:-right-6 founder-card px-4 py-3 flex items-center gap-2 motion-safe:animate-float">
              <SpeechBubble className="h-6 w-6 text-founder-coral" />
              <span className="text-sm font-semibold text-founder-ink">Honest 1:1 chats</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
