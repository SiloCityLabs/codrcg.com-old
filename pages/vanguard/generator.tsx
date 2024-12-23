import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import VanguardLoadout from "@/components/vanguard/VanguardLoadout";

export default function Vanguard() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Zombies Generator", href: "/vanguard/zombies-generator" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Vanguard Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD gameplay! Generate unique random loadouts for Call of Duty Vanguard. Discover new weapons, perks, and gear combinations."
        />
        <meta
          name="keywords"
          content="call of duty, random class generator, vanguard"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Each generator has icons in the icon folder, not vanguard yet */}
      </Head>
      <Header className="vanguard" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>Vanguard - Random Class Generator</h2>

            <VanguardLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
