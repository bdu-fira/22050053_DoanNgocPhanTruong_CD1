//Giỏ hàng
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingBag, Truck, CreditCard } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import CartItem from '@/components/CartItem';
import FeaturedProducts from '@/components/FeaturedProducts';
import { toast } from 'sonner';

const Cart = () => {
  const { cartItems, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleCheckout = () => {
    // Simulate checkout process
    setIsCheckingOut(true);
    
    setTimeout(() => {
      toast.success("Đã đặt hàng thành công!");
      clearCart();
      navigate('/checkout-success');
      setIsCheckingOut(false);
    }, 1500);
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Giỏ hàng</h1>
          
          <div className="text-center py-16 max-w-md mx-auto">
            <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-10 w-10 text-gray-500" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Giỏ hàng của bạn hiện tại đang trống</h2>
            <p className="text-gray-600 mb-8">
              Có vẻ như bạn chưa thêm sản phẩm nào vào giỏ hàng.
            </p>
            <Button asChild className="bg-pet-teal hover:bg-pet-teal/90">
              <Link to="/">Bắt đầu mua sắm</Link>
            </Button>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Sản phẩm nổi bật</h2>
            <FeaturedProducts />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-pet-teal hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" /> Tiếp tục
        </Link>
        
        <h1 className="text-3xl font-bold mb-8">Giỏ hàng</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {/* Cart items */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/3">
            {/* Order summary */}
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Tóm tắt</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Phụ thu</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vận chuyển</span>
                  <span>{total >= 35 ? 'Free' : '$4.99'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Thuế</span>
                  <span>${(total * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Tổng</span>
                    <span>
                      ${(total + (total < 35 ? 4.99 : 0) + (total * 0.08)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-pet-teal hover:bg-pet-teal/90 text-lg py-6"
                size="lg"
              >
                {isCheckingOut ? (
                  <span>Đang hoàn tất</span>
                ) : (
                  <>
                    <CreditCard className="mr-2 h-5 w-5" /> Thanh toán
                  </>
                )}
              </Button>
              
              <div className="mt-6">
                <div className="flex items-start mb-3">
                  <Truck className="h-5 w-5 text-pet-teal mr-2 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    Miễn phí vận chuyển cho đơn hàng trên 35$.
                  </p>
                </div>
                <p className="text-xs text-gray-500">
                  Hoàn tất giao dịch, bạn đồng ý với điều khoản dịch vụ và chính sách quyền riêng tư của chúng tôi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
