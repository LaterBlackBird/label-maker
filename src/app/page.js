"use client";

import { useState, useEffect } from "react";
import Label from "../components/Label";
import LabelForm from "../components/LabelForm";
import ThemeToggle from "../components/ThemeToggle";
import Image from "next/image";

// src/app/page.js
export default function Home() {
  const [label, setLabel] = useState({
    text: "",
    size: { width: 480, height: 360 }, // 5x3.75 inches, 96 pixels per inch
    model: "BRN18CL",
    title: "Red Brass Coupling",
    subtitle: '1/8" x CLOSE',
    details: "• Schedule 40\nRed Brass",
    quantity: 25,
    origin: "MADE IN TAIWAN\nHecho en Taiwan",
    partNumber: "H88500",
  });

  const handleLabelChange = (newLabel) => {
    setLabel(newLabel);
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
            width={1000}
            height={1000}
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
      <LabelForm onChange={handleLabelChange} />
      <div className="mt-8 flex justify-center">
        <Label {...label} />
      </div>
      <div className="mt-4 flex justify-center">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Label
        </button>
      </div>
    </div>
  );
}
