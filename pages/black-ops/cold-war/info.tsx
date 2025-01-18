import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";
//Styles
import "@/public/styles/components/Loadout.css";

export default function ColdWarInfo() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/black-ops/cold-war/generator" },
    {
      label: "Zombies Generator",
      href: "/black-ops/cold-war/zombies-generator",
    },
    { label: "Changelog", href: "/changelog" },
  ];

  const infoCards = [
    {
      title: "Weapons",
      text: "",
      link: "/black-ops/cold-war/info/weapons",
    },
    {
      title: "Perks",
      text: "",
      link: "/black-ops/cold-war/info/perks",
    },
    {
      title: "Equipment",
      text: "",
      link: "/black-ops/cold-war/info/equipment",
    },
    {
      title: "Wildcards",
      text: "",
      link: "/black-ops/cold-war/info/wildcards",
    },
    {
      title: "Streaks",
      text: "",
      link: "/black-ops/cold-war/info/streaks",
    },
    {
      title: "Zombies - Maps",
      text: "",
      link: "/black-ops/cold-war/info/zombies/maps",
    },
    {
      title: "Zombies - Field Upgrades",
      text: "",
      link: "/black-ops/cold-war/info/zombies/field-upgrades",
    },
  ];

  return (
    <>
      <Head>
        <title>Cold War Loadout Information</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Loadout Information for Cold War. Checout all the weapons, perks, equipment, wildcards, streaks and zombies maps, ammo mods and gobblegums."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Cold War RCG, cold war random class generator,
          cold war, cold war rcg, cold war random class generator, class generator, zombies, treyarch zombies,
          cold war zombies, cold war rcg, cold war random class generator"
        />
      </Head>
      <Header className="cold-war" navLinks={navLinks} />
      <Container className="information">
        <h2 className="text-center mb-4">Cold War - Loadout Information</h2>
        <Row>
          {infoCards.map((card, index) => (
            <Col key={index} xl={3} lg={4} md={6} className="text-center mb-4">
              <GeneratorCard
                title={card.title}
                text={card.text}
                variant="danger"
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
