import React, { useEffect } from "react";
import mediumZoom from "medium-zoom";
import { useLocation } from "@docusaurus/router";

const MediumZoomWrapper = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isScPage = location.pathname === "/sc";

  useEffect(() => {
    if ((isHomePage, isScPage)) return;
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
  }, [location, isHomePage, isScPage]);

  return <>{children}</>;
};

export default MediumZoomWrapper;
