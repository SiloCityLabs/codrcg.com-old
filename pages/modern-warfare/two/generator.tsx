import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import ModernWarfareTwoLoadout from "@/components/generators/modern-warfare/ModernWarfareTwoLoadout";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function ModernWarfareTwo() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Loadout Info", href: "/modern-warfare/two/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Modern Warfare 2 Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD gameplay! Generate unique random loadouts for Modern Warfare 2. Discover new weapons, perks, and gear combinations."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Modern Warfare 2 RCG, COD MW2 RCG, mw2 random class generator,
          mw2, modern warfare 2, modern warfare 2 rcg, modern warfare 2 random class generator, modern warfare rcg, modern warfare random class generator"
        />
      </Head>
      <Header className="mw2" navLinks={navLinks} />
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              Modern Warfare 2
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Random Class Generator
            </h2>

            <ModernWarfareTwoLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
