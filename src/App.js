import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import { Login } from "./component/Login/Login";
import Services from "./component/Service/Services";
import { Signup } from "./component/Signup/Signup";
import User from "./component/User/User";
import {Header} from './component/Header/Header';
import PrivateRoutes from "./Routes/PrivateRoutes/PrivateRoutes";
import ProductList from "./component/ProductList/ProductList";
import { ProductDisplay } from "./Product/ProductDisplay";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* start Private routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/user" element={<User />} />
            <Route path="/services" element={<Services />} />
            <Route path="/product" element={<ProductList />} />
          </Route>
          {/* end Private routes */}

          {/* start public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* end public routes */}
        </Routes>
      </BrowserRouter>
      <ProductDisplay />
    </>
  );
}
