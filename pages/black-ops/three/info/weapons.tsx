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

export default function BlackOpsThreeWeapons() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/black-ops/three/generator" },
    { label: "Loadout Info", href: "/black-ops/three/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const dataKeys = ["name", "type", "game", "no_attach"];
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    const tmp_types: string[] = [];
    const dataList = getWeapon("black-ops-three");
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
        <title>Black Ops 3 Weapons</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View information for weapons in Black Ops 3. View all attachments."
        />
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
              Weapons
            </h2>

            {!isLoading && (
              <InfoList data={data} dataKeys={dataKeys} types={types} url="/black-ops/three/info/weapon" />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
