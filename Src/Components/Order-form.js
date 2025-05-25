import React from "react";

const OrderForm = () => (
  <main style={{ padding: "1rem" }}>
    <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Order Form</h2>
    <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input type="text" placeholder="Your Name" style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }} />
      <input type="email" placeholder="Email Address" style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }} />
      <textarea placeholder="Gift Details" rows="5" style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}></textarea>
      <button type="submit" style={{ backgroundColor: "#D6336C", color: "white", padding: "0.75rem", borderRadius: "4px", border: "none", cursor: "pointer" }}>Submit Order</button>
    </form>
  </main>
);

export default OrderForm;
