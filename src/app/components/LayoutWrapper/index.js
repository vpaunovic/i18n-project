"use client";
import { Container } from "react-bootstrap";

const LayoutWrapper = ({ children }) => {
  return (
    <Container fluid className="vh-100">
      {children}
    </Container>
  );
};

export default LayoutWrapper;
