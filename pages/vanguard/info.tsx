import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function VanguardInfo() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/vanguard/generator" },
    { label: "Zombies Generator", href: "/vanguard/zombies-generator" },
    { label: "Changelog", href: "/changelog" },
  ];

  const infoCards = [
    {
      title: "Equipment",
      text: "",
      link: "/vanguard/info/equipment",
    },
    {
      title: "Perks",
      text: "",
      link: "/vanguard/info/perks",
    },
    {
      title: "Streaks",
      text: "",
      link: "/vanguard/info/streaks",
    },
    {
      title: "Weapons",
      text: "",
      link: "/vanguard/info/weapons",
    },
    {
      title: "Zombies Artifacts",
      text: "",
      link: "/vanguard/info/zombies/artifacts",
    },
    {
      title: "Zombies Maps",
      text: "",
      link: "/vanguard/info/zombies/maps",
    },
  ];

  return (
    <>
      <Head>
        <title>Vanguard Loadout Information</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Loadout Information for Call of Duty: Vanguard. Checout all the weapons, perks, equipment, wildcards, streaks and zombies maps, ammo mods and gobblegums."
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
      <Container className="information">
        <h2 className="text-center mb-4">
          Vanguard
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
                variant="danger"
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
