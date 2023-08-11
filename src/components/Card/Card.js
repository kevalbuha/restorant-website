import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "../ContextReducer/ContextReducer";

function Card(props) {
  const options = props.options || {};
  const priceOptions = Object.keys(options);
  const dispatch = useDispatchCart();
  console.log(options, "options");
  let data = useCart();
  const priceRef = useRef();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddCart = async (e) => {
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    await console.log("data ", data);
  };

  let finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  return (
    <div>
      <div className="mt-3 p-4 bg-dark text-light">
        <div className="card bg-dark text-light" style={{ width: "18.6rem" }}>
          <img
            src={props.foodItem.img}
            className="card-img-top object-fit-cover"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <p className="card-text">this is important text</p>
            <div className="container w-100 text-light border-bottom pb-2">
              <select
                className="m-2 h-100 bg-success text-light "
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select
                className="m-2 h-100 bg-success text-light"
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100 fs-5 text-light">
                ₹{finalPrice}/-
              </div>
            </div>
          </div>

          <button
            className="btn btn-success justify-center mx-2 mb-3 "
            onClick={handleAddCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
