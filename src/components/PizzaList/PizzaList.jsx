import axios from "axios";
import { useState, useEffect } from "react";

const PizzaList = () => {
  // return all pizzas which will render to DOM
  const [pizzaList, setPizzaList] = useState([]);
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

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            {/* <th>Image</th> */}
          </tr>
        </thead>
        <tbody>
          {pizzaList.map((pizza) => {
            return (
              <tr key={pizza.id}>
                <td>{pizza.name}</td>
                <td>{pizza.description}</td>
                <td>{pizza.price}</td>
                {/* <td><img src={pizza.description} alt="" /></td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default PizzaList;
