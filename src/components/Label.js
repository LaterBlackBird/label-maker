import React from "react";
import "./LabelStyles.css";
import Image from "next/image";

const HydraProLabel = ({ size }) => {
  return (
    <div
      className="hydraProLabel"
      style={{ width: size.width, height: size.height }}
    >
      <div className="container">
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
            1/8&quot; x CLOSE
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
          <Image
            src="/images/red-brass-coupling.png" // Changed to a valid image type
            alt="Red Brass Coupling"
            className="image"
            width={150}
            height={150}
          />
        </div>

        {/* Footer Section */}
        <div className="footer">
          <p>* Lead-free refers to the wetted surface...</p>
          <p className="warning">FOR CALIFORNIA CONSUMERS ⚠️ WARNING:</p>
          <p>This product can expose you to chemicals...</p>
          <div className="barcode">
            <Image
              src="/images/barcode.png" // Changed to a valid image type
              alt="Barcode"
              className="barcodeImage"
              width={200}
              height={50}
            />
          </div>
          <p>
            <strong>PART # H88500</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HydraProLabel;
