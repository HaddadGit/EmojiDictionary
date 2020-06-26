import React from "react";

function Entery(params) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {params.emoji}
        </span>
        <span>{params.name}</span>
      </dt>
      <dd>{params.meaning}</dd>
    </div>
  );
}
export default Entery;
