import React from "react";
import Image from "next/image";

const HydraProLabel = ({ size }) => {
  return (
    <div
      className="bg-white shadow overflow-hidden sm:rounded-lg"
      style={{ width: size.height, height: size.width }}
    >
      <div className="px-4 py-5 sm:px-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg leading-6 font-medium text-gray-900">
              HYDRAPRO
            </h1>
            <div className="mt-1 max-w-2xl text-sm text-gray-500">
              MODEL # BRN18CL
            </div>
          </div>
          <div>✔️</div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {/* Main Section */}
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Red Brass Coupling
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              1/8&quot; x CLOSE
              <br />
              • Schedule 40
              <br />
              Red Brass
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">LEAD-FREE</dt>
          </div>
          {/* Side Section */}
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              <strong>QTY: 25</strong>
              <br />
              MADE IN TAIWAN
              <br />
              Hecho en Taiwan
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <Image
                src="/Images/placeholder.svg"
                alt="Red Brass Coupling"
                className="image"
                width={150}
                height={150}
              />
            </dd>
          </div>
          {/* Footer Section */}
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              * Lead-free refers to the wetted surface...
              <br />
              <span className="text-red-600">
                FOR CALIFORNIA CONSUMERS ⚠️ WARNING:
              </span>
              <br />
              This product can expose you to chemicals...
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <Image
                src="/Images/placeholder.svg"
                alt="Barcode"
                className="barcodeImage"
                width={200}
                height={50}
              />
              <br />
              <strong>PART # H88500</strong>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default HydraProLabel;
