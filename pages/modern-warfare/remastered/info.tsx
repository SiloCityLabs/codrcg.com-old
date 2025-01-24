import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";
//Styles
import "@/public/styles/components/Loadout.css";

export default function ModernWarfareRemasteredInfo() {
  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "Multiplayer Generator",
      href: "/modern-warfare/remastered/generator",
    },
    { label: "Changelog", href: "/changelog" },
  ];

  const infoCards = [
    {
      title: "Equipment",
      text: "",
      link: "/modern-warfare/remastered/info/equipment",
    },
    {
      title: "Perks",
      text: "",
      link: "/modern-warfare/remastered/info/perks",
    },
    {
      title: "Weapons",
      text: "",
      link: "/modern-warfare/remastered/info/weapons",
    },
  ];

  return (
    <>
      <Head>
        <title>Modern Warfare Remastered Loadout Information</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Loadout Information for Modern Warfare Remastered. Checout all the weapons, perks, equipment."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Modern Warfare Remastered RCG, COD MW RCG, mw remastered random class generator,
          mw remastered, modern warfare remastered, modern warfare remastered rcg, modern warfare remastered random class generator, class generator, zombies, Infinity Ward zombies,
          modern warfare zombies, modern warfare remastered zombies, modern warfare rcg, modern warfare random class generator"
        />
      </Head>
      <Header className="mwr" navLinks={navLinks} />
      <Container className="information">
        <h2 className="text-center mb-4">
          Modern Warfare Remastered
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
