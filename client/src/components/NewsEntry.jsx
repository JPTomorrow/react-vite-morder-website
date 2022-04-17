import React from "react";

function NewsEntry(props, { className }) {
  return (
    <div className="bg-white">
      <div className="">{props.header}</div>
      <div className="">{props.content}</div>
      {props.buttons}
    </div>
  );
}

export default NewsEntry;
