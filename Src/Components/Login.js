import React from "react";

const Login = () => (
  <main style={{ padding: "1rem", maxWidth: "400px", margin: "0 auto" }}>
    <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Customer Login</h2>
    <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input type="text" placeholder="Username" style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }} />
      <input type="password" placeholder="Password" style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }} />
      <button type="submit" style={{ backgroundColor: "#D6336C", color: "white", padding: "0.75rem", borderRadius: "4px", border: "none", cursor: "pointer" }}>Login</button>
    </form>
  </main>
);

export default Login;
