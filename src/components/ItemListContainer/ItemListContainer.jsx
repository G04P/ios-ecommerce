import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context/appContext";
import { FaCircleNotch } from "react-icons/fa";
import { ItemList } from "../ItemList/ItemList";
import { seedProductsDb } from "../../ProductsMock";

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const { getProductsDB, products, isLoading, changes } =
    useContext(AppContext);

  useEffect(() => {
    getProductsDB();
    // seedProductsDb();
  }, [category, changes]);

  return (
    <div>
      <div>{greeting}</div>
      {isLoading ? (
        <div>
          <h1 className="flex h-screen  text-xl justify-center motion-reduce:hidden text-white ">
            Cargando Productos...
          </h1>
        </div>
      ) : (
        <div>
          <ItemList products={products} />
        </div>
      )}
    </div>
  );
};
