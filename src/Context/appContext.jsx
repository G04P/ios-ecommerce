import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../config/fireBaseConfig";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [changes, setChanges] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const getProductsDB = (category) => {
    setProduct(null);
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));
    getDocs(myProducts).then((resp) => {
      const productList = resp.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
      setIsLoading(false);
    });
  };
  const getProductById = (id) => {
    setIsLoading(true);
    const productRef = doc(db, "products", id);
    getDoc(productRef).then((resp) => {
      if (resp.exists()) {
        const prod = {
          id: resp.id,
          ...resp.data(),
        };
        setProduct(prod);
        setIsLoading(false);
      }
    });
  };
  const addOrderDB = (order) => {
    addDoc(collection(db, "orders"), order);
    setChanges(!changes);
  };

  const addProducts = () => {
    products.forEach((product) => {
      addDoc(collection(db, "products"), product);
    });
  };

  const objectValue = {
    product,
    products,
    changes,
    isLoading,
    getProductsDB,
    addOrderDB,
    getProductById,
    addProducts,
  };
  return (
    <AppContext.Provider value={objectValue}>{children}</AppContext.Provider>
  );
};
