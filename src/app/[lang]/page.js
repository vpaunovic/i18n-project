"use client";
import { use } from "react";
import { Col, Row } from "react-bootstrap";
import { getDictionary } from "../../../getDictionary";

export default function Home({ params: { lang } }) {
  const dict = use(getDictionary(lang));
  return (
    <Row>
      <Col className="d-flex flex-column align-items-center">
        <h1>{dict?.home?.h1_text}</h1>
        <h3>{dict?.home?.h3_text}</h3>
        <p>{dict?.home?.p_text}</p>
      </Col>
    </Row>
  );
}
