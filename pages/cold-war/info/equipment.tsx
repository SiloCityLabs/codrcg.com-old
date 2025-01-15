import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import InfoList from "@/components/info/InfoList";
//Helpers
import { getEquipment } from "@/helpers/info/getEquipment";
//Styles
import "@/public/styles/components/Loadout.css";

export default function ColdWarEquipment() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/cold-war/generator" },
    { label: "Zombies Generator", href: "/cold-war/zombies-generator" },
    { label: "Loadout Info", href: "/cold-war/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const dataKeys = ["name", "type", "game"];

  useEffect(() => {
    const dataList = getEquipment("cold-war");
    setData(dataList);

    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Cold War Equipment</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="View all equipment in Cold War." />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Cold War RCG, cold war random class generator,
          cold war, cold war rcg, cold war random class generator, class generator, zombies, treyarch zombies,
          cold war zombies, cold war rcg, cold war random class generator"
        />
      </Head>
      <Header className="cold-war" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>Cold War - Equipment</h2>

            {!isLoading && <InfoList data={data} dataKeys={dataKeys} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
