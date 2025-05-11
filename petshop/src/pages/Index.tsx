//Trang chính
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryCard from '@/components/CategoryCard';

const Index = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Thú cưng</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <CategoryCard 
              title="Chó" 
              image="/images/dog-category.jpg" 
              link="/dogs" 
            />
            <CategoryCard 
              title="Mèo" 
              image="/images/cat-category.jpg" 
              link="/cats" 
            />
          </div>
        </div>
      </section>
      
      <FeaturedProducts title="Bán chạy nhất" />
      
      <section className="py-16 bg-pet-peach/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/images/happy-pets.jpg" 
                alt="ảnh thú cưng chơi đồ chơi" 
                className="rounded-xl shadow-lg max-w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Tại sao lại chọn DBL Shop?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-pet-teal rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Chất lượng</h3>
                    <p className="text-gray-600">Tất cả sản phẩm của chúng tôi đã được lựa chọn cẩn thận về chất lượng và an toàn.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-pet-teal rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Miễn phí vận chuyển</h3>
                    <p className="text-gray-600">Miễn phí vận chuyển cho các đơn hàng trên 35$, giao đến tận giường cho bạn.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-pet-teal rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Lời khuyên của chuyên gia</h3>
                    <p className="text-gray-600">Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn tất cả các vấn đề.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Mua sắm theo danh mục</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <CategoryCard 
              title="Thức ăn cho chó" 
              image="/images/dog-food.jpg" 
              link="/dogs?type=food" 
            />
            <CategoryCard 
              title="Đồ chơi cho chó" 
              image="/images/dog-toys.jpg" 
              link="/dogs?type=toy" 
            />
            <CategoryCard 
              title="Thức ăn cho mèo" 
              image="/images/cat-food.jpg" 
              link="/cats?type=food" 
            />
            <CategoryCard 
              title="Đồ chơi cho mèo" 
              image="/images/cat-toys.jpg" 
              link="/cats?type=toy" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
