import React from "react";

export function findChildrenByTag(tag, children) {
  alert(React.Children.toArray(children).map((child) => child.type + "\n"));
  const returnChildren = React.Children.toArray(children).find(
    (child) => child.type === tag
  );
  return returnChildren === undefined ? [] : returnChildren.props.children;
}
