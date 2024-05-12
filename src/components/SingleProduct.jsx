import { faker } from "@faker-js/faker";
import React from "react";
import "../pages/Home.css";

const SingleProduct = () => {
  return (
    <div className="singleProduct">
      <img src={faker.image.url()} alt="" />
      <p>{faker.commerce.productName()}</p>
    </div>
  );
};

export default SingleProduct;
