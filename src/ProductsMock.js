import { addDoc, collection } from "firebase/firestore";
import { db } from "./config/fireBaseConfig";

export const products = [
  {
    name: "Apple iPhone 12",
    description: "iPhone 12 Pro/Pro Max",
    img: "https://www.notebookcheck.com/uploads/tx_nbc2/4_zu_3_iphone-12.jpg",
    category: "Celulares",
    price: 350,
    stock: 15,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "pink", class: "bg-pink-400", selectedClass: "ring-pink-900" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },

  {
    name: "Apple iPhone 13",
    description: "iPhone 13 Pro/Pro Max",
    img: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2022/01/iPhone_13_mini_Pink_PDP_Image_position-1A__CLCO_v1-removebg-preview.png",
    category: "Celulares",
    price: 550,
    stock: 5,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "pink", class: "bg-pink-400", selectedClass: "ring-pink-900" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    name: "Apple iPhone 14",
    description: "iPhone 14 Pro/Pro Max",
    img: "https://celularessf.com/wp-content/uploads/2022/10/IPHONE-14-pro-max-colores-1.png",
    category: "Celulares",
    price: 750,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "pink", class: "bg-pink-400", selectedClass: "ring-pink-900" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    name: "Apple iPhone 15",
    description: "iPhone 15 Pro/Pro Max",
    img: "https://obs.line-scdn.net/0hihiGgTA1NkdUPiUgi-xJEGxoOjZnWCxOdl0pIHU2byN9EiQUYQhlJCY9a2spDiISdFwqISU-OCJ-CngSOA/w644",
    category: "Celulares",
    price: 950,
    stock: 12,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "pink", class: "bg-pink-400", selectedClass: "ring-pink-900" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    name: "MacBook Pro ",
    description: "MacBook Pro 16-inch 2023 space gray 16.2",
    img: "https://i1.wp.com/laptopmedia.com/wp-content/uploads/2017/06/refurbished-macbook-pro-1.jpg?fit=2160%2C1601",
    category: "Computadora",
    price: 2950,
    stock: 12,
  },
  {
    name: "MacBook Pro ",
    description: "MacBook Pro 16-inch 2023 space gray 16.2",
    img: "https://eskipaper.com/images/macbook-pro-7.jpg",
    category: "Computadora",
    price: 1950,
    stock: 12,
  },
  {
    name: "MacBook Pro ",
    description: "MacBook Pro 16-inch 2023 space gray 16.2",
    img: "https://surfacepro.vn/upload/2021/03/18/758843_1.jpg",
    category: "Computadora",
    price: 990,
    stock: 12,
  },
  {
    name: "Apple Watch",
    description: "Apple Watch Series 8 GPS",
    img: "https://images-na.ssl-images-amazon.com/images/I/71nkbn1QMFL._AC_SL1500_.jpg",
    category: "Reloj",
    price: 1390,
    stock: 12,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "pink", class: "bg-pink-400", selectedClass: "ring-pink-900" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    name: "Apple Watch ",
    description: "Apple Watch Series 8 GPS",
    img: "https://img1.cgtrader.com/items/1898753/5e90d5dc9d/apple-watch-series-4-sport-44mm-silver-aluminum-3d-model-max.jpg",
    category: "Reloj",
    price: 1120,
    stock: 12,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "pink", class: "bg-pink-400", selectedClass: "ring-pink-900" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    name: "Apple Watch",
    description: "Apple Watch Series 8 GPS",
    img: "https://ardes.bg/uploads/original/apple-watch-se-gps-40mm-gold-aluminium-case-with-p-290504.jpg",
    category: "Reloj",
    price: 1100,
    stock: 12,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "pink", class: "bg-pink-400", selectedClass: "ring-pink-900" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    name: "Apple Ipad ",
    description: "Apple iPad (9ª generación)  Wi-Fi 64GB - Gris espacial",
    img: "http://www.bhphotovideo.com/images/images2500x2500/apple_32gb_ipad_pro_wi_fi_1185484.jpg",
    category: "Ipad",
    price: 590,
    stock: 12,
  },
  {
    name: "Apple Ipad  ",
    description: "Apple iPad (9ª generación)  Wi-Fi 64GB - Gris espacial",
    img: "https://www.bhphotovideo.com/images/images2500x2500/apple_mxdh2ll_a_11_ipad_pro_early_1553817.jpg",
    category: "Ipad",
    price: 490,
    stock: 12,
  },
  {
    name: "Apple Ipad  ",
    description: "Apple iPad (9ª generación)  Wi-Fi 64GB - Gris espacial",
    img: "https://www.bhphotovideo.com/images/images2500x2500/apple_my232ll_a_11_ipad_pro_early_1553824.jpg",
    category: "Ipad",
    price: 690,
    stock: 12,
  },
];

export const seedProductsDb = () => {
  products.forEach((product) => {
    addDoc(collection(db, "products"), product);
  });
};
// export const seedProductsDb = async () => {
//   const promises = products.map(async (product) => {
//     await addDoc(collection(db, "products"), product);
//   });

//   try {
//     // Esperar a que todas las inserciones se completen
//     await Promise.all(promises);
//     console.log("Seeding completed successfully.");
//   } catch (error) {
//     console.error("Error seeding products:", error);
//   }
// };
