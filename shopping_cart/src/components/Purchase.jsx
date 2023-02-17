import "./css/Pruchase.css";
import { useState } from "react";

function Purchase(props) {
  console.log(props.name.denominations);
  const [quantity, setquantity] = useState([]);
  const handleChange = (e) => {
    e.preventDefault1();
  };

  console.log(quantity);

  return (
    <>
      <div className="col-6 ">
        <div className="pay">
          <h3 className="cart-you">Your Cart</h3>
          <div className="project-title">
            <h5>#</h5>
            <h5>Name</h5>
            <h5>Price</h5>
            <h5>Quantity</h5>
            <h5>Subtotal</h5>
            <h5>Action</h5>
          </div>
          <div className="project-title">
            <h5>1</h5>
            <h5>{props.name.name}</h5>
            <h5>12 USD</h5>
            <form onChange={handleChange} className="number-cart">
              <input
                // onChange={handleChange}
                name="cart-item-quantity-1"
                type="number"
                min="1"
                className="number-cart-input"
              />
            </form>

            <h5>{props.name.denominations} USD</h5>
            <div>
              <button id="update">Update</button>
              <button id="delete">Delete</button>
            </div>
          </div>
          <div className="project-title">
            <h5>Empty product in your car</h5>
          </div>
          <div className="project-title">
            <p>
              There are <b>5</b> items in your shopping cart.
            </p>
            <h4 className="monny">12 USD</h4>
          </div>
        </div>
        <p className="update-buttom">
          Updated <b>ivysaur</b>
        </p>
      </div>
    </>
  );
}

export default Purchase;
