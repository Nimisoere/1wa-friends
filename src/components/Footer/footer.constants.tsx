import { uid } from "uid";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export const footerLinks = [
  {
    id: uid(8),
    title: `${new Date().getFullYear()} GIG Logistics`,
  },
  {
    id: uid(8),
    title: "Company",
    links: [
      {
        id: uid(8),
        title: "Service Portolio",
        to: "/",
      },
      {
        id: uid(8),
        title: "Contact us",
        to: "/",
      },
      {
        id: uid(8),
        title: "About us",
        to: "/",
      },
      {
        id: uid(8),
        title: "Our offices",
        to: "/",
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
        to: "/",
      },
      {
        id: uid(8),
        title: "Schedule a Pickup",
        to: "/",
      },
      {
        id: uid(8),
        title: "GIG Alpha",
        to: "/",
      },
      {
        id: uid(8),
        title: "Overseas Shipping",
        to: "/",
      },
    ],
  },
];

export const socialLinks = [
  {
    id: uid(8),
    url: "/",
    name: "facebook",
    icon: <FaFacebook />,
  },
  {
    id: uid(8),
    url: "/",
    name: "instagram",
    icon: <FaInstagram />,
  },
  {
    id: uid(8),
    url: "/",
    name: "twitter",
    icon: <FaTwitter />,
  },
  {
    id: uid(8),
    url: "/",
    name: "linkedin",
    icon: <FaLinkedin />,
  },
];
