"use client";

import { useState } from "react";
import Label from "../components/Label";
import LabelForm from "../components/LabelForm";
import Image from "next/image";

// src/app/page.js
export default function Home() {
  const [labels, setLabels] = useState([]);

  const handleAddLabel = (label) => {
    setLabels([...labels, label]);
  };

  return (
    <div
      className="container mx-auto p-4"
      style={{ backgroundColor: "var(--background)" }}
    >
      <h1
        className="text-2xl font-bold mb-4"
        style={{ color: "var(--foreground)" }}
      >
        Label Maker
      </h1>
      <LabelForm onSubmit={handleAddLabel} />
      <div className="mt-8">
        {labels.map((label, index) => (
          <Label key={index} text={label.text} size={label.size} />
        ))}
      </div>
    </div>
  );
}
