import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import WarzoneLoadout from "@/components/generators/warzone/WarzoneLoadout";
//Styles
import "@/public/styles/components/Loadout.css";

export default function Warzone() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Where We Droppin?", href: "/warzone/where-we-droppin" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Warzone Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD gameplay! Generate unique random loadouts for Warzone. Discover new weapons, perks, and gear combinations."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Warzone RCG, warzone random class generator,
          warzone, warzone rcg, warzone random class generator, class generator, warzone rcg, warzone random class generator,
          black ops 6, modern warfare 3, modern warfare 2"
        />
      </Head>
      <Header className="warzone" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>
              Warzone
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Random Class Generator
            </h2>

            <WarzoneLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
