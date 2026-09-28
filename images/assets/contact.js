// Replace these placeholder URLs with my real social profile URLs.
const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/tech.daniofficial/",
  linkedin: "https://www.linkedin.com/in/muhammaddaniyal47/",
  youtube: "https://www.youtube.com/@Official_DANITech",
};

document.querySelectorAll("[data-social-link]").forEach((link) => {
  const platform = link.getAttribute("data-social-link");
  const url = SOCIAL_LINKS[platform];

  if (!url) {
    console.error(`Missing social profile URL for: ${platform}`);
    return;
  }

  link.href = url;
});
