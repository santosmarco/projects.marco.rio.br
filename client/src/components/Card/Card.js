import React, { Children } from "react";
import CardItem from "./CardItem";

export default (props) => {
  const renderChildren = () => {
    return Children.map(props.children, (child) => (
      <CardItem span={child.props.span} className={child.props.className}>
        {child.props.children}
      </CardItem>
    ));
  };

  return (
    <div className="container-fluid bg-light rounded">
      <div className={`row py-2 ${props.className}`}>{renderChildren()}</div>
    </div>
  );
};
