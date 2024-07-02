import React, { useEffect } from "react";
import initZoom from "../zoom";

const ZoomWrapper = ({ children }) => {
  useEffect(() => {
    initZoom();
  }, []);

  return <>{children}</>;
};

export default ZoomWrapper;
