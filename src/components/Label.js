import React, { useEffect, useState } from "react";
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
  const [fontSize, setFontSize] = useState("15px");

  useEffect(() => {
    const itemCount = details.split("\n").length;
    const baseFontSize = 15;
    const fontSizeReduction = 1.5;
    const newFontSize = baseFontSize - (itemCount - 1) * fontSizeReduction;
    setFontSize(`${newFontSize}px`);
  }, [details]);

  const formattedOrigin = origin.toUpperCase();
  const formattedHecho = `Hecho en ${origin
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")}`;

  return (
    <div
      className="bg-white shadow overflow-hidden sm:rounded-lg p-4"
      style={{ width: size.width, height: size.height, paddingLeft: 0 }}
    >
      <div className="label-container" style={{ color: "black" }}>
        <div className="left-column">
          <div className="logo">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={400}
              height={400}
              style={{ width: "75%", height: "auto" }}
            />
          </div>
          <div className="modelNumber">MODEL # {model}</div>
          <div className="blueBackground">
            <div className="blueBackgroundOutline">
              <div className="productDetails">
                <div className="left-column">
                  <div className="title">{title}</div>
                  <div className="subtitle">{subtitle}</div>
                  <div className="details" style={{ fontSize }}>
                    <ul className="list-disc pl-5">
                      {details.split("\n").map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="right-column">
                  <div className="leadFree">LEAD-FREE</div>
                </div>
              </div>
            </div>
          </div>
          <div className="disclaimers">
            <div className="leadFreeDisclaimer">
              * Lead-free refers to the wetted surface of pipe, fittings and
              fixtures in potable water systems that have a weighted average
              lead content ≤ 0.25% per the Safe Drinking Water Act (Sec. 1417)
              amended 1-4-2011 and other equivalent state regulations.
            </div>
            <div className="prop65Block">
              <div className="prop65Heading">
                <span className="text-red-600">
                  FOR CALIFORNIA CONSUMERS ⚠️ WARNING:
                </span>
              </div>
              <div className="prop65Warning">
                This product can expose you to chemicals including lead
                compounds, which are known to the State of California to cause
                cancer and birth defects or other reproductive harm.{" "}
                <strong>
                  For more information go to www.P65Warnings.ca.go
                </strong>
              </div>
            </div>
            <div className="address">
              HYDRAPRO, Inc. 7400 Sunbelt Drive, SE • Austell, GA 30168
            </div>
          </div>
        </div>
        <div className="right-column">
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
            <p className="originEnglish">MADE IN {formattedOrigin}</p>
            <p className="originSpanish">{formattedHecho}</p>
          </div>
          <div className="barcode">
            <Image
              src="/Images/placeholder.svg"
              alt="barcode"
              className="image"
              width={150}
              height={150}
            />
          </div>
          <div className="partNumber">
            <strong>PART # {partNumber}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HydraProLabel;
