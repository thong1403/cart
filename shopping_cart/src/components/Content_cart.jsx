import "./css/Content_cart.css";
import Nav from "./Nav";
import axios from "axios";
import { useEffect, useState } from "react";
import PushManager from "./Purchase";

function Content_cart() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then((data) => setPost(data.data))
      .catch((err) => console.log(err));
  }, []);
  const handleClick = (e) => {
   let id = e.target.id;

    const array = post.find((a) => a.id == e.target.id);
    const data = {
      id: name.id,
      name: name.name,
      content: name.content,
      image: name.image,
      value: name.value + 1,
      denominations: name.denominations + 12
    }
    
    setName(array);
    setPut(array.value)
    axios.put(`http://localhost:3000/profile/${id}`, data  )
    .then((data) => console.log(data.data))
    .catch((err) => console.log(err))
    
    console.log(array);
  };
  const [post, setPost] = useState([]);
  const [name, setName] = useState([]);
  const [number, setNumber] = useState([]);
  const [put, setPut] = useState([])
  console.log(name);

  // console.log(name);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 content_cart_center">
            <Nav />
            <div className="content-cart ">
              {!post
                ? "Loading..."
                : post.map((e, id) => {
                    return (
                      <>
                        <div className="col-6 cart-map">
                          <img src={e.image} alt="" className="img-cart" />
                          <div>
                            <h4>{e.name}</h4>
                            <p>{e.content}</p>
                          </div>

                          <div className="input-cart">
                            <input
                              name="quantity-product-1"
                              type="number"
                              min="1"
                              value={e.value}
                              className="input"
                            />
                            <button
                              className="price"
                              onClick={handleClick}
                              id={id}
                            >
                              12 USD
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
            </div>
          </div>
          <PushManager name={name} />
        </div>
      </div>
    </>
  );
}

export default Content_cart;
