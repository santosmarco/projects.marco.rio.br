import React from "react";
import SectionHeader from "./SectionHeader";

export default (props) => {
  return (
    <section className={props.className}>
      <SectionHeader heading={props.title} />
      {props.children}
    </section>
  );
};
