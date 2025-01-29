import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";
//Styles
import "@/public/styles/components/Loadout.css";

export default function WorldWarTwoInfo() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/world-war-two/generator" },
    { label: "Zombies Generator", href: "/world-war-two/zombies-generator" },
    { label: "Changelog", href: "/changelog" },
  ];

  const infoCards = [
    {
      title: "Equipment",
      text: "",
      link: "/world-war-two/info/equipment",
    },
    {
      title: "Perks",
      text: "",
      link: "/world-war-two/info/perks",
    },
    {
      title: "Streaks",
      text: "",
      link: "/world-war-two/info/streaks",
    },
    {
      title: "Weapons",
      text: "",
      link: "/world-war-two/info/weapons",
    },
    {
      title: "Zombies Maps",
      text: "",
      link: "/world-war-two/info/zombies/maps",
    },
    {
      title: "Zombies Perks",
      text: "",
      link: "/world-war-two/info/zombies/perks",
    },
    {
      title: "Zombies Specials",
      text: "",
      link: "/world-war-two/info/zombies/specials",
    },
  ];

  return (
    <>
      <Head>
        <title>World War 2 Loadout Information</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD World War 2 RCG, world war two random class generator,
          world war two, world war two rcg, world war two random class generator, class generator, zombies, treyarch zombies,
          world war two zombies, world war two rcg, world war two random class generator"
        />
      </Head>
      <Header className="ww2" navLinks={navLinks} />
      <Container className="information">
        <h2 className="text-center mb-4">
          World War 2
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
                variant="ww2"
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
