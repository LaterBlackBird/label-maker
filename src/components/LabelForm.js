// src/components/LabelForm.js
import { useState } from "react";

export default function LabelForm({ onSubmit }) {
  const [text, setText] = useState("");
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(50);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ text, size: { width, height } });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Width</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Height
        </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
      >
        Create Label
      </button>
    </form>
  );
}
