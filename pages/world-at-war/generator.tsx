import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import WorldAtWarLoadout from "@/components/generators/world-at-war/WorldAtWarLoadout";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function WorldAtWar() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Loadout Info", href: "/world-at-war/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>World At War Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD Zombies gameplay! Generate unique random loadouts for World At War. Discover new weapons, perks, and gear combinations."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD World At War RCG, COD WAW RCG, waw random class generator,
          waw, world at war, world at war rcg, world at war random class generator, class generator, zombies, Infinity Ward zombies,
          world at war zombies, world at war zombies, world at war rcg, world at war random class generator"
        />
      </Head>
      <Header className="waw" navLinks={navLinks} />
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              World At War
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Random Class Generator
            </h2>

            <WorldAtWarLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
