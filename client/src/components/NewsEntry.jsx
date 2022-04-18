import React from "react";

function NewsEntry(props, { className }) {
  return (
    <div className="bg-transparent pt-5 pb-5">
      <div className="default-header">{props.header}</div>
      <div className="text-white">{props.content}</div>
      {props.buttons}
    </div>
  );
}

export default NewsEntry;
