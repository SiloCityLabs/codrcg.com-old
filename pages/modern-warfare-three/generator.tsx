import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import ModernWarfareThree from "@/components/modern-warfare-three/ModernWarfareThreeLoadout";

export default function BlackOpsSix() {
  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "Zombies Generator",
      href: "/modern-warfare-three/zombies-generator",
    },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Modern Warfare 3 Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD Zombies gameplay! Generate unique random loadouts for Modern Warfare 3. Discover new weapons, perks, and gear combinations."
        />
        <meta
          name="keywords"
          content="call of duty, random class generator, modern warfare 3, modern warfare 3"
        />
      </Head>
      <Header className="modern-warfare" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>Modern Warfare 3 - Random Class Generator</h2>

            <ModernWarfareThree />
          </Col>
        </Row>
      </Container>
    </>
  );
}
