import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import VanguardZombiesLoadout from "@/components/generators/vanguard/VanguardZombiesLoadout";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function VanguardZombies() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/vanguard/generator" },
    { label: "Loadout Info", href: "/vanguard/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Vanguard Zombies Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD Zombies gameplay! Generate unique random loadouts for Call of Duty Vanguard Zombies. Discover new weapons, perks, and gear combinations."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Vanguard RCG, vanguard random class generator,
          vanguard, vanguard rcg, vanguard random class generator, class generator, zombies, treyarch zombies,
          vanguard zombies, vanguard rcg, vanguard random class generator"
        />
      </Head>
      <Header className="vanguard" navLinks={navLinks} />
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              Vanguard Zombies
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Random Class Generator
            </h2>

            <VanguardZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
