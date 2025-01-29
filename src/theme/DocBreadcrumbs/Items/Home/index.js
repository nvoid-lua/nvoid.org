import React from "react";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import IconHome from "@theme/Icon/Home";
import styles from "./styles.module.css";
export default function HomeBreadcrumbItem() {
  const homeHref = "/docs"; // Change this to the new path
  return (
    <li className="breadcrumbs__item">
      <Link
        aria-label={translate({
          id: "theme.docs.breadcrumbs.home",
          message: "Home page",
          description: "The ARIA label for the home page in the breadcrumbs",
        })}
        className="breadcrumbs__link"
        href={homeHref}
      >
        <IconHome className={styles.breadcrumbHomeIcon} />
      </Link>
    </li>
  );
}
