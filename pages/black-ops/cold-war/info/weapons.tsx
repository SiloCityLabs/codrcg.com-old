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

export default function ColdWarWeapons() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/black-ops/cold-war/generator" },
    {
      label: "Zombies Generator",
      href: "/black-ops/cold-war/zombies-generator",
    },
    { label: "Loadout Info", href: "/black-ops/cold-war/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const dataKeys = ["name", "type", "game", "no_attach"];
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    const tmp_types: string[] = [];
    const dataList = getWeapon("cold-war");
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
        <title>Cold War Weapons</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View information for weapons in Cold War. View all attachments."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Cold War RCG, cold war random class generator,
          cold war, cold war rcg, cold war random class generator, class generator, zombies, treyarch zombies,
          cold war zombies, cold war rcg, cold war random class generator"
        />
      </Head>
      <Header className="cold-war" navLinks={navLinks} />
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              Cold War
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Weapons
            </h2>

            {!isLoading && (
              <InfoList
                data={data}
                dataKeys={dataKeys}
                types={types}
                url="/black-ops/cold-war/info/weapon"
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
