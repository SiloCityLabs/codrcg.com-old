import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import BlackOpsThreeLoadout from "@/components/generators/black-ops/three/BlackOpsThreeLoadout";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function BlackOpsThree() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Loadout Info", href: "/black-ops/three/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Black Ops 3 Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD gameplay! Generate unique random loadouts for Black Ops 3. Discover new weapons, perks, and gear combinations."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Black Ops 3 RCG, COD Blops 3 RCG, blops 3 random class generator,
          blops 3, black ops 3, ops 3 rcg, ops 3 random class generator, black ops 3 random class generator, zombies, treyarch zombies,
          black ops zombies, black ops 3 zombies, black ops rcg, black ops random class generator"
        />
      </Head>
      <Header className="black-ops" navLinks={navLinks} />
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              Black Ops 3
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Random Class Generator
            </h2>

            <BlackOpsThreeLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
