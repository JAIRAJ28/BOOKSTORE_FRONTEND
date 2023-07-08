import React, { useEffect, useState } from 'react';
import style from "./Css/Cart.module.css";
import { MdOutlineDeleteOutline } from "react-icons/md";

export const Cart = () => {
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  const handleClick = (id) => {
    const updatedOrders = orders.filter((item) => item._id !== id);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  }

  const handleQuantityChange = (e, id) => {
    const updatedOrders = orders.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: Number(e.target.value) };
      }
      return item;
    });
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  }

  let totalPrice = 0;
  orders.forEach(element => {
    totalPrice += element.price * (element.quantity || 1);
  });

  const handlePaymentModeChange = (e) => {
    setPaymentMode(e.target.value);
  };

  const handlePayButton = () => {
    if (paymentMode === "credit" || paymentMode === "debit") {
      
      console.log("Card Number:", cardNumber);
    } else {

      console.log("Payment processed without card details");
    }
  };

  return (
    <div className="flexbox">
      <h2 className={style.header}>
        Your Cart - {orders.length}
      </h2>
    <div className={style.container}>
      
    
      <div className={style.cartItems}>
        <h3>Total - Rs. {totalPrice}</h3>
        <table>
          <thead>
            <tr>
              <th>Images</th>
              <th>Details</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    width={"100px"}
                    className={style.itemImage}
                    src={item.images}
                    alt={item.title}
                  />
                </td>
                <td>
                  <div className={style.itemDetails}>
                    <p style={{ color: "yellow" }}>{item.author}</p>
                    <p style={{ color: "yellow" }}>Rating: {item.customer_rating}</p>
                    <p style={{ color: "yellow" }}>{item.title}</p>
                  </div>
                </td>
                <td>
                  <p style={{ color: "white" }}>Rs. {item.price * (item.quantity || 1)}</p>
                </td>
                <td>
                  <MdOutlineDeleteOutline
                    className={style.deleteIcon}
                    onClick={() => handleClick(item._id)}
                  />
                </td>
                <td>
                  <select
                    name=""
                    id=""
                    value={item.quantity || 1}
                    onChange={(e) => handleQuantityChange(e, item._id)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={style.checkoutBox}>
        <h3>Checkout</h3>
        <div className={style.checkoutForm}>
          <form action="" style={{marginTop:"-20px"}}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />

          <label htmlFor="pinCode">Pin Code:</label>
          <input type="text" id="pinCode" value={pinCode} onChange={(e) => setPinCode(e.target.value)} />

          <label htmlFor="paymentMode">Payment Mode:</label>
          <select id="paymentMode" value={paymentMode} onChange={handlePaymentModeChange}>
            <option value="credit">Credit Card</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="direct">Direct Pay</option>
          </select>

          {paymentMode === "credit" || paymentMode === "debit" ? (
            <>
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </>
          ) : null}

          <button className={style.payButton} onClick={handlePayButton}>
            Pay
          </button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};
