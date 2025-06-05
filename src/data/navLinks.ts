export const navLinks = [
  {
    name: "About Us",
    url: "/about",
    dropdown: [
      { name: "Introduction", url: "/about" },
      { name: "Vision/Mission", url: "/about" },
      { name: "Function, Duties & Auth.", url: "/about" },
      { name: "Commission", url: "/about" },
      { name: "Organizational Strut", url: "/about" },
      { name: "Chairperson Message ", url: "/about" },
      { name: "Employee Details", url: "/about" },
    ],
  },
  {
    name: "Laws & Regulations",
    url: "/act",
    dropdown: [
      { name: "Act & Rules", url: "/act" },
      { name: "ByLaws", url: "/act" },
      { name: "Directive", url: "/act" },
      { name: "Grid Code", url: "/act" },
      { name: "Manual", url: "/act" },
      { name: "Proposed Draft", url: "/act" },
    ],
  },
  {
    name: "Status of Application", // dropdown will be filled later dynamically
    url: "/status-of-application",
    dropdown: [], // initially empty
  },
  {
    name: "Gallery",
    url: "/gallery",
    dropdown: [
      { name: "Photo Gallery", url: "/photo-gallery" },
      { name: "Video Gallery", url: "/video-gallery" },
    ],
  },
  {
    name: "Contact Us",
    url: "/contact-us",
  },
  {
    name: "E-Filing",
    url: "/e-filing",
  },
];
