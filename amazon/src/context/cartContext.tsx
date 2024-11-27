import { createContext, useState, useContext, ReactNode } from 'react';

interface CartContextType {
  cartCount: number;
  updateCartCount: (count: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (count: number) => {
    setCartCount(count);
  };

  return <CartContext.Provider value={{ cartCount, updateCartCount }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
