import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import ColdWarZombiesLoadout from "@/components/generators/black-ops/cold-war/ColdWarZombiesLoadout";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function ColdWarZombies() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/black-ops/cold-war/generator" },
    { label: "Loadout Info", href: "/black-ops/cold-war/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Cold War Zombies Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD Zombies gameplay! Generate unique random loadouts for Call of Duty Cold War Zombies. Discover new weapons, perks, and gear combinations."
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
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              Cold War Zombies
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Random Class Generator
            </h2>

            <ColdWarZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
