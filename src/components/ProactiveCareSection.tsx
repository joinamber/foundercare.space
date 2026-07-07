
import { Check } from "lucide-react";
import FounderCard from "./FounderCard";
import JoinButton from "./JoinButton";
import { Sprout, Heart, Star, Arcs } from "./Doodles";

const CHECKLIST = [
  "Bring passionate, curious founders together",
  "Make space for honest 1:1 chats, wherever you're building from",
  "Match you with a peer network that fits where you are right now",
];

const AUDIENCE = [
  {
    icon: Sprout,
    accentBg: "bg-founder-sage-soft",
    accentText: "text-founder-sage",
    title: "Early founder",
    body: "Just getting started on the journey.",
  },
  {
    icon: Star,
    accentBg: "bg-founder-gold-soft",
    accentText: "text-founder-gold",
    title: "Solo founder",
    body: "Building and figuring it out on your own.",
  },
  {
    icon: Heart,
    accentBg: "bg-founder-coral-soft",
    accentText: "text-founder-coral",
    title: "Any founder",
    body: "Anyone who could use good people in their corner.",
  },
];

const ProactiveCareSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-founder-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow mb-4">
              <Arcs className="h-5 w-5 text-founder-terracotta" />
              How it works
            </span>
            <h2 className="mb-6 text-founder-ink">
              It all starts with looking out for each other
            </h2>
            <p className="text-lg text-founder-muted leading-relaxed mb-8">
              Going all-in on a vision takes enormous energy, and it&rsquo;s easy to lose sight of
              why you started. FounderCare exists to keep that from happening. Here&rsquo;s what we
              do:
            </p>

            <ul className="space-y-5">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-founder-sage-soft">
                    <Check className="h-5 w-5 text-founder-sage" strokeWidth={3} />
                  </span>
                  <span className="text-lg text-founder-ink leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <JoinButton />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-founder-muted">
              Who it&rsquo;s for
            </p>
            {AUDIENCE.map(({ icon: Icon, accentBg, accentText, title, body }) => (
              <FounderCard key={title} className="flex items-center gap-5">
                <span
                  className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl ${accentBg}`}
                >
                  <Icon className={`h-7 w-7 ${accentText}`} />
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl text-founder-ink mb-1">{title}</h3>
                  <p className="text-founder-muted text-lg">{body}</p>
                </div>
              </FounderCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProactiveCareSection;
