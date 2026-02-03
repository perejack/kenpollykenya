import { Button } from "@/components/ui/button";

const CompanyStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With nearly 50 years of experience, Kenpoly Manufacturers Limited is the market leader, 
              serving Kenya and East Africa with quality household and industrial plastics.
            </p>
            <Button className="bg-secondary hover:bg-secondary-light rounded-xl px-8 py-6 text-lg">
              LEARN MORE →
            </Button>
          </div>

          {/* Company Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden h-96 bg-muted">
              <img
                src="/images/story/our-story.jpg.webp"
                alt="Kenpoly - Our Story"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;