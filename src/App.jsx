import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { AppContextProvider } from "./Context/appContext";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { CartContextProvider } from "./Context/CartContext";

import { Cart } from "./components/Cart/Cart";
import { Contacto } from "./components/Contacto/Contacto";
import { CreateAccount, SignIn } from "./components";

export const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <main className="main">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/Item/:id" element={<ItemDetailContainer />} />
              <Route path="/Item/Cart" element={<Cart />} />
              <Route path="/Contacto/Contacto" element={<Contacto />} />
              <Route path="/Login/signIn" element={<SignIn />} />
              <Route path="/Login/createAccount" element={<CreateAccount />} />
            </Routes>
          </main>
        </CartContextProvider>
      </BrowserRouter>
    </AppContextProvider>
  );
};
