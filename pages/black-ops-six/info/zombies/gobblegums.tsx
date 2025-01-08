import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import ZombiesGobblegumList from "@/components/info/ZombiesGobblegumList";
//Styles
import "@/public/styles/components/Loadout.css";

export default function BlackOpsSixZombiesGobblegums() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/black-ops-six/generator" },
    { label: "Zombies Generator", href: "/black-ops-six/zombies-generator" },
    { label: "Loadout Info", href: "/black-ops-six/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Black Ops 6 Zombies Gobblegums</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View all zombies gobblegums in Black Ops 6."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Black Ops 6 RCG, COD Blops 6 RCG, blops 6 random class generator,
          blops 6, black ops 6, ops 6 rcg, ops 6 random class generator, black ops 6 random class generator, zombies, treyarch zombies,
          black ops zombies, black ops 6 zombies, black ops rcg, black ops random class generator"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* Each generator has icons in the icon folder, not bo6 yet */}
      </Head>
      <Header className="black-ops" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>Black Ops 6 - Zombies Gobblegums</h2>

            <ZombiesGobblegumList game="black-ops-six" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
