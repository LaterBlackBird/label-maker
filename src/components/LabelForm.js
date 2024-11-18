// src/components/LabelForm.js
import { useState, useEffect } from "react";
import { countries } from "../constants/countries";

export default function LabelForm({ onChange }) {
  const [sizeOption, setSizeOption] = useState("3x5");
  const [customSize, setCustomSize] = useState({ width: 3, height: 1 });
  const [model, setModel] = useState("BRN18CL");
  const [title, setTitle] = useState("Red Brass Coupling");
  const [subtitle, setSubtitle] = useState('1/8" x CLOSE');
  const [details, setDetails] = useState(["Schedule 40 Red Brass"]);
  const [quantity, setQuantity] = useState(25);
  const [origin, setOrigin] = useState("Taiwan");
  const [partNumber, setPartNumber] = useState("H88500");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    onChange({
      size:
        sizeOption === "custom"
          ? { width: customSize.width * 100, height: customSize.height * 100 }
          : getSize(sizeOption),
      model,
      title,
      subtitle,
      details: details.join("\n"),
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

  const handleSizeOptionChange = (e) => setSizeOption(e.target.value);

  const handleCustomSizeChange = (e) => {
    const { name, value } = e.target;
    setCustomSize((prevSize) => ({
      ...prevSize,
      [name]: parseFloat(value) || 0,
    }));
  };

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleOriginChange = (e) => {
    const value = e.target.value;
    setOrigin(value);
    setFilteredCountries(
      countries.filter((country) =>
        country.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleDetailChange = (index, value) => {
    const newDetails = [...details];
    newDetails[index] = value;
    setDetails(newDetails);
  };

  const addDetail = () => setDetails([...details, ""]);

  const removeDetail = (index) => {
    const newDetails = details.filter((_, i) => i !== index);
    setDetails(newDetails);
  };

  const getSize = (option) => {
    switch (option) {
      case "3x5":
        return { width: 500, height: 300 };
      case "3x10":
        return { width: 1000, height: 300 };
      default:
        return { width: 300, height: 100 };
    }
  };

  const handleSubmit = (e) => e.preventDefault();

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
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country of Origin
          </label>
          <input
            type="text"
            value={origin}
            onChange={handleOriginChange}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            list="country-list"
          />
          <datalist id="country-list">
            {filteredCountries.map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Details
          </label>
          {details.map((detail, index) => (
            <div key={index} className="flex items-center mt-1">
              <input
                type="text"
                value={detail}
                onChange={(e) => handleDetailChange(index, e.target.value)}
                className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              <button
                type="button"
                onClick={() => removeDetail(index)}
                className="ml-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                -
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addDetail}
            className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            + Add Detail
          </button>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Size</label>
        <div className="mt-2 flex space-x-4 items-center">
          <div className="flex items-center">
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
          <div className="flex items-center">
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
          <div className="flex items-center">
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
          {sizeOption === "custom" && (
            <div className="flex items-center space-x-2">
              <label className="block text-sm font-medium text-gray-700">
                Width (in):
              </label>
              <input
                type="number"
                name="width"
                value={customSize.width || ""}
                onChange={(e) =>
                  handleCustomSizeChange({
                    target: { name: "width", value: e.target.value },
                  })
                }
                min="2"
                step="0.1"
                className="block w-20 shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              <label className="block text-sm font-medium text-gray-700">
                Height (in):
              </label>
              <input
                type="number"
                name="height"
                value={customSize.height || ""}
                onChange={(e) =>
                  handleCustomSizeChange({
                    target: { name: "height", value: e.target.value },
                  })
                }
                min="1"
                step="0.1"
                className="block w-20 shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          )}
        </div>
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
