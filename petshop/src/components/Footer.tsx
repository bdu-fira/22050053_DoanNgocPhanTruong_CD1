
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-pet-charcoal text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DBL Store</h3>
            <p className="text-gray-300 mb-4">
              Thức ăn và đồ chơi chất lượng cho thú cưng của bạn. Chúng tôi luôn đặt chất lượng lên hàng đầu để thú cưng của bạn vui vẻ và khỏe mạnh mỗi ngày.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liên kết</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pet-teal transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/dogs" className="text-gray-300 hover:text-pet-teal transition-colors">
                  Sản phẩm dành cho chó
                </Link>
              </li>
              <li>
                <Link to="/cats" className="text-gray-300 hover:text-pet-teal transition-colors">
                  Sản phẩm dành cho mèo
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-pet-teal transition-colors">
                  Giỏ hàng
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liên hệ chúng tôi</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>504 Đại lộ Bình Dương, Hiệp Thành, Thủ Dầu Một, Bình Dương</p>
              <p>Email: phantruong2512@gmail.com</p>
              <p>Phone: (+84) 035-390-3454</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>© {currentYear} DBL Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
