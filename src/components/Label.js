// src/components/Label.js
export default function Label({ text, size }) {
  const labelStyles = {
    width: size.width,
    height: size.height,
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
  };

  return <div style={labelStyles}>{text}</div>;
}
