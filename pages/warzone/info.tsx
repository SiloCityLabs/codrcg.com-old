import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function WarzoneInfo() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Warzone Generator", href: "/warzone/generator" },
    { label: "Where We Droppin?", href: "/warzone/where-we-droppin" },
    { label: "Changelog", href: "/changelog" },
  ];

  const infoCards = [
    {
      title: "Equipment",
      text: "",
      link: "/warzone/info/equipment",
    },
    {
      title: "Perks",
      text: "",
      link: "/warzone/info/perks",
    },
    {
      title: "Weapons",
      text: "",
      link: "/warzone/info/weapons",
    },
    {
      title: "Wildcards",
      text: "",
      link: "/warzone/info/wildcards",
    },
  ];

  return (
    <>
      <Head>
        <title>Warzone Loadout Information</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Loadout Information for Warzone. Checout all the weapons, perks, equipment, wildcards."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Warzone RCG, COD Blops 6 RCG, blops 6 random class generator,
          blops 6, black ops 6, ops 6 rcg, ops 6 random class generator, black ops 6 random class generator, zombies, treyarch zombies,
          black ops zombies, black ops 6 zombies, black ops rcg, black ops random class generator"
        />
      </Head>
      <Header className="warzone" navLinks={navLinks} />
      <Container className="information">
        <h2 className="text-center mb-4">
          Warzone
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
                variant="success"
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
