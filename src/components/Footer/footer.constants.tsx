import { uid } from "uid";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export const footerLinks = [
  {
    id: uid(8),
    title: `© ${new Date().getFullYear()} GIG Logistics`,
  },
  {
    id: uid(8),
    title: "Company",
    links: [
      {
        id: uid(8),
        title: "Service Portolio",
        to: "/services-portfolio",
      },
      {
        id: uid(8),
        title: "Contact us",
        to: "/contact-us",
      },
      {
        id: uid(8),
        title: "About us",
        to: "/about-us",
      },
      {
        id: uid(8),
        title: "Blog",
        to: "https://blog.giglogistics.com/",
        external: true,
      },
    ],
  },
  {
    id: uid(8),
    title: "Other Services",
    links: [
      {
        id: uid(8),
        title: "Get a Quote",
        to: "/get-a-quote",
      },
      {
        id: uid(8),
        title: "Schedule a Pickup",
        to: "/giggo-delivery-app",
      },
      {
        id: uid(8),
        title: "GIG Alpha",
        to: "/gig-alpha",
      },
      {
        id: uid(8),
        title: "Overseas Shipping",
        to: "/overseas-shipping",
      },
    ],
  },
];

export const socialLinks = [
  {
    id: uid(8),
    url: "https://facebook.com/giglogistics",
    name: "facebook",
    icon: <FaFacebook />,
  },
  {
    id: uid(8),
    url: "https://instagram.com/giglogistics/",
    name: "instagram",
    icon: <FaInstagram />,
  },
  {
    id: uid(8),
    url: "https://twitter.com/giglogistics",
    name: "twitter",
    icon: <FaTwitter />,
  },
  {
    id: uid(8),
    url: "https://linkedin.com/company/gig-logistics",
    name: "linkedin",
    icon: <FaLinkedin />,
  },
];
