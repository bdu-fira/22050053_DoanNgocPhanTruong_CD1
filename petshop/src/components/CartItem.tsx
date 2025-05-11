
import { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { CartItem as CartItemType } from '@/types/cart';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity);
  };
  
  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-medium">{item.name}</h3>
        <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center border border-gray-200 rounded-md">
        <button
          onClick={() => handleQuantityChange(quantity - 1)}
          className="px-2 py-1 text-gray-500 hover:text-pet-teal"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="px-2 py-1">{quantity}</span>
        <button
          onClick={() => handleQuantityChange(quantity + 1)}
          className="px-2 py-1 text-gray-500 hover:text-pet-teal"
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      
      <div className="ml-6 mr-4 font-medium text-right w-20">
        ${(item.price * quantity).toFixed(2)}
      </div>
      
      <button
        onClick={handleRemove}
        className="text-gray-400 hover:text-red-500 transition-colors"
        aria-label="Remove item"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CartItem;
