import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import InfoList from "@/components/info/InfoList";
//Helpers
import { getEquipment } from "@/helpers/info/getEquipment";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function BlackOpsThreeEquipment() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/black-ops/three/generator" },
    { label: "Loadout Info", href: "/black-ops/three/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const dataKeys = ["name", "type", "game"];

  useEffect(() => {
    const dataList = getEquipment("black-ops-three");
    setData(dataList);

    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Black Ops 3 Equipment</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="View all equipment in Black Ops 3." />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Black Ops 3 RCG, COD Blops 3 RCG, blops 3 random class generator,
          blops 3, black ops 3, ops 3 rcg, ops 3 random class generator, black ops 3 random class generator, zombies, treyarch zombies,
          black ops zombies, black ops 3 zombies, black ops rcg, black ops random class generator"
        />
      </Head>
      <Header className="black-ops" navLinks={navLinks} />
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              Black Ops 3
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Equipment
            </h2>

            {!isLoading && <InfoList data={data} dataKeys={dataKeys} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
