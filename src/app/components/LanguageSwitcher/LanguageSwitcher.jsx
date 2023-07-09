"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { i18n } from "../../../../i18n";
import styles from "./LanguageSwitcher.module.scss";

function LanguageSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const { lang } = useParams();

  const [selected, setSelected] = useState(lang || i18n.defaultLocale);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selected}
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.dropdown_menu}>
        {i18n.locales?.map((locale, index) => (
          <Dropdown.Item
            key={index}
            href={redirectedPathName(locale)}
            onClick={() => setSelected(locale)}
            as={Link}
          >
            {locale}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSwitcher;
