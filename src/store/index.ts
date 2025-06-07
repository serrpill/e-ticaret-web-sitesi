import { atom } from 'jotai';
import { User, Cart, Product, Category } from '../types';

export const userAtom = atom<User | null>(null);
export const cartAtom = atom<Cart>({ items: [], total: 0 });
export const productsAtom = atom<Product[]>([]);
export const categoriesAtom = atom<Category[]>([]);
export const loadingAtom = atom<boolean>(false);
export const errorAtom = atom<string | null>(null);

// Derived atoms
export const cartItemCountAtom = atom((get) => {
  const cart = get(cartAtom);
  return cart.items.reduce((total, item) => total + item.quantity, 0);
});

export const isAuthenticatedAtom = atom((get) => {
  return get(userAtom) !== null;
}); 