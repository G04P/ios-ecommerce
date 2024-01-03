import { Link } from "react-router-dom";
import style from "./Item.module.css";
export const Item = ({ id, name, description, img, price }) => {
  return (
    <div className="flex mt-7 ">
      <article className=" h-full  max-w-64 px-5">
        <Link to={`/Item/${id}`}>
          <section className="card">
            <div className="max-w-64 h-full  cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
              <img
                className="w-full rounded-lg object-contain object-center"
                src={img}
                alt=""
              />
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
