// src/components/LabelForm.js
import { useState } from "react";

export default function LabelForm({ onChange }) {
  const [text, setText] = useState("");
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(50);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onChange({ text: newText, size: { width, height } });
  };

  const handleWidthChange = (e) => {
    const newWidth = e.target.value;
    setWidth(newWidth);
    onChange({ text, size: { width: newWidth, height } });
  };

  const handleHeightChange = (e) => {
    const newHeight = e.target.value;
    setHeight(newHeight);
    onChange({ text, size: { width, height: newHeight } });
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
          Width
        </label>
        <input
          type="number"
          value={width}
          onChange={handleWidthChange}
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
          Height
        </label>
        <input
          type="number"
          value={height}
          onChange={handleHeightChange}
          className="mt-1 block w-full border rounded-md shadow-sm"
          style={{
            backgroundColor: "var(--input-background)",
            color: "var(--input-foreground)",
            borderColor: "var(--input-border)",
          }}
        />
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
