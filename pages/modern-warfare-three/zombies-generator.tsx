import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import ModernWarfareThreeZombiesLoadout from "@/components/modern-warfare-three/ModernWarfareThreeZombiesLoadout";

export default function ModernWarfareThreeZombies() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/modern-warfare-three/generator" },
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
          content="call of duty, random class generator, modern warfare 3, zombies, modern warfare zombies"
        />
      </Head>
      <Header className="modern-warfare" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>Modern Warfare Zombies - Random Class Generator</h2>

            <ModernWarfareThreeZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
