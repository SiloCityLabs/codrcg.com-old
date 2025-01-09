import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";
//Styles
import "@/public/styles/components/Loadout.css";

export default function BlackOpsSixInfo() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/vanguard/generator" },
    { label: "Zombies Generator", href: "/vanguard/zombies-generator" },
    { label: "Changelog", href: "/changelog" },
  ];

  const infoCards = [
    {
      title: "Weapons",
      text: "",
      link: "/vanguard/info/weapons",
    },
    {
      title: "Perks",
      text: "",
      link: "/vanguard/info/perks",
    },
    {
      title: "Equipment",
      text: "",
      link: "/vanguard/info/equipment",
    },
    {
      title: "Streaks",
      text: "",
      link: "/vanguard/info/streaks",
    },
    {
      title: "Zombies Maps",
      text: "",
      link: "/vanguard/info/zombies/maps",
    },
    {
      title: "Zombies Ammo Mods",
      text: "",
      link: "/vanguard/info/zombies/ammo-mods",
    },
    {
      title: "Zombies Gobblegums",
      text: "",
      link: "/vanguard/info/zombies/gobblegums",
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
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* Each generator has icons in the icon folder, not bo6 yet */}
      </Head>
      <Header className="vanguard" navLinks={navLinks} />
      <Container className="information">
        <h2 className="text-center mb-4">Black Ops 6 - Loadout Information</h2>
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
