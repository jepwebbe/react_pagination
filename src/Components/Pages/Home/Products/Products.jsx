import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useGetApiDataFromEndpoint from "../../../../Hooks/useGetApiDataFromEndpoint";
import appService from "../../../App/Appservices/AppService";
import { ProductsStyled } from "./Styled.Products";

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log(selectedCategory);
  const { state: products } = useGetApiDataFromEndpoint(
    "productgroups",
    "items"
  );

  return (
    <ProductsStyled>
      {products.map((prods, i) => (
        <div
          key={i}
          onClick={() =>
            setSelectedCategory(selectedCategory === prods.id ? null : prods.id)
          }
        >
          {prods.title}
          {selectedCategory === prods.id && prods.subgroups && (
            <ul>
              {prods.subgroups.map((subCategory) => (
                <li key={subCategory.id}>
                  <Link to={subCategory.id}>{subCategory.title}</Link>
                </li>
              ))}
            </ul>
          )}
             
        </div>
      ))}
    </ProductsStyled>
  );
};
