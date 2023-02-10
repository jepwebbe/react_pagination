import React from "react";
import { Outlet } from "react-router-dom";
import { Page } from "../../../Styles/Layout/Page";
import { Products } from "./Products/Products";
import { ProductsDetailed } from "./Products/ProductsDetailed";
import { HomeStyled } from "./Styled.Home";

const Home = () => {
  return (
    <Page title="Pagination" description="Dette er hjem">
      <HomeStyled>
        <div>a</div>
        <Products />
        <div>c</div>
        <Outlet />
        <div>e</div>
      </HomeStyled>
    </Page>
  );
};

export default Home;
