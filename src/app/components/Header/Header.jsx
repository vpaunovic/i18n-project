"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Col, Nav, Navbar, Row } from "react-bootstrap";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function Header({ dict }) {
  const pathName = usePathname();
  const { lang } = useParams();
  return (
    <Navbar className="d-flex align-items-center justify-content-center">
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <Nav.Link
            as={Link}
            href={pathName === `/${lang}` ? `/${lang}/about` : `/${lang}`}
          >
            {pathName === `/${lang}` ? dict?.links?.about : dict?.links?.home}
          </Nav.Link>
          <p className="mb-0 px-3">{dict?.language_switcher?.label}</p>
          <LanguageSwitcher />
        </Col>
      </Row>
    </Navbar>
  );
}

export default Header;
