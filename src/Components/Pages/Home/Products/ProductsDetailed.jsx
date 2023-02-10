import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import appService from "../../../App/Appservices/AppService";
import { ProductsStyled } from "./Styled.Products";

export const ProductsDetailed = () => {
  const { id } = useParams();
  console.log("id er", id);
  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.GetDetails("productgroups", id);
        setGroupData(result.data.group.products);
        console.log("result er", result.data.group.products);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);

  const [cartData, setCartData] = useState();

  useEffect(() => {
    const getCart = async () => {
      try {
        const result = await appService.Get("cart");
        setCartData(result.data);
        console.log("cart er", result.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCart();
  }, []);

  const buyIt = async (id, quan) => {
    try {
      const result = await appService.Create("cart", { product_id: id, quantity: quan });
      console.log("post er kørt");
    } catch (error) {
      console.error(error);
    }
  };
  const empty = async () => {
    try {
      const result = await appService.Remove("cart");
      console.log("delete er kørt");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductsStyled>
      <ul>
        {groupData &&
          groupData.map((group, i) => {
            return (
              <li key={i}>
                {group.name}
                <button onClick={() => buyIt(group.id, 1)}>
                  Tilføj til kurv
                </button>
              </li>
            );
          })}
      </ul>
      <ul>
        {cartData?.cartlines?.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
        <button onClick={() => empty()}>Tøm</button>
      </ul>
    </ProductsStyled>
  );
};
