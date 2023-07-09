"use client";
import { Navbar } from "react-bootstrap";

function Header({ children }) {
  return (
    <Navbar className="d-flex align-items-center justify-content-center">
      {children}
    </Navbar>
  );
}

export default Header;
