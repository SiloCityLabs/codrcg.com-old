import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function InfiniteWarfareInfo() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/infinite-warfare/generator" },
    { label: "Changelog", href: "/changelog" },
  ];

  const infoCards = [
    {
      title: "Equipment",
      text: "",
      link: "/infinite-warfare/info/equipment",
    },
    {
      title: "Perks",
      text: "",
      link: "/infinite-warfare/info/perks",
    },
    {
      title: "Combat Rigs",
      text: "",
      link: "/infinite-warfare/info/combat-rigs",
    },
    {
      title: "Streaks",
      text: "",
      link: "/infinite-warfare/info/streaks",
    },
    {
      title: "Weapons",
      text: "",
      link: "/infinite-warfare/info/weapons",
    },
  ];

  return (
    <>
      <Head>
        <title>Infinite Warfare Loadout Information</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Loadout Information for Infinite Warfare. Checout all the weapons, perks, equipment, wildcards, streaks and combat rigs."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Infinite Warfare RCG, COD IW RCG, iw random class generator,
          iw, infinite warfare, infinite warfare rcg, infinite warfare random class generator, infinite warfare rcg, infinite warfare random class generator"
        />
      </Head>
      <Header className="infinite-warfare" navLinks={navLinks} />
      <Container className="information">
        <h2 className="text-center mb-4">
          Infinite Warfare
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
                variant="infinite-warfare"
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
