
import { Sprout } from "./Doodles";

const Footer = () => {
  return (
    <footer className="bg-founder-cream-deep py-12 border-t border-founder-cream-deep">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="/" className="flex items-center gap-3 font-display font-semibold text-2xl text-founder-ink">
            <img
              src="/lovable-uploads/c1ddf76c-4b02-44af-9bbf-eb13f2fdbc72.png"
              alt=""
              className="h-8 w-8 rounded-full object-cover"
            />
            <span>
              Founder<span className="text-founder-coral">Care</span>
            </span>
          </a>

          <p className="flex items-center gap-2 text-founder-muted font-medium">
            <Sprout className="h-4 w-4 text-founder-sage" />
            A calm garden for the founder&rsquo;s mind
          </p>

          <div className="text-founder-muted">
            &copy; {new Date().getFullYear()} FounderCare. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
