import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import ModernWarfareThreeZombiesLoadout from "@/components/generators/modern-warfare/three/ModernWarfareThreeZombiesLoadout";
//Styles
import "@/public/styles/components/Loadout.css";

export default function ModernWarfareThreeZombies() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/modern-warfare/three/generator" },
    { label: "Loadout Info", href: "/modern-warfare/three/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Modern Warfare Zombies Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD Zombies gameplay! Generate unique random loadouts for Modern Warfare Zombies. Discover new weapons, perks, and gear combinations."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Modern Warfare 3 RCG, COD MW3 RCG, mw3 random class generator,
          mw3, modern warfare 3, modern warfare 3 rcg, modern warfare 3 random class generator, class generator, zombies, Infinity Ward zombies,
          modern warfare zombies, modern warfare 3 zombies, modern warfare rcg, modern warfare random class generator"
        />
      </Head>
      <Header className="modern-warfare" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>
              Modern Warfare Zombies
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Random Class Generator
            </h2>

            <ModernWarfareThreeZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
