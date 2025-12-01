import { useState } from 'react';
import PortfolioModal from './PortfolioModal';
import { Button } from './ui/button';

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="portfolio" className="py-32 bg-secondary" style={{paddingBottom:"2rem"}}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Portfolio
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of residential and commercial projects, each telling a unique story of design excellence
            </p>
          </div>

          {/* <div className="text-center">
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-smooth font-body text-sm uppercase tracking-wider px-12 py-6"
            >
              View Our Work
            </Button>
          </div> */}
        </div>
      </section>

      <PortfolioModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Portfolio;
