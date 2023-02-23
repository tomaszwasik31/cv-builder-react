import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">Resume Builder</div>
      <div className="btn-container">
        <button className="btn-nav">Load Example</button>
        <button className="btn-nav reset" >Reset</button>
        <button className="btn-nav print">Print</button>
      </div>
    </nav>
  );
}
