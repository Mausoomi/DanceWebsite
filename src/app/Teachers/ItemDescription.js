"use client";

import { useState } from "react";

const ItemDescription = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const limitedText = text.split(" ").slice(0, 48).join(" ");

  return (
    <div>
      <p>
        {isExpanded ? text : `${limitedText}...`}
        <span
          onClick={toggleReadMore}
          style={{ color: "blue", cursor: "pointer" }}
        >
          {isExpanded ? " Read Less" : " Read More"}
        </span>
      </p>
      <p>{text.aboutTeacher}</p>
    </div>
  );
};

export default ItemDescription;
