import React from "react";
import ZoomWrapper from "../components/ZoomWrapper";

function Root({ children }) {
  return <ZoomWrapper>{children}</ZoomWrapper>;
}

export default Root;
