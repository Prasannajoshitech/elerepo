export const navLinks = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "about_us",
    url: "/about",
    dropdown: [
      { name: "introduction", url: "/about?tab=0" },
      { name: "vision_mission", url: "/about?tab=1" },
      { name: "ReportOverview", url: "/about?tab=2" },
      { name: "function_duties", url: "/about?tab=3" },
      { name: "commission", url: "/about?tab=4" },
      { name: "organizational_structure", url: "/about?tab=5" },
      { name: "chairperson_message", url: "/about?tab=6" },
      { name: "employee_details", url: "/about?tab=7" },
    ],
  },

  {
    name: "status_of_application",
    url: "/status-of-application",
    dropdown: [],
  },
  {
    name: "gallery",
    url: "/gallery",
    dropdown: [
      { name: "photo_gallery", url: "/photo-gallery" },
      { name: "video_gallery", url: "/video-gallery" },
    ],
  },
  {
    name: "contact_us",
    url: "/contact-us",
  },
  {
    name: "e_filing",
    url: "/e-filing",
  },
];
