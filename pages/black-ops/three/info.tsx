import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";
//Styles
import "@/public/styles/components/Loadout.css";

export default function BlackOpsThreeInfo() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/black-ops-three/generator" },
    { label: "Changelog", href: "/changelog" },
  ];

  const infoCards = [
    {
      title: "Equipment",
      text: "",
      link: "/black-ops/three/info/equipment",
    },
    {
      title: "Perks",
      text: "",
      link: "/black-ops/three/info/perks",
    },
    {
      title: "Specialists",
      text: "",
      link: "/black-ops/three/info/specialists",
    },
    {
      title: "Streaks",
      text: "",
      link: "/black-ops/three/info/streaks",
    },
    {
      title: "Weapons",
      text: "",
      link: "/black-ops/three/info/weapons",
    },
    {
      title: "Wildcards",
      text: "",
      link: "/black-ops/three/info/wildcards",
    },
  ];

  return (
    <>
      <Head>
        <title>Black Ops 3 Loadout Information</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Loadout Information for Black Ops 3. Checout all the weapons, perks, equipment, wildcards, streaks and specialists."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Black Ops 3 RCG, COD Blops 3 RCG, blops 3 random class generator,
          blops 3, black ops 3, ops 3 rcg, ops 3 random class generator, black ops 3 random class generator, zombies, treyarch zombies,
          black ops zombies, black ops 3 zombies, black ops rcg, black ops random class generator"
        />
      </Head>
      <Header className="black-ops" navLinks={navLinks} />
      <Container className="information">
        <h2 className="text-center mb-4">
          Black Ops 3
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Loadout Information
        </h2>
        <Row>
          {infoCards.map((card, index) => (
            <Col key={index} xl={3} lg={4} md={6} className="text-center mb-4">
              <GeneratorCard
                title={card.title}
                text={card.text}
                variant="black-ops"
                btn1Text="View"
                link={card.link}
                disabled={false}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
