import React from "react";
import "./LabelStyles.css";

const HydraProLabel = () => {
  return (
    <div className="hydraProLabel container">
      {/* Header Section */}
      <div className="header">
        <div>
          <h1 className="headerTitle">HYDRAPRO</h1>
          <div className="headerSubtitle">MODEL # BRN18CL</div>
        </div>
        <div>✔️</div>
      </div>

      {/* Main Section */}
      <div className="mainSection">
        <h2 className="mainTitle">
          Red Brass Coupling
          <br />
          1/8" x CLOSE
        </h2>
        <p>
          • Schedule 40
          <br />
          Red Brass
        </p>
        <div className="leadFree">LEAD-FREE</div>
      </div>

      {/* Side Section */}
      <div className="sideSection">
        <div>
          <p>
            <strong>QTY: 25</strong>
          </p>
          <p>
            MADE IN TAIWAN
            <br />
            Hecho en Taiwan
          </p>
        </div>
        <img src="" alt="Red Brass Coupling" className="image" />
      </div>

      {/* Footer Section */}
      <div className="footer">
        <p>* Lead-free refers to the wetted surface...</p>
        <p className="warning">FOR CALIFORNIA CONSUMERS ⚠️ WARNING:</p>
        <p>This product can expose you to chemicals...</p>
        <div className="barcode">
          <img src="" alt="Barcode" className="barcodeImage" />
        </div>
        <p>
          <strong>PART # H88500</strong>
        </p>
      </div>
    </div>
  );
};

export default HydraProLabel;
