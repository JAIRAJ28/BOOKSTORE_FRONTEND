import React, { useState } from 'react';

export const Orders = () => {
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders_placed')) || []);

  const handleCancelOrder = (orderId) => {
    console.log(orderId)
    const updatedOrders = orders.filter((order) => order._id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };
  

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    orders.forEach((order) => {
      totalPrice += order.price;
    });
    return totalPrice;
  };

  const styles = {
    ordersTable: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
    },
    tableCell: {
      padding: '10px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
      color: 'white',
    },
    orderImage: {
      width: '50px',
      height: '50px',
      objectFit: 'cover',
    },
    cancelButton: {
      padding: '6px 12px',
      backgroundColor: '#e74c3c',
      color: 'white', 
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    totalCell: {
      fontWeight: 'bold',
      color: 'white', 
    },
    h2: {
      marginBottom: '10px',
      color: 'neon', 
    },
  };
  

  return (
    <div>
      <h2 style={styles.h2}>Your Cart - {orders.length}</h2>
      <table style={styles.ordersTable}>
        <thead>
          <tr>
            <th style={styles.tableCell}>Name</th>
            <th style={styles.tableCell}>Images</th>
            <th style={styles.tableCell}>Price</th>
            <th style={styles.tableCell}>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td style={styles.tableCell}>{order.name}</td>
              <td>
                <img src={order.images} alt={order.name} style={styles.orderImage} />
              </td>
              <td style={styles.tableCell}>${order.price}</td>
              <td>
                <button onClick={() => handleCancelOrder(order._id)} style={styles.cancelButton}>
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2" style={styles.tableCell}>Total:</td>
            <td style={{ ...styles.tableCell, ...styles.totalCell }}>
              ${calculateTotalPrice()}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
