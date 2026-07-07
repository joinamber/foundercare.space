
import { MessageSquare, UsersRound, PackagePlus } from "lucide-react";

const ChatDifferenceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-founder-dark font-display gradient-text">
            A regular 1:1 chat can make a difference
          </h2>
          <p className="text-founder-gray text-lg">
            What we learned from past experiences: a quick conversation with a peer listener makes the day brighter, better. We can save quality of thought and knowledge, we also learn from each other. We can create unique opportunities when we grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-xl shadow-md card-hover">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 bg-founder-accent/10 rounded-xl flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-founder-accent" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center font-display">1:1 Chat with Founders</h3>
            <p className="text-founder-gray text-center text-lg">
              Create targeted 1:1 chats among founders to help them make connections and learn from the thought and peace of mind.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md card-hover">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 bg-founder-green/10 rounded-xl flex items-center justify-center">
                <UsersRound className="h-8 w-8 text-founder-green" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center font-display">Build Support Networks</h3>
            <p className="text-founder-gray text-center text-lg">
              You are not alone. Building support networks for all, or Peer, take informed and well-built founder networks.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md card-hover">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 bg-founder-red/10 rounded-xl flex items-center justify-center">
                <PackagePlus className="h-8 w-8 text-founder-red" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center font-display">Early Founder Kit</h3>
            <p className="text-founder-gray text-center text-lg">
              Everything for Teai & 1v1 meetings that make a quick check-up with FounderCare to gain early financial advice to keep you sane.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDifferenceSection;
