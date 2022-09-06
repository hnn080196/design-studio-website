import React from "react";
import View from "./view";
const PublicLayout = (props) => {
  const { children } = props;
  return <View>{children}</View>;
};

export default PublicLayout;
