
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { cartItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    // Check if user is logged in on component mount
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    
    if (loggedIn) {
      const userString = localStorage.getItem("user");
      if (userString) {
        const user = JSON.parse(userString);
        setUserName(user.name);
      }
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-montserrat font-bold text-xl text-pet-teal">
              Docile-Beautiful-Lovely
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-pet-teal transition-colors">
              Trang chủ
            </Link>
            <Link to="/dogs" className="font-medium hover:text-pet-teal transition-colors">
              Chó
            </Link>
            <Link to="/cats" className="font-medium hover:text-pet-teal transition-colors">
              Mèo
            </Link>
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm">
                  <User className="h-4 w-4 mr-1" />
                  <span>{userName}</span>
                </div>
                <Button 
                  variant="ghost" 
                  className="font-medium hover:text-pet-teal transition-colors"
                  onClick={handleLogout}
                >
                  Đăng xuất
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="font-medium hover:text-pet-teal transition-colors">
                  Đăng nhập
                </Link>
                <Link to="/register">
                  <Button variant="outline" className="border-pet-teal text-pet-teal hover:bg-pet-teal hover:text-white">
                    Đăng ký
                  </Button>
                </Link>
              </div>
            )}
            
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-pet-teal transition-colors" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-pet-teal hover:bg-pet-teal">
                  {cartItemCount}
                </Badge>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative mr-4">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-pet-teal hover:bg-pet-teal">
                  {cartItemCount}
                </Badge>
              )}
            </Link>
            <button onClick={toggleMobileMenu} className="text-gray-700">
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium py-2 hover:text-pet-teal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link 
                to="/dogs" 
                className="font-medium py-2 hover:text-pet-teal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Chó
              </Link>
              <Link 
                to="/cats" 
                className="font-medium py-2 hover:text-pet-teal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mèo
              </Link>
              
              {isLoggedIn ? (
                <>
                  <div className="flex items-center py-2">
                    <User className="h-4 w-4 mr-1" />
                    <span className="text-sm">{userName}</span>
                  </div>
                  <button 
                    className="font-medium py-2 text-left hover:text-pet-teal transition-colors"
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Đăng xuất
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="font-medium py-2 hover:text-pet-teal transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Đăng nhập
                  </Link>
                  <Link 
                    to="/register" 
                    className="font-medium py-2 hover:text-pet-teal transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Đăng ký
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
