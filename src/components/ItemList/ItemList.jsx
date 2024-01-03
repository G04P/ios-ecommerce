import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <section>
      <div className="  flex  flex-wrap justify-start space-x-4 ">
        {products.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};
