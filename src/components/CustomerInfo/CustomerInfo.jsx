import { useDispatch } from "react-redux";
import { useState} from "react";
import { useHistory } from "react-router-dom";


function CustomerInfo() {
  const [customer, setCustomer] = useState({
    customer_name: '',
    street_address: '',
    city: '',
    zip: ''
  });

  const dispatch = useDispatch();
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(customer);
    dispatch({ type: 'ADD_CUSTOMER_INFO', payload: customer })
    history.push('/checkout')
  }

  return (
    <>
      'Contact Info'
      <form
        onSubmit={handleSubmit}
      >
        <input
          onChange={(event) => setCustomer({...customer, customer_name: event.target.value})}
          type="text"
          placeholder="Name"
        ></input>
        <input
          onChange={(event) => setCustomer({...customer, street_address: event.target.value})}
          type="text"
          placeholder="Street Address"
        ></input>
        <input
          onChange={(event) => setCustomer({...customer, city: event.target.value})}
          type="text"
          placeholder="City"
        ></input>
        <input
          onChange={(event) => setCustomer({...customer, zip: event.target.value})}
          type="text"
          placeholder="Zip"
        ></input>
        <button>Next</button>
      </form>
    </>
  );
}

export default CustomerInfo;
