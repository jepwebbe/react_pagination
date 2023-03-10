import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../../Pages/About";
import { Contact } from "../../Pages/Contact";
import Home from "../../Pages/Home/Home";
import { ProductsDetailed } from "../../Pages/Home/Products/ProductsDetailed";
import { NotFound } from "../../Pages/NotFound";
import { Products } from "../../Pages/Products";
// Defines the routes via the react-router-dom routing
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path=":id" element={<ProductsDetailed />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
