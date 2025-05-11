
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/types/product';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} Đã thêm vào giỏ hàng!`);
  };

  return (
    <div className="product-card overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-lg hover:text-pet-teal transition-colors">
              {product.name}
            </h3>
          </Link>
          <span className="font-semibold text-pet-teal">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-pet-teal hover:bg-pet-teal/90"
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Thêm vào giỏ hàng
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
