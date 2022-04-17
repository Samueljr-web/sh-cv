import React from "react";
import Avatar from "../../asset/avatar.jpg";
import "./header.css";

function header() {
  return (
    <div className="header">
      <div className="intro">
        <img src={Avatar} alt="avatar" width={100} />
        <h2>SAMUEL ADEYEMI</h2>
      </div>

      <div className="info">
        <div>
          <h3>Address :</h3>
          <h5>Abuja, Nigeria</h5>
        </div>
        <div>
          <h3>Phone :</h3>
          <h5>+234 (0)8145218649</h5>
        </div>
        <div>
          <h3>Email:</h3>
          <h5>samueladeyemi2006@gmail.com</h5>
        </div>
      </div>
    </div>
  );
}

export default header;
