import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import VanguardZombiesLoadout from "@/components/vanguard/VanguardZombiesLoadout";

export default function VanguardZombies() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/vanguard/generator" },
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
          content="call of duty, random class generator, vanguard, zombies, vanguard zombies"
        />
      </Head>
      <Header className="vanguard" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>Vanguard Zombies - Random Class Generator</h2>

            <VanguardZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
