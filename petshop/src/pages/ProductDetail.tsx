//Chi tiết sản phẩm
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types/product';
import { toast } from 'sonner';
import FeaturedProducts from '@/components/FeaturedProducts';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  useEffect(() => {
    const foundProduct = PRODUCTS.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/not-found');
    }
  }, [productId, navigate]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast.success(`${product.name} Đã thêm vào giỏ hàng!`);
    }
  };
  
  if (!product) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4 text-center">
          <p>Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <Link 
          to={product.category === 'dog' ? '/dogs' : '/cats'} 
          className="inline-flex items-center text-pet-teal hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Trở lại sản phẩm {product.category === 'dog' ? 'Dog' : 'Cat'}
        </Link>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="aspect-square rounded-xl overflow-hidden bg-white shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <Star 
                  key={index}
                  className={`h-5 w-5 ${
                    index < Math.floor(product.rating || 0) 
                      ? 'text-yellow-400 fill-yellow-400' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {product.rating} stars
              </span>
            </div>
            
            <p className="text-2xl font-semibold text-pet-teal mb-4">
              ${product.price.toFixed(2)}
            </p>
            
            <div className="prose max-w-none mb-6">
              <p>{product.description}</p>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">số lượng</label>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-100 hover:bg-gray-200 rounded-l-md py-2 px-4"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center py-2 border-y border-gray-200"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-100 hover:bg-gray-200 rounded-r-md py-2 px-4"
                >
                  +
                </button>
              </div>
            </div>
            
            <Button 
              onClick={handleAddToCart}
              className="w-full bg-pet-teal hover:bg-pet-teal/90 text-lg py-6"
              size="lg"
            >
              <ShoppingCart className="mr-2 h-5 w-5" /> Thêm vào giỏ hàng
            </Button>
            
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="font-semibold mb-2">Vận chuyển</h3>
              <p className="text-sm text-gray-600">
                Miễn phí vận chuyển cho đơn hàng trên 35 đô la. Đơn hàng thường được giao trong vòng 1-2 ngày làm việc.
              </p>
            </div>
            
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Hoàn trả</h3>
              <p className="text-sm text-gray-600">
                Đảm bảo hoàn tiền trong vòng 7 ngày nếu bạn không hài lòng với sản phẩm. Vui lòng liên hệ với chúng tôi để biết thêm chi tiết.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Có lẻ bạn thích</h2>
          <FeaturedProducts 
            category={product.category} 
            limit={4} 
            showViewAll={false} 
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
