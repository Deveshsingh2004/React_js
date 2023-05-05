import React from "react";

function Emoji(prop) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          💪{prop.Emoji}
        </span>
        <span>{prop.name}</span>
      </dt>
      <dd>{prop.meaning}</dd>
    </div>
  );
}

export default Emoji;
