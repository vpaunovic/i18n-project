// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { use } from "react";
// import { Col, Container, Nav, Row } from "react-bootstrap";
import { getDictionary } from "../../../getDictionary";
import Header from "../components/Header/Header";
// import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";
import LayoutWrapper from "../components/LayoutWrapper";
import PageWrapper from "../components/PageWrapper";
import "./globals.scss";

export const metadata = {
  title: "Next.js i18n Internationalization",
  description: "Quickly switch between different languages",
};

export default async function RootLayout({ children, params }) {
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body>
        <LayoutWrapper>
          <Header dict={dict} />
          <PageWrapper>{children}</PageWrapper>
        </LayoutWrapper>
      </body>
    </html>
  );
}
