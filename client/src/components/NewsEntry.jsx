import React from "react";

function NewsEntry(props, { className }) {
  return (
    <div className="news-entry">
      <div className="default-header text-white">{props.header}</div>
      <div className="text-white">{props.content}</div>
      {props.buttons}
    </div>
  );
}

export default NewsEntry;
