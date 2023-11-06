import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ items = [] }) => {
  if (!Array.isArray(items)) {
    // This will catch null, undefined, or any non-array
    console.error("items prop is not an array", items);
    return null; // Or render some fallback UI
  }
  return (
    <div>
      {items.map((item, index) => (
        <Tile key={index} name={item.name} description={item.description} />
      ))}
    </div>
  );
};
