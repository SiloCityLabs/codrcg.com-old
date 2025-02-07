import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import InfiniteWarfareLoadout from "@/components/generators/infinite-warfare/InfiniteWarfareLoadout";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function InfiniteWarfare() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Loadout Info", href: "/infinite-warfare/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Infinite Warfare Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD gameplay! Generate unique random loadouts for InfiniteWarfare Warfare. Discover new weapons, perks, and gear combinations."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Infinite Warfare RCG, COD IW RCG, iw random class generator,
          iw, infinite warfare, infinite warfare rcg, infinite warfare random class generator, infinite warfare rcg, infinite warfare random class generator"
        />
      </Head>
      <Header className="infinite-warfare" navLinks={navLinks} />
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              Infinite Warfare
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Random Class Generator
            </h2>

            <InfiniteWarfareLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
