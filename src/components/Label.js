import React from "react";
import Image from "next/image";
import "../components/LabelStyles.css";

const HydraProLabel = ({
  size,
  model,
  title,
  subtitle,
  details,
  quantity,
  origin,
  partNumber,
}) => {
  const formattedOrigin = origin.toUpperCase();
  const formattedHecho = `Hecho en ${origin
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")}`;

  return (
    <div
      className="bg-white shadow overflow-hidden sm:rounded-lg p-4"
      style={{ width: size.width, height: size.height }}
    >
      <div className="label">
        <div className="logo">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={100}
            height={100}
            style={{ width: "5rem", height: "auto" }}
          />
        </div>
        <div className="modelNumber">MODEL # {model}</div>
        <div className="blueBackground">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
          <div className="details">
            <ul className="list-disc pl-5">
              {details.split("\n").map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="leadFree">LEAD-FREE</div>
        </div>
        <div className="leadFreeDisclaimer">
          * Lead-free refers to the wetted surface...
        </div>
        <div className="prop65Heading">
          <span className="text-red-600">
            FOR CALIFORNIA CONSUMERS ⚠️ WARNING:
          </span>
        </div>
        <div className="prop65Warning">
          This product can expose you to chemicals...
        </div>
        <div className="address">
          HYDRAPRO, Inc. 7400 Sunbelt Drive, SE • Austell, GA 30168
        </div>
        <div className="certs">✔️</div>
        <div className="quantity">
          <strong>QTY: {quantity}</strong>
        </div>
        <div className="partPicture">
          <Image
            src="/Images/placeholder.svg"
            alt="Red Brass Coupling"
            className="image"
            width={150}
            height={150}
          />
        </div>
        <div className="origin">
          MADE IN {formattedOrigin}
          <br />
          {formattedHecho}
        </div>
        <div className="partNumber">
          <strong>PART # {partNumber}</strong>
        </div>
      </div>
    </div>
  );
};

export default HydraProLabel;
