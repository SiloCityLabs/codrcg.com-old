import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import WarzoneLoadout from "@/components/WarzoneLoadout";

export default function Warzone() {
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
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* Each generator has icons in the icon folder, not bo6 yet */}
      </Head>
      <Header className="warzone" />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>Warzone - Random Class Generator</h2>

            <WarzoneLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
