import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const defaultColors = [
  "green",
  "lightblue",
  "red",
  "yellow",
  "purple",
  "orange",
];

export default function ColorState() {
  const [color, setColor] = useState(() => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem("myColorList") || String(defaultColors)
      );
    } catch (err) {
      value = defaultColors.map((color) => {
        return {
          id: uuidv4(),
          color: color,
        };
      });
    }
    return value;
  });
  useEffect(() => {
    window.localStorage.setItem("myColorList", JSON.stringify(color));
  }, [color]);
  return {
    color,
    // addColor: () => {

    // }
  };
}
