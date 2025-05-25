import React from "react";

const Samples = () => (
  <main style={{ padding: "1rem" }}>
    <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Samples & Preview</h2>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
      <div style={{ border: "1px solid #ccc", padding: "1rem" }}>Sample 1</div>
      <div style={{ border: "1px solid #ccc", padding: "1rem" }}>Sample 2</div>
      <div style={{ border: "1px solid #ccc", padding: "1rem" }}>Sample 3</div>
    </div>
  </main>
);

export default Samples;
