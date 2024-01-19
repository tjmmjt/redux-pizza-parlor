import { useSelector } from "react-redux";


const Checkout = () => {
  const customerInfo = useSelector(store => store.customerInfo)
  console.log(customerInfo);
  const cart = useSelector(store => store.cart)
  console.log("cart:", cart);

  // ! Total 

let total = 0
const calcTotal = () => {
  for (let pizza of cart){
      total += +(pizza.price)
  }
  // console.log('total:', total);
  return total
}
calcTotal()
  return (
    <>
      <h2>Checkout</h2>
      <div className="checkoutCustomerInfo">
        <h3>Order Total: ${total}</h3>
        <h3>Customer: {customerInfo.customer_name}</h3>
        <h4>Address:</h4><span>{customerInfo.street_address}</span>
        <h4>City:</h4><span> {customerInfo.city}</span>
        <h4>Zip:</h4><span> {customerInfo.zip}</span>
      </div>
    </>
  );
};

export default Checkout;
