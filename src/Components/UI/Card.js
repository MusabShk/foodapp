import React, { useEffect, useState, useRef } from "react";
import "./Card.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Card = (props) => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const closeCollapse = useRef();
  const [quantity, setQuantity] = useState(props.quantity);

  const cancelHandler = () => {
    setQuantity(props.quantity);
    // window.location.reload();
    if (orderPlaced) {
      closeCollapse.current.disabled = false;
      setOrderPlaced(!orderPlaced);

      closeCollapse.current.click();
    }
  };

  const plusHandler = () => {
    setQuantity((prevState) => {
      return prevState + 1;
    });
  };

  const placeOrderHandler = () => {
    setOrderPlaced(!orderPlaced);
  };

  const minusHandler = () => {
    setQuantity((prevState) => {
      return prevState - 1;
    });
  };

  return (
    <div className="pad">
      <div className="card">
        <h2 className="card-header">
          <div className="alert alert-warning" role="alert">
            {props.productname}
          </div>
        </h2>
        <div className="card-body">
          <h4 className="card-title">Price: {props.price}</h4>
          <p className="card-text">{props.productdescripton}</p>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#a${props.productid}`}
          >
            Buy Now
          </button>

          <div
            className="modal fade"
            id={`a${props.productid}`}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title" id="staticBackdropLabel">
                    {props.productname}
                  </h2>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={cancelHandler}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Name: {localStorage.getItem("foodapp-name")}</p>
                  <p>Email: {localStorage.getItem("foodapp-email")}</p>
                  <p>
                    Quantity: &nbsp;
                    <AiFillPlusCircle onClick={plusHandler} /> &nbsp;
                    {quantity} &nbsp;
                    {quantity > 1 && (
                      <AiFillMinusCircle onClick={minusHandler} />
                    )}
                  </p>
                  <h5>
                    <span className="badge bg-dark">Price: {props.price} </span>
                  </h5>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={cancelHandler}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#b${props.productid}`}
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    ref={closeCollapse}
                    onClick={placeOrderHandler}
                    disabled={orderPlaced}
                  >
                    Place an Order
                  </button>

                  <div className="collapse" id={`b${props.productid}`}>
                    <div className="card card-body">
                      Congratulations!
                      <p>
                        You have successfully placed your order. We will contact
                        you shortly
                      </p>
                      <h5>Thank you</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
