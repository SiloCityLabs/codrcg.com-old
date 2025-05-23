import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import InfoList from "@/components/info/InfoList";
//Helpers
import { getZombiesMaps } from "@/helpers/info/zombies/getZombiesMaps";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function WorldWarTwoZombiesMaps() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/world-war-two/generator" },
    { label: "Zombies Generator", href: "/world-war-two/zombies-generator" },
    { label: "Custom Match", href: "/world-war-two/custom-match" },
    { label: "Loadout Info", href: "/world-war-two/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const dataKeys = ["name", "type", "game"];

  useEffect(() => {
    const dataList = getZombiesMaps("world-war-two-zombies");
    setData(dataList);

    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>World War Two Zombies Maps</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View all zombies maps in World War Two."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD World War 2 RCG, world war two random class generator,
          world war two, world war two rcg, world war two random class generator, class generator, zombies, treyarch zombies,
          world war two zombies, world war two rcg, world war two random class generator"
        />
      </Head>
      <Header className="ww2" navLinks={navLinks} />
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              World War Two
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Zombies Maps
            </h2>

            {!isLoading && <InfoList data={data} dataKeys={dataKeys} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
