// src/components/LabelForm.js
import { useState, useEffect } from "react";

export default function LabelForm({ onChange }) {
  const [sizeOption, setSizeOption] = useState("3x5");
  const [customSize, setCustomSize] = useState({ width: 100, height: 50 });
  const [model, setModel] = useState("BRN18CL");
  const [title, setTitle] = useState("Red Brass Coupling");
  const [subtitle, setSubtitle] = useState('1/8" x CLOSE');
  const [details, setDetails] = useState("• Schedule 40\nRed Brass");
  const [quantity, setQuantity] = useState(25);
  const [origin, setOrigin] = useState("MADE IN TAIWAN\nHecho en Taiwan");
  const [partNumber, setPartNumber] = useState("H88500");

  useEffect(() => {
    onChange({
      size: sizeOption === "custom" ? customSize : getSize(sizeOption),
      model,
      title,
      subtitle,
      details,
      quantity,
      origin,
      partNumber,
    });
  }, [
    sizeOption,
    customSize,
    model,
    title,
    subtitle,
    details,
    quantity,
    origin,
    partNumber,
  ]);

  const handleSizeOptionChange = (e) => {
    setSizeOption(e.target.value);
  };

  const handleCustomSizeChange = (e) => {
    const { name, value } = e.target;
    setCustomSize((prevSize) => ({ ...prevSize, [name]: parseInt(value, 10) }));
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const getSize = (option) => {
    switch (option) {
      case "3x5":
        return { width: 300, height: 500 };
      case "3x10":
        return { width: 300, height: 1000 };
      default:
        return { width: 100, height: 300 };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Model
          </label>
          <input
            type="text"
            value={model}
            onChange={handleInputChange(setModel)}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Part Number
          </label>
          <input
            type="text"
            value={partNumber}
            onChange={handleInputChange(setPartNumber)}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={handleInputChange(setTitle)}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Subtitle
          </label>
          <input
            type="text"
            value={subtitle}
            onChange={handleInputChange(setSubtitle)}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            value={quantity}
            onChange={handleInputChange(setQuantity)}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Details
          </label>
          <textarea
            value={details}
            onChange={handleInputChange(setDetails)}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Origin
          </label>
          <textarea
            value={origin}
            onChange={handleInputChange(setOrigin)}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Size</label>
        <div className="mt-2 space-y-2">
          <div className="flex items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setSizeOption("3x5")}
            >
              <input
                type="radio"
                value="3x5"
                checked={sizeOption === "3x5"}
                onChange={handleSizeOptionChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                3&quot; x 5&quot;
              </label>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setSizeOption("3x10")}
            >
              <input
                type="radio"
                value="3x10"
                checked={sizeOption === "3x10"}
                onChange={handleSizeOptionChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                3&quot; x 10&quot;
              </label>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setSizeOption("custom")}
            >
              <input
                type="radio"
                value="custom"
                checked={sizeOption === "custom"}
                onChange={handleSizeOptionChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                Custom Size
              </label>
            </div>
          </div>
        </div>
        {sizeOption === "custom" && (
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700">
                Width:
              </label>
              <input
                type="number"
                name="width"
                value={customSize.width}
                onChange={handleCustomSizeChange}
                min="200"
                className="ml-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700">
                Height:
              </label>
              <input
                type="number"
                name="height"
                value={customSize.height}
                onChange={handleCustomSizeChange}
                min="100"
                className="ml-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Label
      </button>
    </form>
  );
}
