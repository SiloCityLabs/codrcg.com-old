import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import VanguardLoadout from "@/components/generators/vanguard/VanguardLoadout";
//Styles
import "@/public/styles/components/Loadout.css";

export default function Vanguard() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Zombies Generator", href: "/vanguard/zombies-generator" },
    { label: "Loadout Info", href: "/vanguard/info" },
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
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Vanguard RCG, vanguard random class generator,
          vanguard, vanguard rcg, vanguard random class generator, class generator, zombies, treyarch zombies,
          vanguard zombies, vanguard rcg, vanguard random class generator"
        />
      </Head>
      <Header className="vanguard" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>
              Vanguard
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Random Class Generator
            </h2>

            <VanguardLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
