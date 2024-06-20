// Function to generate HTML anchor tags with provided URL and icon
const generateA = (url, content) => {
  return `<a class='social' href=${url} rel='noopener noreferrer'><span class='showcase-text'>${content}</span></a>`;
};

// Array to store social media links with SVG icons
const socials = [
  generateA(
    "/docs/showcase",
    // SVG icon for the social link
    "Show case", // Text content for the social link
  ),
];

// Export the socials array with added position and type properties
module.exports = socials.map((value) => ({
  position: "left",
  type: "html",
  value,
}));
