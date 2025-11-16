import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2025 Hemang Nahval. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-accent fill-accent" />
            <span>and lots of</span>
            <span className="text-primary font-semibold">data</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
