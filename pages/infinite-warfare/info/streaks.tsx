import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import InfoList from "@/components/info/InfoList";
//Helpers
import { getStreaks } from "@/helpers/info/getStreaks";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function InfiniteWarfareStreaks() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/infinite-warfare/generator" },
    { label: "Loadout Info", href: "/infinite-warfare/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const dataKeys = ["name", "score", "type", "game"];

  useEffect(() => {
    const dataList = getStreaks("infinite-warfare");
    setData(dataList);

    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Infinite Warfare Streaks</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View all streaks in Infinite Warfare."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Infinite Warfare RCG, COD IW RCG, iw random class generator,
          iw, infinite warfare, infinite warfare rcg, infinite warfare random class generator, infinite warfare rcg, infinite warfare random class generator"
        />
      </Head>
      <Header className="infinite-warfare" navLinks={navLinks} />
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              Infinite Warfare
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Streaks
            </h2>

            {!isLoading && <InfoList data={data} dataKeys={dataKeys} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
