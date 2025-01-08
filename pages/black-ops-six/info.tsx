import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";
//Styles
import "@/public/styles/components/Loadout.css";

export default function BlackOpsSixInfo() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/black-ops-six/generator" },
    { label: "Zombies Generator", href: "/black-ops-six/zombies-generator" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Black Ops 6 Loadout Information</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD gameplay! Generate unique random loadouts for Black Ops 6. Discover new weapons, perks, and gear combinations."
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
      <Container className="information">
        <h2 className="text-center mb-4">Black Ops 6 - Loadout Information</h2>
        <Row>
          <Col xl={3} lg={4} md={6} className="text-center mb-4">
            <GeneratorCard
              title="Weapons"
              text=""
              variant="black-ops"
              btn1Text="View"
              link="/black-ops-six/info/weapons"
              disabled={false}
            />
          </Col>
          <Col xl={3} lg={4} md={6} className="text-center mb-4">
            <GeneratorCard
              title="Perks"
              text=""
              variant="black-ops"
              btn1Text="View"
              link="/black-ops-six/info/perks"
              disabled={false}
            />
          </Col>
          <Col xl={3} lg={4} md={6} className="text-center mb-4">
            <GeneratorCard
              title="Equipment"
              text=""
              variant="black-ops"
              btn1Text="View"
              link="/black-ops-six/info/equipment"
              disabled={false}
            />
          </Col>
          <Col xl={3} lg={4} md={6} className="text-center mb-4">
            <GeneratorCard
              title="Wildcards"
              text=""
              variant="black-ops"
              btn1Text="View"
              link="/black-ops-six/info/wildcards"
              disabled={false}
            />
          </Col>
          <Col xl={3} lg={4} md={6} className="text-center mb-4">
            <GeneratorCard
              title="Streaks"
              text=""
              variant="black-ops"
              btn1Text="View"
              link="/black-ops-six/info/streaks"
              disabled={false}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
