import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function WorldAtWarInfo() {
  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "Multiplayer Generator",
      href: "/world-at-war/generator",
    },
    { label: "Changelog", href: "/changelog" },
  ];

  const infoCards = [
    {
      title: "Equipment",
      text: "",
      link: "/world-at-war/info/equipment",
    },
    {
      title: "Perks",
      text: "",
      link: "/world-at-war/info/perks",
    },
    {
      title: "Weapons",
      text: "",
      link: "/world-at-war/info/weapons",
    },
  ];

  return (
    <>
      <Head>
        <title>World At War Loadout Information</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Loadout Information for World At War. Checkout all the weapons, perks, equipment."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD World At War RCG, COD WAW RCG, waw random class generator,
          waw, world at war, world at war rcg, world at war random class generator, class generator, zombies, Infinity Ward zombies,
          world at war zombies, world at war zombies, world at war rcg, world at war random class generator"
        />
      </Head>
      <Header className="waw" navLinks={navLinks} />
      <Container className="information">
        <h2 className="text-center mb-4">
          World At War
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Loadout Information
        </h2>
        <Row>
          {infoCards.map((card, index) => (
            <Col key={index} xl={4} lg={4} md={6} className="text-center mb-4">
              <GeneratorCard
                title={card.title}
                text={card.text}
                variant="secondary"
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
