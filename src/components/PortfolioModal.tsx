import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { X } from 'lucide-react';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Category {
  name: string;
  videoUrl: string;
  description: string;
}

const categories: Category[] = [
  {
    name: 'Apartments',
    videoUrl: 'https://drive.google.com/file/d/YOUR_APARTMENT_VIDEO_ID/preview',
    description: 'Modern urban living spaces designed for contemporary lifestyles',
  },
  {
    name: 'Bungalows',
    videoUrl: 'https://drive.google.com/file/d/YOUR_BUNGALOW_VIDEO_ID/preview',
    description: 'Single-story residences blending indoor-outdoor living',
  },
  {
    name: 'Remodeled',
    videoUrl: 'https://drive.google.com/file/d/YOUR_REMODEL_VIDEO_ID/preview',
    description: 'Transformative renovations breathing new life into existing structures',
  },
];

const PortfolioModal = ({ isOpen, onClose }: PortfolioModalProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-card p-0">
        {!selectedCategory ? (
          <div className="p-8">
            <DialogHeader className="mb-8">
              <DialogTitle className="font-display text-4xl font-bold text-foreground">
                Our Portfolio
              </DialogTitle>
            </DialogHeader>

            <div className="grid md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category)}
                  className="group relative overflow-hidden bg-secondary rounded transition-gentle hover:shadow-xl"
                >
                  <div className="aspect-[3/4] bg-gradient-to-br from-muted to-secondary p-8 flex flex-col justify-end">
                    <h3 className="font-display text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-smooth">
                      {category.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                    <div className="mt-6 font-body text-xs uppercase tracking-wider text-accent group-hover:translate-x-2 transition-smooth">
                      View Projects →
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="sticky top-0 bg-card border-b border-border z-10 p-6 flex items-center justify-between">
              <div>
                <button
                  onClick={handleBack}
                  className="font-body text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-smooth mb-2"
                >
                  ← Back to Categories
                </button>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {selectedCategory.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-full transition-smooth"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              <div className="aspect-video w-full bg-muted rounded overflow-hidden">
                <iframe
                  src={selectedCategory.videoUrl}
                  className="w-full h-full"
                  allow="autoplay"
                  title={`${selectedCategory.name} Portfolio Video`}
                />
              </div>
              <p className="font-body text-muted-foreground mt-6 text-center">
                {selectedCategory.description}
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal;
