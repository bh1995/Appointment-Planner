import React from "react";

export const Tile = ({ item }) => {
    // Destructure the name and the rest of the properties
    const { name, ...otherProps } = item;

  return (
    <div className="tile-container">
      <p className="tile-name">{item.name}</p>
      {/* Now map over the other properties and render them */}
      {Object.keys(otherProps).map((key, index) => (
        <p key={index}>{`${key}: ${otherProps[key]}`}</p>
      ))}
    </div>
  );
};
