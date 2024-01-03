import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addProductCart = (product, quantity, colors) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index == -1) {
      const newProduct = {
        ...product,
        colors,
        quantity,
        subTotal: +product.price * quantity,
      };
      setCart([...cart, newProduct]);
    } else {
      const cartCopy = [...cart];
      cartCopy[index].quantity += quantity;
      cartCopy[index].subTotal =
        cartCopy[index].price * cartCopy[index].quantity;

      setCart(cartCopy);
    }
  };

  const removeProduct = (id) => {
    const productsFilter = cart.filter((product) => product.id !== id);
    setCart(productsFilter);
  };

  const handleTotal = () => {
    const totalItems = cart.reduce(
      (acumulador, item) => acumulador + item.subTotal,
      0
    );
    setTotal(totalItems);
  };

  const totalItems = cart.length;

  const clearCart = () => setCart([]);

  useEffect(() => {
    handleTotal();
  }, [cart]);

  const objectValue = {
    cart,
    total,
    totalItems,
    removeProduct,
    handleTotal,
    clearCart,
    addProductCart,
  };
  return (
    <CartContext.Provider value={objectValue}>{children}</CartContext.Provider>
  );
};
