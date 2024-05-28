import * as React from "react";
import { siteConfig } from "../config/site";
import Link from "next/link";

interface SiteFooterProps {}

const SiteFooter: React.FC<SiteFooterProps> = ({}) => {
  const { footerNav } = siteConfig;
  const items = footerNav.map(nav => nav.items);
  return (
    <footer className="bg-background border-t border-border text-sm ">
      <div className="container py-4 flex items-center justify-center">
        <div className="flex items-center space-x-4">
          {items.map((item, index) => (
            <ul key={index} className="flex items-center space-x-4">
              {item.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:underline"
                    target={link.external ? "_blank" : "_self"}
                  >
                    <div className="w-8 h-8 flex items-center justify-center border rounded-md p-1">
                      {<link.icon className="text-white fill-white" />}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="">
        <p className="text-center">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
