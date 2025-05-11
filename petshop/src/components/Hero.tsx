
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-pet-peach to-pet-purple overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-pattern">
        <img 
          src="/images/paw-pattern.png" 
          alt="Paw Pattern" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-pet-charcoal">
              Hãy thưởng cho thú cưng của bạn bằng những sản phẩm của <span className="text-pet-teal">DBL</span>
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Những sản chất lượng dành cho những người bạn đồng hành đầy lông của bạn. Vì các cậu ấy xứng đáng!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                className="bg-pet-teal hover:bg-pet-teal/90 text-white px-6 py-6 rounded-md"
                size="lg"
              >
                <Link to="/dogs">Chó</Link>
              </Button>
              <Button 
                asChild 
                className="bg-white text-pet-teal hover:bg-gray-100 px-6 py-6 rounded-md border border-pet-teal"
                size="lg"
                variant="outline"
              >
                <Link to="/cats">Mèo</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="rounded-full bg-pet-teal/20 p-4 w-fit mx-auto">
                <img 
                  src="/images/hero-pets.png" 
                  alt="Happy dog and cat" 
                  className="rounded-xl max-w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-full p-3 shadow-lg">
                <div className="bg-pet-teal/10 rounded-full p-3">
                  <span className="text-pet-teal font-bold text-xl">New!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
