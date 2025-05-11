//Mèo
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types/product';

const CatProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');
  
  useEffect(() => {
    // Filter products for cats
    let filteredProducts = PRODUCTS.filter(p => p.category === 'cat');
    
    // Apply additional type filter from URL if present
    if (typeFilter === 'food' || typeFilter === 'toy') {
      filteredProducts = filteredProducts.filter(p => p.type === typeFilter);
    }
    
    setProducts(filteredProducts);
  }, [typeFilter]);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Mèo</h1>
        
        <div className="mb-8">
          <Tabs defaultValue={typeFilter || "all"}>
            <TabsList className="mb-8">
              <TabsTrigger value="all">Tất cả sản phẩm</TabsTrigger>
              <TabsTrigger value="food">Mèo</TabsTrigger>
              <TabsTrigger value="food">Thức ăn</TabsTrigger>
              <TabsTrigger value="toy">Đồ chơi</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="food">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.filter(p => p.type === 'food').map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="toy">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.filter(p => p.type === 'toy').map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CatProducts;
