import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import InfoList from "@/components/info/InfoList";
//Helpers
import { getZombiesFieldUpgrade } from "@/helpers/info/zombies/getZombiesFieldUpgrade";
//Styles
import "@/public/styles/components/Loadout.css";

export default function BlackOpsSixZombiesArtifacts() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/vanguard/generator" },
    { label: "Zombies Generator", href: "/vanguard/zombies-generator" },
    { label: "Loadout Info", href: "/vanguard/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const dataKeys = ["name", "type", "game"];

  useEffect(() => {
    const dataList = getZombiesFieldUpgrade("vanguard");
    setData(dataList);

    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Vanguard Zombies Artifacts</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View all zombies artifacts in Vanguard."
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
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>
              Vanguard
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Zombies Artifacts
            </h2>

            {!isLoading && <InfoList data={data} dataKeys={dataKeys} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
