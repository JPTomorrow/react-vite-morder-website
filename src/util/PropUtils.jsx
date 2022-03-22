import React from "react";

export const findChildrenByTag = (tag, children) =>
  React.Children.toArray(children).find((child) => child.type === tag).props
    .children;
