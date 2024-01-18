import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

function CustomerInfo(customer) {
  const [customerList, setCustomerList] = useState({});

  const dispatch = useDispatch();

  return (
    <>
      'Contact Info'
      <form
        onSubmit={() =>
          dispatch({ type: "ADD_TO_CUSTOMER_INFO", payload: customer })
        }
      >
        <input
          onChange={setCustomerList.customer_name}
          type="text"
          placeholder="Name"
        ></input>
        <input
          onChange={setCustomerList.street_address}
          type="text"
          placeholder="Street Address"
        ></input>
        <input
          onChange={setCustomerList.city}
          type="text"
          placeholder="City"
        ></input>
        <input
          onChange={setCustomerList.zip}
          type="number"
          placeholder="Zip"
        ></input>
        <Link to="/checkout/">
          <button>Proceed</button>
        </Link>
      </form>
    </>
  );
}

export default CustomerInfo;
