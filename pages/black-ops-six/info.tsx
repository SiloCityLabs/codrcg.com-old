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

  const infoCards = [
    {
      title: "Weapons",
      text: "",
      link: "/black-ops-six/info/weapons",
    },
    {
      title: "Perks",
      text: "",
      link: "/black-ops-six/info/perks",
    },
    {
      title: "Equipment",
      text: "",
      link: "/black-ops-six/info/equipment",
    },
    {
      title: "Wildcards",
      text: "",
      link: "/black-ops-six/info/wildcards",
    },
    {
      title: "Streaks",
      text: "",
      link: "/black-ops-six/info/streaks",
    },
    {
      title: "Zombies - Maps",
      text: "",
      link: "/black-ops-six/info/zombies/maps",
    },
    {
      title: "Zombies - Ammo Mods",
      text: "",
      link: "/black-ops-six/info/zombies/ammo-mods",
    },
    {
      title: "Zombies - Gobblegums",
      text: "",
      link: "/black-ops-six/info/zombies/gobblegums",
    },
    {
      title: "Zombies - Field Upgrades",
      text: "",
      link: "/black-ops-six/info/zombies/field-upgrades",
    },
  ];

  return (
    <>
      <Head>
        <title>Black Ops 6 Loadout Information</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Loadout Information for Black Ops 6. Checout all the weapons, perks, equipment, wildcards, streaks and zombies maps, ammo mods and gobblegums."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Black Ops 6 RCG, COD Blops 6 RCG, blops 6 random class generator,
          blops 6, black ops 6, ops 6 rcg, ops 6 random class generator, black ops 6 random class generator, zombies, treyarch zombies,
          black ops zombies, black ops 6 zombies, black ops rcg, black ops random class generator"
        />
      </Head>
      <Header className="black-ops" navLinks={navLinks} />
      <Container className="information">
        <h2 className="text-center mb-4">Black Ops 6 - Loadout Information</h2>
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
