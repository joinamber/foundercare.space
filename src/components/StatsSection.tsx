
import { WaveDivider, SpeechBubble, Heart, Sprout } from "./Doodles";

const STATS = [
  {
    icon: Sprout,
    accentBg: "bg-founder-sage-soft",
    accentText: "text-founder-sage",
    value: "100+",
    label: "Founders in our network",
  },
  {
    icon: SpeechBubble,
    accentBg: "bg-founder-coral-soft",
    accentText: "text-founder-coral",
    value: "20+",
    label: "One-on-one conversations",
  },
  {
    icon: Heart,
    accentBg: "bg-founder-plum-soft",
    accentText: "text-founder-plum",
    value: "100%",
    label: "Made with care",
  },
];

const StatsSection = () => {
  return (
    <section className="relative bg-founder-cream-deep">
      <WaveDivider fill="#F5F1E8" className="-mt-px" />

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {STATS.map(({ icon: Icon, accentBg, accentText, value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div
                className={`h-20 w-20 rounded-full ${accentBg} flex items-center justify-center motion-safe:animate-float-soft`}
              >
                <Icon className={`h-10 w-10 ${accentText}`} />
              </div>
              <div className="mt-5 font-display font-semibold text-4xl md:text-5xl text-founder-ink">
                {value}
              </div>
              <p className="mt-2 text-lg text-founder-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider fill="#FCFBF8" flip className="-mb-px" />
    </section>
  );
};

export default StatsSection;
