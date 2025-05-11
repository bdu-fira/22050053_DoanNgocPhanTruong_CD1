//Thanh toán thành công
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import FeaturedProducts from '@/components/FeaturedProducts';

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  
  // If user navigates directly to this page without checking out, redirect to home
  useEffect(() => {
    const isFromCheckout = sessionStorage.getItem('checkout-completed');
    if (!isFromCheckout) {
      navigate('/');
    }
    
    // Set checkout flag so they can see this page
    sessionStorage.setItem('checkout-completed', 'true');
    
    // Cleanup function to remove the flag after they leave
    return () => {
      sessionStorage.removeItem('checkout-completed');
    };
  }, [navigate]);
  
  // Generate a random order number
  const orderNumber = `PPS-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="rounded-full bg-green-100 w-20 h-20 mx-auto flex items-center justify-center mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Cảm ợn bạn đã đặt hàng!</h1>
          <p className="text-xl mb-8">Đơn hàng của bạn đã được đặt thành công.</p>
          
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Chi tiết đơn hàng</h2>
            <p className="mb-2">
              <span className="font-medium">Đơn hàng số:</span> {orderNumber}
            </p>
            <p>
              <span className="font-medium">Thời gian giao hàng dự kiến:</span> 3-5 ngày
            </p>
          </div>
          
          <p className="mb-8">
            Chúng tôi sẽ gửi cho bạn một email xác nhận đơn hàng và thông tin giao hàng trong thời gian sớm nhất.
            Nếu bạn có bất kỳ câu hỏi nào về đơn hàng của mình, vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại hỗ trợ.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-pet-teal hover:bg-pet-teal/90">
              <Link to="/">Tiếp tục</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Có thể bạn cũng thích</h2>
          <FeaturedProducts />
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
