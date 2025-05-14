export const footerLinks = [
  {
    title: "QUICK LINKS",
    links: [
      { name: "Features", href: "/features" },
      { name: "About", href: "/about" },
      // { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
    ],
    style: "inline-block hover:translate-x-1", 
  },
  {
    title: "COMPLIANCE",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" },
      { name: "Release Notes", href: "/release-notes" },
    ],
    style: "flex items-center gap-2",
  },
  {
  title: "CONTACT",
  links: [
    {
      name: "123 Innovation Drive, Suite 100, EdTech City, USA.",
      href: null, // address should not have a link
      display: null
    },
    {
      name: "(123) 456-7890",
      href: "+17789865874", // no tel: prefix here
      display: "+17789865874"
    },
    {
      name: "info@edusight.ai",
      href: "info@edusight.ai", // just the email string
      display: "info@edusight.ai"
    }
  ],
  style: "" 
}

];
