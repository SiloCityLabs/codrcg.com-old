import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import WorldWarTwoZombiesLoadout from "@/components/generators/world-war-two/WorldWarTwoZombiesLoadout";
//Styles
import "@/public/styles/components/Loadout.css";

export default function WorldWarTwoZombies() {
  const navLinks = [
    { label: "Home", href: "/" },
    // { label: "Multiplayer Generator", href: "/world-war-two/generator" },
    { label: "Loadout Info", href: "/world-war-two/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>World War 2 Zombies Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD Zombies gameplay! Generate unique random loadouts for Call of Duty World War 2 Zombies. Discover new weapons, perks, and gear combinations."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD World War 2 RCG, world war two random class generator,
          world war two, world war two rcg, world war two random class generator, class generator, zombies, treyarch zombies,
          world war two zombies, world war two rcg, world war two random class generator"
        />
      </Head>
      <Header className="ww2" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>
              World War 2 Zombies
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Random Class Generator
            </h2>

            {/* <WorldWarTwoZombiesLoadout /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}
