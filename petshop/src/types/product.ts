
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'dog' | 'cat';
  type: 'food' | 'toy';
  featured?: boolean;
  rating?: number;
}
