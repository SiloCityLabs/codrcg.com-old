import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import BlackOpsSixZombiesLoadout from "@/components/black-ops-six/BlackOpsSixZombiesLoadout";

export default function BlackOpsSixZombies() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/black-ops-six/generator" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Black Ops 6 Zombies Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD Zombies gameplay! Generate unique random loadouts for Black Ops 6 Zombies. Discover new weapons, perks, and gear combinations."
        />
        <meta
          name="keywords"
          content="call of duty, random class generator, black ops 6, zombies, black ops 6 zombies"
        />
      </Head>
      <Header className="black-ops" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>Black Ops 6 Zombies - Random Class Generator</h2>

            <BlackOpsSixZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
