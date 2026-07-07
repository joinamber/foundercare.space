
import FounderCard from "./FounderCard";
import { WaveDivider, SpeechBubble, Heart, Sprout, Star } from "./Doodles";

const CARDS = [
  {
    icon: SpeechBubble,
    accentBg: "bg-founder-coral-soft",
    accentText: "text-founder-coral",
    title: "1:1 chats with founders",
    body:
      "Get matched with a peer for regular, judgment-free conversations — a steady space to think out loud and find your footing.",
  },
  {
    icon: Heart,
    accentBg: "bg-founder-sage-soft",
    accentText: "text-founder-sage",
    title: "Build your support network",
    body:
      "You're not alone. We help you build a circle of founders you can actually reach: trusted, informed, and genuinely in your corner.",
  },
  {
    icon: Sprout,
    accentBg: "bg-founder-gold-soft",
    accentText: "text-founder-gold",
    title: "Early founder kit",
    body:
      "Everything you need for your first team check-ins and 1:1s, plus early, practical guidance to keep your business — and your head — in a good place.",
  },
];

const ChatDifferenceSection = () => {
  return (
    <section className="relative bg-founder-cream-deep">
      <WaveDivider fill="#F5F1E8" className="-mt-px" />

      <div className="container mx-auto px-4 md:px-8 pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="eyebrow mb-4">
            <Star className="h-5 w-5 text-founder-gold" />
            Why it matters
          </span>
          <h2 className="mb-6 text-founder-ink">
            A single honest chat can change your whole week
          </h2>
          <p className="text-lg text-founder-muted leading-relaxed">
            We&rsquo;ve learned this the hard way — one real conversation with someone who gets it
            can turn a rough day around. When founders talk openly, we think more clearly, learn
            from each other, and stumble into opportunities none of us would&rsquo;ve found alone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CARDS.map(({ icon: Icon, accentBg, accentText, title, body }) => (
            <FounderCard key={title} className="flex flex-col">
              <span
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${accentBg} mb-6`}
              >
                <Icon className={`h-8 w-8 ${accentText}`} />
              </span>
              <h3 className="text-2xl mb-3 text-founder-ink">{title}</h3>
              <p className="text-founder-muted text-lg leading-relaxed">{body}</p>
            </FounderCard>
          ))}
        </div>
      </div>

      <WaveDivider fill="#FCFBF8" flip className="-mb-px" />
    </section>
  );
};

export default ChatDifferenceSection;
