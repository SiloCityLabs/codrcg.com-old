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

export default function ModernWarfareTwoPerks() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/modern-warfare/two/generator" },
    { label: "Loadout Info", href: "/modern-warfare/two/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const dataKeys = ["name", "type", "game"];

  useEffect(() => {
    const dataList = getPerk("modern-warfare-two");
    setData(dataList);

    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Modern Warfare 2 Perks</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View all perks in Modern Warfare 2."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Modern Warfare 2 RCG, COD MW2 RCG, mw2 random class generator,
          mw2, modern warfare 2, modern warfare 2 rcg, modern warfare 2 random class generator, modern warfare rcg, modern warfare random class generator"
        />
      </Head>
      <Header className="mw2" navLinks={navLinks} />
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              Modern Warfare 2
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Perks
            </h2>

            {!isLoading && <InfoList data={data} dataKeys={dataKeys} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
