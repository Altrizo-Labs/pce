export const footerLinks = [
  {
    title: "QUICK LINKS",
    links: [
      { name: "Services", href: "/services" },
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
    ],
    style: "inline-block hover:translate-x-1", 
  },
  {
    title: "COMPLIANCE",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" },
      { name: "Technical Documentation", href: "/documentation" },
    ],
    style: "flex items-center gap-2",
  },
  {
    title: "CONTACT",
    links: [
      { name: "123 Innovation Drive, Suite 100, EdTech City, USA", href: "mailto:info@cinnamondigitalsolutions.com", display: "info@cinnamondigitalsolutions.com" },
      { name: "(123) 456-7890", href: "tel:+17789865874", display: "+17789865874" },
      { name: " info@edusight.ai", display: "Unit 3507, 1111 Alberni St,Vancouver, BC V6E 4V2,Canada." },
    ],
    style: "", // could leave blank or handle display differently
  }
];
