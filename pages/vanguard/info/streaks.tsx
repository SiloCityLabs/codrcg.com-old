import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import InfoList from "@/components/info/InfoList";
//Helpers
import { getStreaks } from "@/helpers/info/getStreaks";
//Styles
import "@/public/styles/components/Loadout.css";

export default function BlackOpsSixStreaks() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/vanguard/generator" },
    { label: "Zombies Generator", href: "/vanguard/zombies-generator" },
    { label: "Loadout Info", href: "/vanguard/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const dataKeys = ["name", "score", "type", "game", "isDlc"];

  useEffect(() => {
    const dataList = getStreaks("vanguard");
    setData(dataList);

    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Vanguard Streaks</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="View all streaks in Vanguard." />
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
      <Header className="black-ops" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>Vanguard - Streaks</h2>

            {!isLoading && <InfoList data={data} dataKeys={dataKeys} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
