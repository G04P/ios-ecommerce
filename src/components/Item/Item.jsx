import { Link } from "react-router-dom";
import styles from "./Item.module.css";
export const Item = ({ id, name, description, img, price }) => {
  return (
    <div className="flex  mt-7 ">
      <article className=" h-full max-w-72 size-80 px-5 ">
        <Link to={`/Item/${id}`}>
          <section>
            <div className="max-w-64  cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
              <img className={styles.image} src={img} alt="image" />
              <p className="my-4 pl-4 font-bold text-gray-500">{name}</p>
              <p className="my-4 pl-4 font-bold text-gray-500">{description}</p>

              <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">
                ${price}usd
              </p>
            </div>
          </section>
        </Link>
      </article>
    </div>
  );
};

export default Item;
