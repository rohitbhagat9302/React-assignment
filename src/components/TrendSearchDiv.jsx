import React from "react";
import { faker } from "@faker-js/faker";
import "../pages/Home.css";
import SingleProduct from "./SingleProduct";

const TrendSearchDiv = () => {
  return (
    <div>
      <div className="trendSearchDiv">
        <p>Latest trends</p>
        <div className="productsdiv">
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </div>
        <p className="popular-suggestions">Popular Suggestions</p>
        <ul>
          <li>{faker.commerce.productName()}</li>
          <li>{faker.commerce.productName()}</li>
          <li>{faker.commerce.productName()}</li>
          <li>{faker.commerce.productName()}</li>
          <li>{faker.commerce.productName()}</li>
        </ul>
      </div>
    </div>
  );
};

export default TrendSearchDiv;
