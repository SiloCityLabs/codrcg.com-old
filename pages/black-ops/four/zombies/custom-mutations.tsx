import { useState } from "react";
import Head from "next/head";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Header from "@/components/Header";
import CustomMutationsGeneral from "@/components/generators/black-ops/four/custom-mutations/CustomMutationsGeneral";
//Styles
import "@/public/styles/components/Loadout.css";

export default function Changelog() {
  const [key, setKey] = useState<string>("general");
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Zombies Generator", href: "/black-ops/four/zombies/generator" },
    { label: "Loadout Info", href: "/black-ops/four/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Black Ops 4 Random Custom Mutations Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD gameplay! Generate unique random custum mutations settings for Black Ops 4 Zombies. Discover new ways to play."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, zombies, call of duty random class generator, COD Black Ops 4 RCG, COD Blops 4 RCG, blops 4 random class generator,
          blops 4, black ops 4, ops 4 rcg, ops 4 random class generator, black ops 4 random class generator, zombies, treyarch zombies,
          black ops zombies, black ops 4 zombies, black ops rcg, black ops random class generator"
        />
      </Head>
      <Header className="black-ops" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>
              Black Ops 4
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Random Custom Mutations Generator
            </h2>
            <Container className="shadow-lg p-3 mb-5 bg-body rounded">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k ?? "2025")}
                className="mb-3"
              >
                <Tab eventKey="general" title="General">
                  <CustomMutationsGeneral />
                </Tab>
                <Tab eventKey="systems" title="Systems">
                  Systems
                </Tab>
                <Tab eventKey="weapons" title="Weapons">
                  Weapons
                </Tab>
                <Tab eventKey="enemies" title="Enemies">
                  Enemies
                </Tab>
                <Tab eventKey="player" title="Player">
                  Player
                </Tab>
              </Tabs>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
