import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./Home.css";

const Home = (props) => {
  // const [refresh, setRefresh] = useState(true);

  return (
    <div className="row">
      <div className="col-md-6">
        {props.item.map((product) => (
          <Card
            key={product.id}
            productid={product.id}
            productname={product.productname}
            productdescripton={product.productdescripton}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
