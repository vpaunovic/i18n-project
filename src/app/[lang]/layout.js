"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { getDictionary } from "../../../getDictionary";
import Header from "../components/Header/Header";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";
import "./globals.css";

export default function RootLayout({ children, params: { lang } }) {
  const pathName = usePathname();
  const dict = use(getDictionary(lang));

  return (
    <html lang={lang}>
      <body>
        <Container fluid className="vh-100">
          <Row>
            <Col>
              <Header>
                <Row>
                  <Col className="d-flex align-items-center justify-content-center">
                    <Nav.Link
                      as={Link}
                      href={
                        pathName === `/${lang}` ? `/${lang}/about` : `/${lang}`
                      }
                    >
                      {pathName === `/${lang}` ? "About" : "Home"}
                    </Nav.Link>
                    <p className="mb-0 px-3">
                      {dict?.language_switcher?.label}
                    </p>
                    <LanguageSwitcher />
                  </Col>
                </Row>
              </Header>
            </Col>
          </Row>
          <Row className="h-100 align-items-center justify-content-center">
            <Col className="text-center">{children}</Col>
          </Row>
        </Container>
      </body>
    </html>
  );
}
