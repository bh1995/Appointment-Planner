import React from "react";

export const Tile = (name, descriptions) => {
  console.log(descriptions)
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {descriptions.map((desc, index) => (
        <p key={index} className="tile-description">
          {desc}
        </p>
      ))}
    </div>
  );
};
