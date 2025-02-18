import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function ModernWarfareTwoInfo() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/modern-warfare/two/generator" },
    { label: "Changelog", href: "/changelog" },
  ];

  const infoCards = [
    {
      title: "Equipment",
      text: "",
      link: "/modern-warfare/two/info/equipment",
    },
    {
      title: "Perks",
      text: "",
      link: "/modern-warfare/two/info/perks",
    },
    {
      title: "Streaks",
      text: "",
      link: "/modern-warfare/two/info/streaks",
    },
    {
      title: "Weapons",
      text: "",
      link: "/modern-warfare/two/info/weapons",
    },
  ];

  return (
    <>
      <Head>
        <title>Modern Warfare 2 Loadout Information</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Loadout Information for Modern Warfare 2 (2022). Checkout all the weapons, vests, perks, equipment, field upgrades, and streaks."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Modern Warfare 2 RCG, COD MW2 RCG, mw2 random class generator,
          mw2, modern warfare 2, modern warfare 2 rcg, modern warfare 2 random class generator, modern warfare rcg, modern warfare random class generator"
        />
      </Head>
      <Header className="mw2" navLinks={navLinks} />
      <Container className="information">
        <h2 className="text-center mb-4">
          Modern Warfare 2
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
                variant="mw2"
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
