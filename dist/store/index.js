import { atom } from 'jotai';
export const userAtom = atom(null);
export const cartAtom = atom({ items: [], total: 0 });
export const productsAtom = atom([]);
export const categoriesAtom = atom([]);
export const loadingAtom = atom(false);
export const errorAtom = atom(null);
// Derived atoms
export const cartItemCountAtom = atom((get) => {
    const cart = get(cartAtom);
    return cart.items.reduce((total, item) => total + item.quantity, 0);
});
export const isAuthenticatedAtom = atom((get) => {
    return get(userAtom) !== null;
});
