import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../ItemDetail/ItemDetail.module.css";
import { CartContext } from "../../Context/CartContext";
import { useCount } from "../../Hooks/useCount";

export const ItemDetail = ({
  id,
  img,
  price,
  name,
  stock,
  colors,
  description,
}) => {
  const { increment, decrement, count } = useCount(1, stock);
  const { addProductCart } = useContext(CartContext);
  const [colorDetermined, setColorDetermined] = useState("White");
  const handleColorDetermined = (event) => {
    setColorDetermined(event.target.value);
  };

  return (
    <div className="flex 	 items-center justify-center ">
      <div className="flex font-sans   mt-10 m-5  ">
        <div className="mx-5 mt-6 flex-none relative">
          <div className=" m-6 hidden overflow-hidden rounded-lg lg:block">
            <img src={img} alt="" className={styles.image} />
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16"></div>

        <form className="flex-auto p-6 mt-8">
          <div className="flex flex-wrap">
            <h1 className="flex-auto mx-5 text-xl font-semibold text-gray-200">
              {name}
            </h1>

            <div className="w-full flex-none  font-medium  text-black mt-2">
              <p className="text-sm mx-5 text-black text-opacity-50">
                (Cantidad disponible: {stock})
              </p>
            </div>
          </div>

          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className=" mx-4 space-x-2 flex text-xs">
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="PRO"
                />
                <div className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  PRO
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="s"
                />
                <div className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  1TB
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="128GB"
                />
                <div className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  128GB
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="l"
                />
                <div className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  64GB
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="xl"
                />
                <div className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  520GB
                </div>
              </label>
            </div>
          </div>

          <div className="space-x-2 flex text-sm m-5">
            {colors &&
              colors.map((color) => (
                <label key={color.name} htmlFor={color.selectedClass}>
                  <input
                    className="sr-only peer"
                    name="color"
                    type="radio"
                    value={color.name}
                    id={color.selectedClass}
                    checked={colorDetermined === color.name}
                    onChange={handleColorDetermined}
                  />
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition ${color.class} peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-${color.selectedClass} peer-checked:bg-${color.selectedClass} peer-checked:text-white`}
                  ></div>
                </label>
              ))}
          </div>
          <div className="text-lg mx-5 font-semibold text-black-500 ">
            ${price}
          </div>

          <div>
            <h3 className="sr-only ">Description</h3>

            <div className="space-y-6 m-5">
              <p className="text-base text-gray-200">
                {description}
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt architecto expedita temporibus, delectus itaque vel,
                laborum aut voluptatem nihil unde voluptate porro necessitatibus
                adipisci voluptatum quibusdam, cumque natus eaque asperiores.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <Link to={"/Item/Cart"}>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 mt-4 py-2 px-4 rounded-full"
                  onClick={() =>
                    addProductCart({ img, name, price, id, colors }, count)
                  }
                >
                  Añadir al carrito
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
