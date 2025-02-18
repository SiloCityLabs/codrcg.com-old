import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function BlackOpsFourInfo() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/black-ops/four/generator" },
    { label: "Zombies Generator", href: "/black-ops/four/zombies/generator" },
    {
      label: "Zombies Custom Mutations",
      href: "/black-ops/four/zombies/custom-mutations",
    },
    { label: "Changelog", href: "/changelog" },
  ];

  const infoCards = [
    {
      title: "Equipment",
      text: "",
      link: "/black-ops/four/info/equipment",
    },
    {
      title: "Perks",
      text: "",
      link: "/black-ops/four/info/perks",
    },
    {
      title: "Specialists",
      text: "",
      link: "/black-ops/four/info/specialists",
    },
    {
      title: "Streaks",
      text: "",
      link: "/black-ops/four/info/streaks",
    },
    {
      title: "Weapons",
      text: "",
      link: "/black-ops/four/info/weapons",
    },
    {
      title: "Wildcards",
      text: "",
      link: "/black-ops/four/info/wildcards",
    },
    {
      title: "Zombies - Elixers",
      text: "",
      link: "/black-ops/four/info/zombies/elixers",
    },
    {
      title: "Zombies - Maps",
      text: "",
      link: "/black-ops/four/info/zombies/maps",
    },
    {
      title: "Zombies - Perks",
      text: "",
      link: "/black-ops/four/info/zombies/perks",
    },
    {
      title: "Zombies - Talismans",
      text: "",
      link: "/black-ops/four/info/zombies/talismans",
    },
  ];

  return (
    <>
      <Head>
        <title>Black Ops 4 Loadout Information</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Loadout Information for Black Ops 4. Checkout all the weapons, perks, equipment, wildcards, streaks and zombies maps, ammo mods and gobblegums."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Black Ops 4 RCG, COD Blops 4 RCG, blops 4 random class generator,
          blops 4, black ops 4, ops 4 rcg, ops 4 random class generator, black ops 4 random class generator, zombies, treyarch zombies,
          black ops zombies, black ops 4 zombies, black ops rcg, black ops random class generator"
        />
      </Head>
      <Header className="black-ops" navLinks={navLinks} />
      <Container className="information">
        <h2 className="text-center mb-4">
          Black Ops 4
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
                buttons={[
                  {
                    "link": card.link,
                    "disabled": false,
                    "btnText": "View"
                  }
                ]}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
