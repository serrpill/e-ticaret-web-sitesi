import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from './CartContext';

interface Order {
  id: string;
  items: CartItem[];
  totalPrice: number;
  date: string;
  status: 'preparing' | 'shipped' | 'delivered';
}

interface OrderContextType {
  orders: Order[];
  addOrder: (items: CartItem[], totalPrice: number) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (items: CartItem[], totalPrice: number) => {
    const newOrder: Order = {
      id: `ORD-${Date.now()}`,
      items,
      totalPrice,
      date: new Date().toISOString(),
      status: 'preparing'
    };
    setOrders(prevOrders => [newOrder, ...prevOrders]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}; 