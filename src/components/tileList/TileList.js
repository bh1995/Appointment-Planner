import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ( {items} ) => {
  if (!Array.isArray(items)) {
    // This will catch null, undefined, or any non-array
    console.error("items prop is not an array", items);
    return null; // Or render some fallback UI
  }
  return (
    <div>
      {items.map((item) => (
        <div className="tile-container">
        <p className="tile-name">{item.name}</p>
        {/* Now map over the other properties and render them */}
        {Object.keys(otherProps).map((key, index) => (
          <p key={index}>{`${key}: ${otherProps[key]}`}</p>
        ))}
      </div>
      ))}
    </div>
  );
};
