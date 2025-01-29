const generateLink = (url, content, className) => {
  return `<a class='link' href="${url}" rel='noopener noreferrer'><span class='${className}'>${content}</span></a>`;
};

// Array to store link media links with SVG icons
const links = [
  generateLink("/docs", "Docs", "akText"),
  generateLink("/acknowledgements", "Acknowledgements", "akText"),
  generateLink("/showcase", "Showcase", "scText"),
];

// Export the links array with added position and type properties
module.exports = links.map((value) => ({
  position: "left",
  type: "html",
  value,
}));
