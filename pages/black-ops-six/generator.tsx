import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import BlackOpsSixLoadout from "@/components/BlackOpsSixLoadout";

export default function BlackOpsSix() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Zombies Generator", href: "/black-ops-six/zombies-generator" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Black Ops 6 Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD gameplay! Generate unique random loadouts for Black Ops 6. Discover new weapons, perks, and gear combinations."
        />
        <meta
          name="keywords"
          content="call of duty, random class generator, black ops 6"
        />
        <link rel="icon" href="/favicon.ico" />{/* Each generator has icons in the icon folder, not bo6 yet */}
      </Head>
      <Header className="black-ops-6" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>Black Ops 6 - Random Class Generator</h2>

            <BlackOpsSixLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
