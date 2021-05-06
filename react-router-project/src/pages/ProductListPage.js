import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductListPage.css";

const products = ["car", "biki", "motorcycle"];

const list = products.map((product) => (
  <li key={product}>
    <Link to={`/product/${product}`}>{product}</Link>
  </li>
));

const ProductListPage = () => {
  return (
    <div className="products">
      <h2>Product List</h2>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default ProductListPage;
