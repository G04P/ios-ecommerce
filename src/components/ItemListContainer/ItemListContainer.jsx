import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context/appContext";

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
          <h4 className="justify-center">Cargando Productos...</h4>
        </div>
      ) : (
        <div>
          <ItemList products={products} />
        </div>
      )}
    </div>
  );
};
