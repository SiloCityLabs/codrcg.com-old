import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import InfoList from "@/components/info/InfoList";
//Helpers
import { getWeapon } from "@/helpers/info/getWeapon";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function WorldAtWarWeapons() {
  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "Multiplayer Generator",
      href: "/world-at-war/generator",
    },
    { label: "Loadout Info", href: "/world-at-war/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const dataKeys = [
    "name",
    "type",
    "game",
    "no_attach",
    "no_attach_info"
  ];
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    const tmp_types: string[] = [];
    const dataList = getWeapon("world-at-war");
    setData(dataList);

    //Format data
    for (const key in dataList) {
      const type = dataList[key].type;

      if (!tmp_types.includes(type)) {
        tmp_types.push(type);
      }
    }
    setTypes(tmp_types);

    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>World At War Weapons</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View information for weapons in World At War. View all attachments."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD World At War RCG, COD WAW RCG, waw random class generator,
          waw, world at war, world at war rcg, world at war random class generator, class generator, zombies, Infinity Ward zombies,
          world at war zombies, world at war zombies, world at war rcg, world at war random class generator"
        />
      </Head>
      <Header className="waw" navLinks={navLinks} />
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              World At War
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Weapons
            </h2>

            {!isLoading && (
              <InfoList data={data} dataKeys={dataKeys} types={types} url="/world-at-war/info/weapon" />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
