import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Label Maker",
  description: "A web application for designing and printing custom labels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
