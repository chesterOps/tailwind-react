import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Breadcrumb({
  home = { name: "Home", url: "/" },
  links,
}: {
  home?: { name: string; url: string };
  links: { url?: string; name: React.ReactNode }[];
}) {
  return (
    <ul className="flex items-center flex-wrap gap-3">
      <li className="text-sm font-medium text-gray-700 inline-flex items-center gap-2 hover:text-primary">
        <Link to={home.url}>{home.name}</Link>
      </li>
      <li>
        <BsChevronRight size={14} />
      </li>
      {links.map((item, index) => (
        <React.Fragment key={index}>
          {index !== links.length - 1 ? (
            <li className="text-sm font-medium text-gray-700 inline-flex items-center gap-2 hover:text-primary">
              {item.url ? (
                <Link to={item.url}>{item.name}</Link>
              ) : (
                <React.Fragment>{item.name}</React.Fragment>
              )}
            </li>
          ) : (
            <li className="text-sm font-medium text-gray-500 inline-flex items-center gap-2 ">
              <React.Fragment>{item.name}</React.Fragment>
            </li>
          )}
          {index + 1 !== links.length && (
            <li>
              <BsChevronRight size={14} />
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}
