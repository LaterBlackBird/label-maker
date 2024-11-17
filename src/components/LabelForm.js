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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          className="block text-sm font-medium"
          style={{ color: "var(--foreground)" }}
        >
          Text
        </label>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          className="mt-1 block w-full border rounded-md shadow-sm"
          style={{
            backgroundColor: "var(--input-background)",
            color: "var(--input-foreground)",
            borderColor: "var(--input-border)",
          }}
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium"
          style={{ color: "var(--foreground)" }}
        >
          Size
        </label>
        <div>
          <label>
            <input
              type="radio"
              value="3x5"
              checked={sizeOption === "3x5"}
              onChange={handleSizeOptionChange}
            />
            3&quot; x 5&quot;
          </label>
          <label>
            <input
              type="radio"
              value="3x10"
              checked={sizeOption === "3x10"}
              onChange={handleSizeOptionChange}
            />
            3&quot; x 10&quot;
          </label>
          <label>
            <input
              type="radio"
              value="custom"
              checked={sizeOption === "custom"}
              onChange={handleSizeOptionChange}
            />
            Custom Size
          </label>
        </div>
        {sizeOption === "custom" && (
          <div className="customSizeInputs">
            <label>
              Width:
              <input
                type="number"
                name="width"
                value={customSize.width}
                onChange={handleCustomSizeChange}
              />
            </label>
            <label>
              Height:
              <input
                type="number"
                name="height"
                value={customSize.height}
                onChange={handleCustomSizeChange}
              />
            </label>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm"
        style={{
          backgroundColor: "var(--primary-color)",
          color: "var(--foreground)",
        }}
      >
        Create Label
      </button>
    </form>
  );
}
