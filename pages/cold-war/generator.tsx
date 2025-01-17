import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import ColdWarLoadout from "@/components/generators/cold-war/ColdWarLoadout";
//Styles
import "@/public/styles/components/Loadout.css";

export default function ColdWar() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Zombies Generator", href: "/cold-war/zombies-generator" },
    { label: "Loadout Info", href: "/cold-war/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Cold War Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD gameplay! Generate unique random loadouts for Call of Duty Cold War. Discover new weapons, perks, and gear combinations."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Cold War RCG, cold war random class generator,
          cold war, cold war rcg, cold war random class generator, class generator, zombies, treyarch zombies,
          cold war zombies, cold war rcg, cold war random class generator"
        />
      </Head>
      <Header className="cold-war" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>Cold War - Random Class Generator</h2>

            <ColdWarLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
