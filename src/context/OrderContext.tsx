import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { CartItem } from './CartContext';
import { useAuth } from './AuthContext';
import axios from 'axios';

interface Order {
  _id: string;
  items: CartItem[];
  totalPrice: number;
  date: string;
  status: 'preparing' | 'shipped' | 'delivered';
}

interface OrderContextType {
  orders: Order[];
  addOrder: (items: CartItem[], totalPrice: number) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  // Fetch orders when user changes
  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) {
        setOrders([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get('/api/orders');
        setOrders(response.data);
        setError(null);
      } catch (err) {
        setError('Siparişler yüklenirken bir hata oluştu');
        console.error('Error fetching orders:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  const addOrder = async (items: CartItem[], totalPrice: number) => {
    try {
      const response = await axios.post('/api/orders', {
        items,
        totalPrice
      });
      setOrders(prevOrders => [response.data, ...prevOrders]);
    } catch (err) {
      setError('Sipariş oluşturulurken bir hata oluştu');
      console.error('Error creating order:', err);
      throw err;
    }
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, loading, error }}>
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