// src/components/LabelForm.js
import { useState } from "react";

export default function LabelForm({ onChange }) {
  const [text, setText] = useState("");
  const [sizeOption, setSizeOption] = useState("3x5");
  const [customSize, setCustomSize] = useState({ width: 100, height: 50 });

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onChange({
      text: newText,
      size: sizeOption === "custom" ? customSize : getSize(sizeOption),
    });
  };

  const handleSizeOptionChange = (e) => {
    const newSizeOption = e.target.value;
    setSizeOption(newSizeOption);
    onChange({
      text,
      size: newSizeOption === "custom" ? customSize : getSize(newSizeOption),
    });
  };

  const handleCustomSizeChange = (e) => {
    const { name, value } = e.target;
    const newCustomSize = { ...customSize, [name]: parseInt(value, 10) };
    setCustomSize(newCustomSize);
    if (sizeOption === "custom") {
      onChange({ text, size: newCustomSize });
    }
  };

  const getSize = (option) => {
    switch (option) {
      case "3x5":
        return { width: 300, height: 500 };
      case "3x10":
        return { width: 300, height: 1000 };
      default:
        return { width: 100, height: 50 };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Text</label>
        <div className="mt-1">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Size</label>
        <div className="mt-2 space-y-2">
          <div className="flex items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {
                setSizeOption("3x5");
                onChange({
                  text,
                  size: getSize("3x5"),
                });
              }}
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
              onClick={() => {
                setSizeOption("3x10");
                onChange({
                  text,
                  size: getSize("3x10"),
                });
              }}
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
              onClick={() => {
                setSizeOption("custom");
                onChange({
                  text,
                  size: customSize,
                });
              }}
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
