
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types/product';

interface FeaturedProductsProps {
  category?: 'dog' | 'cat';
  limit?: number;
  title?: string;
  showViewAll?: boolean;
}

const FeaturedProducts = ({
  category,
  limit = 4,
  title = "Featured Products",
  showViewAll = true
}: FeaturedProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    let filteredProducts = [...PRODUCTS];
    if (category) {
      filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    
    // Take random products up to the limit
    const randomProducts = filteredProducts.sort(() => 0.5 - Math.random()).slice(0, limit);
    setProducts(randomProducts);
  }, [category, limit]);
  
  const handleViewAll = () => {
    if (category === 'dog') {
      navigate('/dogs');
    } else if (category === 'cat') {
      navigate('/cats');
    } else {
      navigate('/products');
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-pet-charcoal">{title}</h2>
          {showViewAll && (
            <Button 
              onClick={handleViewAll}
              variant="ghost" 
              className="text-pet-teal hover:text-pet-teal/80 hover:bg-pet-teal/10"
            >
              View All
            </Button>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
