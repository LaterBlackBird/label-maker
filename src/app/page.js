"use client";

import { useState } from "react";
import Label from "../components/Label";
import LabelForm from "../components/LabelForm";
import ThemeToggle from "../components/ThemeToggle";
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
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={50}
            height={50}
            style={{ width: "15rem", height: "auto" }}
          />
          <h1
            className="text-2xl font-bold ml-4"
            style={{ color: "var(--foreground)" }}
          >
            Label Maker
          </h1>
        </div>
        <ThemeToggle />
      </div>
      <LabelForm onSubmit={handleAddLabel} />
      <div className="mt-8">
        {labels.map((label, index) => (
          <Label key={index} text={label.text} size={label.size} />
        ))}
      </div>
    </div>
  );
}
