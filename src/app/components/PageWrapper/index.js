"use client";
import { Col, Row } from "react-bootstrap";
const PageWrapper = ({ children }) => {
  return (
    <Row className="h-100 align-items-center justify-content-center">
      <Col className="text-center">{children}</Col>
    </Row>
  );
};

export default PageWrapper;
