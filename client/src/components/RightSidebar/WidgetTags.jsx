import React from "react";

const WidgetTags = () => {
  const tags = [
    "firebase",
    "html",
    "java",
    "next.js",
    "node.js",
    "php",
    "python",
    "javascript",
    "mern",
    "mongodb",
    "mysql",
    "c",
    "css",
    "express",
    "reactjs",
  ];

  return (
    <div className="widget-tags">
      <h4>Watched tags</h4>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
