
import { SpeechBubble, Heart, Sprout } from "./Doodles";

const REASSURANCES = [
  { icon: SpeechBubble, color: "text-founder-coral", label: "Honest 1:1 chats" },
  { icon: Heart, color: "text-founder-plum", label: "A network that has your back" },
  { icon: Sprout, color: "text-founder-sage", label: "A little more calm on the hard days" },
];

const HeroContentSection = () => {
  return (
    <section className="bg-founder-cream pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="founder-card px-6 py-6 md:px-10 md:py-7">
          <div className="grid gap-6 sm:grid-cols-3">
            {REASSURANCES.map(({ icon: Icon, color, label }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-founder-cream-deep/60">
                  <Icon className={`h-6 w-6 ${color}`} />
                </span>
                <span className="text-base font-medium text-founder-ink leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContentSection;
