import { uid } from "uid";

export const NavLinks = [
  {
    id: uid(8),
    title: "Service Portfolio",
    url: "/services-portfolio",
    hasSubmenu: true,
    submenu: [
      {
        id: uid(8),
        title: "Ecommerce Logistics Services",
        url: "/services-portfolio/ecommerce-logistics-services",
      },
      {
        id: uid(8),
        title: "Domestic Courier Solutions",
        url: "/services-portfolio/domestic-courier-solutions",
      },
      {
        id: uid(8),
        title: "Cooperate Courier Services",
        url: "/services-portfolio/cooperate-courier-services",
      },
      {
        id: uid(8),
        title: "Overseas Shipping",
        url: "/services-portfolio/overseas-shipping",
      },
    ],
  },
  {
    id: uid(8),
    title: "Our Offices",
    url: "/locations",
  },
  {
    id: uid(8),
    title: "Contact Us",
    url: "/contact-us",
  },
  {
    id: uid(8),
    title: "Blog",
    url: "https://blog.giglogistics.com/",
    external: true,
  },
  {
    id: uid(8),
    title: "About Us",
    url: "/about-us",
  },
];
