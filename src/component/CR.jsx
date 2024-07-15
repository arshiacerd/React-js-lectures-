import React from "react";
import CustomReact from "./CustomReact";
import CustomMongo from "./CustomMongo";

const CR = () => {
  let display = true;

  return <>{display ? <CustomReact /> : <CustomMongo />}</>;
};

export default CR;
