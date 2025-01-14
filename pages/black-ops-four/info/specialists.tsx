import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import InfoList from "@/components/info/InfoList";
//Helpers
import { getSpecialists } from "@/helpers/info/getSpecialists";
//Styles
import "@/public/styles/components/Loadout.css";

export default function BlackOpsSixSpecialists() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/black-ops-four/generator" },
    { label: "Zombies Generator", href: "/black-ops-four/zombies-generator" },
    { label: "Loadout Info", href: "/black-ops-four/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const dataKeys = ["name", "equipment", "weapon", "type", "game"];

  useEffect(() => {
    const dataList = getSpecialists("black-ops-four");
    setData(dataList);

    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Black Ops 4 Specialists</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View all specialists in Black Ops 4."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Black Ops 4 RCG, COD Blops 4 RCG, blops 4 random class generator,
          blops 4, black ops 4, ops 4 rcg, ops 4 random class generator, black ops 4 random class generator, zombies, treyarch zombies,
          black ops zombies, black ops 4 zombies, black ops rcg, black ops random class generator"
        />
      </Head>
      <Header className="black-ops" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>Black Ops 4 - Specialists</h2>

            {!isLoading && <InfoList data={data} dataKeys={dataKeys} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
