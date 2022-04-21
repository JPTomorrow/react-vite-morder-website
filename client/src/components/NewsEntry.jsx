import React from "react";

function NewsEntry(props, { className }) {
  return (
    <div className="news-entry">
      <div className="default-header text-gray-700">{props.header}</div>
      <div className="text-gray-700">{props.content}</div>
      {props.buttons}
    </div>
  );
}

export default NewsEntry;
