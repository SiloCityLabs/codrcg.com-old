import { useState } from "react";
import Head from "next/head";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Header from "@/components/Header";
import Changelog2024 from "@/components/changelog/Changelog2024";
import Changelog2025 from "@/components/changelog/Changelog2025";

export default function Changelog() {
  const [key, setKey] = useState<string>("2025");

  return (
    <>
      <Head>
        <title>Changelog - Call Of Duty Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
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
      <Container fluid>
        <Row>
          <Col>
            <h2 className="text-center">Changelog</h2>
            <Container className="changelog shadow-lg p-3 mb-5 bg-body rounded">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k ?? "2025")}
                className="mb-3"
              >
                <Tab eventKey="2024" title="2024">
                  <Changelog2024 />
                </Tab>
                <Tab eventKey="2025" title="2025">
                  <Changelog2025 />
                </Tab>
              </Tabs>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
