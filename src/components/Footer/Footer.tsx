import React from "react";
import { Link } from "react-router-dom";
import { footerLinks, socialLinks } from "./footer.constants";
import styles from "./Footer.module.scss";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className={styles.footer}>
      <div className="container flex justify-around py-24 mx-auto">
        {footerLinks.map((footerLinkColum) => (
          <div key={footerLinkColum.id}>
            <h4 className="font-bold text-lg mb-3 text-white">
              {footerLinkColum.title}
            </h4>
            <nav className="flex flex-col">
              {footerLinkColum.links?.map((link) => (
                <Link
                  key={link.id}
                  className={styles["footer-link"]}
                  to={link.to}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        ))}
        <div>
          <h4 className="font-bold text-lg mb-3 text-white">Connect with us</h4>
          <nav className="flex">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                target="_blank"
                rel="noreferrer"
                href={link.url}
                title={link.name}
                className="text-white mr-6 text-lg"
              >
                {link.icon}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
