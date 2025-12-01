import aboutImage from '../../public/about-space.jpg';

const About = () => {
  return (
    <section id="about" className="py-32 pb-8 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
                About Us
              </h2>
              <div className="w-20 h-1 bg-accent" />
            </div>

            <p className="font-body text-lg text-justify text-muted-foreground leading-relaxed">
              We believe architecture is more than buildings—it's the art of crafting environments that inspire, comfort, and endure. Every project begins with listening, understanding the unique narrative of each space and its inhabitants.
            </p>

            <p className="font-body text-lg text-justify text-muted-foreground leading-relaxed">
              Our approach combines minimalist aesthetics with warm, inviting materials. We design spaces that breathe, where light becomes a material, and silence speaks volumes.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-display font-bold text-accent mb-2">50+</div>
                <div className="text-sm font-body text-muted-foreground uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent mb-2">20+</div>
                <div className="text-sm font-body text-muted-foreground uppercase tracking-wider">Years</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent mb-2">12</div>
                <div className="text-sm font-body text-muted-foreground uppercase tracking-wider">Awards</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={aboutImage}
                alt="Modern architectural interior"
                className="w-full h-full object-cover transition-gentle hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
