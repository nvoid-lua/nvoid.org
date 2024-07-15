import React from "react";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import IconClose from "@theme/Icon/Close";
import NavbarLogo from "../../../../../static/icons/nvoid.svg";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      type="button"
      aria-label={translate({
        id: "theme.docs.sidebar.closeSidebarButtonAriaLabel",
        message: "Close navigation bar",
        description: "The ARIA label for close button of mobile sidebar",
      })}
      className="clean-btn navbar-sidebar__close"
      onClick={() => mobileSidebar.toggle()}
    >
      <IconClose color="var(--ifm-color-emphasis-600)" />
    </button>
  );
}
export default function NavbarMobileSidebarHeader() {
  return (
    <div className="navbar-sidebar__brand">
      <Link to="/" className={styles.navbarlogo}>
        <NavbarLogo className={styles.navbarsvg} />
        <a className={styles.navbartext}>Nvoid</a>
      </Link>
      <NavbarColorModeToggle className="margin-right--md" />
      <CloseButton />
    </div>
  );
}
