"use client";

import { useState } from "react";
import Label from "../components/Label";
import LabelForm from "../components/LabelForm";
import ThemeToggle from "../components/ThemeToggle";
import Image from "next/image";

// src/app/page.js
export default function Home() {
  const [label, setLabel] = useState({
    text: "",
    size: { width: 300, height: 500 },
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
            width={100}
            height={100}
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
    </div>
  );
}
