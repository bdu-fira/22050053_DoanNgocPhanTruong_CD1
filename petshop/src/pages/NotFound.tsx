//Lỗi không tìm thấy trang
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Oops! Không tìm thấy trang</p>
        <Button asChild className="bg-pet-teal hover:bg-pet-teal/90">
          <Link to="/">Trở lại trang chủ</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
