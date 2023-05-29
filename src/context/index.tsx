import { createContext, useContext, useState } from "react";
import { ProviderProps } from "../config/types";
import { CartItem, ProductContex, CartContextData } from "../config/interface";

export const CartContext = createContext<CartContextData>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  resetCart: () => {},
  getTotalItemCount: () => 0,
  getTotalPrice: () => 0,
});

const AppProvider = ({ children }: ProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: ProductContex, quantity: number) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (quantity === 0) {
      return;
    }

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        productQuantity: existingItem.productQuantity + quantity,
        total: (existingItem.productQuantity + quantity) * existingItem.price,
        cartQuantity: existingItem.cartQuantity + quantity,
      };

      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? updatedItem : item
      );

      setCartItems(updatedCartItems);
    } else {
      const newItem: CartItem = {
        ...product,
        productQuantity: quantity,
        cartQuantity: quantity,
        total: product.price * quantity,
      };

      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        const updatedItem: CartItem = {
          ...item,
          productQuantity: item.productQuantity - 1,
          cartQuantity: item.cartQuantity - 1,
          total: item.total - item.price,
        };

        return updatedItem;
      }

      return item;
    });

    const filteredCartItems = updatedCartItems.filter(
      (item) => item.productQuantity > 0
    );

    setCartItems(filteredCartItems);
  };

  const resetCart = () => {
    setCartItems([]);
  };

  const getTotalItemCount = () => {
    let totalCount: number = 0;

    for (const item of cartItems) {
      totalCount += item.productQuantity;
    }

    return totalCount;
  };

  const getTotalPrice = () => {
    let total = 0;

    for (const item of cartItems) {
      total += item.price * item.cartQuantity;
    }

    return total;
  };

  const contextValue: CartContextData = {
    cartItems,
    addToCart,
    removeFromCart,
    resetCart,
    getTotalItemCount,
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { AppProvider, useCart };
