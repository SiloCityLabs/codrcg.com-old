import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";
//Styles
import "@/public/styles/components/Loadout.css";

export default function ModernWarfareThreeInfo() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/modern-warfare/three/generator" },
    {
      label: "Zombies Generator",
      href: "/modern-warfare/three/zombies-generator",
    },
    { label: "Changelog", href: "/changelog" },
  ];

  const infoCards = [
    {
      title: "Weapons",
      text: "",
      link: "/modern-warfare/three/info/weapons",
    },
    {
      title: "Perks",
      text: "",
      link: "/modern-warfare/three/info/perks",
    },
    {
      title: "Equipment",
      text: "",
      link: "/modern-warfare/three/info/equipment",
    },
    {
      title: "Streaks",
      text: "",
      link: "/modern-warfare/three/info/streaks",
    },
    {
      title: "Zombies - Equipment",
      text: "",
      link: "/modern-warfare/three/info/zombies/equipment",
    },
  ];

  return (
    <>
      <Head>
        <title>Modern Warfare 3 Loadout Information</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Loadout Information for Modern Warfare 3 (2023). Checout all the weapons, vests, perks, equipment, field upgrades, streaks and zombies field upgrades."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Modern Warfare 3 RCG, COD MW3 RCG, mw3 random class generator,
          mw3, modern warfare 3, modern warfare 3 rcg, modern warfare 3 random class generator, class generator, zombies, Infinity Ward zombies,
          modern warfare zombies, modern warfare 3 zombies, modern warfare rcg, modern warfare random class generator"
        />
      </Head>
      <Header className="modern-warfare" navLinks={navLinks} />
      <Container className="information">
        <h2 className="text-center mb-4">
          Modern Warfare 3
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
