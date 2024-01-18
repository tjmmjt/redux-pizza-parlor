import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";



const PizzaList = () => {
  // return all pizzas which will render to DOM
  const [pizzaList, setPizzaList] = useState([]);
  // declare dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    handleGet();
  }, []);

  const handleGet = () => {
    axios
      .get("/api/pizza")
      .then((response) => {
        console.log("Reponse:", response.data);
        setPizzaList(response.data);
      })
      .catch((err) => {
        console.error("Error getting pizzas:", err);
      });
  };

  // const addToCart = ({pizza}) => {
  //   dispatch({
  //     type: 'ADD_TO_CART',
  //     payload: {pizza}
  //   })
  // }

  return (
    <>
   
      <Link to="/customerinfo/">
        <button>Proceed</button>
      </Link>
      

      {pizzaList.map((pizza) => {
        return (
          <div key={pizza.id} className="container">
            <div className="imgContainer">
              <img src="images/pizza_photo.png" />
            </div>
            <div className="infoContainer">
              <p>{pizza.name}</p>
              <p>{pizza.description}</p>
              <p>${pizza.price}</p>
              <button
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: pizza })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
      <button>Proceed</button>
    </>
  );
};

export default PizzaList;
