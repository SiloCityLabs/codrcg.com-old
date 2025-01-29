import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import WarzoneDropSpot from "@/components/generators/warzone/WarzoneDropSpot";
//Styles
import "@/public/styles/components/Loadout.css";

export default function WhereWeDroppin() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Warzone Generator", href: "/warzone/generator" },
    { label: "Loadout Info", href: "/warzone/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Warzone - Where We Droppin?</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD gameplay! Randomly roll where you should land in warzone. This includes all current maps including regular battle royal and resurgence."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Warzone RCG, warzone random class generator,
          warzone, warzone rcg, warzone random class generator, class generator, warzone rcg, warzone random class generator,
          black ops 6, modern warfare 3, modern warfare 2, Verdansk, Area 99, Rebirth Island, Urzikstan"
        />
      </Head>
      <Header className="warzone" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>
              Warzone
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Where We Droppin?
            </h2>

            <WarzoneDropSpot />
          </Col>
        </Row>
      </Container>
    </>
  );
}
