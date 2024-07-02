import mediumZoom from "medium-zoom";

export default function initZoom() {
  const zoom = mediumZoom(".markdown img", {
    margin: 0,
    background: "#000000",
  });

  const navbar = document.querySelector(".navbar");

  zoom.on("open", () => {
    if (navbar) {
      navbar.style.display = "none";
    }
  });

  zoom.on("close", () => {
    if (navbar) {
      navbar.style.display = "";
    }
  });
}
