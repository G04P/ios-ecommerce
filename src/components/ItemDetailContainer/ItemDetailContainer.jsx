import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { AppContext } from "../../Context/appContext";

export const ItemDetailContainer = ({}) => {
  const { id } = useParams();
  const { getProductById, product } = useContext(AppContext);
  useEffect(() => {
    getProductById(id);
  }, [id]);
  return <div>{product && <ItemDetail {...product} />}</div>;
};
