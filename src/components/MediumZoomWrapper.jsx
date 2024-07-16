import React, { useEffect } from "react";
import mediumZoom from "medium-zoom";
import { useLocation } from "@docusaurus/router";

const MediumZoomWrapper = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (isHomePage) return;
    const zoom = mediumZoom("img");

    zoom.on("open", () => {
      document.querySelector(".navbar").style.display = "none";
    });

    zoom.on("close", () => {
      document.querySelector(".navbar").style.display = "";
    });

    return () => {
      zoom.detach();
    };
  }, [location, isHomePage]);

  return <>{children}</>;
};

export default MediumZoomWrapper;
