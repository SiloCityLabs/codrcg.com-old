import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import InfoList from "@/components/info/InfoList";
//Helpers
import { getPerk } from "@/helpers/info/getPerk";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function BlackOpsFourPerks() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/black-ops/four/generator" },
    { label: "Zombies Generator", href: "/black-ops/four/zombies/generator" },
    {
      label: "Zombies Custom Mutations",
      href: "/black-ops/four/zombies/custom-mutations",
    },
    { label: "Loadout Info", href: "/black-ops/four/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const dataKeys = ["name", "type", "game"];

  useEffect(() => {
    const dataList = getPerk("black-ops-four-zombies");
    setData(dataList);

    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Black Ops 4 Zombies Perks</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View all perks in Black Ops 4 Zombies."
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
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              Black Ops 4
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Zombies Perks
            </h2>

            {!isLoading && <InfoList data={data} dataKeys={dataKeys} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
