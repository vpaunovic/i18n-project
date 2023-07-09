"use client";
import { use } from "react";
import { Col, Row } from "react-bootstrap";
import { getDictionary } from "../../../../getDictionary";

function AboutPage({ params: { lang } }) {
  const dict = use(getDictionary(lang));
  return (
    <Row>
      <Col className="d-flex flex-column align-items-center">
        <h1>{dict?.about?.h1_text}</h1>
        <h3>{dict?.about?.h3_text}</h3>
        <p>{dict?.about?.p_text}</p>
      </Col>
    </Row>
  );
}

export default AboutPage;
