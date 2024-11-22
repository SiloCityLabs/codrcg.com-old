import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import Changelog2024 from "@/components/changelog/Changelog2024";

export default function Changelog() {
  return (
    <>
      <Head>
        <title>Call Of Duty Random Class Generator - Changelog</title>
        <meta
          name="description"
          content="Stay up-to-date on the latest features, bug fixes, and improvements to our Call of Duty random class generator. See what's new and how we're making your loadout experience even better."
        />
        <meta
          name="keywords"
          content="call of duty, random class generator, black ops 6, warzone, modern warfare 3 (2023), changelog"
        />
      </Head>
      <Header />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2 className="text-center">Changelog</h2>

            <Changelog2024 />
          </Col>
        </Row>
      </Container>
    </>
  );
}
